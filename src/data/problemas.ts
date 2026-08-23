import { Problema } from '../types';
export type { Problema } from '../types';

export const TEMAS_OLISP = [
  "Morfologia",
  "Sintaxe",
  "Semântica & Pragmática",
  "Variação Linguística & Sociolinguística",
  "Etimologia & História da Língua",
  "Figuras de Linguagem & Estilística",
  "Lógica Argumentativa & Discurso",
  "Linguística de Contato & Variedades",
  "Semiótica & Multimodalidade"
] as const;

export type TemaOlisp = typeof TEMAS_OLISP[number];

export const PROBLEMAS_OLISP: Problema[] = [
  // ==========================================
  // VOLUME 1 / BIMESTRE 1 (12 Questões)
  // ==========================================
  {
    id: "b1-p01",
    bimestre: 1,
    livro: "Língua Portuguesa - 1ª Série (Vol 1)",
    titulo: "Cantigas Medievais e o Galego-Português",
    enunciado: "Os primeiros textos literários em língua portuguesa foram produzidos no período medieval (séculos XII a XIV) em galego-português, idioma comum à Galiza e ao norte de Portugal na época. Observe o trecho da cantiga medieval de Martim Codax:\n\n«Ondas do mar de Vigo,\nse vistes meu amigo?\nE ai Deus, se verra cedo!\nOndas do mar levado,\nse vistes meu amado?\nE ai Deus, se verra cedo!»",
    dadosExemplo: [
      "amigo -> namorado / amado",
      "verra -> virá (arcaísmo morfológico)",
      "levado -> agitado / revolto",
      "paralelismo -> repetição estrutural com variação léxica sutil"
    ],
    pergunta: "A partir da leitura do poema medieval e dos traços estruturais da lírica trovadoresca, assinale a alternativa que classifica corretamente o gênero da cantiga e seus elementos formais:",
    alternativas: [
      {
        letra: "A",
        texto: "Trata-se de uma Cantiga de Amor, caracterizada pelo eu lírico masculino em vassalagem amorosa perante uma dama nobre inacessível e refrão religioso."
      },
      {
        letra: "B",
        texto: "Trata-se de uma Cantiga de Amigo, com eu lírico feminino que expressa a saudade do namorado dialogando com elementos da natureza e estrutura paralelística com refrão."
      },
      {
        letra: "C",
        texto: "Trata-se de uma Cantiga de Escárnio, pois utiliza ironia sutil e trocadilhos ambíguos para criticar os marinheiros de Vigo sem citar nomes."
      },
      {
        letra: "D",
        texto: "Trata-se de uma Cantiga de Maldizer, marcada pela ofensa nominal direta e vocabulário agressivo dirigido à figura divina."
      },
      {
        letra: "E",
        texto: "Trata-se de um Poema Épico renascentista, que narra as viagens de descobrimento pelas ondas do mar revolto em versos decassílabos."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: Nas cantigas de amigo, a voz lírica (eu lírico) é sempre feminina, expressando a saudade e a ansiedade pelo retorno do namorado (chamado de 'amigo'), frequentemente tomando elementos da natureza (o mar de Vigo) como confidentes.\nPasso 2: A estrutura poética emprega o paralelismo (estrofes emparelhadas com variação léxica mínima: 'amigo/amado', 'Vigo/levado') e a presença do refrão repetido ao final de cada estrofe ('E ai Deus, se verra cedo!').",
    dificuldade: "facil",
    tema: "Etimologia & História da Língua",
    contemImagem: false
  },
  {
    id: "b1-p02",
    bimestre: 1,
    livro: "Língua Portuguesa - 1ª Série (Vol 1)",
    titulo: "Arcaísmos e Evolução Fonética do Português",
    enunciado: "Durante a evolução do latim para o galego-português e posteriormente para o português moderno, várias palavras sofreram mudanças fonéticas regulares (como a queda de consoantes mediais - síncope de -l- e -n- intervocálicos) e alterações semânticas ao longo dos séculos.",
    dadosExemplo: [
      "Latim: 'genero' -> Galego-português: 'genro' (síncope)",
      "Latim: 'luna' -> Galego-português: 'lũa' -> Português moderno: 'lua' (queda do -n- e desnasalização)",
      "Latim: 'dolore' -> Galego-português: 'dor' (síncope e crase vocálica)"
    ],
    pergunta: "No verso medieval «Ai eu coitada, como vivo em gram cuidado», qual o significado arcaico do termo 'cuidado' e a correta explicação fonético-histórica para o termo 'gram'?",
    alternativas: [
      {
        letra: "A",
        texto: "'Cuidado' significava 'zelo profissional/atenção médica'; 'gram' é um erro ortográfico medieval que perdeu a nasalidade no português moderno."
      },
      {
        letra: "B",
        texto: "'Cuidado' significava 'preocupação, angústia ou sofrimento amoroso'; 'gram' representa a forma reduzida (proclítica) e nasalizada de 'grande', preservada hoje em compostos como 'grão-duque'."
      },
      {
        letra: "C",
        texto: "'Cuidado' expressava 'alegria comedida'; 'gram' deriva do latim 'grammaticus' por meio de apócope do sufixo nominal."
      },
      {
        letra: "D",
        texto: "'Cuidado' indicava 'higiene pessoal'; 'gram' é uma forma verbal no pretérito imperfeito do indicativo arcaico."
      },
      {
        letra: "E",
        texto: "'Cuidado' significava 'esperança de casamento'; 'gram' evoluiu para 'grama' como unidade métrica de peso."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: Semântica histórica: No português medieval, 'cuidado' (do latim 'cogitatus') estava estritamente ligado ao ato de pensar obsessivamente com tristeza ou aflição amorosa.\nPasso 2: Fonologia diacrônica: 'Gram' era a forma proclítica/reduzida de 'grande' com nasalidade vocálica final, preservada em compostos arcaicos e modernos como 'grão-mestre' e 'grã-fino'.",
    dificuldade: "media",
    tema: "Etimologia & História da Língua",
    contemImagem: false
  },
  {
    id: "b1-p03",
    bimestre: 1,
    livro: "Língua Portuguesa - 1ª Série (Vol 1)",
    titulo: "Morfemas e Estrutura das Palavras: Radicais e Afixos",
    enunciado: "A morfologia estuda a estrutura interna das palavras, dividindo-as em unidades mínimas de significado chamadas morfemas (radicais, afixos, desinências, vogal temática). Considere as palavras: 'estudante', 'receituário', 'deslealdade' e 'reflorestamento'.",
    dadosExemplo: [
      "estud- (radical) + -ante (sufixo de agente)",
      "receit- (radical) + -ário (sufixo indicador de coleção/lugar)",
      "des- (prefixo de negação) + leal (radical) + -dade (sufixo formador de substantivo abstrato)",
      "re- (prefixo de repetição) + florest- (radical) + -a- (VT) + -mento (sufixo de ação)"
    ],
    pergunta: "Ao decompor morfologicamente a palavra 'reflorestamento', assinale a alternativa que descreve com exatidão seus constituintes mórficos e classifica seu processo de formação:",
    alternativas: [
      {
        letra: "A",
        texto: "Prefixo 're-', radical nominal 'florest-', vogal temática verbal '-a-' e sufixo 'mento'; formada por derivação parassintética obrigatória."
      },
      {
        letra: "B",
        texto: "Prefixo 're-', radical 'florest-', vogal temática '-a-' e sufixo '-mento'; formada por derivação prefixal e sufixal sucessiva."
      },
      {
        letra: "C",
        texto: "Radical primitivo 'reflor-', sufixo '-esta-' e desinência de modo-tempo '-mento'; formada por composição por aglutinação."
      },
      {
        letra: "D",
        texto: "Prefixo 'ref-', radical 'lorest-' e sufixo aumentativo '-amento'; formada por hibridismo greco-latino."
      },
      {
        letra: "E",
        texto: "Radical único 'refloresta-' e desinência de número-pessoa '-mento'; formada por derivação imprópria."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: A raiz primitiva é o substantivo 'floresta' (radical florest-).\nPasso 2: Ocorre a prefixação 're-' (repetição) gerando o verbo 'reflorestar' (com a vogal temática '-a-').\nPasso 3: Adiciona-se o sufixo nominalizador de ação '-mento', gerando 'reflorestamento'. É derivação prefixal e sufixal sucessiva porque as formas intermediárias 'reflorestar' e 'florestamento' existem autonomamente no vocabulário.",
    dificuldade: "media",
    tema: "Morfologia",
    contemImagem: false
  },
  {
    id: "b1-p04",
    bimestre: 1,
    livro: "Língua Portuguesa - 1ª Série (Vol 1)",
    titulo: "Processos de Formação de Palavras: Parassíntese vs Prefixal e Sufixal",
    enunciado: "Na derivação parassintética (ou parassíntese), o prefixo e o sufixo são agregados simultaneamente ao radical de modo que a palavra não existe na língua apenas com um dos afixos. Já na derivação prefixal e sufixal, a anexação dos afixos é independente.",
    dadosExemplo: [
      "anoitecer -> a- + noit- + -ecer (não existe *anoite nem *noitecer como verbos autônomos: PARASSÍNTESE)",
      "deslealdade -> des- + leal + -dade (existem 'desleal' e 'lealdade': PREFIXAL E SUFIXAL)",
      "envernizar -> en- + verniz + -ar (PARASSÍNTESE)",
      "infelizmente -> in- + feliz + -mente (existem 'infeliz' e 'felizmente': PREFIXAL E SUFIXAL)"
    ],
    pergunta: "Classifique corretamente a sequência das quatro palavras a seguir quanto ao processo derivacional: (1) esfarelar, (2) deslealdade, (3) empobrecer, (4) desvalorização.",
    alternativas: [
      {
        letra: "A",
        texto: "(1) Parassíntese, (2) Prefixal e Sufixal, (3) Parassíntese, (4) Prefixal e Sufixal."
      },
      {
        letra: "B",
        texto: "(1) Prefixal e Sufixal, (2) Parassíntese, (3) Parassíntese, (4) Prefixal e Sufixal."
      },
      {
        letra: "C",
        texto: "(1) Parassíntese, (2) Parassíntese, (3) Prefixal e Sufixal, (4) Parassíntese."
      },
      {
        letra: "D",
        texto: "(1) Prefixal e Sufixal, (2) Prefixal e Sufixal, (3) Prefixal e Sufixal, (4) Parassíntese."
      },
      {
        letra: "E",
        texto: "(1) Derivação Regressiva, (2) Parassíntese, (3) Composição, (4) Derivação Imprópria."
      }
    ],
    respostaCorreta: "A",
    explicacao: "Passo 1: 'esfarelar' vem de farelo (es- + farel- + -ar). Não existe *farelar nem *esfarelo como verbo -> Parassíntese.\nPasso 2: 'deslealdade' vem de leal. Existem 'desleal' e 'lealdade' -> Prefixal e Sufixal.\nPasso 3: 'empobrecer' vem de pobre (em- + pobr- + -ecer). Não existe *empobre nem *pobrecer -> Parassíntese.\nPasso 4: 'desvalorização' vem de valor -> valorizar -> desvalorizar / valorização -> Prefixal e Sufixal.",
    dificuldade: "media",
    tema: "Morfologia",
    contemImagem: false
  },
  {
    id: "b1-p05",
    bimestre: 1,
    livro: "Língua Portuguesa - 1ª Série (Vol 1)",
    titulo: "Neologismos Morfológicos na Cultura Digital",
    enunciado: "Leia o fragmento jornalístico:\n«Vídeo de gatinho resgatado viraliza e gera comoção mundial nas redes sociais. Especialistas analisam como o engajamento e a tuitagem transformam conteúdos anônimos em fenômenos instantâneos.»",
    dadosExemplo: [
      "vírus + -al -> viral (adjetivo primitivo/derivado)",
      "viral + -izar -> viralizar (neologismo verbal sufixal)",
      "tuite / tweet + -agem -> tuitagem (neologismo nominal sufixal)"
    ],
    pergunta: "Sobre a formação morfológica e a produtividade dos vocábulos 'viralizar' e 'tuitagem' no português contemporâneo, é correto afirmar que:",
    alternativas: [
      {
        letra: "A",
        texto: "São neologismos formados por composição por aglutinação, nos quais os termos perderam fonemas originais."
      },
      {
        letra: "B",
        texto: "Ambos constituem neologismos lexicais criados por derivação sufixal, empregando sufixos altamente produtivos da língua (-izar formador de verbos de ação e -agem formador de substantivos de atividade/coletivo)."
      },
      {
        letra: "C",
        texto: "Trata-se de neologismos semânticos, pois os termos já existiam com o mesmo significado nos séculos passados."
      },
      {
        letra: "D",
        texto: "São estrangeirismos puros (xenismos), pois conservam integralmente as regras ortográficas do inglês britânico."
      },
      {
        letra: "E",
        texto: "São exemplos de derivação parassintética obrigatória formados a partir de radicais gregos arcaicos."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: O sufixo '-izar' é aplicado à base adjetival 'viral' para gerar o novo verbo 'viralizar' (derivação sufixal verbal).\nPasso 2: O sufixo '-agem' é anexado à raiz adaptada 'tuit-' para indicar o conjunto de ações ou prática coletiva de postar (derivação sufixal nominal).\nPasso 3: Sendo palavras inéditas no léxico da língua, classificam-se como neologismos lexicais.",
    dificuldade: "facil",
    tema: "Morfologia",
    contemImagem: false
  },
  {
    id: "b1-p06",
    bimestre: 1,
    livro: "Língua Portuguesa - 1ª Série (Vol 1)",
    titulo: "Variação Linguística e Preconceito Linguístico",
    enunciado: "A sociolinguística demonstra que a língua é inerentemente heterogênea, variável e mutável. Não existem variedades linguísticas 'superiores' ou 'inferiores', mas sim variedades de maior ou menor prestígio social conforme o grupo socioeconômico que as utiliza.",
    dadosExemplo: [
      "Variação Diatópica (Regional): 'mandioca' vs 'aipim' vs 'macaxeira'",
      "Variação Diastrática (Social): gírias periféricas, jargões profissionais",
      "Variação Diafásica (Estilística): registro formal em palestra vs informal em família",
      "Variação Diacrônica (Histórica): 'vossa mercê' -> 'vossemecê' -> 'você' -> 'cê'"
    ],
    pergunta: "Sob a perspectiva da ciência linguística moderna, por que construções populares como «nós foi no shopping» não são consideradas 'erros lógicos', mas manifestações de variação linguística?",
    alternativas: [
      {
        letra: "A",
        texto: "Porque o português brasileiro aboliu oficialmente todas as regras de concordância verbal em gramáticas normativas."
      },
      {
        letra: "B",
        texto: "Porque a variante popular possui sistematicidade e regra gramatical interna própria (economia mórfica, marcando a noção de plural apenas no pronome 'nós'), cumprindo com eficácia a função comunicativa sem violar a coerência do pensamento."
      },
      {
        letra: "C",
        texto: "Porque se trata de uma variação diatópica restrita exclusivamente aos estados da região Centro-Oeste."
      },
      {
        letra: "D",
        texto: "Porque na linguística não se reconhece a existência de registros formais e de convenções de prestígio social."
      },
      {
        letra: "E",
        texto: "Porque a frase é uma figura de sintaxe clássica chamada polissíndeto obrigatório."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: Todas as variedades de uma língua possuem gramática interna estruturada e regular.\nPasso 2: Na variedade popular do PB, vigora a regra de economia de traços mórficos: o plural fica marcado de forma suficiente no pronome sujeito ('nós'), tornando a desinência no verbo redundante.\nPasso 3: A qualificação como 'erro' decorre de preconceito social e convenção normativa escolar, não de falha lógica ou comunicativa.",
    dificuldade: "media",
    tema: "Variação Linguística & Sociolinguística",
    contemImagem: false
  },
  {
    id: "b1-p07",
    bimestre: 1,
    livro: "Língua Portuguesa - 1ª Série (Vol 1)",
    titulo: "Sintaxe e Semântica das Locuções Adverbiais",
    enunciado: "As locuções adverbiais são expressões formadas por duas ou mais palavras (frequentemente preposição + substantivo/adjetivo) que desempenham função sintática de adjunto adverbial, expressando circunstâncias de tempo, modo, lugar, causa, etc.",
    dadosExemplo: [
      "às pressas -> circunstância de modo",
      "ao cair da noite -> circunstância de tempo",
      "por causa da tempestade -> circunstância de causa"
    ],
    pergunta: "No período: «O trem partiu às pressas da estação ao cair da noite por causa da tempestade», identifique a classificação semântica respectiva dos termos sublinhados ('às pressas', 'ao cair da noite', 'por causa da tempestade'):",
    alternativas: [
      {
        letra: "A",
        texto: "Tempo, Lugar e Consequência."
      },
      {
        letra: "B",
        texto: "Modo, Tempo e Causa."
      },
      {
        letra: "C",
        texto: "Instrumento, Finalidade e Meio."
      },
      {
        letra: "D",
        texto: "Causa, Modo e Tempo."
      },
      {
        letra: "E",
        texto: "Intensidade, Condição e Concessão."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: 'às pressas' responde 'de que modo o trem partiu?' -> Modo.\nPasso 2: 'ao cair da noite' responde 'em que momento/quando partiu?' -> Tempo.\nPasso 3: 'por causa da tempestade' responde 'por qual motivo/razão partiu?' -> Causa.",
    dificuldade: "facil",
    tema: "Sintaxe",
    contemImagem: false
  },
  {
    id: "b1-p08",
    bimestre: 1,
    livro: "Língua Portuguesa - 1ª Série (Vol 1)",
    titulo: "Regência Verbal: Mudança de Sentido e Preposições",
    enunciado: "A regência verbal trata da relação sintática entre os verbos e seus complementos. Determinados verbos alteram seu sentido e sua transitividade conforme exijam ou dispensem preposições na norma-padrão.",
    dadosExemplo: [
      "Aspirar (VTD) = inalar, respirar ('Aspirou o perfume')",
      "Aspirar (VTI com 'a') = desejar, almejar ('Aspira ao cargo')",
      "Assistir (VTD) = socorrer, ajudar ('Assistiu o ferido')",
      "Assistir (VTI com 'a') = presenciar, ver ('Assistiu ao filme')"
    ],
    pergunta: "Assinale a alternativa que corrige adequadamente os desvios de regência da sentença: «O estudante aspira uma vaga na universidade e assistiu o espetáculo ontem»:",
    alternativas: [
      {
        letra: "A",
        texto: "«O estudante aspira de uma vaga na universidade e assistiu pelo espetáculo ontem»."
      },
      {
        letra: "B",
        texto: "«O estudante aspira a uma vaga na universidade e assistiu ao espetáculo ontem»."
      },
      {
        letra: "C",
        texto: "«O estudante aspira em uma vaga na universidade e assistiu sob o espetáculo ontem»."
      },
      {
        letra: "D",
        texto: "«O estudante aspira com uma vaga na universidade e assistiu para o espetáculo ontem»."
      },
      {
        letra: "E",
        texto: "A frase original já se encontra plenamente correta segundo a norma-padrão."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: 'Aspirar' com sentido de 'desejar/almejar' é Transitivo Indireto e exige a preposição 'a' -> 'aspira a uma vaga'.\nPasso 2: 'Assistir' com sentido de 'ver/presenciar' é Transitivo Indireto e exige a preposição 'a' -> 'assistiu ao espetáculo'.",
    dificuldade: "media",
    tema: "Sintaxe",
    contemImagem: false
  },
  {
    id: "b1-p09",
    bimestre: 1,
    livro: "Língua Portuguesa - 1ª Série (Vol 1)",
    titulo: "Intertextualidade: Paráfrase, Paródia e Alusão",
    enunciado: "Considere o texto canônico de Gonçalves Dias («Minha terra tem palmeiras, / Onde canta o Sabiá») e a recriação modernista de Oswald de Andrade:\n«Minha terra tem palmares / onde gorjeia o mar / os passarinhos daqui / não cantam como os de lá.»",
    dadosExemplo: [
      "Paráfrase -> recriação mantendo a mesma orientação ideológica do original",
      "Paródia -> recriação subversiva, irônica ou crítica que descontrói o sentido original",
      "Alusão -> referência indireta a outro fato ou obra"
    ],
    pergunta: "Qual processo intertextual é empregado por Oswald de Andrade e qual o seu efeito discursivo?",
    alternativas: [
      {
        letra: "A",
        texto: "Paráfrase ufanista, que reafirma a visão romântica de exaltação ingênua da fauna e flora tropicais."
      },
      {
        letra: "B",
        texto: "Paródia crítica, que substitui 'palmeiras' por 'palmares' para trazer à tona a memória histórica da resistência quilombola e questionar o nacionalismo idealizado do Romantismo."
      },
      {
        letra: "C",
        texto: "Metalinguagem pura, cuja única função é explicar a estrutura gramatical das orações relativas."
      },
      {
        letra: "D",
        texto: "Plágio involuntário decorrente da ausência de citações acadêmicas no modernismo."
      },
      {
        letra: "E",
        texto: "Epígrafe formal sem vínculo temático ou ideológico com o poema matriz."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: Ao trocar 'palmeiras' (símbolo romântico da natureza idílica) por 'palmares' (símbolo da luta negra e do conflito social dos quilombos), Oswald subverte a mensagem romântica original.\nPasso 2: Essa recriação irônica e politizada constitui uma paródia modernista.",
    dificuldade: "media",
    tema: "Semântica & Pragmática",
    contemImagem: false
  },
  {
    id: "b1-p10",
    bimestre: 1,
    livro: "Língua Portuguesa - 1ª Série (Vol 1)",
    titulo: "Semiótica: Charges, Cartuns e Leitura Multimodal",
    enunciado: "Tanto a charge quanto o cartum utilizam linguagem verbo-visual (multimodal) e humor gráfico para produzir reflexão crítica. No entanto, diferenciam-se fundamentalmente pelo grau de historicidade e temporalidade.",
    dadosExemplo: [
      "Charge: ligada a notícias imediatas e personagens públicos contextuais",
      "Cartum: ligado a temas existenciais universais e atemporais da condição humana"
    ],
    pergunta: "Assinale a alternativa que define com exatidão o critério que distingue a charge do cartum:",
    alternativas: [
      {
        letra: "A",
        texto: "A charge utiliza apenas texto verbal, enquanto o cartum utiliza exclusivamente imagens mudas."
      },
      {
        letra: "B",
        texto: "A charge está atrelada a uma temporalidade imediata (fato ou personalidade noticiosa pontual da semana), ao passo que o cartum aborda temas humanos universais e atemporais (vícios, tecnologia, relacionamentos), sendo compreensível em qualquer época."
      },
      {
        letra: "C",
        texto: "O cartum é sempre uma peça publicitária de vendas, enquanto a charge é obrigatoriamente científica."
      },
      {
        letra: "D",
        texto: "A charge é publicada apenas na internet, ao passo que o cartum só pode circular em livros didáticos impressos."
      },
      {
        letra: "E",
        texto: "Não há distinção semiótica ou temporal entre ambos, sendo termos perfeitamente sinônimos."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: A charge tem prazo de validade curto se o leitor desconhecer a notícia política da época a que ela se refere (historicidade/temporalidade).\nPasso 2: O cartum não depende de notícias recentes, pois explora comportamentos universais da humanidade.",
    dificuldade: "facil",
    tema: "Semiótica & Multimodalidade",
    contemImagem: true
  },
  {
    id: "b1-p11",
    bimestre: 1,
    livro: "Língua Portuguesa - 1ª Série (Vol 1)",
    titulo: "Poesia Falada (Slam): Prosódia, Métrica Livre e Performance",
    enunciado: "O Poetry Slam (batalha de poesia falada) destaca-se como movimento poético contemporâneo que valoriza o corpo, a voz, a métrica livre e a urgência social das periferias urbanas.",
    dadosExemplo: [
      "Regras do Slam: até 3 minutos, poesias autorais, sem instrumentos musicais",
      "Prosódia: aceleração vocal, rimas internas, repetições fonéticas enfáticas, pausas dramáticas"
    ],
    pergunta: "Quais recursos fonético-prosódicos são fundamentais nas performances de slam para suprir a ausência de acompanhamento musical?",
    alternativas: [
      {
        letra: "A",
        texto: "Uso estrito de métrica decassílaba camoniana e rimas ricas emparelhadas em tom sussurrado monótono."
      },
      {
        letra: "B",
        texto: "Modulação rítmica e de velocidade vocal, rimas internas encadeadas, aliterações enfáticas e pausas dramáticas que constroem a cadência e a contundência da mensagem."
      },
      {
        letra: "C",
        texto: "Eliminação total de recursos rítmicos em favor de uma leitura burocrática em prosa corrida."
      },
      {
        letra: "D",
        texto: "Emprego exclusivo de termos em latim arcaico para elevar o prestígio acadêmico da fala."
      },
      {
        letra: "E",
        texto: "Uso obrigatório dePlayback gravado com batidas eletrônicas sintetizadas."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: A ausência de instrumentos musicais no formato oficial de slam exige que a base rítmica seja criada pela própria prosódia do poeta (acelerações, pausas, volume e aliterações).\nPasso 2: As rimas internas aceleram o andamento e conectam os argumentos de denúncia social.",
    dificuldade: "facil",
    tema: "Variação Linguística & Sociolinguística",
    contemImagem: false
  },
  {
    id: "b1-p12",
    bimestre: 1,
    livro: "Língua Portuguesa - 1ª Série (Vol 1)",
    titulo: "Semântica: Conotação vs Denotação",
    enunciado: "Analise o emprego dos termos nas sentenças a seguir:\nI. «O lenhador quebrou o galho da mangueira.»\nII. «Aquele amigo sempre quebra um galho para mim quando preciso.»\nIII. «A diretoria congelou o reajuste salarial neste semestre.»",
    dadosExemplo: [
      "Denotação -> sentido literal, dicionarizado, unívoco",
      "Conotação -> sentido figurado, metafórico, contextual"
    ],
    pergunta: "Quanto ao uso do sentido denotativo ou conotativo, as sentenças I, II e III classificam-se, respectivamente, como:",
    alternativas: [
      {
        letra: "A",
        texto: "I. Conotativo | II. Denotativo | III. Conotativo"
      },
      {
        letra: "B",
        texto: "I. Denotativo | II. Conotativo | III. Conotativo"
      },
      {
        letra: "C",
        texto: "I. Denotativo | II. Denotativo | III. Conotativo"
      },
      {
        letra: "D",
        texto: "I. Conotativo | II. Conotativo | III. Denotativo"
      },
      {
        letra: "E",
        texto: "I. Denotativo | II. Conotativo | III. Denotativo"
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: Em I, trata-se do pedaço de madeira físico da árvore (literal -> Denotativo).\nPasso 2: Em II, trata-se de expressão idiomática de ajuda/favor (figurado -> Conotativo).\nPasso 3: Em III, 'congelar' significa suspender ou paralisar temporariamente, sem relação com temperatura física (figurado -> Conotativo).",
    dificuldade: "facil",
    tema: "Semântica & Pragmática",
    contemImagem: false
  },

  // ==========================================
  // VOLUME 2 / BIMESTRE 2 (9 Questões)
  // ==========================================
  {
    id: "b2-p01",
    bimestre: 2,
    livro: "Língua Portuguesa - 1ª Série (Vol 2)",
    titulo: "Estrangeirismos: Xenismos vs Empréstimos Linguísticos Adaptados",
    enunciado: "O contato entre idiomas provoca a circulação de palavras de outras línguas. A linguística classifica os estrangeirismos em:\n1. Xenismos (estrangeirismos puros): mantêm a grafia e fonética originais.\n2. Empréstimos adaptados: passam por aportuguesamento ortográfico/fonológico formal.",
    dadosExemplo: [
      "delivery, feedback -> grafia inalterada (xenismos)",
      "xampu (de shampoo), estresse (de stress), leiaute (de layout) -> adaptados"
    ],
    pergunta: "Classifique os quatro termos na publicidade brasileira: (1) feedback, (2) leiaute, (3) outdoor, (4) xampu:",
    alternativas: [
      {
        letra: "A",
        texto: "(1) Xenismo, (2) Empréstimo Adaptado, (3) Xenismo, (4) Empréstimo Adaptado."
      },
      {
        letra: "B",
        texto: "(1) Empréstimo Adaptado, (2) Xenismo, (3) Xenismo, (4) Empréstimo Adaptado."
      },
      {
        letra: "C",
        texto: "(1) Xenismo, (2) Xenismo, (3) Empréstimo Adaptado, (4) Xenismo."
      },
      {
        letra: "D",
        texto: "(1) Empréstimo Adaptado, (2) Empréstimo Adaptado, (3) Xenismo, (4) Xenismo."
      },
      {
        letra: "E",
        texto: "(1) Neologismo Poético, (2) Xenismo, (3) Arcaísmo, (4) Empréstimo Adaptado."
      }
    ],
    respostaCorreta: "A",
    explicacao: "Passo 1: 'feedback' e 'outdoor' preservam a grafia inglesa original sem alterações gráficas -> Xenismos.\nPasso 2: 'leiaute' (de layout) e 'xampu' (de shampoo com dígrafo X) foram formalmente adaptados ao sistema fonético-ortográfico do português -> Empréstimos adaptados.",
    dificuldade: "facil",
    tema: "Morfologia",
    contemImagem: false
  },
  {
    id: "b2-p02",
    bimestre: 2,
    livro: "Língua Portuguesa - 1ª Série (Vol 2)",
    titulo: "Neologismos Lexicais vs Neologismos Semânticos",
    enunciado: "Analise a frase a seguir no contexto da cibercultura contemporânea:\n«O influenciador postou um story e viralizou instantaneamente, mas acabou cancelado pelo público após o comentário polêmico.»",
    dadosExemplo: [
      "Neologismo Lexical -> nova palavra gerada na língua (ex: printar, blogueiro)",
      "Neologismo Semântico -> palavra já existente que recebe um novo significado cultural"
    ],
    pergunta: "Sobre os vocábulos destacados 'viralizou' e 'cancelado', assinale a afirmação correta:",
    alternativas: [
      {
        letra: "A",
        texto: "Ambos são neologismos semânticos de raiz latina arcaica."
      },
      {
        letra: "B",
        texto: "'Viralizou' é um neologismo lexical (criação de um novo verbo derivado de 'viral' + '-izar') e 'cancelado' é um neologismo semântico (o verbo 'cancelar' já existia e ganhou novo sentido de reprovação/boicote coletivo nas redes sociais)."
      },
      {
        letra: "C",
        texto: "'Viralizou' é um arcaísmo medieval e 'cancelado' é uma gíria diatópica restrita ao Rio Grande do Sul."
      },
      {
        letra: "D",
        texto: "Ambos são xenismos puros que não constam em dicionários de língua portuguesa."
      },
      {
        letra: "E",
        texto: "'Viralizou' é um neologismo semântico e 'cancelado' é um neologismo lexical criado no século XIX."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: 'Viralizar' é uma palavra nova criada por sufixação -> Neologismo lexical.\nPasso 2: 'Cancelar' já existia (anular contrato/compromisso), mas ganhou o sentido recente de repúdio público e exclusão moral digital -> Neologismo semântico.",
    dificuldade: "media",
    tema: "Morfologia",
    contemImagem: false
  },
  {
    id: "b2-p03",
    bimestre: 2,
    livro: "Língua Portuguesa - 1ª Série (Vol 2)",
    titulo: "Sintaxe: Orações Subordinadas Adjetivas (Explicativas vs Restritivas)",
    enunciado: "Considere os dois períodos sintáticos:\nI. «Os cientistas, que buscam a cura do câncer, merecem investimentos prioritários.»\nII. «Os cientistas que buscam a cura do câncer merecem investimentos prioritários.»",
    dadosExemplo: [
      "Explicativa (entre vírgulas) -> aplica a propriedade a TODOS os elementos do conjunto",
      "Restritiva (sem vírgulas) -> delimita a propriedade a uma PARCELA específica do conjunto"
    ],
    pergunta: "A diferença sintático-semântica provocada pelo uso das vírgulas nas frases I e II indica que:",
    alternativas: [
      {
        letra: "A",
        texto: "Na frase I, apenas um grupo restrito de cientistas deve receber apoio; na II, todos os cientistas sem exceção devem ser financiados."
      },
      {
        letra: "B",
        texto: "Na frase I (explicativa), afirma-se que todos os cientistas buscam a cura do câncer (generalização); na frase II (restritiva), o apoio restringe-se exclusivamente ao subconjunto de cientistas que atuam nessa pesquisa específica."
      },
      {
        letra: "C",
        texto: "A frase I está gramaticalmente incorreta, pois nunca se isola oração iniciada por pronome relativo."
      },
      {
        letra: "D",
        texto: "Não há qualquer alteração semântica, tratando-se apenas de preferência estilística de respiração do leitor."
      },
      {
        letra: "E",
        texto: "Na frase II ocorre uma oração subordinada substantiva apositiva de valor enfático."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: Com vírgulas (Explicativa), a oração funciona como aposto atributivo de todo o conjunto de cientistas (generalização).\nPasso 2: Sem vírgulas (Restritiva), limita-se o alcance: nem todos buscam a cura, apenas os que buscam merecem o benefício.",
    dificuldade: "media",
    tema: "Sintaxe",
    contemImagem: false
  },
  {
    id: "b2-p04",
    bimestre: 2,
    livro: "Língua Portuguesa - 1ª Série (Vol 2)",
    titulo: "Figuras de Linguagem: Metáfora, Metonímia, Antítese e Paradoxo",
    enunciado: "Classifique as figuras de linguagem presentes nos enunciados a seguir:\n1. «Os bravos soldados defenderam a fronteira com suor e sangue.»\n2. «O silêncio ensurdecedor da sala denunciava a gravidade da situação.»\n3. «Ela era uma leoa defendendo suas crias.»\n4. «Ele trabalhava com vigor de dia e descansava em paz de noite.»",
    dadosExemplo: [
      "Metonímia -> proximidade física/conceitual (suor e sangue por sacrifício/trabalho árduo)",
      "Paradoxo -> contradição lógica interna (silêncio que ensurdece)",
      "Metáfora -> comparação implícita (leoa por protetora e feroz)",
      "Antítese -> oposição sem contradição absurda (dia x noite)"
    ],
    pergunta: "A sequência correta das quatro figuras de linguagem é:",
    alternativas: [
      {
        letra: "A",
        texto: "1. Metáfora, 2. Antítese, 3. Metonímia, 4. Paradoxo."
      },
      {
        letra: "B",
        texto: "1. Metonímia, 2. Paradoxo, 3. Metáfora, 4. Antítese."
      },
      {
        letra: "C",
        texto: "1. Paradoxo, 2. Metonímia, 3. Antítese, 4. Metáfora."
      },
      {
        letra: "D",
        texto: "1. Eufemismo, 2. Pleonasmo, 3. Hipérbole, 4. Anacoluto."
      },
      {
        letra: "E",
        texto: "1. Metonímia, 2. Antítese, 3. Paradoxo, 4. Metáfora."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: 'Suor e sangue' substitui esforço e sofrimento físico por contiguidade física (causa/efeito) -> Metonímia.\nPasso 2: 'Silêncio ensurdecedor' une ideias mutuamente anuláveis gerando choque lógico -> Paradoxo / Oximoro.\nPasso 3: Chamar alguém de leoa é transferência conceitual direta sem conectivo comparativo -> Metáfora.\nPasso 4: 'Dia e noite' representam antônimos que coexistem harmoniosamente no tempo -> Antítese.",
    dificuldade: "media",
    tema: "Figuras de Linguagem & Estilística",
    contemImagem: false
  },
  {
    id: "b2-p05",
    bimestre: 2,
    livro: "Língua Portuguesa - 1ª Série (Vol 2)",
    titulo: "Figuras de Sintaxe e Construção: Elipse, Zeugma e Assíndeto",
    enunciado: "Analise a oração a seguir:\n«Maria comprou o livro de literatura; Pedro, o de matemática.»",
    dadosExemplo: [
      "Elipse -> omissão de termo subentendido que não apareceu explicitamente antes",
      "Zeugma -> tipo especial de elipse no qual o termo omitido já foi citado anteriormente"
    ],
    pergunta: "Qual figura de sintaxe está presente na segunda oração após a vírgula e por quê?",
    alternativas: [
      {
        letra: "A",
        texto: "Polissíndeto, porque há repetição exaustiva de conjunções aditivas."
      },
      {
        letra: "B",
        texto: "Zeugma, porque o verbo 'comprou' foi omitido na segunda oração por já ter sido expresso explicitamente na primeira."
      },
      {
        letra: "C",
        texto: "Hipérbato, porque houve uma inversão brusca da ordem direta com separação de sujeito e predicado."
      },
      {
        letra: "D",
        texto: "Anacoluto, pois o sujeito ficou sintaticamente solto sem predicação na frase."
      },
      {
        letra: "E",
        texto: "Pleonasmo vicioso, pelo uso redundante de termos matemáticos."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: A vírgula após 'Pedro' assinala a omissão do verbo 'comprou'.\nPasso 2: Como o termo omitido já havia sido citado na oração anterior ('Maria comprou...'), essa omissão é classificada tecnicamente como Zeugma.",
    dificuldade: "facil",
    tema: "Sintaxe",
    contemImagem: false
  },
  {
    id: "b2-p06",
    bimestre: 2,
    livro: "Língua Portuguesa - 1ª Série (Vol 2)",
    titulo: "Lógica Argumentativa: Falácias e Tipologia dos Argumentos",
    enunciado: "Em um debate sobre mobilidade urbana, o debatedor A afirma: «Estudos da Organização Mundial da Saúde (OMS) apontam que a redução do limite de velocidade nas vias diminui em 35% os atropelamentos graves.» O debatedor B rebate: «Você defende isso porque você nem carteira de motorista tem e quer que todo mundo ande a passo de tartaruga!»",
    dadosExemplo: [
      "Argumento de Autoridade / Dados -> fundamentado em instituições científicas e dados empíricos",
      "Falácia Ad Hominem -> ataque à pessoa do interlocutor",
      "Falácia do Espantalho -> distorção caricata da proposta do oponente"
    ],
    pergunta: "Classifique o tipo de argumento empregado por A e os desvios falaciosos cometidos por B:",
    alternativas: [
      {
        letra: "A",
        texto: "A utilizou falácia de falsa causa; B utilizou argumento de autoridade legítimo."
      },
      {
        letra: "B",
        texto: "A utilizou um Argumento com Base em Dados Estatísticos e Autoridade Científica (OMS); B cometeu a falácia 'Ad Hominem' (ataque pessoal desqualificador) associada à falácia do 'Espantalho' (caricatura da proposta como 'passo de tartaruga')."
      },
      {
        letra: "C",
        texto: "Ambos os debatedores utilizaram silogismos dedutivos válidos da lógica clássica aristotélica."
      },
      {
        letra: "D",
        texto: "A cometeu falácia Ad Populum; B utilizou comprovação empírica incontestável."
      },
      {
        letra: "E",
        texto: "B utilizou um contra-argumento por analogia perfeitamente rigoroso."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: O debatedor A sustenta sua posição com dados numéricos da autoridade sanitária mundial (OMS).\nPasso 2: O debatedor B desvia do mérito técnico ao atacar a habilidade pessoal de A ('nem tem carteira' -> Ad Hominem) e exagera a proposta ('andar como tartaruga' -> Espantalho).",
    dificuldade: "media",
    tema: "Lógica Argumentativa & Discurso",
    contemImagem: false
  },
  {
    id: "b2-p07",
    bimestre: 2,
    livro: "Língua Portuguesa - 1ª Série (Vol 2)",
    titulo: "Funções da Linguagem de Roman Jakobson",
    enunciado: "Observe o cartaz publicitário institucional de um hemocentro:\n«Doe sangue, salve vidas: faça sua parte hoje mesmo!»",
    dadosExemplo: [
      "Emotiva -> foco no emissor (sentimentos)",
      "Conativa / Apelativa -> foco no receptor (verbos imperativos, convocação à ação)",
      "Referencial -> foco no referente (informação objetiva)",
      "Metalinguística -> código sobre código",
      "Fática -> canal de contato",
      "Poética -> formato estético da mensagem"
    ],
    pergunta: "Qual função da linguagem predomina nesse slogan e por qual razão morfossintática?",
    alternativas: [
      {
        letra: "A",
        texto: "Função Metalinguística, pois o cartaz analisa a etimologia da palavra sangue."
      },
      {
        letra: "B",
        texto: "Função Conativa (ou Apelativa), pois o objetivo central é persuadir e mobilizar o interlocutor/receptor por meio de verbos no modo imperativo ('Doe', 'salve', 'faça') e pronome de segunda pessoa implícito."
      },
      {
        letra: "C",
        texto: "Função Fática, porque o texto serve unicamente para checar se a linha telefônica do hospital está conectada."
      },
      {
        letra: "D",
        texto: "Função Emotiva, pois expressa exclusivamente a dor subjetiva do médico em 1ª pessoa."
      },
      {
        letra: "E",
        texto: "Função Referencial exclusiva, por apresentar relatórios estatísticos densos."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: O foco está direcionado ao receptor da mensagem com a finalidade de influenciar sua conduta cívica.\nPasso 2: Os verbos 'doe', 'salve' e 'faça' no modo imperativo são os marcadores gramaticais típicos da função conativa/apelativa.",
    dificuldade: "facil",
    tema: "Semântica & Pragmática",
    contemImagem: false
  },
  {
    id: "b2-p08",
    bimestre: 2,
    livro: "Língua Portuguesa - 1ª Série (Vol 2)",
    titulo: "Sintaxe: Regras Fundamentais do Uso da Crase",
    enunciado: "Analise o uso do acento grave indicador de crase nas seguintes três sentenças:\n1. «Refiro-me à professora que acabou de entrar.»\n2. «O atleta começou à correr em ritmo acelerado.»\n3. «Escreveu o bilhete à lápis para não manchar o papel.»",
    dadosExemplo: [
      "Crase obrigatória: preposição 'a' exigida por regência + artigo feminino 'a'",
      "Crase proibida: antes de verbos no infinitivo e antes de substantivos masculinos"
    ],
    pergunta: "Está(ão) em conformidade com a norma-padrão da língua portuguesa apenas a(s) sentença(s):",
    alternativas: [
      {
        letra: "A",
        texto: "1 e 2 apenas."
      },
      {
        letra: "B",
        texto: "1 apenas."
      },
      {
        letra: "C",
        texto: "2 e 3 apenas."
      },
      {
        letra: "D",
        texto: "1, 2 e 3."
      },
      {
        letra: "E",
        texto: "3 apenas."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: Na sentença 1, 'referir-se' exige preposição 'a' + artigo feminino 'a' de 'professora' -> 'à professora' (Correto).\nPasso 2: Na sentença 2, 'correr' é verbo no infinitivo; antes de verbo não ocorre crase -> Incorreto.\nPasso 3: Na sentença 3, 'lápis' é palavra masculina ('o lápis'); antes de masculino usa-se apenas a preposição simples 'a' -> Incorreto.",
    dificuldade: "facil",
    tema: "Sintaxe",
    contemImagem: false
  },
  {
    id: "b2-p09",
    bimestre: 2,
    livro: "Língua Portuguesa - 1ª Série (Vol 2)",
    titulo: "Heterônimos de Fernando Pessoa: Estilos e Visões de Mundo",
    enunciado: "O poeta modernista Fernando Pessoa criou personalidades poéticas autônomas com biografias e filosofias próprias (heterônimos). Um deles professava a seguinte visão:\n«O que nós vemos das coisas são as coisas. / Por que veríamos nós uma coisa se houvesse outra? / [...] Pensar é estar doente dos olhos.»",
    dadosExemplo: [
      "Alberto Caeiro: sensorial puro, anti-intelectualista, mestre da natureza direta",
      "Ricardo Reis: clássico, carpe diem, latinista, estoico",
      "Álvaro de Campos: moderno, futurista, das máquinas e da angústia existencial",
      "Ortônimo: o poeta fingidor e racionalizador do sentimento"
    ],
    pergunta: "A postura poética descrita no trecho e a recusa da reflexão metafísica em favor da apreensão sensorial imediata caracterizam a obra de:",
    alternativas: [
      {
        letra: "A",
        texto: "Ricardo Reis, que cultiva a métrica greco-romana e as odes horacianas."
      },
      {
        letra: "B",
        texto: "Alberto Caeiro, considerado o mestre dos outros heterônimos por sua comunhão sensorial direta e despojada com a natureza."
      },
      {
        letra: "C",
        texto: "Álvaro de Campos na sua fase decadista e futurista de exaltação das fábricas."
      },
      {
        letra: "D",
        texto: "Bernardo Soares, autor do Livro do Desassossego em prosa lírica."
      },
      {
        letra: "E",
        texto: "Luís de Camões no período clássico renascentista."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: A ideia de que as coisas não têm sentido oculto ('pensar é estar doente dos olhos') é a tese central de Alberto Caeiro.\nPasso 2: Caeiro rejeita o pensamento filosófico abstrato em favor do contato sensorial visual direto com os elementos naturais.",
    dificuldade: "media",
    tema: "Figuras de Linguagem & Estilística",
    contemImagem: false
  },

  // ==========================================
  // VOLUME 3 / BIMESTRE 3 (10 Questões)
  // ==========================================
  {
    id: "b3-p01",
    bimestre: 3,
    livro: "Língua Portuguesa - 1ª Série (Vol 3)",
    titulo: "Literaturas Africanas em Língua Portuguesa: Variedade e Identidade",
    enunciado: "A historiografia e os estudos pós-coloniais utilizam a expressão 'literaturas africanas de língua portuguesa' no plural (em vez de 'literatura africana no singular').",
    dadosExemplo: [
      "Angola, Moçambique, Cabo Verde, Guiné-Bissau, São Tomé e Príncipe",
      "Coexistência do português com línguas nativas: Quimbundo, Umbundo, Changana, Crioulo"
    ],
    pergunta: "Assinale a alternativa que justifica adequadamente a utilização do plural 'literaturas' e explicita a postura dos autores africanos em relação à língua portuguesa:",
    alternativas: [
      {
        letra: "A",
        texto: "Usa-se o plural porque a África é um único país subdividido em dialetos idênticos."
      },
      {
        letra: "B",
        texto: "Usa-se o plural para reconhecer a multiplicidade cultural, histórica e linguística das diversas nações africanas, cujos autores apropriaram-se criativamente do português, mesclando-o à sintaxe e à oralidade de suas línguas maternas como ato de soberania e identidade."
      },
      {
        letra: "C",
        texto: "O plural é obrigatório apenas porque nenhum escritor africano conseguiu dominar as regras gramaticais de Lisboa."
      },
      {
        letra: "D",
        texto: "Refere-se ao fato de que todos os livros são traduções de obras em língua inglesa."
      },
      {
        letra: "E",
        texto: "Trata-se de uma convenção meramente ortográfica sem impacto interpretativo."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: O plural 'literaturas' combate a visão redutora e eurocêntrica que homogeneíza os países africanos.\nPasso 2: Escritores como Mia Couto e Luandino Vieira transformaram o português em veículo de identidade nacional reinventado a partir da oralidade local.",
    dificuldade: "facil",
    tema: "Linguística de Contato & Variedades",
    contemImagem: false
  },
  {
    id: "b3-p02",
    bimestre: 3,
    livro: "Língua Portuguesa - 1ª Série (Vol 3)",
    titulo: "Marcas de Oralidade e Léxico de Origem Quimbundo em Angola",
    enunciado: "No conto 'O drama de Vavó Tutúri', do angolano Jofre Rocha, observam-se termos do quimbundo e recursos da oralidade:\n«Na cubata, Vavó Tutúri não tem nada pra comer [...]. Velha Tutúri chorou, chorou, chorou, ficou tempo doente.»",
    dadosExemplo: [
      "cubata -> casa tradicional / habitação modesta",
      "musseque -> bairro periférico de Luanda",
      "repetição 'chorou, chorou, chorou' -> aspecto durativo e intensivo da tradição oral"
    ],
    pergunta: "Sobre a função da repetição verbal tripla e do léxico de origem quimbundo no conto, é correto afirmar que:",
    alternativas: [
      {
        letra: "A",
        texto: "Representam erros grosseiros de gagueira do narrador sem valor estético."
      },
      {
        letra: "B",
        texto: "O léxico de origem quimbundo ancora a narrativa na vivência de Luanda e a repetição verbal funciona como recurso semântico de aspecto durativo/intensivo da tradição oral, expressando a profundidade e a extensão no tempo do sofrimento."
      },
      {
        letra: "C",
        texto: "Trata-se de um recurso de rima parassintética comum no Arcadismo brasileiro."
      },
      {
        letra: "D",
        texto: "A repetição é uma falácia do espantalho inserida pelo autor para criticar a protagonista."
      },
      {
        letra: "E",
        texto: "Indica que o conto pertence ao gênero dramático renascentista."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: Em línguas de matriz banta e na narrativa oral africana, a reduplicação verbal serve para indicar ação continuada no tempo ou grande intensidade afetiva.\nPasso 2: Vocábulos como 'cubata' afirmam a identidade sociocultural dos personagens.",
    dificuldade: "media",
    tema: "Linguística de Contato & Variedades",
    contemImagem: false
  },
  {
    id: "b3-p03",
    bimestre: 3,
    livro: "Língua Portuguesa - 1ª Série (Vol 3)",
    titulo: "Neologismos Poéticos e Inovação Estilística em Mia Couto",
    enunciado: "O autor moçambicano Mia Couto forja construções lexicais inovadoras como 'ninharice' (em vez de ninharia), 'tristídão' e 'desentristecer'.",
    dadosExemplo: [
      "ninharia + -ice (de tolice/meninice) -> ninharice",
      "invenção poética de fusão de sufixos"
    ],
    pergunta: "Ao criar o neologismo 'ninharice' para qualificar a briga entre vizinhos, que efeito de sentido e recurso morfológico o autor produziu?",
    alternativas: [
      {
        letra: "A",
        texto: "Utilizou composição por justaposição para demonstrar um ódio irreconciliável."
      },
      {
        letra: "B",
        texto: "Combinou o sentido de coisa banal ('ninharia') ao sufixo lúdico/depreciativo '-ice' (presente em 'tolice', 'burrice'), agregando um tom de infantilidade ridícula e estranhamento poético ao conflito."
      },
      {
        letra: "C",
        texto: "Cometeu um solecismo derivacional que anula o valor literário da obra."
      },
      {
        letra: "D",
        texto: "Criou um xenismo puro adaptado diretamente do mandarim."
      },
      {
        letra: "E",
        texto: "Empregou uma derivação imprópria tornando o termo um advérbio de intensidade."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: O sufixo '-ice' carrega forte conotação de atitude tola, infantil ou caricata.\nPasso 2: Ao fundir essa terminação a 'ninharia', Mia Couto recria poeticamente o idioma para ridicularizar a futilidade da briga.",
    dificuldade: "media",
    tema: "Morfologia",
    contemImagem: false
  },
  {
    id: "b3-p04",
    bimestre: 3,
    livro: "Língua Portuguesa - 1ª Série (Vol 3)",
    titulo: "Sintaxe: Transitividade Verbal e Complementos (OD e OI)",
    enunciado: "Analise a estrutura sintática da oração:\n«O governo enviou mantimentos de emergência aos refugiados da guerra.»",
    dadosExemplo: [
      "Objeto Direto -> sem preposição obrigatória",
      "Objeto Indireto -> com preposição obrigatória regida pelo verbo"
    ],
    pergunta: "Os termos 'mantimentos de emergência' e 'aos refugiados da guerra' exercem, respectivamente, as funções sintáticas de:",
    alternativas: [
      {
        letra: "A",
        texto: "Objeto Indireto e Objeto Direto."
      },
      {
        letra: "B",
        texto: "Objeto Direto e Objeto Indireto."
      },
      {
        letra: "C",
        texto: "Sujeito Composto e Predicativo do Sujeito."
      },
      {
        letra: "D",
        texto: "Adjunto Adnominal e Agente da Passiva."
      },
      {
        letra: "E",
        texto: "Complemento Nominal e Vocativo."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: Quem envia, envia algo (o quê? 'mantimentos de emergência' -> Objeto Direto, sem preposição).\nPasso 2: Envia a alguém (a quem? 'aos refugiados da guerra' -> Objeto Indireto, regido pela preposição 'a'). O verbo é Transitivo Direto e Indireto (bitransitivo).",
    dificuldade: "facil",
    tema: "Sintaxe",
    contemImagem: false
  },
  {
    id: "b3-p05",
    bimestre: 3,
    livro: "Língua Portuguesa - 1ª Série (Vol 3)",
    titulo: "Estrutura do Parágrafo Argumentativo: Tópico Frasal e Desenvolvimento",
    enunciado: "A redação dissertativo-argumentativa organiza seus parágrafos em torno de um núcleo temático fundamental chamado tópico frasal, seguido pelo desenvolvimento fundamentado e fechamento conclusivo.",
    dadosExemplo: [
      "Tópico frasal: declaração nuclear da tese na abertura do parágrafo",
      "Desenvolvimento: evidências, causas, dados e argumentos de sustentação"
    ],
    pergunta: "Assinale a alternativa que descreve a função do tópico frasal e a melhor estratégia para identificá-lo em um parágrafo bem estruturado:",
    alternativas: [
      {
        letra: "A",
        texto: "É uma frase de despedida colocada no final do parágrafo para pedir desculpas ao leitor."
      },
      {
        letra: "B",
        texto: "É a sentença mais abrangente e nuclear (geralmente a primeira do parágrafo), que sintetiza a ideia-guia ou tese principal da qual todas as frases seguintes dependem logicamente como suporte e desdobramento."
      },
      {
        letra: "C",
        texto: "É uma oração subordinada adverbial que serve apenas para contar uma piada desconectada do tema."
      },
      {
        letra: "D",
        texto: "Trata-se de um conjunto de notas de rodapé de caráter facultativo."
      },
      {
        letra: "E",
        texto: "É a assinatura do autor do texto ao término de cada estrofe poética."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: O tópico frasal cumpre a função de guiar o leitor sobre a ideia central defendida no parágrafo.\nPasso 2: Sua localização padrão na abertura assegura a clareza temática antes da exposição de dados e argumentos.",
    dificuldade: "facil",
    tema: "Lógica Argumentativa & Discurso",
    contemImagem: false
  },
  {
    id: "b3-p06",
    bimestre: 3,
    livro: "Língua Portuguesa - 1ª Série (Vol 3)",
    titulo: "A Carta de Pero Vaz de Caminha e o Quinhentismo",
    enunciado: "A Carta de Pero Vaz de Caminha (1500), marco do Quinhentismo e da literatura informativa colonial, declara:\n«Dar-se-á nela tudo por bem das águas que tem, porém o melhor fruto que nela se pode fazer me parece que será salvar esta gente.»",
    dadosExemplo: [
      "Motivação econômica: fertilidade da terra, prospecção de minérios e comércio",
      "Motivação religiosa: expansão da fé católica e catequização das populações originárias"
    ],
    pergunta: "Quais eram os dois pilares ideológicos centrais da expansão marítima portuguesa refletidos explicitamente no texto de Caminha?",
    alternativas: [
      {
        letra: "A",
        texto: "O interesse na preservação ambiental ecológica e na adoção das religiões indígenas pelos portugueses."
      },
      {
        letra: "B",
        texto: "O interesse econômico-mercantil (exploração de riquezas e fertilidade agrícola da terra) articulado à missão religiosa e salvacionista da Contra-Reforma (conversão e catequese dos povos originários)."
      },
      {
        letra: "C",
        texto: "A busca exclusiva por rotas espaciais e a fundação de universidades laicas modernas."
      },
      {
        letra: "D",
        texto: "A renúncia ao comércio marítimo em favor da cavalaria medieval trovadoresca."
      },
      {
        letra: "E",
        texto: "A criação imediata de uma república parlamentarista independente na América."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: A expansão portuguesa unia o capital mercantil à Coroa e à Igreja Católica.\nPasso 2: O texto de Caminha expressa essa dualidade: constatar a riqueza do solo ('tudo dá') e afirmar como melhor fruto a salvação espiritual dos indígenas.",
    dificuldade: "facil",
    tema: "Etimologia & História da Língua",
    contemImagem: false
  },
  {
    id: "b3-p07",
    bimestre: 3,
    livro: "Língua Portuguesa - 1ª Série (Vol 3)",
    titulo: "Carolina Maria de Jesus: Quarto de Despejo e Variação Linguística Popular",
    enunciado: "Em 'Quarto de Despejo' (1960), Carolina Maria de Jesus escreve em seu diário:\n«O que me aborrece é a fome. A fome é a dinamite do corpo humano. [...] Eu escrevia os versos que eu ouvia no rádio e guardava eles.»",
    dadosExemplo: [
      "Metáfora poderosa: fome como dinamite destruidora",
      "Marcas da norma popular coloquial ('guardava eles')",
      "Testemunho autobiográfico e denúncia social contundente"
    ],
    pergunta: "Como a crítica literária contemporânea avalia a linguagem e a legitimidade estética da obra de Carolina Maria de Jesus?",
    alternativas: [
      {
        letra: "A",
        texto: "Como um texto sem valor artístico devido aos desvios da gramática normativa tradicional."
      },
      {
        letra: "B",
        texto: "Como uma voz autêntica e contundente que articula o registro coloquial-popular a metáforas viscerais e poéticas, rompendo o elitismo da literatura brasileira e consolidando um testemunho político indispensável da periferia."
      },
      {
        letra: "C",
        texto: "Como um exemplo exclusivo de paródia cômica do Romantismo do século XIX."
      },
      {
        letra: "D",
        texto: "Como uma resenha puramente técnica sobre índices de inflação econômica."
      },
      {
        letra: "E",
        texto: "Como um texto teatral clássico estruturado exclusivamente por didascálias em versos alexandrinos."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: As marcas populares da escrita de Carolina não anulam sua potência literária, antes enriquecem a densidade documental e estética da obra.\nPasso 2: Metáforas como 'a fome é a dinamite do corpo humano' demonstram uma força lírica e reflexiva marcante.",
    dificuldade: "media",
    tema: "Variação Linguística & Sociolinguística",
    contemImagem: false
  },
  {
    id: "b3-p08",
    bimestre: 3,
    livro: "Língua Portuguesa - 1ª Série (Vol 3)",
    titulo: "Poesia Concreta e Semiótica Visual",
    enunciado: "No poema icônico 'Lixo / Luxo' (1965), de Augusto de Campos, a palavra LUXO é construída no papel pela disposição repetitiva e minúscula da palavra LIXO.",
    dadosExemplo: [
      "Poesia Concreta -> poema-objeto verbivocovisual",
      "Ruptura com o verso linear discursivo tradicional",
      "A espacialização gráfica tipográfica é parte da semântica"
    ],
    pergunta: "De que modo a poesia concreta utiliza a semiótica visual nesse poema para expressar uma crítica à sociedade de consumo?",
    alternativas: [
      {
        letra: "A",
        texto: "Utiliza rimas ricas tradicionais para defender o consumo desenfreado de produtos de luxo."
      },
      {
        letra: "B",
        texto: "Explora a tensão tipográfica e visual entre as palavras para demonstrar visualmente que o 'luxo' e a opulência da sociedade são gerados a partir do 'lixo', da exploração e do descarte material."
      },
      {
        letra: "C",
        texto: "Emprega figuras de sintaxe como o anacoluto para ensinar noções de reciclagem residencial."
      },
      {
        letra: "D",
        texto: "Trata-se de uma pintura abstrata sem qualquer vínculo com o sistema alfabético da língua."
      },
      {
        letra: "E",
        texto: "Consiste em um soneto clássico decassílabo disfarçado graficamente."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: O concretismo integra forma e conteúdo: o significado não reside apenas no som da palavra, mas no suporte gráfico.\nPasso 2: Ver a palavra LUXO sendo fisicamente construída de centenas de pequenos 'lixos' condensa a crítica semiótica da degradação material.",
    dificuldade: "media",
    tema: "Semiótica & Multimodalidade",
    contemImagem: true
  },
  {
    id: "b3-p09",
    bimestre: 3,
    livro: "Língua Portuguesa - 1ª Série (Vol 3)",
    titulo: "Gênero Dramático: Estrutura do Texto Teatral, Rubricas e Polifonia",
    enunciado: "Considere o trecho de um texto teatral:\n«TEORIA: — (Levantando-se bruscamente e caminhando até a janela, em tom contido) Eu continuarei aqui até que tudo se esclareça.»",
    dadosExemplo: [
      "Réplica -> fala proferida pela personagem",
      "Rubrica (ou didascália) -> indicação de movimentação cênica, tom de voz, gestos e ambientação"
    ],
    pergunta: "A passagem entre parênteses «(Levantando-se bruscamente e caminhando até a janela, em tom contido)» exerce no texto dramático a função de:",
    alternativas: [
      {
        letra: "A",
        texto: "Tópico frasal dissertativo que conclui o argumento do narrador onisciente."
      },
      {
        letra: "B",
        texto: "Rubrica (ou didascália), cuja função é orientar o encenador e os atores sobre ações corporais, deslocamento no espaço e entonação vocal."
      },
      {
        letra: "C",
        texto: "Figura de pensamento denominada eufemismo arcaico."
      },
      {
        letra: "D",
        texto: "Falácia lógica ad populum atribuída ao coro grego."
      },
      {
        letra: "E",
        texto: "Refrão paralelístico de uma cantiga lírica trovadoresca."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: Em textos dramáticos, as informações entre parênteses ou em itálico que não fazem parte do diálogo falado são rubricas cênicas.\nPasso 2: Elas orientam a atuação física e o tom psicológico da cena.",
    dificuldade: "facil",
    tema: "Lógica Argumentativa & Discurso",
    contemImagem: false
  },
  {
    id: "b3-p10",
    bimestre: 3,
    livro: "Língua Portuguesa - 1ª Série (Vol 3)",
    titulo: "Resenha Crítica: Avaliação Axiológica e Conectivos Conclusivos",
    enunciado: "Em uma resenha crítica cultural, o autor escreve:\n«Apesar de a primeira metade da temporada sofrer com um ritmo excessivamente moroso, o episódio final compensa o espectador com um clímax emocionante e atuações memoráveis.»",
    dadosExemplo: [
      "Apesar de... -> operador concessivo de argumentação",
      "Estratégia de concessão: reconhece uma limitação pontual para conferir sobriedade, mantendo o balanço global favorável"
    ],
    pergunta: "Qual estratégia argumentativa é articulada pelo conectivo concessivo «Apesar de» nesse trecho da resenha?",
    alternativas: [
      {
        letra: "A",
        texto: "Desqualificação total e boicote comercial irreversível da obra perante os leitores."
      },
      {
        letra: "B",
        texto: "Estratégia de concessão argumentativa, que reconhece uma falha real inicial para transmitir imparcialidade e credibilidade, mas subordina esse defeito à força do clímax final, preservando a avaliação global positiva da obra."
      },
      {
        letra: "C",
        texto: "Ataque ad hominem aos atores e diretores do espetáculo."
      },
      {
        letra: "D",
        texto: "Eliminação de qualquer juízo de valor em favor de uma sinopse meramente burocrática."
      },
      {
        letra: "E",
        texto: "Construção de uma oração adjetiva explicativa de sentido paradoxal."
      }
    ],
    respostaCorreta: "B",
    explicacao: "Passo 1: A concessão argumentativa ('Apesar de...') impede que a resenha soe panfletária ou excessivamente complacente.\nPasso 2: Ao posicionar o elogio culminante na oração principal ('o episódio final compensa...'), a impressão predominante na mente do leitor é favorável ao produto cultural.",
    dificuldade: "media",
    tema: "Lógica Argumentativa & Discurso",
    contemImagem: false
  }
];
