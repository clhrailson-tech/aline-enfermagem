"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  Activity,
  BookOpen,
  Camera,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  ExternalLink,
  FileCheck2,
  GraduationCap,
  Hospital,
  LayoutDashboard,
  Menu,
  Plus,
  Quote,
  ShieldCheck,
  Stethoscope,
  Target,
  Venus,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { disciplines, studyPlan, type Discipline, type Question } from "./course-data";

type View = "inicio" | "rotina" | "aulas" | "questoes";
type PlannerItem = { id: number; title: string; subject: string; itemType: string; date: string; startTime: string; completed: boolean };
type QuizProgressItem = { questionId: string; disciplineId: string; lastCorrect: boolean; lastAnswer: number; timesAnswered: number; correctCount: number; firstAnsweredAt: string; lastAnsweredAt: string; nextReviewAt: string };
type AuthUser = { id: string; email?: string; app_metadata?: { role?: string } };
type AuthSession = { access_token: string; refresh_token: string; expires_at: number; user: AuthUser };
type AuthTokenResponse = { access_token: string; refresh_token: string; expires_in?: number; expires_at?: number; user: AuthUser };

const SUPABASE_URL = "https://pcwknkrgtsmcivyetfvx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_OyGagYkljCbDNYP1W_YE6g_D70t7_Fr";
const AUTH_STORAGE_KEY = "aline-auth-session";
const PIN_IDENTITIES = ["aline@aline-enfermagem.app", "admin@aline-enfermagem.app"];

