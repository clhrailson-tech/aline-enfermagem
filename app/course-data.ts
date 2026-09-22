import { saudeMulherLessons, saudeMulherQuestions, saudeMulherSources } from "./saude-mulher-data";

export type Question = {
  id: string;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type Discipline = {
  id: string;
  shortName: string;
  name: string;
  professor: string;
  classDay: string;
  classOrder: string;
  color: string;
  icon: "surgery" | "woman" | "icu";
  lesson: {
    title: string;
    description: string;
    objectives: string[];
    sections: { title: string; content: string; points: string[] }[];
    memorize: string[];
  };
  lessons?: Discipline["lesson"][];
  questions: Question[];
  sources: { institution: string; title: string; url: string }[];
};

export const disciplines: Discipline[] = [
  {
    id: "centro-cirurgico",
    shortName: "Centro cirúrgico",
    name: "Assistência de Enfermagem em Centro Cirúrgico e Clínica Cirúrgica",
    professor: "Carla",
    classDay: "Segunda-feira",
    classOrder: "1º horário — 19:00 às 20:20",
    color: "#388e3c",
    icon: "surgery",
    lesson: {
      title: "Aula-base 1 — Assistência perioperatória e cirurgia segura",
      description: "Introdução organizada às fases do cuidado cirúrgico, à Lista de Verificação de Segurança Cirúrgica e às prioridades de enfermagem antes, durante e após o procedimento.",
      objectives: [
        "Diferenciar os períodos pré-operatório, intraoperatório e pós-operatório.",
        "Reconhecer as três pausas essenciais da lista de cirurgia segura.",
        "Relacionar riscos cirúrgicos às ações preventivas da equipe de enfermagem.",
      ],
      sections: [
        {
          title: "1. Período perioperatório",
          content: "O cuidado perioperatório acompanha a pessoa desde a decisão pela cirurgia até sua recuperação. A enfermagem atua de forma contínua, garantindo preparo, comunicação, vigilância clínica e registro seguro.",
          points: [
            "Pré-operatório: avaliação, identificação, preparo físico e emocional, conferência de exames, alergias, jejum e consentimentos.",
            "Intraoperatório: posicionamento seguro, prevenção de lesões, manutenção da assepsia, controle de materiais e comunicação da equipe.",
            "Pós-operatório: avaliação de via aérea, respiração, circulação, consciência, dor, temperatura, sangramento, curativos, drenos e eliminações.",
          ],
        },
        {
          title: "2. Lista de Verificação de Segurança Cirúrgica",
          content: "A lista organiza confirmações críticas em três momentos. Ela não substitui o julgamento clínico; cria uma pausa compartilhada para que a equipe identifique riscos antes que causem dano.",
          points: [
            "Antes da indução anestésica: identidade, procedimento, sítio, consentimento, alergias, risco de via aérea e perda sanguínea.",
            "Antes da incisão: apresentação da equipe, nova confirmação do paciente/procedimento/sítio, eventos críticos previstos, profilaxia e exames de imagem necessários.",
            "Antes de sair da sala: procedimento realizado, contagem de instrumentais/compressas, identificação de amostras, problemas de equipamentos e plano de recuperação.",
          ],
        },
        {
          title: "3. Prevenção de infecção e eventos adversos",
          content: "A prevenção combina higiene das mãos, técnica asséptica, processamento adequado de materiais, preparo correto do sítio, uso racional de antimicrobianos e vigilância da ferida operatória.",
          points: [
            "Confirmar identificação e alergias antes de administrar qualquer medicamento.",
            "Proteger proeminências ósseas e evitar compressão de nervos durante o posicionamento.",
            "Registrar intercorrências, perdas, dispositivos, curativos e informações transferidas para a recuperação anestésica.",
          ],
        },
      ],
      memorize: [
        "Cirurgia segura: entrada, pausa cirúrgica e saída.",
        "No pós-operatório, priorize ABC: via aérea, respiração e circulação.",
        "Contagem, identificação de amostras e comunicação fazem parte da segurança.",
      ],
    },
    questions: [
      { id: "cc1", prompt: "Em qual momento a equipe confirma identidade, procedimento, sítio e consentimento antes da anestesia?", options: ["Na alta hospitalar", "Antes da indução anestésica", "Após a incisão", "Somente na recuperação"], correct: 1, explanation: "Essas confirmações fazem parte da etapa de entrada, antes da indução anestésica." },
      { id: "cc2", prompt: "Qual é a prioridade inicial na chegada do paciente à recuperação pós-anestésica?", options: ["Iniciar dieta", "Avaliar via aérea, respiração e circulação", "Retirar todos os drenos", "Estimular deambulação imediata"], correct: 1, explanation: "A avaliação inicial segue prioridades vitais: via aérea, respiração e circulação." },
      { id: "cc3", prompt: "Antes de o paciente deixar a sala cirúrgica, a equipe deve: ", options: ["Dispensar a contagem de compressas", "Confirmar procedimento, contagem e amostras", "Apagar registros provisórios", "Transferir sem comunicação"], correct: 1, explanation: "A etapa de saída inclui procedimento, contagens, amostras, equipamentos e plano pós-operatório." },
      { id: "cc4", prompt: "Uma ação de enfermagem relacionada ao posicionamento cirúrgico seguro é:", options: ["Ignorar proeminências ósseas", "Proteger pontos de pressão e evitar compressão nervosa", "Manter qualquer posição escolhida inicialmente", "Retirar apoios durante o procedimento"], correct: 1, explanation: "A proteção dos pontos de pressão reduz lesões cutâneas, musculares e nervosas." },
      { id: "cc5", prompt: "A Lista de Verificação de Segurança Cirúrgica deve ser entendida como:", options: ["Substituta da avaliação clínica", "Ferramenta de comunicação e prevenção", "Documento preenchido após a alta", "Responsabilidade exclusiva do cirurgião"], correct: 1, explanation: "A lista promove comunicação multiprofissional e checagem de riscos; não substitui avaliação clínica." },
      { id: "cc6", prompt: "Qual cuidado pertence ao período pré-operatório?", options: ["Confirmar jejum, exames e alergias", "Retirar drenos sem prescrição", "Liberar dieta antes da cirurgia", "Ignorar o consentimento"], correct: 0, explanation: "A conferência do jejum, dos exames, das alergias e dos consentimentos integra o preparo pré-operatório seguro." },
      { id: "cc7", prompt: "Na pausa antes da incisão, a equipe deve confirmar:", options: ["Somente o nome do cirurgião", "Paciente, procedimento, sítio e eventos críticos", "Apenas o horário da alta", "Somente a contagem final"], correct: 1, explanation: "A pausa cirúrgica reúne a equipe para reconfirmar paciente, procedimento, sítio e riscos críticos previstos." },
      { id: "cc8", prompt: "A identificação correta de uma amostra cirúrgica deve ocorrer:", options: ["Antes de sair da sala", "Somente no laboratório", "Após a alta", "Sem participação da equipe"], correct: 0, explanation: "A etapa de saída inclui confirmar a identificação das amostras antes de o paciente deixar a sala." },
      { id: "cc9", prompt: "Qual conjunto favorece a prevenção de infecção cirúrgica?", options: ["Higiene das mãos e técnica asséptica", "Silenciar alarmes e reduzir registros", "Dispensar o preparo do sítio", "Manter materiais sem processamento"], correct: 0, explanation: "Higiene das mãos, técnica asséptica e processamento adequado dos materiais são medidas preventivas essenciais." },
      { id: "cc10", prompt: "No pós-operatório, sangramento e alteração de consciência devem ser:", options: ["Avaliados e comunicados prontamente", "Registrados somente na alta", "Considerados sempre esperados", "Ignorados se houver curativo"], correct: 0, explanation: "Sangramento e alteração de consciência podem indicar complicações e exigem avaliação e comunicação imediatas." },
    ],
    sources: [
      { institution: "Anvisa", title: "Segurança do paciente em serviços de saúde", url: "https://www.gov.br/anvisa/pt-br/assuntos/servicosdesaude/seguranca-do-paciente/seguranca-do-paciente" },
      { institution: "Anvisa", title: "Caderno 4 — Medidas de prevenção de infecção relacionada à assistência à saúde", url: "https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/servicosdesaude/publicacoes/caderno-4-medidas-de-prevencao-de-infeccao-relacionada-a-assistencia-a-saude.pdf" },
    ],
  },
  {
    id: "saude-mulher",
    shortName: "Saúde da mulher",
    name: "Saúde da Mulher",
    professor: "Vanessa",
    classDay: "Terça-feira",
    classOrder: "2º horário — 20:50 às 22:00",
    color: "#d04f7b",
    icon: "woman",
    lesson: saudeMulherLessons[0],
    lessons: saudeMulherLessons,
    questions: saudeMulherQuestions,
    sources: saudeMulherSources,
  },
  {
    id: "uti-adulto",
    shortName: "UTI adulto",
    name: "Assistência em Enfermagem em Terapia Intensiva Adulto",
    professor: "Mateus",
    classDay: "Quarta-feira",
    classOrder: "2º horário — 20:50 às 22:00",
    color: "#2766b0",
    icon: "icu",
    lesson: {
      title: "Aula-base 1 — Avaliação e segurança do paciente crítico",
      description: "Fundamentos da vigilância do paciente adulto grave, prioridades de avaliação, monitorização, prevenção de infecções e cuidados essenciais de enfermagem na UTI.",
      objectives: [
        "Aplicar uma avaliação inicial sistematizada ao paciente crítico.",
        "Relacionar monitorização a decisões e tendências clínicas.",
        "Reconhecer medidas de prevenção de infecções associadas a dispositivos.",
      ],
      sections: [
        {
          title: "1. Avaliação sistematizada",
          content: "Na UTI, a avaliação deve ser contínua e comparativa. O método ABCDE organiza prioridades e ajuda a reconhecer deterioração: via aérea, respiração, circulação, estado neurológico e exposição/exame completo.",
          points: [
            "A: verificar permeabilidade da via aérea e risco de obstrução.",
            "B: observar frequência, esforço, expansão, ausculta, oxigenação e suporte ventilatório.",
            "C: avaliar perfusão, pressão, frequência cardíaca, ritmo, diurese, sangramento e acessos.",
            "D/E: consciência, pupilas, dor, glicemia quando indicada, temperatura, pele e dispositivos.",
          ],
        },
        {
          title: "2. Monitorização e interpretação",
          content: "Um valor isolado raramente explica o quadro inteiro. A enfermagem deve observar tendências, correlacionar números com sinais clínicos, verificar a qualidade do sinal e comunicar mudanças relevantes.",
          points: [
            "Confirmar alarmes no paciente antes de apenas silenciá-los.",
            "Registrar balanço hídrico, perfusão, diurese, nível de consciência e resposta às intervenções.",
            "Medicamentos de alta vigilância exigem identificação, via segura, bomba de infusão quando indicada e dupla checagem conforme protocolo institucional.",
          ],
        },
        {
          title: "3. Prevenção de infecções e complicações",
          content: "Pacientes críticos são expostos a dispositivos invasivos e maior risco de eventos adversos. A prevenção depende de indicação correta, técnica asséptica, manutenção padronizada e retirada do dispositivo assim que deixar de ser necessário.",
          points: [
            "Higienizar as mãos antes e depois do contato e da manipulação de dispositivos.",
            "Aplicar cuidados de prevenção de pneumonia associada à ventilação, infecção de corrente sanguínea e infecção urinária conforme protocolo.",
            "Prevenir lesão por pressão, delirium, quedas, tromboembolismo e perda de dispositivos com avaliação diária e trabalho multiprofissional.",
          ],
        },
      ],
      memorize: [
        "ABCDE organiza prioridades; tendência clínica orienta a vigilância.",
        "Alarme é um sinal para avaliar o paciente, não apenas para silenciar.",
        "Todo dispositivo invasivo deve ter indicação, manutenção segura e revisão diária.",
      ],
    },
    questions: [
      { id: "uti1", prompt: "No ABCDE, a letra A corresponde a:", options: ["Analgesia", "Via aérea", "Ausculta cardíaca", "Alimentação"], correct: 1, explanation: "A primeira prioridade é avaliar e garantir a permeabilidade da via aérea." },
      { id: "uti2", prompt: "Diante de um alarme do monitor, a primeira conduta é:", options: ["Silenciar e ignorar", "Avaliar o paciente e a qualidade do sinal", "Desligar o monitor", "Esperar o próximo plantão"], correct: 1, explanation: "O alarme deve levar à avaliação clínica e à verificação técnica do sinal." },
      { id: "uti3", prompt: "A avaliação da perfusão pertence principalmente à etapa:", options: ["A", "B", "C", "E"], correct: 2, explanation: "Circulação e perfusão são avaliadas na etapa C." },
      { id: "uti4", prompt: "Para reduzir infecção associada a dispositivo invasivo, é essencial:", options: ["Manter o dispositivo sem reavaliação", "Revisar diariamente a necessidade", "Manipular sem higienizar as mãos", "Trocar conexões sem técnica asséptica"], correct: 1, explanation: "A necessidade deve ser revista e o dispositivo removido quando não houver mais indicação." },
      { id: "uti5", prompt: "Sobre a monitorização na UTI, é correto afirmar:", options: ["Um valor isolado sempre define o diagnóstico", "Tendências e sinais clínicos devem ser correlacionados", "A diurese não informa perfusão", "Alarmes não precisam de ajuste"], correct: 1, explanation: "A interpretação segura considera tendência, contexto clínico e qualidade do sinal." },
      { id: "uti6", prompt: "No ABCDE, frequência respiratória, esforço e oxigenação são avaliados em:", options: ["A", "B", "C", "D"], correct: 1, explanation: "A etapa B corresponde à respiração e inclui esforço, expansão, ausculta e oxigenação." },
      { id: "uti7", prompt: "Qual dado ajuda a acompanhar perfusão no paciente crítico?", options: ["Diurese", "Cor dos lençóis", "Horário da visita", "Número do leito"], correct: 0, explanation: "A diurese integra a avaliação de circulação e perfusão e deve ser acompanhada junto aos demais sinais clínicos." },
      { id: "uti8", prompt: "Medicamentos de alta vigilância exigem:", options: ["Identificação e checagem conforme protocolo", "Administração sem registro", "Suspensão de alarmes", "Uso de qualquer via disponível"], correct: 0, explanation: "Identificação, via segura, bomba quando indicada e dupla checagem conforme protocolo reduzem riscos." },
      { id: "uti9", prompt: "Um dispositivo invasivo deve permanecer:", options: ["Enquanto houver indicação clínica", "Até a alta em todos os casos", "Mesmo sem necessidade", "Sem revisão diária"], correct: 0, explanation: "A necessidade deve ser revisada diariamente, com retirada assim que o dispositivo deixar de ser necessário." },
      { id: "uti10", prompt: "Na etapa D do ABCDE, a enfermagem avalia principalmente:", options: ["Estado neurológico", "Via aérea", "Circulação", "Exposição ambiental"], correct: 0, explanation: "D corresponde à avaliação neurológica, incluindo consciência, pupilas e outros achados relevantes." },
    ],
    sources: [
      { institution: "Anvisa", title: "Segurança do paciente em serviços de saúde", url: "https://www.gov.br/anvisa/pt-br/assuntos/servicosdesaude/seguranca-do-paciente/seguranca-do-paciente" },
      { institution: "Anvisa", title: "Caderno 4 — Medidas de prevenção de infecção relacionada à assistência à saúde", url: "https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/servicosdesaude/publicacoes/caderno-4-medidas-de-prevencao-de-infeccao-relacionada-a-assistencia-a-saude.pdf" },
    ],
  },
];

export const studyPlan = [
  { day: "Segunda", first: "Centro cirúrgico", second: "Saúde da mulher", className: "Centro cirúrgico • Prof.ª Carla • 19:00–20:20" },
  { day: "Terça", first: "Saúde da mulher", second: "UTI adulto", className: "Saúde da mulher • Prof.ª Vanessa • 20:50–22:00" },
  { day: "Quarta", first: "UTI adulto", second: "Centro cirúrgico", className: "UTI adulto • Prof. Mateus • 20:50–22:00" },
  { day: "Quinta", first: "Centro cirúrgico", second: "Saúde da mulher", className: "Sem aula informada" },
  { day: "Sexta", first: "UTI adulto", second: "Revisão + questões", className: "Sem aula informada" },
  { day: "Sábado", first: "Simulado das 3 matérias", second: "Revisão dos erros", className: "09:00–11:00 • estudo" },
  { day: "Domingo", first: "Mapas mentais", second: "Planejar a semana", className: "09:00–11:00 • estudo" },
];
