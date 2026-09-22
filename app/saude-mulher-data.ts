import type { Discipline, Question } from "./course-data";

type Lesson = Discipline["lesson"];

export const saudeMulherLessons: Lesson[] = [
  {
    title: "Aula 1 - Plano da disciplina e cuidado integral",
    description: "Apresentação da disciplina e dos eixos que orientam a assistência de enfermagem à saúde da mulher: integralidade, direitos, equidade, humanização e cuidado ao longo de todas as fases da vida.",
    objectives: [
      "Relacionar o cronograma da disciplina às competências esperadas da enfermagem.",
      "Compreender os princípios da atenção integral e humanizada à saúde da mulher.",
      "Reconhecer promoção, prevenção, tratamento e reabilitação como partes do cuidado.",
    ],
    sections: [
      {
        title: "1. Organização da disciplina",
        content: "O plano reúne propedêutica ginecológica, prevenção de cânceres, fisiologia menstrual, contracepção, planejamento reprodutivo e assistência pré-natal. As aulas avançam da consulta ginecológica para o acompanhamento sistematizado da gestante.",
        points: [
          "Atividades práticas, exercícios e casos clínicos também podem compor as avaliações.",
          "A aprendizagem deve integrar conhecimento científico, comunicação, exame físico e registro de enfermagem.",
          "As orientações oficiais complementam, mas não substituem, o protocolo institucional e a supervisão docente.",
        ],
      },
      {
        title: "2. Atenção integral à saúde da mulher",
        content: "A Política Nacional de Atenção Integral à Saúde das Mulheres busca ampliar e humanizar o acesso à promoção, prevenção, assistência e recuperação da saúde, considerando diferenças sociais, culturais e os diversos ciclos de vida.",
        points: [
          "O cuidado não se restringe à gestação ou ao aparelho reprodutor.",
          "Privacidade, autonomia, linguagem respeitosa e ausência de julgamento orientam o acolhimento.",
          "Necessidades clínicas, psicossociais e situações de vulnerabilidade devem ser avaliadas em conjunto.",
        ],
      },
    ],
    memorize: [
      "Integralidade significa cuidar da pessoa, não apenas de uma doença ou fase reprodutiva.",
      "Humanização envolve acolhimento, direitos, autonomia e continuidade do cuidado.",
      "O plano possui 20 aulas e combina ginecologia, prevenção e pré-natal.",
    ],
  },
  {
    title: "Aula 2 - Consulta ginecológica",
    description: "Etapas da consulta de enfermagem em ginecologia, com acolhimento, anamnese dirigida, identificação de riscos, planejamento do cuidado e registro seguro.",
    objectives: [
      "Organizar uma anamnese ginecológica de forma respeitosa e completa.",
      "Identificar queixas e sinais que exigem avaliação ou encaminhamento.",
      "Registrar achados com clareza, objetividade e terminologia adequada.",
    ],
    sections: [
      {
        title: "1. Acolhimento e anamnese",
        content: "A consulta começa pela identificação da necessidade da usuária. Deve-se garantir ambiente privativo, explicar cada etapa, obter consentimento e investigar a história de modo gradual, evitando perguntas acusatórias ou constrangedoras.",
        points: [
          "Investigar queixa principal, início, duração, fatores associados e tratamentos já realizados.",
          "Reunir história menstrual, obstétrica, sexual, contraceptiva, clínica, cirúrgica, familiar e medicamentosa.",
          "Perguntar sobre alergias, possibilidade de gestação, prevenção de IST e situações de violência com escuta protegida.",
        ],
      },
      {
        title: "2. Raciocínio e continuidade do cuidado",
        content: "Os dados subjetivos e objetivos orientam hipóteses, necessidades de enfermagem, exames previstos em protocolo, educação em saúde, encaminhamentos e retorno. A consulta não termina no procedimento: é necessário assegurar seguimento na rede.",
        points: [
          "Dor pélvica intensa, sangramento volumoso, febre, síncope e suspeita de gestação com dor exigem avaliação oportuna.",
          "Registrar achados positivos e negativos relevantes, orientações e plano de acompanhamento.",
          "Respeitar a decisão informada da usuária e checar se ela compreendeu as orientações.",
        ],
      },
    ],
    memorize: [
      "Consulta = acolhimento + anamnese + exame indicado + plano + registro + retorno.",
      "Consentimento e privacidade devem acompanhar todas as etapas.",
      "Sinais de gravidade mudam a prioridade e o encaminhamento.",
    ],
  },
  {
    title: "Aula 3 - Exame físico na saúde da mulher",
    description: "Exame físico geral e direcionado, realizado de forma sistemática, respeitosa e associado à queixa, à história clínica e às necessidades identificadas na consulta.",
    objectives: [
      "Executar a preparação segura para o exame físico.",
      "Distinguir inspeção, palpação, percussão e ausculta conforme a região examinada.",
      "Reconhecer a importância de interpretar achados dentro do contexto clínico.",
    ],
    sections: [
      {
        title: "1. Preparação e avaliação geral",
        content: "Antes do exame, o profissional explica o objetivo, confirma o consentimento, higieniza as mãos, organiza materiais e preserva a exposição corporal apenas ao necessário. A presença de acompanhante deve respeitar a preferência da mulher e as regras do serviço.",
        points: [
          "Avaliar estado geral, consciência, sinais vitais, dor, peso e outros dados pertinentes à queixa.",
          "Observar pele, mucosas, hidratação, edema, perfusão e sinais de anemia ou infecção quando indicados.",
          "Interromper o procedimento se houver dor importante, mal-estar ou retirada do consentimento.",
        ],
      },
      {
        title: "2. Exame direcionado e registro",
        content: "O exame regional pode incluir abdome, mamas, linfonodos e genitais, conforme indicação. A sequência e a técnica devem reduzir desconforto e evitar exposição desnecessária.",
        points: [
          "Comparar simetria e características dos tecidos sem classificar isoladamente um achado como diagnóstico.",
          "Usar linguagem descritiva: localização, dimensão, consistência, mobilidade, dor, secreção e alterações de pele.",
          "Achados suspeitos devem gerar orientação, investigação e encaminhamento em tempo adequado.",
        ],
      },
    ],
    memorize: [
      "Explique, peça consentimento, preserve a privacidade e examine somente o necessário.",
      "O achado físico precisa ser correlacionado com história e sintomas.",
      "Descrição objetiva é diferente de diagnóstico precipitado.",
    ],
  },
  {
    title: "Aula 4 - Exame clínico das mamas",
    description: "Avaliação das mamas e regiões linfonodais, reconhecimento de sinais suspeitos e orientação baseada na estratégia de consciência para a saúde das mamas.",
    objectives: [
      "Organizar inspeção e palpação das mamas e cadeias linfonodais.",
      "Reconhecer alterações que exigem investigação diagnóstica rápida.",
      "Diferenciar consciência das mamas de autoexame rígido e periódico.",
    ],
    sections: [
      {
        title: "1. Técnica clínica",
        content: "Com consentimento e privacidade, a avaliação inclui inspeção estática e dinâmica, palpação sistemática de todo o tecido mamário e pesquisa de linfonodos axilares e supraclaviculares. A técnica deve ser ensinada e supervisionada em laboratório.",
        points: [
          "Observar simetria, contorno, retrações, edema, vermelhidão, lesões e alterações dos mamilos.",
          "Na palpação, descrever localização, tamanho, limites, consistência, mobilidade e sensibilidade.",
          "Descarga papilar espontânea deve ser caracterizada quanto à lateralidade e ao aspecto, sem expressão traumática.",
        ],
      },
      {
        title: "2. Sinais suspeitos e educação em saúde",
        content: "O INCA recomenda que mulheres conheçam o aspecto habitual de suas mamas e procurem avaliação diante de mudanças suspeitas, sem obrigação de seguir uma técnica fixa de autoexame.",
        points: [
          "Nódulo endurecido ou crescente, retração, pele em casca de laranja e descarga sanguinolenta unilateral exigem investigação.",
          "Linfadenopatia axilar endurecida e inflamação que não melhora também são sinais de alerta.",
          "Rastreamento de pessoas assintomáticas e investigação de sintomas são estratégias diferentes.",
        ],
      },
    ],
    memorize: [
      "Exame clínico: inspeção + palpação das mamas + cadeias linfonodais.",
      "Alteração suspeita deve ser investigada, independentemente da idade.",
      "Consciência das mamas não é a obrigação de um autoexame mensal padronizado.",
    ],
  },
  {
    title: "Aula 5 - Exame ginecológico pélvico",
    description: "Preparação, inspeção externa e exame especular, com foco em comunicação, consentimento, segurança, coleta adequada e descrição dos achados.",
    objectives: [
      "Reconhecer os componentes do exame ginecológico pélvico.",
      "Preparar ambiente, materiais e posicionamento de forma segura.",
      "Descrever achados sem julgamento e reconhecer limites profissionais.",
    ],
    sections: [
      {
        title: "1. Antes e durante o exame",
        content: "A indicação deve ser explicada e o consentimento confirmado. O exame não é automático em toda consulta: depende da necessidade clínica, do rastreamento indicado e da concordância da usuária.",
        points: [
          "Oferecer oportunidade para esvaziar a bexiga, organizar iluminação e manter cobertura corporal adequada.",
          "Inspecionar vulva, períneo e região perianal quanto a lesões, secreções, inflamação e outras alterações.",
          "Introduzir o espéculo suavemente, com tamanho adequado, interrompendo se houver dor ou solicitação da mulher.",
        ],
      },
      {
        title: "2. Achados, biossegurança e seguimento",
        content: "No exame especular podem ser observados paredes vaginais, secreções e colo uterino, além de realizada a coleta indicada. O toque bimanual é feito quando houver indicação e habilitação, conforme protocolo e supervisão.",
        points: [
          "Aplicar precauções padrão, técnica limpa ou asséptica conforme o procedimento e descarte correto dos materiais.",
          "Descrever odor, cor, quantidade de secreção, aspecto do colo, sangramento e lesões observadas.",
          "Explicar o que foi encontrado, orientar sinais de alerta e informar como ocorrerá o acesso ao resultado.",
        ],
      },
    ],
    memorize: [
      "O consentimento pode ser retirado a qualquer momento.",
      "Exame especular permite visualizar vagina e colo; toque depende de indicação.",
      "Coleta só é completa quando há identificação, registro e seguimento do resultado.",
    ],
  },
  {
    title: "Aula 6 - Colpocitologia, HPV e rastreamento",
    description: "Fundamentos da coleta citopatológica e atualização sobre a implantação progressiva do teste de DNA-HPV como método primário de rastreamento no SUS.",
    objectives: [
      "Compreender a finalidade do rastreamento do câncer do colo do útero.",
      "Organizar os cuidados essenciais da coleta citopatológica.",
      "Reconhecer a mudança das diretrizes nacionais para o teste de DNA-HPV.",
    ],
    sections: [
      {
        title: "1. Coleta citopatológica",
        content: "A citologia do colo do útero busca identificar alterações celulares. A qualidade depende da identificação correta, visualização do colo, coleta da ectocérvice e endocérvice conforme técnica e acondicionamento adequado da amostra.",
        points: [
          "Confirmar dados, explicar o procedimento e registrar informações clínicas relevantes.",
          "Evitar contaminação e seguir o método de fixação ou meio líquido previsto pelo laboratório.",
          "Resultado alterado não confirma sozinho câncer; exige seguimento conforme a categoria e o fluxo assistencial.",
        ],
      },
      {
        title: "2. Diretriz atual com DNA-HPV",
        content: "Em 2025, o Ministério da Saúde aprovou diretrizes para rastreamento organizado com testes moleculares de DNA-HPV oncogênico. A implantação é progressiva, e o fluxo local define quando o teste molecular, a citologia de triagem ou a citologia convencional serão utilizados.",
        points: [
          "O teste de DNA-HPV tem maior sensibilidade e permite intervalos maiores após resultado negativo no programa organizado.",
          "A citologia permanece relevante na triagem de resultados positivos, no seguimento e em locais ainda em transição.",
          "A enfermagem deve orientar, registrar, controlar resultados e realizar busca ativa quando prevista.",
        ],
      },
    ],
    memorize: [
      "Rastreamento é aplicado a pessoas sem sintomas; sintomas exigem investigação diagnóstica.",
      "Desde 2025, o SUS iniciou a transição para rastreamento primário por DNA-HPV.",
      "Coleta adequada + identificação + seguimento determinam a efetividade do programa.",
    ],
  },
  {
    title: "Aula 7 - Fisiologia do ciclo menstrual",
    description: "Integração entre eixo hipotálamo-hipófise-ovário, fases ovarianas e endometriais e principais mudanças hormonais do ciclo menstrual.",
    objectives: [
      "Relacionar FSH, LH, estrogênio e progesterona às fases do ciclo.",
      "Diferenciar ciclo ovariano e ciclo endometrial.",
      "Compreender por que a duração do ciclo varia entre pessoas e ao longo da vida.",
    ],
    sections: [
      {
        title: "1. Ciclo ovariano",
        content: "O hipotálamo libera GnRH, que estimula a hipófise a secretar FSH e LH. O FSH participa do crescimento folicular; o aumento sustentado do estrogênio precede o pico de LH, que desencadeia a ovulação. Depois, o corpo lúteo produz principalmente progesterona.",
        points: [
          "Fase folicular: recrutamento e maturação do folículo, com aumento de estrogênio.",
          "Ovulação: liberação do oócito após o pico de LH.",
          "Fase lútea: progesterona prepara e mantém o endométrio para possível implantação.",
        ],
      },
      {
        title: "2. Ciclo endometrial",
        content: "O endométrio responde aos hormônios ovarianos. Quando não ocorre gestação, a regressão do corpo lúteo reduz estrogênio e progesterona e leva à descamação endometrial.",
        points: [
          "Fase menstrual: eliminação da camada funcional do endométrio.",
          "Fase proliferativa: ação predominante do estrogênio.",
          "Fase secretora: ação predominante da progesterona após a ovulação.",
        ],
      },
    ],
    memorize: [
      "FSH: crescimento folicular; pico de LH: ovulação.",
      "Estrogênio: proliferação; progesterona: transformação secretora.",
      "Queda de estrogênio e progesterona, sem gestação, favorece a menstruação.",
    ],
  },
  {
    title: "Aula 8 - Distúrbios menstruais",
    description: "Avaliação inicial de alterações na frequência, regularidade, duração e volume do sangramento, além de amenorreia, dor e sinais de gravidade.",
    objectives: [
      "Classificar a queixa menstrual pelas características do sangramento.",
      "Reconhecer causas possíveis sem concluir diagnóstico apenas pelo relato.",
      "Identificar situações que necessitam de avaliação imediata.",
    ],
    sections: [
      {
        title: "1. Caracterização da queixa",
        content: "A avaliação deve registrar padrão anterior, data da última menstruação, frequência, regularidade, duração, volume percebido, presença de coágulos, dor, impacto funcional e sintomas associados.",
        points: [
          "Amenorreia exige sempre considerar possibilidade de gestação antes de outras hipóteses.",
          "Sangramento uterino anormal pode estar relacionado a causas estruturais, ovulatórias, medicamentosas ou sistêmicas.",
          "Diário menstrual ajuda a demonstrar duração, intervalo, sintomas e impacto na rotina.",
        ],
      },
      {
        title: "2. Avaliação de risco",
        content: "O cuidado inicial inclui sinais vitais, avaliação de repercussão hemodinâmica, possibilidade de gestação, anemia, uso de medicamentos e outras condições. A investigação depende da idade, do quadro e do protocolo.",
        points: [
          "Sangramento intenso com tontura, palidez, síncope, taquicardia ou hipotensão é sinal de urgência.",
          "Dor pélvica forte associada a atraso menstrual ou teste positivo requer avaliação rápida.",
          "Persistência, recorrência ou sangramento após a menopausa demandam investigação.",
        ],
      },
    ],
    memorize: [
      "Descreva frequência, regularidade, duração e volume.",
      "Amenorreia: primeiro avalie possibilidade de gestação.",
      "Instabilidade, dor intensa e sangramento pós-menopausa são sinais de alerta.",
    ],
  },
  {
    title: "Aula 9 - Métodos contraceptivos",
    description: "Comparação entre métodos contraceptivos disponíveis, mecanismos gerais, efetividade no uso habitual, benefícios, limitações e necessidade de decisão livre e informada.",
    objectives: [
      "Classificar métodos comportamentais, de barreira, hormonais, intrauterinos e cirúrgicos.",
      "Diferenciar eficácia teórica de efetividade no uso habitual.",
      "Orientar dupla proteção e escolha compartilhada sem coerção.",
    ],
    sections: [
      {
        title: "1. Escolha informada",
        content: "A escolha deve considerar preferência, projeto reprodutivo, condições clínicas, interações, facilidade de uso, disponibilidade e possibilidade de retorno. Nenhum método deve ser imposto.",
        points: [
          "Métodos reversíveis de longa duração incluem DIU e implante subdérmico.",
          "Métodos hormonais podem ser combinados ou conter apenas progestagênio; elegibilidade deve ser avaliada.",
          "Laqueadura e vasectomia são permanentes e seguem critérios legais e consentimento específico.",
        ],
      },
      {
        title: "2. Efetividade e dupla proteção",
        content: "Métodos dependentes de uso correto em cada relação ou todos os dias apresentam maior diferença entre eficácia ideal e uso habitual. A orientação deve incluir como usar, o que fazer diante de falha e quando retornar.",
        points: [
          "Preservativos internos e externos reduzem risco de IST e também previnem gestação.",
          "Outros contraceptivos não protegem contra IST; por isso, pode ser indicada dupla proteção.",
          "Contracepção de emergência é opção após relação desprotegida, não substitui método regular.",
        ],
      },
    ],
    memorize: [
      "Escolha livre + elegibilidade clínica + orientação correta.",
      "DIU e implante são métodos reversíveis de longa duração.",
      "Preservativo é o método contraceptivo que também participa da prevenção de IST.",
    ],
  },
  {
    title: "Aula 10 - Planejamento reprodutivo",
    description: "Direitos reprodutivos, aconselhamento, intenção de engravidar ou evitar gestação, acesso aos métodos e participação de pessoas e casais nas decisões.",
    objectives: [
      "Compreender planejamento reprodutivo como direito e cuidado contínuo.",
      "Organizar aconselhamento centrado nas necessidades da pessoa.",
      "Relacionar projeto reprodutivo à prevenção de IST e ao cuidado pré-concepcional.",
    ],
    sections: [
      {
        title: "1. Direitos e aconselhamento",
        content: "Planejamento reprodutivo inclui decidir se, quando e quantos filhos ter, bem como receber informação e acesso aos meios necessários. O atendimento pode ser individual ou educativo em grupo, mas o acesso ao método não deve depender da participação em grupo.",
        points: [
          "Investigar intenção reprodutiva atual sem pressupor desejo de maternidade.",
          "Apresentar alternativas, benefícios, limitações, efeitos esperados e sinais para retorno.",
          "Respeitar diversidade, confidencialidade e autonomia, inclusive de adolescentes conforme normas aplicáveis.",
        ],
      },
      {
        title: "2. Cuidado pré-concepcional e seguimento",
        content: "Para quem deseja engravidar, o cuidado inclui revisar condições de saúde, medicamentos, vacinas, hábitos, exposição a riscos, saúde mental e necessidade de acompanhamento especializado.",
        points: [
          "Condições crônicas devem estar controladas antes da gestação quando possível.",
          "Prevenção combinada de IST continua relevante independentemente da intenção reprodutiva.",
          "A decisão pode mudar; o serviço deve garantir retorno, troca ou interrupção de método reversível.",
        ],
      },
    ],
    memorize: [
      "Planejamento reprodutivo é um direito, não uma imposição.",
      "Acesso ao método não deve ser condicionado a atividade coletiva.",
      "O projeto reprodutivo pode mudar e precisa ser revisto ao longo do cuidado.",
    ],
  },
  {
    title: "Aula 11 - Exercícios de calendário menstrual",
    description: "Aplicação do método do calendário ou tabelinha para estimar o período fértil, com análise de limitações, variabilidade dos ciclos e risco de falha no uso habitual.",
    objectives: [
      "Calcular uma estimativa do período fértil a partir do histórico dos ciclos.",
      "Explicar por que o método é menos confiável em ciclos irregulares.",
      "Reforçar que o método não protege contra infecções sexualmente transmissíveis.",
    ],
    sections: [
      {
        title: "1. Cálculo tradicional",
        content: "Após registrar vários ciclos, subtrai-se 18 do número de dias do ciclo mais curto para estimar o primeiro dia fértil e 11 do ciclo mais longo para estimar o último. O primeiro dia da menstruação é considerado o dia 1 do ciclo.",
        points: [
          "Exemplo: ciclos entre 27 e 31 dias. Início estimado: 27 - 18 = 9º dia.",
          "Fim estimado: 31 - 11 = 20º dia. A janela calculada seria do 9º ao 20º dia.",
          "O cálculo é uma estimativa; ovulação pode variar por estresse, doença, pós-parto e outras condições.",
        ],
      },
      {
        title: "2. Segurança da orientação",
        content: "O método exige observação contínua, compreensão do ciclo e abstinência ou uso de barreira nos dias férteis. Não é adequado tratar a data estimada como certeza biológica.",
        points: [
          "Ciclos muito irregulares reduzem ainda mais a previsibilidade.",
          "Se evitar gestação é prioridade, devem ser discutidos métodos mais efetivos.",
          "Preservativos continuam indicados para prevenção de IST.",
        ],
      },
    ],
    memorize: [
      "Ciclo mais curto - 18 = primeiro dia fértil estimado.",
      "Ciclo mais longo - 11 = último dia fértil estimado.",
      "Tabelinha estima uma janela; não confirma o dia da ovulação e não previne IST.",
    ],
  },
  {
    title: "Aula 12 - Instalação da prenhez e diagnóstico da gestação",
    description: "Fecundação, implantação e classificação didática dos sinais de presunção, probabilidade e certeza da gravidez, com confirmação adequada e início oportuno do pré-natal.",
    objectives: [
      "Descrever fecundação, transporte do concepto e implantação.",
      "Diferenciar sinais presuntivos, prováveis e de certeza.",
      "Reconhecer os limites do teste de gravidez e a necessidade de avaliação clínica.",
    ],
    sections: [
      {
        title: "1. Da fecundação à implantação",
        content: "A fecundação geralmente ocorre na tuba uterina. Durante as divisões celulares, o concepto segue em direção ao útero e o blastocisto se implanta no endométrio. A produção de hCG sustenta o corpo lúteo no início da gestação.",
        points: [
          "Fecundação e implantação são eventos diferentes e separados por alguns dias.",
          "O hCG pode ser detectado por testes urinários ou séricos após o início da implantação.",
          "Teste positivo indica presença de hCG, mas não determina sozinho localização ou vitalidade da gestação.",
        ],
      },
      {
        title: "2. Evidências clínicas",
        content: "A classificação em presunção, probabilidade e certeza organiza o raciocínio. Sintomas percebidos pela mulher sugerem gestação; achados objetivos aumentam a probabilidade; evidências fetais confirmam.",
        points: [
          "Presunção: amenorreia, náuseas, aumento da frequência urinária e mudanças mamárias.",
          "Probabilidade: alterações uterinas/cervicais e teste de hCG positivo, que ainda exigem correlação clínica.",
          "Certeza: visualização embriofetal por imagem, atividade cardíaca fetal e movimentos fetais identificados pelo examinador.",
        ],
      },
    ],
    memorize: [
      "hCG positivo aumenta a probabilidade, mas não localiza a gestação.",
      "Presunção = sintomas; probabilidade = achados objetivos; certeza = evidência fetal.",
      "Dor forte ou sangramento no início da gestação requer avaliação oportuna.",
    ],
  },
  {
    title: "Aula 13 - Consulta de enfermagem no pré-natal",
    description: "Organização da primeira consulta e dos retornos, estratificação de risco, exames, imunização, educação em saúde e coordenação do cuidado pela equipe.",
    objectives: [
      "Reconhecer os componentes essenciais da primeira consulta pré-natal.",
      "Organizar o acompanhamento segundo idade gestacional e risco.",
      "Identificar sinais de alerta e necessidade de cuidado compartilhado.",
    ],
    sections: [
      {
        title: "1. Primeira consulta",
        content: "O pré-natal deve começar preferencialmente até 12 semanas. A consulta inclui confirmação e história da gestação, antecedentes, avaliação clínica, risco obstétrico, cálculo gestacional, solicitação ou revisão de exames conforme protocolo e elaboração do plano de cuidado.",
        points: [
          "Registrar DUM, gestações anteriores, desfechos, doenças, medicamentos, alergias e contexto psicossocial.",
          "Avaliar pressão arterial, peso, altura, estado nutricional e sinais clínicos pertinentes.",
          "Atualizar Caderneta da Gestante e prontuário, orientar vacinas, exames, alimentação, direitos e maternidade de referência.",
        ],
      },
      {
        title: "2. Consultas subsequentes",
        content: "Os retornos reavaliam queixas e riscos, pressão, peso, altura uterina, batimentos e movimentos fetais conforme idade gestacional, resultados de exames, adesão e resposta às intervenções.",
        points: [
          "Até 28 semanas: geralmente consultas mensais; de 28 a 36, quinzenais; após 36, semanais.",
          "Sangramento, perda de líquido, febre, cefaleia intensa, alteração visual, dor forte ou redução de movimentos fetais exigem avaliação.",
          "Mesmo no alto risco, a atenção primária mantém vínculo e coordena o cuidado com a equipe especializada.",
        ],
      },
    ],
    memorize: [
      "Primeira consulta preferencialmente até 12 semanas.",
      "Não existe alta do pré-natal antes do parto.",
      "Risco pode mudar em qualquer consulta; reavaliar sempre.",
    ],
  },
  {
    title: "Aula 14 - Exame físico da gestante",
    description: "Avaliação clínica geral e obstétrica, com pressão arterial, estado nutricional, edema, altura uterina, situação fetal, batimentos cardíacos e sinais de alerta.",
    objectives: [
      "Organizar o exame físico geral e obstétrico da gestante.",
      "Relacionar técnicas de palpação ao crescimento e à situação fetal.",
      "Registrar achados de modo comparável entre as consultas.",
    ],
    sections: [
      {
        title: "1. Exame geral",
        content: "A consulta deve correlacionar queixas com pressão arterial, pulso, peso, estado geral, mucosas, tireoide quando indicada, mamas, abdome, membros e presença de edema. Medidas isoladas devem ser comparadas com a evolução.",
        points: [
          "Aferir pressão com técnica e manguito adequados e interpretar dentro do contexto clínico.",
          "Acompanhar ganho de peso e estado nutricional sem abordagem estigmatizante.",
          "Pesquisar sinais de anemia, infecção, trombose, hipertensão e outras alterações quando houver indicação.",
        ],
      },
      {
        title: "2. Exame obstétrico",
        content: "A avaliação obstétrica inclui medida da altura uterina, palpação abdominal, ausculta dos batimentos cardíacos fetais e movimentos fetais de acordo com a idade gestacional. As manobras de Leopold ajudam a identificar situação, apresentação, posição e insinuação fetal.",
        points: [
          "A altura uterina deve ser medida de forma padronizada e acompanhada em curva.",
          "Alteração entre altura uterina e idade gestacional exige reavaliação e investigação conforme protocolo.",
          "Técnicas práticas devem ser treinadas em laboratório e executadas sob supervisão.",
        ],
      },
    ],
    memorize: [
      "Exame pré-natal é geral e obstétrico, não apenas abdominal.",
      "Altura uterina é tendência em curva, não um número isolado.",
      "Leopold avalia situação, apresentação, posição e insinuação fetal.",
    ],
  },
  {
    title: "Aula 15 - Data provável do parto",
    description: "Cálculo da data provável do parto pela regra de Näegele, ajustes de calendário e interpretação como estimativa clínica, não como data exata.",
    objectives: [
      "Calcular a DPP a partir de uma DUM confiável.",
      "Realizar corretamente os ajustes de mês e ano.",
      "Reconhecer limitações do cálculo em ciclos irregulares ou DUM desconhecida.",
    ],
    sections: [
      {
        title: "1. Regra de Näegele",
        content: "Usa-se o primeiro dia da última menstruação: somam-se sete dias e subtraem-se três meses, acrescentando um ano quando necessário. Também é possível somar sete dias e nove meses.",
        points: [
          "Exemplo: DUM 13/09/2026. DPP estimada: 20/06/2027.",
          "Se a soma dos dias ultrapassar o mês, transfira os dias excedentes para o mês seguinte.",
          "Registrar sempre a DUM utilizada e se ela é considerada confiável.",
        ],
      },
      {
        title: "2. Limitações e correlação",
        content: "A regra pressupõe ciclo relativamente regular e ovulação próxima ao padrão médio. Quando a DUM é desconhecida ou incerta, a estimativa deve ser correlacionada com ultrassonografia precoce e avaliação clínica.",
        points: [
          "DPP não significa que o parto ocorrerá exatamente naquele dia.",
          "Não se deve alterar repetidamente a datação sem critério técnico.",
          "Diferenças relevantes entre métodos de datação devem ser discutidas com a equipe e documentadas.",
        ],
      },
    ],
    memorize: [
      "DPP: DUM + 7 dias - 3 meses + ajuste do ano.",
      "Use o primeiro dia da última menstruação.",
      "DPP é estimativa; DUM incerta exige correlação com outros dados.",
    ],
  },
  {
    title: "Aula 16 - Idade gestacional",
    description: "Cálculo da idade gestacional em semanas e dias a partir da DUM, correlação com ultrassonografia e importância da datação para decisões do pré-natal.",
    objectives: [
      "Calcular semanas e dias de gestação entre a DUM e a data da consulta.",
      "Converter dias totais em semanas completas e dias restantes.",
      "Reconhecer situações em que a DUM não é confiável.",
    ],
    sections: [
      {
        title: "1. Cálculo pela DUM",
        content: "Conta-se o número de dias desde o primeiro dia da última menstruação até a data avaliada. Divide-se o total por sete: o quociente são as semanas completas e o resto representa os dias.",
        points: [
          "Exemplo: 73 dias transcorridos correspondem a 10 semanas e 3 dias.",
          "A notação correta é 10 semanas e 3 dias, e não 10,3 semanas.",
          "O cálculo deve ser atualizado na data de cada atendimento, mantendo a datação obstétrica definida.",
        ],
      },
      {
        title: "2. DUM incerta e ultrassonografia",
        content: "DUM desconhecida, ciclos irregulares, uso recente de hormônios ou sangramento confundido com menstruação reduzem a confiabilidade. A ultrassonografia precoce oferece melhor estimativa quando a data menstrual é incerta.",
        points: [
          "Correlacionar idade gestacional com exame físico, altura uterina e desenvolvimento fetal.",
          "A datação orienta rastreios, interpretação de crescimento, viabilidade e oportunidade de condutas.",
          "Discordâncias devem ser registradas e avaliadas conforme protocolo obstétrico.",
        ],
      },
    ],
    memorize: [
      "Dias desde a DUM ÷ 7 = semanas completas e dias restantes.",
      "73 dias = 10 semanas e 3 dias.",
      "Ultrassonografia precoce é especialmente útil quando a DUM não é confiável.",
    ],
  },
  {
    title: "Aula 17 - Exercícios de DPP e idade gestacional",
    description: "Resolução guiada de situações-problema para consolidar a regra de Näegele, a contagem de semanas e dias e a avaliação de confiabilidade da DUM.",
    objectives: [
      "Resolver cálculos de DPP com mudanças de mês e ano.",
      "Calcular idade gestacional sem usar representação decimal inadequada.",
      "Justificar quando um cálculo precisa ser confirmado por outros métodos.",
    ],
    sections: [
      {
        title: "1. Roteiro para resolver",
        content: "Primeiro identifique DUM, data da consulta e confiabilidade. Para DPP, aplique Näegele. Para idade gestacional, conte os dias entre as datas e converta em semanas e dias.",
        points: [
          "Escreva as datas completas para evitar confusão entre dia, mês e ano.",
          "Confira anos bissextos e a quantidade de dias de cada mês.",
          "Ao final, faça uma verificação de coerência entre IG e DPP.",
        ],
      },
      {
        title: "2. Erros frequentes em prova",
        content: "As falhas mais comuns são usar o último dia da menstruação, esquecer a mudança do ano, converter dias em número decimal e aceitar DUM duvidosa sem ressalva.",
        points: [
          "Use sempre o primeiro dia da DUM.",
          "O resto da divisão por sete representa dias, não casas decimais.",
          "Se a informação for insuficiente, declare a limitação em vez de inventar uma data.",
        ],
      },
    ],
    memorize: [
      "Identifique dados - calcule - ajuste o calendário - confira coerência.",
      "Semanas e dias não são expressos como decimal.",
      "DUM duvidosa precisa ser sinalizada.",
    ],
  },
  {
    title: "Aula 18 - Alterações e condutas por trimestre",
    description: "Mudanças fisiológicas frequentes na gestação, orientações de conforto e sinais que não devem ser atribuídos automaticamente às adaptações normais.",
    objectives: [
      "Relacionar alterações comuns aos três trimestres.",
      "Propor orientações seguras de autocuidado e acompanhamento.",
      "Diferenciar desconfortos esperados de sinais de alerta.",
    ],
    sections: [
      {
        title: "1. Primeiro e segundo trimestres",
        content: "No primeiro trimestre são comuns náuseas, sonolência, mudanças mamárias e frequência urinária aumentada. No segundo, o crescimento uterino se torna evidente, movimentos fetais passam a ser percebidos e podem surgir dor lombar e desconfortos gastrointestinais.",
        points: [
          "Orientar alimentação fracionada e hidratação para náuseas leves, avaliando perda de peso e sinais de desidratação.",
          "Estimular atividade física segura quando não houver contraindicação e orientar postura corporal.",
          "Sangramento, dor intensa, febre e vômitos persistentes não devem ser normalizados.",
        ],
      },
      {
        title: "2. Terceiro trimestre e sinais de alerta",
        content: "No final da gestação podem ocorrer dispneia leve aos esforços, refluxo, edema discreto, alterações do sono e contrações irregulares. A avaliação precisa excluir complicações antes de classificar uma queixa como fisiológica.",
        points: [
          "Cefaleia intensa, alteração visual, dor epigástrica, sangramento e perda de líquido exigem avaliação.",
          "Redução de movimentos fetais e contrações regulares antes do termo também requerem orientação imediata.",
          "Reforçar plano de parto, maternidade de referência, direitos e sinais de início do trabalho de parto.",
        ],
      },
    ],
    memorize: [
      "Alteração comum só é considerada fisiológica após avaliação do contexto.",
      "Cefaleia intensa + alteração visual é sinal de alerta.",
      "Sangramento, perda de líquido e redução de movimentos fetais exigem avaliação.",
    ],
  },
  {
    title: "Aula 19 - Diagnósticos de enfermagem na gestação",
    description: "Construção do raciocínio diagnóstico a partir da coleta de dados, identificação de necessidades, fatores relacionados, riscos e respostas humanas da gestante.",
    objectives: [
      "Diferenciar diagnóstico médico de diagnóstico de enfermagem.",
      "Relacionar evidências coletadas às necessidades de cuidado.",
      "Priorizar problemas atuais, riscos e promoção da saúde.",
    ],
    sections: [
      {
        title: "1. Do dado ao diagnóstico",
        content: "O diagnóstico de enfermagem representa uma resposta humana ou vulnerabilidade que pode ser acompanhada pela enfermagem. Deve resultar da anamnese e do exame, e não de uma lista escolhida sem evidências.",
        points: [
          "Agrupar dados: queixas, sinais, comportamentos, contexto social, exames e fatores de risco.",
          "Comparar com padrões esperados e confirmar informações contraditórias.",
          "Usar a terminologia padronizada exigida pela instituição ou pela disciplina.",
        ],
      },
      {
        title: "2. Priorização e exemplos de necessidades",
        content: "A prioridade considera ameaça à vida, segurança materno-fetal, sofrimento, capacidade de autocuidado e possibilidade de prevenção. Uma condição médica pode gerar vários diagnósticos de enfermagem.",
        points: [
          "Exemplos de focos: náusea, dor, ansiedade, sono, nutrição, risco de infecção, conhecimento e enfrentamento.",
          "Problemas atuais exigem características observadas; diagnósticos de risco se apoiam em fatores de vulnerabilidade.",
          "Reavaliar após intervenções: o diagnóstico pode melhorar, persistir ou mudar.",
        ],
      },
    ],
    memorize: [
      "Diagnóstico médico identifica doença; diagnóstico de enfermagem identifica resposta humana.",
      "Nenhum diagnóstico deve ser escolhido sem dados que o sustentem.",
      "Priorize segurança materno-fetal e necessidades modificáveis.",
    ],
  },
  {
    title: "Aula 20 - Prescrições de enfermagem",
    description: "Planejamento de intervenções individualizadas, executáveis e avaliáveis para responder aos diagnósticos e riscos identificados durante o cuidado da gestante.",
    objectives: [
      "Transformar diagnósticos e resultados esperados em cuidados de enfermagem.",
      "Redigir prescrições claras, específicas e compatíveis com o contexto.",
      "Avaliar a resposta e revisar o plano de cuidados.",
    ],
    sections: [
      {
        title: "1. Como redigir uma prescrição",
        content: "A prescrição de enfermagem descreve a ação necessária, para quem, como, quando e com que frequência, dentro da competência profissional e dos protocolos. Frases vagas dificultam execução e avaliação.",
        points: [
          "Relacionar cada intervenção a um diagnóstico e a um resultado esperado.",
          "Usar verbos de ação: avaliar, monitorar, orientar, auxiliar, registrar, comunicar e encaminhar.",
          "Definir parâmetros e frequência quando pertinentes, evitando rotinas sem justificativa clínica.",
        ],
      },
      {
        title: "2. Segurança e avaliação",
        content: "Intervenções incluem cuidado direto, monitorização, educação, apoio emocional, prevenção e coordenação da rede. A prescrição deve ser revista quando surgem novos dados ou quando o resultado não é alcançado.",
        points: [
          "Registrar execução, resposta, intercorrências e comunicação com a equipe.",
          "Sinais de alerta exigem escalonamento; orientação domiciliar não substitui avaliação necessária.",
          "Prescrição de enfermagem do plano de cuidados não se confunde com prescrição de medicamentos.",
        ],
      },
    ],
    memorize: [
      "Diagnóstico - resultado esperado - intervenção - avaliação.",
      "Prescrição boa é clara, específica, executável e mensurável.",
      "Se o quadro muda, o plano também deve mudar.",
    ],
  },
];