async function authRequest<T = Record<string, unknown>>(path: string, body: Record<string, string>, accessToken?: string): Promise<T> {
  const response = await fetch(`${SUPABASE_URL}/auth/v1/${path}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      "Content-Type": "application/json",
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    body: JSON.stringify(body),
  });
  const result: unknown = await response.json().catch(() => ({}));
  const message = typeof result === "object" && result !== null && "msg" in result && typeof (result as { msg?: unknown }).msg === "string"
    ? (result as { msg: string }).msg
    : "Não foi possível entrar.";
  if (!response.ok) throw new Error(message);
  return result as T;
}

function normalizeSession(result: AuthTokenResponse): AuthSession {
  return {
    access_token: result.access_token,
    refresh_token: result.refresh_token,
    expires_at: result.expires_at ?? Math.floor(Date.now() / 1000) + (result.expires_in ?? 3600),
    user: result.user,
  };
}

async function signInWithPin(pin: string) {
  for (const email of PIN_IDENTITIES) {
    try {
      const result = await authRequest<AuthTokenResponse>("token?grant_type=password", { email, password: pin });
      return normalizeSession(result);
    } catch {
      // O mesmo PIN é testado nos dois acessos autorizados.
    }
  }
  throw new Error("PIN incorreto. Confira os números e tente novamente.");
}

async function refreshAuthSession(refreshToken: string) {
  const result = await authRequest<AuthTokenResponse>("token?grant_type=refresh_token", { refresh_token: refreshToken });
  return normalizeSession(result);
}

const storageKeys = {
  planner: "aline-planner-items",
  progress: "aline-study-progress",
  quiz: "aline-quiz-progress",
  quizDaily: "aline-quiz-daily",
  photo: "aline-profile-photo",
};

function readStored<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) as T : fallback;
  } catch {
    return fallback;
  }
}

function saveStored(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

const navItems: { id: View; label: string; icon: React.ReactNode }[] = [
  { id: "inicio", label: "Visão geral", icon: <LayoutDashboard /> },
  { id: "rotina", label: "Plano de estudos", icon: <CalendarDays /> },
  { id: "aulas", label: "Aulas", icon: <BookOpen /> },
  { id: "questoes", label: "Questões", icon: <CircleHelp /> },
];

const iconMap = {
  surgery: <Hospital />,
  woman: <Venus />,
  icu: <Activity />,
};

export default function Home() {
  const [view, setView] = useState<View>("inicio");
  const [selectedId, setSelectedId] = useState(disciplines[0].id);
  const [completedBlocks, setCompletedBlocks] = useState<string[]>([]);
  const [plannerItems, setPlannerItems] = useState<PlannerItem[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [authSession, setAuthSession] = useState<AuthSession | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const selected = disciplines.find((item) => item.id === selectedId) ?? disciplines[0];
  const progress = Math.round((completedBlocks.length / 14) * 100);

  useEffect(() => {
    let active = true;
    async function restoreSession() {
      const stored = readStored<AuthSession | null>(AUTH_STORAGE_KEY, null);
      if (!stored) {
        if (active) setAuthReady(true);
        return;
      }
      try {
        const now = Math.floor(Date.now() / 1000);
        const session = stored.expires_at > now + 60 ? stored : await refreshAuthSession(stored.refresh_token);
        if (active) {
          setAuthSession(session);
          saveStored(AUTH_STORAGE_KEY, session);
        }
      } catch {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      } finally {
        if (active) setAuthReady(true);
      }
    }
    void restoreSession();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    setPlannerItems(readStored<PlannerItem[]>(storageKeys.planner, []));
    setCompletedBlocks(readStored<string[]>(storageKeys.progress, []));
    setPhotoUrl(localStorage.getItem(storageKeys.photo) ?? "");
  }, []);

  function toggleBlock(key: string, checked: boolean) {
    setCompletedBlocks((current) => {
      const updated = checked ? [...new Set([...current, key])] : current.filter((item) => item !== key);
      saveStored(storageKeys.progress, updated);
      return updated;
    });
  }

  useEffect(() => {
    type ToolDefinition = { name: string; title: string; description: string; inputSchema: object; annotations: { readOnlyHint: boolean; untrustedContentHint: boolean }; execute: (input: unknown) => Promise<unknown> | unknown };
    type ModelContext = { registerTool: (tool: ToolDefinition, options?: { signal?: AbortSignal }) => Promise<void> | void };
    const context = (document as Document & { modelContext?: ModelContext }).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    const sections: View[] = ["inicio", "rotina", "aulas", "questoes"];

    void Promise.resolve(context.registerTool({
      name: "navigate_study_section",
      title: "Abrir seção de estudo",
      description: "Abre uma seção do organizador acadêmico da Aline.",
      inputSchema: { type: "object", properties: { section: { type: "string", enum: sections } }, required: ["section"], additionalProperties: false },
      annotations: { readOnlyHint: true, untrustedContentHint: false },
      execute(input) {
        const section = (input as { section?: string }).section;
        if (!sections.includes(section as View)) throw new Error("Seção inválida.");
        setView(section as View);
        return { section, status: "opened" };
      },
    }, { signal: lifecycle.signal })).catch(() => undefined);

    void Promise.resolve(context.registerTool({
      name: "set_study_block_complete",
      title: "Atualizar bloco de estudo",
      description: "Marca ou desmarca um bloco do plano semanal e salva o progresso.",
      inputSchema: { type: "object", properties: { blockKey: { type: "string", minLength: 1, maxLength: 80 }, completed: { type: "boolean" } }, required: ["blockKey", "completed"], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const { blockKey, completed } = input as { blockKey?: string; completed?: boolean };
        if (!blockKey || typeof completed !== "boolean") throw new Error("Dados inválidos.");
        setCompletedBlocks((current) => {
          const updated = completed ? [...new Set([...current, blockKey])] : current.filter((item) => item !== blockKey);
          saveStored(storageKeys.progress, updated);
          return updated;
        });
        return { blockKey, completed };
      },
    }, { signal: lifecycle.signal })).catch(() => undefined);
    return () => lifecycle.abort();
  }, []);

  async function addEvent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setNotice("");
    const data = new FormData(event.currentTarget);
    const subject = String(data.get("subject"));
    const payload = {
      title: data.get("title"), subject, date: data.get("date"), startTime: data.get("startTime"), endTime: "",
      itemType: "Prova", priority: "Alta",
    };
    try {
      const item: PlannerItem = { id: Date.now(), title: String(payload.title), subject, itemType: "Prova", date: String(payload.date), startTime: String(payload.startTime), completed: false };
      setPlannerItems((current) => {
        const updated = [...current, item].sort((a, b) => `${a.date}${a.startTime}`.localeCompare(`${b.date}${b.startTime}`));
        saveStored(storageKeys.planner, updated);
        return updated;
      });
      setNotice("Prova ou atividade adicionada com sucesso.");
      setDialogOpen(false);
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Não foi possível salvar.");
    } finally {
      setSaving(false);
    }
  }

  async function uploadPhoto(file?: File) {
    if (!file) return;
    setUploadingPhoto(true);
    setNotice("");
    try {
      if (!new Set(["image/jpeg", "image/png", "image/webp"]).has(file.type)) throw new Error("Use uma imagem JPG, PNG ou WebP.");
      if (file.size > 10 * 1024 * 1024) throw new Error("A foto deve ter no máximo 10 MB.");
      const dataUrl = await resizeProfilePhoto(file);
      localStorage.setItem(storageKeys.photo, dataUrl);
      setPhotoUrl(dataUrl);
      setNotice("Foto de perfil atualizada com sucesso.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Não foi possível salvar a foto.");
    } finally {
      setUploadingPhoto(false);
    }
  }

  async function handleLogin(pin: string) {
    const session = await signInWithPin(pin);
    setAuthSession(session);
    saveStored(AUTH_STORAGE_KEY, session);
  }

  async function handleLogout() {
    const token = authSession?.access_token;
    setAuthSession(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    if (token) await authRequest("logout", {}, token).catch(() => undefined);
  }

  if (!authReady) return <AuthLoading />;
  if (!authSession) return <LoginScreen onLogin={handleLogin} />;

  const isAdmin = authSession.user.app_metadata?.role === "admin";
  const accountName = isAdmin ? "Administrador" : "Aline Organek";
  const accountLabel = isAdmin ? "Acesso administrativo" : "6º período";

  return (
    <main className="min-h-screen bg-[#f3f5f4] text-[#263238]">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[270px] flex-col bg-[#183c2f] px-5 py-6 text-white lg:flex">
        <Brand />
        <nav className="mt-10 space-y-2" aria-label="Navegação principal">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => setView(item.id)} className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${view === item.id ? "bg-[#4caf50] text-white shadow-lg shadow-black/10" : "text-white/70 hover:bg-white/8 hover:text-white"}`}>
              {item.icon}{item.label}
            </button>
          ))}
        </nav>
        <div className="mt-auto rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
          <div className="mb-3 flex items-center gap-3"><ProfileAvatar photoUrl={photoUrl} className="size-10" /><div><p className="text-sm font-bold">{accountName}</p><p className="text-xs text-white/55">{accountLabel}</p></div></div>
          <p className="text-xs leading-relaxed text-white/60">Faculdade FASIPE • Sorriso–MT</p>
          <button onClick={handleLogout} className="mt-4 w-full rounded-xl border border-white/15 px-3 py-2 text-xs font-bold text-white/75 transition hover:bg-white/10 hover:text-white">Sair</button>
        </div>
      </aside>

      <div className="lg:pl-[270px]">
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-black/5 bg-white/92 px-4 backdrop-blur md:px-8">
          <div className="flex items-center gap-3"><Button variant="ghost" size="icon" className="lg:hidden"><Menu /></Button><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#388e3c]">FASIPE Sorriso</p><p className="font-bold">Enfermagem • 6º período</p></div></div>
          <div className="flex items-center gap-3"><div className="hidden text-right sm:block"><p className="text-sm font-semibold">{accountName}</p><p className="text-xs text-slate-500">{isAdmin ? accountLabel : uploadingPhoto ? "Salvando foto..." : "Toque na foto para alterar"}</p></div><ProfileAvatar photoUrl={photoUrl} className="size-11" uploadable={!isAdmin} onUpload={uploadPhoto} /><Button variant="outline" size="sm" onClick={handleLogout}>Sair</Button></div>
        </header>

        <div className="mx-auto max-w-[1450px] p-4 pb-28 md:p-8">
          {notice && <div role="status" className="mb-5 rounded-xl border border-[#a5d6a7] bg-[#edf8ee] px-4 py-3 text-sm text-[#255f29]">{notice}</div>}
          {view === "inicio" && <Dashboard plannerItems={plannerItems} progress={progress} completedBlocks={completedBlocks} toggleBlock={toggleBlock} setView={setView} setSelectedId={setSelectedId} dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} saving={saving} addEvent={addEvent} />}
          {view === "rotina" && <StudyRoutine completedBlocks={completedBlocks} toggleBlock={toggleBlock} progress={progress} />}
          {view === "aulas" && <Lessons selected={selected} selectedId={selectedId} setSelectedId={setSelectedId} />}
          {view === "questoes" && <QuizLibrary />}
        </div>
      </div>

      <nav className="fixed inset-x-3 bottom-3 z-50 flex items-center justify-around rounded-2xl border border-black/10 bg-white/95 p-2 shadow-2xl backdrop-blur lg:hidden" aria-label="Navegação móvel">
        {navItems.map((item) => <button key={item.id} onClick={() => setView(item.id)} className={`flex min-w-16 flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-[11px] ${view === item.id ? "font-bold text-[#2e7d32]" : "text-slate-500"}`}>{item.icon}<span>{item.label.split(" ")[0]}</span></button>)}
      </nav>
    </main>
  );
}

