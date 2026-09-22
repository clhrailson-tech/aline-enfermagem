import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OrganizaEnf | Organização Acadêmica",
  description: "Agenda de aulas, estudos, provas e tarefas para acadêmicos de Enfermagem.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