export const saudeMulherQuestions: Question[] = [
  { id: "sm01a", prompt: "A atenção integral à saúde da mulher deve considerar:", options: ["Somente o sistema reprodutor", "Apenas a gestação", "Necessidades clínicas, direitos e contexto de vida", "Exclusivamente exames"], correct: 2, explanation: "Integralidade reúne promoção, prevenção, assistência, recuperação, direitos e determinantes do contexto de vida." },
  { id: "sm01b", prompt: "Qual atitude expressa cuidado humanizado?", options: ["Decidir sem consultar a usuária", "Garantir privacidade e decisão informada", "Ignorar fatores sociais", "Restringir perguntas à doença"], correct: 1, explanation: "Privacidade, respeito, escuta e participação da usuária são elementos do cuidado humanizado." },
  { id: "sm02a", prompt: "A primeira etapa da consulta ginecológica deve priorizar:", options: ["Acolhimento e identificação da necessidade", "Exame invasivo imediato", "Prescrição automática", "Encerramento rápido"], correct: 0, explanation: "A consulta começa com acolhimento, queixa, história e definição compartilhada das etapas necessárias." },
  { id: "sm02b", prompt: "Qual achado exige avaliação oportuna?", options: ["Dúvida sobre higiene", "Sangramento volumoso com tontura", "Pedido de informação", "Ciclo previamente regular"], correct: 1, explanation: "Sangramento volumoso com sinais de repercussão pode indicar instabilidade e necessita avaliação rápida." },
  { id: "sm03a", prompt: "Antes de iniciar o exame físico, é correto:", options: ["Expor todo o corpo", "Explicar e obter consentimento", "Omitir o objetivo", "Impedir interrupções"], correct: 1, explanation: "A mulher deve compreender o exame e consentir; pode solicitar interrupção a qualquer momento." },
  { id: "sm03b", prompt: "Um registro adequado de nódulo deve incluir:", options: ["Apenas a palavra normal", "Localização, tamanho, consistência e mobilidade", "Opinião sem descrição", "Diagnóstico definitivo sem exame"], correct: 1, explanation: "A descrição objetiva permite seguimento e interpretação clínica apropriada." },
  { id: "sm04a", prompt: "Qual é um sinal mamário suspeito?", options: ["Nódulo endurecido e crescente", "Simetria habitual", "Ausência de dor", "Mamilo sem alteração"], correct: 0, explanation: "Nódulo endurecido ou em crescimento deve ser investigado com prioridade." },
  { id: "sm04b", prompt: "A estratégia de consciência das mamas orienta a mulher a:", options: ["Fazer técnica rígida todo mês", "Conhecer seu padrão habitual e buscar avaliação diante de mudança", "Evitar tocar as mamas", "Esperar o rastreamento mesmo com sintomas"], correct: 1, explanation: "O INCA orienta conhecer as mamas e procurar o serviço diante de alterações suspeitas, sem técnica fixa obrigatória." },
  { id: "sm05a", prompt: "O exame especular permite principalmente:", options: ["Visualizar paredes vaginais e colo uterino", "Medir pressão arterial", "Avaliar batimentos fetais", "Calcular idade gestacional"], correct: 0, explanation: "O espéculo possibilita visualizar vagina e colo e realizar coletas quando indicadas." },
  { id: "sm05b", prompt: "Durante exame pélvico, se a mulher retirar o consentimento, o profissional deve:", options: ["Concluir rapidamente", "Interromper o procedimento", "Ignorar o pedido", "Chamar acompanhante sem autorização"], correct: 1, explanation: "O consentimento é contínuo e pode ser retirado a qualquer momento." },
  { id: "sm06a", prompt: "A principal atualização nacional do rastreamento do colo do útero em 2025 foi:", options: ["Fim de todo rastreamento", "Adoção progressiva do teste de DNA-HPV como método primário", "Proibição da citologia", "Rastreamento somente com ultrassom"], correct: 1, explanation: "As novas diretrizes iniciaram o rastreamento organizado com testes moleculares de DNA-HPV oncogênico." },
  { id: "sm06b", prompt: "Um resultado alterado na citologia:", options: ["Confirma sempre câncer", "Exige seguimento conforme categoria e protocolo", "Pode ser ignorado sem sintomas", "Dispensa registro"], correct: 1, explanation: "A citologia é exame de rastreamento/triagem; resultados alterados exigem seguimento apropriado." },
  { id: "sm07a", prompt: "O pico de qual hormônio desencadeia a ovulação?", options: ["LH", "Progesterona", "Prolactina", "Insulina"], correct: 0, explanation: "O pico de LH desencadeia a ovulação." },
  { id: "sm07b", prompt: "Na fase secretora do endométrio predomina a ação de:", options: ["Testosterona", "Progesterona", "TSH", "Adrenalina"], correct: 1, explanation: "A progesterona produzida pelo corpo lúteo promove transformação secretora do endométrio." },
  { id: "sm08a", prompt: "Diante de amenorreia em pessoa com possibilidade de gestação, a primeira hipótese a avaliar é:", options: ["Gestação", "Menopausa obrigatória", "Infecção urinária", "Hipertensão"], correct: 0, explanation: "A possibilidade de gestação deve ser considerada inicialmente antes de outras causas de amenorreia." },
  { id: "sm08b", prompt: "Sangramento pós-menopausa deve ser:", options: ["Sempre considerado normal", "Investigado", "Tratado sem avaliação", "Ignorado se indolor"], correct: 1, explanation: "Sangramento após a menopausa não deve ser normalizado e requer investigação." },
  { id: "sm09a", prompt: "Qual método também participa da prevenção de IST?", options: ["DIU de cobre", "Preservativo", "Implante", "Pílula combinada"], correct: 1, explanation: "Preservativos internos e externos ajudam a prevenir IST e gestação." },
  { id: "sm09b", prompt: "A escolha do método contraceptivo deve ser:", options: ["Imposta pelo profissional", "Livre, informada e clinicamente avaliada", "Baseada apenas no custo", "Feita sem explicar efeitos"], correct: 1, explanation: "A pessoa deve receber informações e participar livremente da decisão, com avaliação de elegibilidade." },
  { id: "sm10a", prompt: "Planejamento reprodutivo significa:", options: ["Obrigar a ter filhos", "Apoiar decisões sobre ter ou não filhos e quando", "Disponibilizar somente cirurgia", "Excluir adolescentes"], correct: 1, explanation: "Planejamento reprodutivo apoia decisões livres e acesso aos meios necessários." },
  { id: "sm10b", prompt: "O acesso ao método contraceptivo pode ser condicionado à participação em grupo?", options: ["Sim, sempre", "Não, o acesso deve ser amplo e sem essa restrição", "Somente para DIU", "Somente para preservativo"], correct: 1, explanation: "Atividades coletivas podem educar, mas não devem criar barreira ao acesso individual." },
  { id: "sm11a", prompt: "Em ciclos de 27 a 31 dias, o primeiro dia fértil estimado pelo calendário é:", options: ["6º", "9º", "13º", "20º"], correct: 1, explanation: "Ciclo mais curto menos 18: 27 - 18 = 9." },
  { id: "sm11b", prompt: "A principal limitação da tabelinha é:", options: ["Confirmar a ovulação", "Não considerar a variabilidade do ciclo como certeza", "Proteger contra IST", "Ser método de longa duração"], correct: 1, explanation: "O cálculo apenas estima uma janela e perde confiabilidade com variação dos ciclos; também não protege contra IST." },
  { id: "sm12a", prompt: "Qual é um sinal de certeza de gestação?", options: ["Náusea", "Amenorreia", "Teste de hCG positivo isolado", "Atividade cardíaca fetal identificada"], correct: 3, explanation: "Evidência fetal, como atividade cardíaca ou visualização embriofetal, confirma a gestação." },
  { id: "sm12b", prompt: "Um teste de hCG positivo, isoladamente:", options: ["Localiza a gestação", "Confirma vitalidade", "Indica presença hormonal, mas exige correlação clínica", "Exclui gestação ectópica"], correct: 2, explanation: "O hCG indica gestação provável, mas não define sozinho localização ou vitalidade." },
  { id: "sm13a", prompt: "A primeira consulta pré-natal deve ocorrer preferencialmente:", options: ["Até 12 semanas", "Após 28 semanas", "Somente no terceiro trimestre", "No início do trabalho de parto"], correct: 0, explanation: "O início até 12 semanas é indicador de cuidado oportuno." },
  { id: "sm13b", prompt: "Após a 36ª semana, a periodicidade usual das consultas é:", options: ["Semestral", "Mensal", "Quinzenal", "Semanal até o parto"], correct: 3, explanation: "O Ministério da Saúde orienta consultas semanais da 36ª semana até o parto." },
  { id: "sm14a", prompt: "As manobras de Leopold ajudam a avaliar:", options: ["Glicemia", "Situação e apresentação fetal", "Acuidade visual", "Função renal"], correct: 1, explanation: "A palpação obstétrica auxilia na identificação de situação, apresentação, posição e insinuação fetal." },
  { id: "sm14b", prompt: "A altura uterina deve ser interpretada principalmente:", options: ["Como número isolado", "Em curva e relacionada à idade gestacional", "Sem técnica padronizada", "Somente no parto"], correct: 1, explanation: "A tendência da altura uterina e sua relação com a idade gestacional ajudam a acompanhar crescimento." },
  { id: "sm15a", prompt: "Na regra de Näegele, utiliza-se:", options: ["Último dia da menstruação", "Primeiro dia da última menstruação", "Dia do teste positivo", "Dia da primeira consulta"], correct: 1, explanation: "A DPP é calculada a partir do primeiro dia da DUM." },
  { id: "sm15b", prompt: "Para DUM em 13/09/2026, a DPP estimada é:", options: ["20/06/2027", "13/06/2027", "20/09/2027", "06/20/2027"], correct: 0, explanation: "Somam-se 7 dias e subtraem-se 3 meses, com ajuste do ano: 20/06/2027." },
  { id: "sm16a", prompt: "Setenta e três dias de gestação correspondem a:", options: ["7 semanas e 3 dias", "10 semanas e 3 dias", "10,3 semanas", "11 semanas completas"], correct: 1, explanation: "73 dividido por 7 resulta em 10 semanas completas e resto de 3 dias." },
  { id: "sm16b", prompt: "Quando a DUM é incerta, a melhor estimativa adicional costuma vir de:", options: ["Ultrassonografia precoce", "Cor da urina", "Teste de farmácia repetido", "Peso isolado"], correct: 0, explanation: "A ultrassonografia precoce é especialmente útil para datação quando a DUM não é confiável." },
  { id: "sm17a", prompt: "Qual é um erro frequente no cálculo da idade gestacional?", options: ["Contar dias desde a DUM", "Expressar semanas e dias como número decimal", "Dividir dias por sete", "Registrar a data da consulta"], correct: 1, explanation: "10 semanas e 3 dias não devem ser escritos como 10,3 semanas." },
  { id: "sm17b", prompt: "Após calcular IG e DPP, o passo correto é:", options: ["Ignorar a DUM", "Verificar a coerência entre resultados", "Trocar a data sem motivo", "Arredondar para meses"], correct: 1, explanation: "A conferência entre IG, DPP e dados clínicos reduz erros de calendário." },
  { id: "sm18a", prompt: "Qual conjunto representa sinais de alerta na gestação?", options: ["Sono e fome", "Cefaleia intensa e alteração visual", "Aumento abdominal esperado", "Movimentos fetais presentes"], correct: 1, explanation: "Cefaleia intensa e alteração visual podem estar relacionadas a complicações hipertensivas e exigem avaliação." },
  { id: "sm18b", prompt: "Redução de movimentos fetais relatada pela gestante exige:", options: ["Avaliação oportuna", "Aguardar obrigatoriamente a próxima consulta", "Somente hidratação", "Nenhum registro"], correct: 0, explanation: "A redução de movimentos fetais é um sinal que precisa ser avaliado prontamente." },
  { id: "sm19a", prompt: "O diagnóstico de enfermagem descreve principalmente:", options: ["A doença médica", "Respostas humanas e necessidades de cuidado", "Somente exames alterados", "Uma prescrição medicamentosa"], correct: 1, explanation: "O diagnóstico de enfermagem organiza respostas humanas, riscos e necessidades identificadas na avaliação." },
  { id: "sm19b", prompt: "Um diagnóstico de enfermagem deve ser escolhido:", options: ["Sem avaliar a pessoa", "Com base em dados que o sustentem", "Apenas pela preferência do profissional", "De forma igual para todas as gestantes"], correct: 1, explanation: "O raciocínio diagnóstico depende de dados subjetivos e objetivos e deve ser individualizado." },
  { id: "sm20a", prompt: "Uma prescrição de enfermagem bem redigida deve ser:", options: ["Vaga e genérica", "Clara, específica e avaliável", "Sem frequência", "Desligada do diagnóstico"], correct: 1, explanation: "A intervenção precisa ser executável, relacionada ao diagnóstico e passível de avaliação." },
  { id: "sm20b", prompt: "Qual sequência representa o planejamento do cuidado?", options: ["Intervenção sem avaliação", "Diagnóstico, resultado esperado, intervenção e avaliação", "Resultado antes dos dados", "Alta antes do plano"], correct: 1, explanation: "O cuidado sistematizado liga diagnóstico, resultado esperado, intervenções e reavaliação." },
];

export const saudeMulherSources: Discipline["sources"] = [
  { institution: "Ministério da Saúde", title: "Saúde da Mulher — atenção integral", url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-mulher" },
  { institution: "Ministério da Saúde", title: "Saúde Materna e acompanhamento pré-natal", url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-mulher/saude-materna" },
  { institution: "Ministério da Saúde", title: "Política Nacional de Atenção Integral à Saúde das Mulheres", url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-mulher/pnaism" },
  { institution: "Ministério da Saúde", title: "Contracepção", url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-mulher/saude-sexual-e-reprodutiva/contracepcao" },
  { institution: "INCA / Ministério da Saúde", title: "Diretrizes de 2025 para rastreamento do câncer do colo do útero", url: "https://www.gov.br/inca/pt-br/assuntos/noticias/2025/aprovada-diretrizes-brasileiras-para-o-rastreamento-do-cancer-de-colo-do-utero" },
  { institution: "INCA / Ministério da Saúde", title: "Detecção precoce do câncer de mama", url: "https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/controle-do-cancer-de-mama/acoes/deteccao-precoce" },
];