function AuthLoading() {
  return <main className="grid min-h-screen place-items-center bg-[#f3f5f4] text-[#255f3b]"><div className="text-center"><Stethoscope className="mx-auto mb-3 size-10 animate-pulse" /><p className="font-bold">Abrindo AlineEnf...</p></div></main>;
}

function LoginScreen({ onLogin }: { onLogin: (pin: string) => Promise<void> }) {
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (pin.length < 6) {
      setError("Digite o PIN com pelo menos 6 caracteres.");
      return;
    }
    setLoading(true);
    try {
      await onLogin(pin);
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : "Não foi possível entrar.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#edf5ef] px-4 py-10 text-[#263238]">
      <div className="absolute -left-24 -top-24 size-80 rounded-full bg-[#4caf50]/15 blur-3xl" />
      <div className="absolute -bottom-28 -right-20 size-96 rounded-full bg-[#ef6c8f]/10 blur-3xl" />
      <section className="relative w-full max-w-md rounded-[2rem] border border-white/70 bg-white/95 p-7 shadow-2xl shadow-[#183c2f]/10 md:p-9">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="relative mb-4 grid size-16 place-items-center rounded-2xl bg-[#388e3c] text-white shadow-lg shadow-[#388e3c]/25"><Stethoscope className="size-9" /><span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-white text-base font-black text-[#388e3c] shadow">+</span></div>
          <h1 className="text-3xl font-black tracking-tight">Aline<span className="text-[#4caf50]">Enf</span></h1>
          <p className="mt-2 text-sm text-slate-500">Organização acadêmica de Enfermagem</p>
        </div>
        <form onSubmit={submit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="pin" className="text-sm font-bold">Digite seu PIN</Label>
            <Input id="pin" type="password" autoComplete="current-password" placeholder="Digite letras e números" value={pin} onChange={(event) => setPin(event.target.value.slice(0, 72))} className="h-14 rounded-xl text-center text-lg font-black tracking-[0.12em]" autoFocus />
          </div>
          {error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>}
          <Button type="submit" disabled={loading} className="h-13 w-full rounded-xl bg-[#388e3c] text-base font-bold hover:bg-[#2e7d32]">{loading ? "Entrando..." : "Entrar"}</Button>
        </form>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400"><ShieldCheck className="size-4" /><span>Seu PIN não fica salvo neste aparelho.</span></div>
      </section>
    </main>
  );
}

function Brand() {
  return <div className="flex items-center gap-3 px-2"><div className="relative grid size-12 place-items-center rounded-2xl bg-[#4caf50] text-white shadow-lg"><Stethoscope className="size-7" /><span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-white text-sm font-black text-[#388e3c]">+</span></div><div><p className="text-xl font-black tracking-tight">Aline<span className="text-[#79d47d]">Enf</span></p><p className="text-xs text-white/55">Organização & estudo</p></div></div>;
}

function ProfileAvatar({ photoUrl, className, uploadable = false, onUpload }: { photoUrl: string; className: string; uploadable?: boolean; onUpload?: (file?: File) => void }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [photoUrl]);
  const avatar = <span className={`relative grid shrink-0 place-items-center overflow-hidden rounded-full bg-[#e7f5e8] font-black text-[#2e7d32] ring-2 ring-white/70 ${className}`}>
    {photoUrl && !failed ? <img src={photoUrl} alt="Foto de perfil de Aline Organek" className="h-full w-full object-cover" onError={() => setFailed(true)} /> : <span>AO</span>}
    {uploadable && <span className="absolute inset-x-0 bottom-0 grid h-5 place-items-center bg-black/55 text-white"><Camera className="size-3" /></span>}
  </span>;
  if (!uploadable) return avatar;
  return <label className="cursor-pointer rounded-full focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#388e3c]" title="Alterar foto de perfil">{avatar}<input className="sr-only" type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => onUpload?.(event.target.files?.[0])} /></label>;
}

function resizeProfilePhoto(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Não foi possível ler a foto."));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("A imagem selecionada é inválida."));
      image.onload = () => {
        const scale = Math.min(1, 800 / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        canvas.getContext("2d")?.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      image.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}

function PageIntro({ eyebrow, title, text, action }: { eyebrow: string; title: string; text: string; action?: React.ReactNode }) {
  return <section className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="mb-2 text-sm font-bold uppercase tracking-[0.13em] text-[#388e3c]">{eyebrow}</p><h1 className="max-w-4xl text-3xl font-black tracking-tight md:text-4xl">{title}</h1><p className="mt-2 max-w-3xl text-base leading-relaxed text-slate-500">{text}</p></div>{action}</section>;
}

function Dashboard({ plannerItems, progress, completedBlocks, toggleBlock, setView, setSelectedId, dialogOpen, setDialogOpen, saving, addEvent }: { plannerItems: PlannerItem[]; progress: number; completedBlocks: string[]; toggleBlock: (key: string, checked: boolean) => void; setView: (view: View) => void; setSelectedId: (id: string) => void; dialogOpen: boolean; setDialogOpen: (open: boolean) => void; saving: boolean; addEvent: (event: FormEvent<HTMLFormElement>) => void }) {
  const assessments = plannerItems.filter((item) => item.itemType === "Prova" || item.itemType === "Trabalho").sort((a, b) => a.date.localeCompare(b.date));
  const [todayIndex, setTodayIndex] = useState<number | null>(null);

  useEffect(() => {
    const weekday = new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      timeZone: "America/Cuiaba",
    }).format(new Date()).toLocaleLowerCase("pt-BR");

    const weekdayIndexes: Record<string, number> = {
      "segunda-feira": 0,
      "terça-feira": 1,
      "quarta-feira": 2,
      "quinta-feira": 3,
      "sexta-feira": 4,
      sábado: 5,
      domingo: 6,
    };

    setTodayIndex(weekdayIndexes[weekday] ?? 0);
  }, []);

  const todayPlan = todayIndex === null ? null : studyPlan[todayIndex];
  const isWeekend = todayIndex !== null && todayIndex >= 5;
  const firstTime = isWeekend ? "09:00–10:00" : "13:30–14:15";
  const secondTime = isWeekend ? "10:00–11:00" : "16:10–16:55";
  const studyColor = (title: string) => title.toLocaleLowerCase("pt-BR").includes("mulher")
    ? "#d04f7b"
    : title.toLocaleLowerCase("pt-BR").includes("uti")
      ? "#1976d2"
      : "#388e3c";

  return <>
    <PageIntro eyebrow={`${todayPlan?.day ?? "Hoje"} • Semana acadêmica`} title="Olá, Aline. Um passo de cada vez." text="Sua rotina já está dividida em blocos curtos, com revisão das três disciplinas e prática de questões." action={<AssessmentDialog open={dialogOpen} setOpen={setDialogOpen} saving={saving} onSubmit={addEvent} />} />
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <Metric icon={<Clock3 />} label="Estudo em dias úteis" value="1h30" detail="2 blocos de 45 min" tone="green" />
      <Metric icon={<CalendarDays />} label="Fim de semana" value="2h" detail="sábado e domingo" tone="blue" />
      <Metric icon={<BookOpen />} label="Disciplinas" value="3" detail="conteúdo do 6º período" tone="pink" />
      <Metric icon={<CircleHelp />} label="Banco de questões" value={String(disciplines.reduce((total, discipline) => total + discipline.questions.length, 0))} detail="novas + revisão semanal" tone="amber" />
    </section>

    <section className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_0.75fr]">
      <div className="rounded-2xl border border-black/7 bg-white p-5 shadow-sm md:p-6">
        <div className="mb-5 flex items-center justify-between"><div><h2 className="text-xl font-black">Plano de hoje</h2><p className="text-sm text-slate-500">Blocos definidos para manter constância</p></div><Button variant="ghost" onClick={() => setView("rotina")} className="text-[#2e7d32]">Ver semana <ChevronRight /></Button></div>
        <div className="space-y-3">
          {todayPlan ? <>
            <StudyBlock blockKey={`${todayPlan.day}-1`} time={firstTime} title={todayPlan.first} subtitle={isWeekend ? "Atividade planejada para o fim de semana" : "Primeiro bloco de estudo do dia"} checked={completedBlocks.includes(`${todayPlan.day}-1`)} onToggle={toggleBlock} color={studyColor(todayPlan.first)} />
            <StudyBlock blockKey={`${todayPlan.day}-2`} time={secondTime} title={todayPlan.second} subtitle={isWeekend ? "Segundo bloco de revisão e organização" : "Segundo bloco de estudo do dia"} checked={completedBlocks.includes(`${todayPlan.day}-2`)} onToggle={toggleBlock} color={studyColor(todayPlan.second)} />
            <div className="flex items-center gap-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4"><div className="grid size-11 place-items-center rounded-xl bg-[#183c2f] text-white"><GraduationCap /></div><div><p className="font-bold">{isWeekend ? "Atividade do dia" : "Aula/atividade acadêmica"}</p><p className="text-sm text-slate-500">{todayPlan.className}</p></div></div>
          </> : <div className="rounded-xl bg-slate-50 p-5 text-sm font-semibold text-slate-500">Carregando o plano de hoje...</div>}
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl bg-[#183c2f] p-6 text-white shadow-xl shadow-emerald-950/10"><div className="mb-8 flex items-start justify-between"><div><p className="text-sm text-white/60">Progresso semanal</p><h2 className="mt-1 text-2xl font-black">{progress}% concluído</h2></div><div className="grid size-11 place-items-center rounded-xl bg-white/10"><Target /></div></div><Progress value={progress} className="h-2.5 bg-white/15 [&_[data-slot=progress-indicator]]:bg-[#79d47d]" /><p className="mt-4 text-sm text-white/65">Marque cada bloco ao terminar. O progresso será recalculado automaticamente.</p></div>
        <div className="rounded-2xl border border-black/7 bg-white p-5 shadow-sm"><div className="mb-4 flex items-center justify-between"><div><h2 className="font-black">Próximas avaliações</h2><p className="text-xs text-slate-500">Provas e trabalhos cadastrados</p></div><FileCheck2 className="text-[#388e3c]" /></div>{assessments.length ? assessments.slice(0, 3).map((item) => <div key={item.id} className="mb-3 rounded-xl bg-slate-50 p-3"><p className="text-sm font-bold">{item.title}</p><p className="mt-1 text-xs text-slate-500">{item.subject} • {formatDate(item.date)}</p></div>) : <div className="rounded-xl border border-dashed border-slate-300 p-4 text-center"><p className="text-sm font-semibold">Nenhuma data informada</p><p className="mt-1 text-xs text-slate-500">Use “Adicionar prova” quando o cronograma chegar.</p></div>}</div>
      </div>
    </section>

    <section className="mt-6 rounded-2xl border border-black/7 bg-white p-5 shadow-sm md:p-6"><div className="mb-5"><h2 className="text-xl font-black">Aulas do 6º período</h2><p className="text-sm text-slate-500">Conteúdo inicial elaborado com fontes oficiais</p></div><div className="grid gap-4 md:grid-cols-3">{disciplines.map((item) => <button key={item.id} onClick={() => { setSelectedId(item.id); setView("aulas"); }} className="group rounded-2xl border border-slate-200 p-5 text-left transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"><div className="mb-5 grid size-12 place-items-center rounded-xl text-white" style={{ background: item.color }}>{iconMap[item.icon]}</div><p className="text-xs font-bold uppercase tracking-wider text-slate-400">{item.classDay} • {item.professor}</p><h3 className="mt-2 min-h-14 text-lg font-black leading-tight">{item.shortName}</h3><div className="mt-4 flex items-center text-sm font-bold text-[#2e7d32]">Abrir aula <ChevronRight className="ml-1 size-4 transition group-hover:translate-x-1" /></div></button>)}</div></section>
  </>;
}

function StudyRoutine({ completedBlocks, toggleBlock, progress }: { completedBlocks: string[]; toggleBlock: (key: string, checked: boolean) => void; progress: number }) {
  return <>
    <PageIntro eyebrow="Rotina personalizada" title="Plano semanal de estudos" text="De segunda a sexta, dois blocos de 45 minutos. No sábado e domingo, duas horas para simulado, revisão e planejamento." />
    <section className="mb-6 grid gap-4 md:grid-cols-3"><Metric icon={<Clock3 />} label="Primeiro bloco" value="13:30" detail="até 14:15 • 45 minutos" tone="green" /><Metric icon={<Clock3 />} label="Segundo bloco" value="16:10" detail="até 16:55 • 45 minutos" tone="blue" /><Metric icon={<Target />} label="Progresso" value={`${progress}%`} detail="14 etapas na semana" tone="amber" /></section>
    <section className="overflow-hidden rounded-2xl border border-black/7 bg-white shadow-sm"><div className="hidden grid-cols-[130px_1fr_1fr_1.3fr] gap-4 border-b bg-[#eef3ef] px-6 py-4 text-xs font-black uppercase tracking-wider text-slate-500 md:grid"><span>Dia</span><span>Bloco 1</span><span>Bloco 2</span><span>Aula/atividade</span></div>{studyPlan.map((row, index) => <div key={row.day} className="grid gap-4 border-b border-slate-100 p-5 last:border-0 md:grid-cols-[130px_1fr_1fr_1.3fr] md:px-6"><div><p className="font-black">{row.day}</p>{index < 5 ? <p className="text-xs text-slate-400">Dias úteis</p> : <p className="text-xs text-[#388e3c]">Fim de semana</p>}</div><PlanCell blockKey={`${row.day}-1`} time={index < 5 ? "13:30–14:15" : "09:00–10:00"} title={row.first} checked={completedBlocks.includes(`${row.day}-1`)} onToggle={toggleBlock} /><PlanCell blockKey={`${row.day}-2`} time={index < 5 ? "16:10–16:55" : "10:00–11:00"} title={row.second} checked={completedBlocks.includes(`${row.day}-2`)} onToggle={toggleBlock} /><div className="rounded-xl bg-slate-50 p-3"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Faculdade/atividade</p><p className="mt-1 text-sm font-semibold">{row.className}</p></div></div>)}</section>
    <div className="mt-6 rounded-2xl border border-[#c8e6c9] bg-[#eff8ef] p-5"><div className="flex gap-3"><Quote className="mt-1 shrink-0 text-[#388e3c]" /><div><p className="font-black text-[#255f29]">Método para cada bloco de 45 minutos</p><p className="mt-1 text-sm leading-relaxed text-[#376c3a]">5 min para revisar a meta • 25 min de conteúdo • 10 min de perguntas ou recordação ativa • 5 min para registrar dúvidas e pontos fracos.</p></div></div></div>
  </>;
}

function Lessons({ selected, selectedId, setSelectedId }: { selected: Discipline; selectedId: string; setSelectedId: (id: string) => void }) {
  const lessons = selected.lessons ?? [selected.lesson];
  const [lessonIndex, setLessonIndex] = useState(0);
  const lesson = lessons[Math.min(lessonIndex, lessons.length - 1)];

  useEffect(() => setLessonIndex(0), [selectedId]);

  return <>
    <PageIntro eyebrow="Biblioteca de aulas" title="Conteúdo explicado e com fonte identificada" text="Saúde da Mulher já está organizada nas 20 aulas do plano de ensino. Os PDFs da professora serão incorporados à aula correspondente quando forem enviados." />
    <DisciplinePicker value={selectedId} onChange={setSelectedId} />
    {lessons.length > 1 && <section className="mt-6 rounded-2xl border border-black/7 bg-white p-4 shadow-sm md:p-5">
      <div className="mb-3 flex items-center justify-between gap-3"><div><p className="text-xs font-black uppercase tracking-wider" style={{ color: selected.color }}>Plano de ensino</p><h2 className="mt-1 font-black">Escolha uma das {lessons.length} aulas</h2></div><span className="rounded-full bg-pink-50 px-3 py-1 text-sm font-black text-pink-700">{lessonIndex + 1}/{lessons.length}</span></div>
      <div className="grid max-h-64 gap-2 overflow-y-auto pr-1 sm:grid-cols-2 xl:grid-cols-3">{lessons.map((item, index) => <button key={item.title} onClick={() => setLessonIndex(index)} className={`rounded-xl border p-3 text-left text-sm transition ${lessonIndex === index ? "border-transparent text-white shadow-md" : "border-slate-200 bg-slate-50 hover:bg-white"}`} style={lessonIndex === index ? { background: selected.color } : undefined}><span className={`mb-1 block text-xs font-black uppercase tracking-wide ${lessonIndex === index ? "text-white/70" : "text-slate-400"}`}>Aula {index + 1}</span><span className="font-bold leading-snug">{item.title.replace(/^Aula \d+ - /, "")}</span></button>)}</div>
    </section>}
    <section className="mt-6 grid gap-6 xl:grid-cols-[0.75fr_1.5fr]">
      <aside className="space-y-5">
        <div className="rounded-2xl border border-black/7 bg-white p-5 shadow-sm"><div className="mb-5 grid size-14 place-items-center rounded-2xl text-white" style={{ background: selected.color }}>{iconMap[selected.icon]}</div><p className="text-xs font-bold uppercase tracking-wider text-slate-400">{selected.classDay}</p><h2 className="mt-2 text-xl font-black leading-tight">{selected.name}</h2><div className="mt-5 space-y-2 text-sm"><p><strong>Docente:</strong> {selected.professor}</p><p><strong>Aula:</strong> {selected.classOrder}</p>{lessons.length > 1 && <p><strong>Cronograma:</strong> {lessons.length} aulas cadastradas</p>}</div></div>
        <div className="rounded-2xl border border-black/7 bg-white p-5 shadow-sm"><div className="mb-3 flex items-center gap-2"><ShieldCheck className="text-[#388e3c]" /><h3 className="font-black">Fontes verificadas</h3></div><div className="space-y-3">{selected.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="block rounded-xl bg-slate-50 p-3 transition hover:bg-[#edf8ee]"><p className="text-xs font-bold text-[#388e3c]">{source.institution}</p><p className="mt-1 text-sm font-semibold leading-snug">{source.title}</p><ExternalLink className="mt-2 size-4 text-slate-400" /></a>)}</div></div>
      </aside>
      <article key={`${selectedId}-${lessonIndex}`} className="rounded-2xl border border-black/7 bg-white p-5 shadow-sm md:p-7"><p className="text-sm font-bold" style={{ color: selected.color }}>{lessons.length > 1 ? `AULA ${lessonIndex + 1} DE ${lessons.length}` : "AULA INICIAL"}</p><h2 className="mt-2 text-2xl font-black md:text-3xl">{lesson.title}</h2><p className="mt-3 leading-relaxed text-slate-600">{lesson.description}</p><div className="my-6 rounded-2xl bg-slate-50 p-5"><h3 className="mb-3 font-black">Objetivos de aprendizagem</h3><ul className="space-y-2">{lesson.objectives.map((item) => <li key={item} className="flex gap-2 text-sm leading-relaxed"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#388e3c]" />{item}</li>)}</ul></div><Accordion type="single" collapsible defaultValue="section-0" className="w-full">{lesson.sections.map((section, index) => <AccordionItem key={section.title} value={`section-${index}`}><AccordionTrigger className="text-left text-base font-black">{section.title}</AccordionTrigger><AccordionContent><p className="mb-4 text-sm leading-7 text-slate-600">{section.content}</p><ul className="space-y-3">{section.points.map((point) => <li key={point} className="flex gap-3 rounded-xl bg-slate-50 p-3 text-sm leading-relaxed"><span className="mt-2 size-2 shrink-0 rounded-full" style={{ background: selected.color }} />{point}</li>)}</ul></AccordionContent></AccordionItem>)}</Accordion><div className="mt-7 rounded-2xl border-l-4 bg-[#f6f8f7] p-5" style={{ borderColor: selected.color }}><h3 className="mb-3 font-black">O que memorizar para a prova</h3><ul className="space-y-2">{lesson.memorize.map((item) => <li key={item} className="flex gap-2 text-sm"><Check className="size-4 shrink-0" style={{ color: selected.color }} />{item}</li>)}</ul></div><p className="mt-6 text-xs leading-relaxed text-slate-400">Material educacional complementar baseado em fontes oficiais. Deve ser confrontado com as aulas da docente, protocolos institucionais e atualizações locais.</p></article>
    </section>
  </>;
}

function QuizLibrary() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [progressItems, setProgressItems] = useState<QuizProgressItem[]>([]);
  const [dailyIds, setDailyIds] = useState<string[]>([]);
  const [reviewIds, setReviewIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [quizNotice, setQuizNotice] = useState("");
  const allQuestions = disciplines.flatMap((discipline) => discipline.questions.map((question) => ({ question, discipline })));
  const dailyQuestions = dailyIds.map((id) => allQuestions.find((item) => item.question.id === id)).filter((item): item is { question: Question; discipline: Discipline } => Boolean(item));
  const answered = dailyQuestions.filter(({ question }) => answers[question.id] !== undefined);
  const correct = answered.filter(({ question }) => answers[question.id] === question.correct).length;

  useEffect(() => {
    try {
      const saved = readStored<QuizProgressItem[]>(storageKeys.quiz, []);
      setProgressItems(saved);
      const formatter = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Cuiaba", year: "numeric", month: "2-digit", day: "2-digit" });
      const today = formatter.format(new Date());
      const orderedIds = Array.from({ length: Math.max(...disciplines.map((item) => item.questions.length)) }, (_, index) => disciplines.flatMap((discipline) => discipline.questions[index] ? [discipline.questions[index].id] : [])).flat();
      const validIds = new Set(orderedIds);
      const dailyKey = `${storageKeys.quizDaily}-${today}`;
      let assignments = readStored<{ questionId: string; assignmentType: "new" | "review" }[]>(dailyKey, []);
      if (!assignments.length || assignments.some((item) => !validIds.has(item.questionId))) {
        const now = Date.now();
        const progressById = new Map(saved.map((item) => [item.questionId, item]));
        const dueIds = orderedIds.filter((id) => {
          const item = progressById.get(id);
          return item && new Date(item.nextReviewAt).getTime() <= now;
        });
        const unseenIds = orderedIds.filter((id) => !progressById.has(id));
        const reviews = dueIds.slice(0, Math.min(2, dueIds.length));
        const chosen = [...reviews, ...unseenIds.slice(0, 5 - reviews.length), ...dueIds.slice(reviews.length)].slice(0, 5);
        assignments = chosen.map((questionId) => ({ questionId, assignmentType: reviews.includes(questionId) ? "review" : "new" }));
        saveStored(dailyKey, assignments);
      }
      setDailyIds(assignments.map((item) => item.questionId));
      setReviewIds(new Set(assignments.filter((item) => item.assignmentType === "review").map((item) => item.questionId)));
      const completedToday = saved.filter((item) => formatter.format(new Date(item.lastAnsweredAt)) === today);
      setAnswers(Object.fromEntries(completedToday.map((item) => [item.questionId, item.lastAnswer])));
    } catch {
      setQuizNotice("Não foi possível carregar o ciclo de questões agora.");
    } finally {
      setLoading(false);
    }
  // O conjunto diário é definido uma vez ao abrir a seção.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function answerQuestion(question: Question, discipline: Discipline, answer: number) {
    setAnswers((current) => ({ ...current, [question.id]: answer }));
    const isCorrect = answer === question.correct;
    try {
      const now = new Date();
      const nextReview = new Date(now);
      nextReview.setDate(nextReview.getDate() + 7);
      setProgressItems((current) => {
        const existing = current.find((item) => item.questionId === question.id);
        const updated: QuizProgressItem = {
          questionId: question.id,
          disciplineId: discipline.id,
          lastCorrect: isCorrect,
          lastAnswer: answer,
          timesAnswered: (existing?.timesAnswered ?? 0) + 1,
          correctCount: (existing?.correctCount ?? 0) + (isCorrect ? 1 : 0),
          firstAnsweredAt: existing?.firstAnsweredAt ?? now.toISOString(),
          lastAnsweredAt: now.toISOString(),
          nextReviewAt: nextReview.toISOString(),
        };
        const saved = [...current.filter((item) => item.questionId !== question.id), updated];
        saveStored(storageKeys.quiz, saved);
        return saved;
      });
    } catch (error) {
      setQuizNotice(error instanceof Error ? error.message : "Não foi possível salvar a resposta.");
    }
  }

  const totalAnswered = progressItems.length;
  const totalReviews = progressItems.reduce((sum, item) => sum + Math.max(0, item.timesAnswered - 1), 0);
  return <>
    <PageIntro eyebrow="Preparação diária" title="Questões de hoje" text="O sistema apresenta questões novas e traz automaticamente para revisão as que foram respondidas há sete dias." />
    {quizNotice && <div role="status" className="mb-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">{quizNotice}</div>}
    <section className="grid gap-6 xl:grid-cols-[1fr_320px]">
      <div className="space-y-5">
        {loading && <div className="rounded-2xl border border-black/7 bg-white p-8 text-center text-slate-500">Preparando as questões de hoje...</div>}
        {!loading && !dailyQuestions.length && <div className="rounded-2xl border border-[#c8e6c9] bg-white p-8 text-center shadow-sm"><CheckCircle2 className="mx-auto mb-3 size-10 text-[#388e3c]" /><h2 className="text-xl font-black">Ciclo de hoje concluído</h2><p className="mt-2 text-sm text-slate-500">As próximas questões entram quando um novo PDF for adicionado ou quando chegar a revisão semanal.</p></div>}
        {dailyQuestions.map(({ question, discipline }, index) => <QuestionCard key={question.id} question={question} index={index} selectedAnswer={answers[question.id]} onAnswer={(answer) => answerQuestion(question, discipline, answer)} color={discipline.color} subject={discipline.shortName} review={reviewIds.has(question.id)} />)}
      </div>
      <aside className="h-fit rounded-2xl bg-[#183c2f] p-6 text-white xl:sticky xl:top-28"><CircleHelp className="mb-5 size-8 text-[#79d47d]" /><p className="text-sm text-white/60">Desempenho de hoje</p><p className="mt-2 text-4xl font-black">{correct}/{answered.length || 0}</p><p className="mt-1 text-sm text-white/65">acertos • {dailyQuestions.length} questões no ciclo</p><Progress value={answered.length ? (correct / answered.length) * 100 : 0} className="mt-6 bg-white/15 [&_[data-slot=progress-indicator]]:bg-[#79d47d]" /><div className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white/8 p-3"><p className="text-2xl font-black">{totalAnswered}</p><p className="text-xs text-white/60">já estudadas</p></div><div className="rounded-xl bg-white/8 p-3"><p className="text-2xl font-black">{totalReviews}</p><p className="text-xs text-white/60">revisões feitas</p></div></div><div className="mt-4 rounded-xl bg-white/8 p-4 text-sm leading-relaxed text-white/70">Cada resposta volta ao ciclo depois de 7 dias. As novas aulas enviadas em PDF também alimentarão este banco.</div></aside>
    </section>
  </>;
}

function QuestionCard({ question, index, selectedAnswer, onAnswer, color, subject, review }: { question: Question; index: number; selectedAnswer?: number; onAnswer: (answer: number) => void; color: string; subject: string; review: boolean }) {
  const answered = selectedAnswer !== undefined;
  return <article className="rounded-2xl border border-black/7 bg-white p-5 shadow-sm md:p-6"><div className="mb-3 flex items-center gap-2"><span className="rounded-full px-2.5 py-1 text-xs font-bold text-white" style={{ background: color }}>{subject}</span><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${review ? "bg-amber-100 text-amber-800" : "bg-green-100 text-green-800"}`}>{review ? "Revisão semanal" : "Nova de hoje"}</span></div><div className="mb-4 flex items-start gap-3"><span className="grid size-8 shrink-0 place-items-center rounded-lg text-sm font-black text-white" style={{ background: color }}>{index + 1}</span><h2 className="pt-1 font-black leading-relaxed">{question.prompt}</h2></div><div className="space-y-2">{question.options.map((option, optionIndex) => { const isCorrect = answered && optionIndex === question.correct; const isWrong = answered && optionIndex === selectedAnswer && optionIndex !== question.correct; return <button key={option} disabled={answered} onClick={() => onAnswer(optionIndex)} className={`flex w-full gap-3 rounded-xl border p-3 text-left text-sm transition ${isCorrect ? "border-green-400 bg-green-50 text-green-900" : isWrong ? "border-red-300 bg-red-50 text-red-900" : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"}`}><span className="font-black">{String.fromCharCode(65 + optionIndex)}.</span><span>{option}</span>{isCorrect && <Check className="ml-auto size-4 shrink-0" />}</button>; })}</div>{answered && <div className={`mt-4 rounded-xl p-4 text-sm leading-relaxed ${selectedAnswer === question.correct ? "bg-green-50 text-green-900" : "bg-amber-50 text-amber-900"}`}><strong>{selectedAnswer === question.correct ? "Resposta correta. " : `Resposta correta: ${String.fromCharCode(65 + question.correct)}. `}</strong>{question.explanation}<p className="mt-2 text-xs font-bold opacity-75">Esta questão voltará para revisão em 7 dias.</p></div>}</article>;
}

function DisciplinePicker({ value, onChange }: { value: string; onChange: (id: string) => void }) {
  return <div className="grid gap-3 md:grid-cols-3">{disciplines.map((item) => <button key={item.id} onClick={() => onChange(item.id)} className={`flex items-center gap-3 rounded-2xl border bg-white p-4 text-left shadow-sm transition ${value === item.id ? "border-transparent ring-2" : "border-black/7 hover:border-slate-300"}`} style={value === item.id ? ({ "--tw-ring-color": item.color } as React.CSSProperties) : undefined}><div className="grid size-10 shrink-0 place-items-center rounded-xl text-white" style={{ background: item.color }}>{iconMap[item.icon]}</div><div className="min-w-0"><p className="truncate font-black">{item.shortName}</p><p className="text-xs text-slate-500">Prof. {item.professor}</p></div></button>)}</div>;
}

function AssessmentDialog({ open, setOpen, saving, onSubmit }: { open: boolean; setOpen: (open: boolean) => void; saving: boolean; onSubmit: (event: FormEvent<HTMLFormElement>) => void }) {
  const [subject, setSubject] = useState(disciplines[0].name);
  return <Dialog open={open} onOpenChange={setOpen}><DialogTrigger asChild><Button size="lg" className="rounded-xl bg-[#388e3c] hover:bg-[#2e7d32]"><Plus /> Adicionar prova</Button></DialogTrigger><DialogContent><form onSubmit={onSubmit}><DialogHeader><DialogTitle>Adicionar prova ou atividade</DialogTitle><DialogDescription>Cadastre a data assim que o professor divulgar o cronograma.</DialogDescription></DialogHeader><div className="grid gap-4 py-5"><div className="space-y-2"><Label htmlFor="title">Nome</Label><Input id="title" name="title" placeholder="Ex.: Prova N1" required /></div><div className="space-y-2"><Label>Disciplina</Label><input type="hidden" name="subject" value={subject} /><Select value={subject} onValueChange={setSubject}><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent>{disciplines.map((item) => <SelectItem key={item.id} value={item.name}>{item.shortName}</SelectItem>)}</SelectContent></Select></div><div className="grid grid-cols-2 gap-3"><div className="space-y-2"><Label htmlFor="date">Data</Label><Input id="date" name="date" type="date" required /></div><div className="space-y-2"><Label htmlFor="startTime">Horário</Label><Input id="startTime" name="startTime" type="time" /></div></div></div><DialogFooter><Button type="submit" disabled={saving} className="bg-[#388e3c] hover:bg-[#2e7d32]">{saving ? "Salvando..." : "Salvar"}</Button></DialogFooter></form></DialogContent></Dialog>;
}

function Metric({ icon, label, value, detail, tone }: { icon: React.ReactNode; label: string; value: string; detail: string; tone: "green" | "blue" | "pink" | "amber" }) {
  const tones = { green: "bg-green-50 text-green-700", blue: "bg-blue-50 text-blue-700", pink: "bg-pink-50 text-pink-700", amber: "bg-amber-50 text-amber-700" };
  return <div className="rounded-2xl border border-black/7 bg-white p-5 shadow-sm"><div className="flex items-start justify-between"><div><p className="text-sm font-semibold text-slate-500">{label}</p><p className="mt-2 text-3xl font-black tracking-tight">{value}</p><p className="mt-1 text-xs text-slate-500">{detail}</p></div><div className={`grid size-11 place-items-center rounded-xl ${tones[tone]}`}>{icon}</div></div></div>;
}

function StudyBlock({ blockKey, time, title, subtitle, checked, onToggle, color }: { blockKey: string; time: string; title: string; subtitle: string; checked: boolean; onToggle: (key: string, checked: boolean) => void; color: string }) {
  return <div className={`flex items-center gap-4 rounded-xl border p-4 transition ${checked ? "border-green-200 bg-green-50/60" : "border-slate-200"}`}><Checkbox checked={checked} onCheckedChange={(value) => onToggle(blockKey, value === true)} className="size-5" /><div className="grid min-w-24 place-items-center rounded-lg px-2 py-2 text-xs font-black text-white" style={{ background: color }}>{time}</div><div><p className={checked ? "font-bold line-through opacity-60" : "font-bold"}>{title}</p><p className="mt-1 text-sm text-slate-500">{subtitle}</p></div></div>;
}

function PlanCell({ blockKey, time, title, checked, onToggle }: { blockKey: string; time: string; title: string; checked: boolean; onToggle: (key: string, checked: boolean) => void }) {
  return <label className={`flex cursor-pointer gap-3 rounded-xl border p-3 ${checked ? "border-green-200 bg-green-50" : "border-slate-200 bg-white"}`}><Checkbox checked={checked} onCheckedChange={(value) => onToggle(blockKey, value === true)} /><div><p className="text-xs font-bold text-[#388e3c]">{time}</p><p className={`mt-1 text-sm font-semibold ${checked ? "line-through opacity-60" : ""}`}>{title}</p></div></label>;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(`${date}T12:00:00`)).replace(".", "");
}
