export interface Problema {
  id: string;
  bimestre: 1 | 2 | 3;
  livro: string;
  titulo: string;
  enunciado: string;
  dadosExemplo?: string[];
  pergunta: string;
  resposta: string;
  explicacao: string;
  dificuldade: "facil" | "media" | "dificil";
  tema: string;
  contemImagem?: boolean;
}

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
  {
    "id": "b1-p01",
    "bimestre": 1,
    "livro": "Língua Portuguesa - 1ª Série (Vol 1)",
    "titulo": "Cantigas Medievais e o Galego-Português",
    "enunciado": "Os primeiros textos literários em língua portuguesa foram produzidos no período medieval (séculos XII a XIV) em galego-português, idioma comum à Galiza e ao norte de Portugal na época. Observe o trecho da cantiga medieval de Martim Codax:\n\n«Ondas do mar de Vigo,\nse vistes meu amigo?\nE ai Deus, se verra cedo!\nOndas do mar levado,\nse vistes meu amado?\nE ai Deus, se verra cedo!»",
    "dadosExemplo": [
      "amigo -> namorado / amado",
      "verra -> virá (arcaísmo morfológico)",
      "levado -> agitado / revolto",
      "paralelismo -> repetição estrutural com variação léxica sutil"
    ],
    "pergunta": "Identifique o gênero lírico medieval a que pertence este poema (cantiga de amor ou cantiga de amigo) e aponte dois traços linguístico-estruturais característicos presentes no texto.",
    "resposta": "Trata-se de uma Cantiga de Amigo. Os dois traços característicos são: 1) O eu lírico feminino que lamenta a ausência do seu amado ('meu amigo') dialogando com elementos da natureza ('ondas do mar de Vigo'); 2) O paralelismo estrófico com refrão repetido ao final de cada estrofe ('E ai Deus, se verra cedo!').",
    "explicacao": "Passo 1: Nas cantigas de amigo, a voz lírica (eu lírico) é sempre feminina, expressando a saudade e a ansiedade pelo retorno do namorado (chamado de 'amigo'), frequentemente tomando elementos da natureza como confidentes.\nPasso 2: A estrutura poética emprega o paralelismo (estrofes emparelhadas com ligeira variação léxica: 'amigo/amado', 'Vigo/levado') e a presença do refrão repetido ao final de cada estrofe, recurso originário da tradição oral cantada.",
    "dificuldade": "facil",
    "tema": "Etimologia & História da Língua",
    "contemImagem": false
  },
  {
    "id": "b1-p02",
    "bimestre": 1,
    "livro": "Língua Portuguesa - 1ª Série (Vol 1)",
    "titulo": "Arcaísmos e Evolução Fonética do Português",
    "enunciado": "Durante a evolução do latim para o galego-português e posteriormente para o português moderno, várias palavras sofreram mudanças fonéticas regulares (como a queda de consoantes mediais - síncope de -l- e -n- intervocálicos) e alterações semânticas.",
    "dadosExemplo": [
      "Latim: 'genero' -> Galego-português: 'genro' (síncope)",
      "Latim: 'luna' -> Galego-português: 'lũa' -> Português moderno: 'lua' (queda do -n- e desnasalização)",
      "Latim: 'dolore' -> Galego-português: 'dor' (síncope e crase vocálica)"
    ],
    "pergunta": "No texto medieval 'Ai eu coitada, como vivo em gram cuidado', qual o significado arcaico do termo 'cuidado' e qual processo fonético explica a evolução da forma arcaica 'gram' para a forma moderna 'grão/grande'?",
    "resposta": "'Cuidado' no contexto medieval significava 'preocupação', 'aflição' ou 'angústia amorosa'. A evolução de 'gram' envolveu a conservação da nasalidade e sua posterior evolução para a forma apocopada 'grão' ou a forma plena 'grande'.",
    "explicacao": "Passo 1: Semântica histórica: No português medieval, 'cuidado' (do latim 'cogitatus') estava estritamente ligado ao ato de pensar obsessivamente com tristeza ou preocupação amorosa.\nPasso 2: Fonologia diacrônica: 'Gram' era a forma proclítica/reduzida de 'grande' com nasalidade vocálica final, que deu origem a palavras compostas como 'grão-duque' e 'grã-fino'.",
    "dificuldade": "media",
    "tema": "Etimologia & História da Língua",
    "contemImagem": false
  },
  {
    "id": "b1-p03",
    "bimestre": 1,
    "livro": "Língua Portuguesa - 1ª Série (Vol 1)",
    "titulo": "Morfemas e Estrutura das Palavras: Radicais e Afixos",
    "enunciado": "A morfologia estuda a estrutura interna das palavras, dividindo-as em unidades mínimas de significado chamadas morfemas (radicais, afixos, desinências, vogal temática). Considere as palavras: 'estudante', 'receituário', 'deslealdade' e 'reflorestamento'.",
    "dadosExemplo": [
      "estud- (radical) + -ante (sufixo de agente)",
      "receit- (radical) + -ário (sufixo indicador de coleção/lugar)",
      "des- (prefixo de negação) + leal (radical) + -dade (sufixo formador de substantivo abstrato)",
      "re- (prefixo de repetição) + florest- (radical) + -a- (VT) + -mento (sufixo de ação)"
    ],
    "pergunta": "Analise a palavra 'reflorestamento': identifique todos os seus morfemas constituintes e classifique o processo de formação de palavras ocorrido.",
    "resposta": "Morfemas: 're-' (prefixo de repetição/reiteração), 'florest-' (radical nominal ligado a floresta), '-a-' (vogal temática verbal do verbo reflorestar), '-mento' (sufixo formador de substantivo de ação). Processo: Derivação prefixal e sufixal sucessiva.",
    "explicacao": "Passo 1: A palavra base é o substantivo primitivo 'floresta' (radical florest-).\nPasso 2: Forma-se primeiro o verbo 'florestar' / 'reflorestar' pela adição do prefixo 're-'.\nPasso 3: A partir do verbo 'reflorestar', adiciona-se o sufixo nominalizador '-mento', gerando 'reflorestamento'. Trata-se de derivação prefixal e sufixal (pois existem as formas intermediárias 'florestamento' e 'reflorestar', não sendo parassíntese obrigatória).",
    "dificuldade": "media",
    "tema": "Morfologia",
    "contemImagem": false
  },
  {
    "id": "b1-p04",
    "bimestre": 1,
    "livro": "Língua Portuguesa - 1ª Série (Vol 1)",
    "titulo": "Processos de Formação de Palavras: Parassíntese vs Prefixal e Sufixal",
    "enunciado": "Na derivação parassintética (ou parassíntese), o prefixo e o sufixo são agregados simultaneamente ao radical de modo que a palavra não existe na língua apenas com um dos afixos. Já na derivação prefixal e sufixal, a agregação é independente.",
    "dadosExemplo": [
      "anoitecer -> a- + noit- + -ecer (não existe *anoite nem *noitecer como verbos autônomos: PARASSÍNTESE)",
      "deslealdade -> des- + leal + -dade (existem 'desleal' e 'lealdade': PREFIXAL E SUFIXAL)",
      "envernizar -> en- + verniz + -ar (PARASSÍNTESE)",
      "infelizmente -> in- + feliz + -mente (existem 'infeliz' e 'felizmente': PREFIXAL E SUFIXAL)"
    ],
    "pergunta": "Classifique as seguintes quatro palavras quanto ao processo de derivação: (1) esfarelar, (2) deslealdade, (3) empobrecer, (4) desvalorização.",
    "resposta": "(1) esfarelar: Derivação parassintética; (2) deslealdade: Derivação prefixal e sufixal; (3) empobrecer: Derivação parassintética; (4) desvalorização: Derivação prefixal e sufixal.",
    "explicacao": "Passo 1: 'esfarelar' vem de farelo (es- + farel- + -ar). Não existe o verbo *farelar nem *esfarelo como forma verbal primitiva; a junção de es- e -ar é simultânea -> Parassíntese.\nPasso 2: 'deslealdade' vem de leal. Existe 'desleal' e existe 'lealdade' -> Prefixal e sufixal.\nPasso 3: 'empobrecer' vem de pobre (em- + pobr- + -ecer). Não existe *empobre nem *pobrecer -> Parassíntese.\nPasso 4: 'desvalorização' vem de valor -> valorizar -> valorização / desvalorizar -> desvalorização. Os afixos podem ser decompostos em etapas autônomas -> Prefixal e sufixal.",
    "dificuldade": "media",
    "tema": "Morfologia",
    "contemImagem": false
  },
  {
    "id": "b1-p05",
    "bimestre": 1,
    "livro": "Língua Portuguesa - 1ª Série (Vol 1)",
    "titulo": "Neologismos Morfológicos na Cultura Digital",
    "enunciado": "Leia o fragmento jornalístico:\n'Vídeo de gatinho resgatado viraliza e gera comoção mundial nas redes sociais. Especialistas analisam como o engajamento e a tuitagem transformam conteúdos anônimos em fenômenos instantâneos.'\n\nAnalise o verbo 'viralizar' e o substantivo 'tuitagem'.",
    "dadosExemplo": [
      "vírus + -al -> viral (adjetivo derivado)",
      "viral + -izar -> viralizar (neologismo verbal sufixal)",
      "tuite / tweet + -agem -> tuitagem (neologismo nominal sufixal)"
    ],
    "pergunta": "Como foram formadas as palavras 'viralizar' e 'tuitagem' no português contemporâneo e qual o papel dos sufixos '-izar' e '-agem' nesses processos?",
    "resposta": "'Viralizar' foi formada por derivação sufixal a partir do adjetivo 'viral' com o sufixo verbalizador '-izar' (que indica a ação de tornar-se viral). 'Tuitagem' foi formada por derivação sufixal a partir da raiz adaptada 'tuit-' com o sufixo nominalizador '-agem' (que indica a ação coletiva ou conjunto de publicações no Twitter/X).",
    "explicacao": "Passo 1: O sufixo grego/latino '-izar' é altamente produtivo em português moderno para converter adjetivos e substantivos em verbos transitivos ou intransitivos de ação (ex: canalizar, modernizar, viralizar).\nPasso 2: O sufixo '-agem' junta-se a temas nominais ou verbais para formar substantivos que expressam ato, atividade ou coletivo (ex: lavagem, arbitragem, tuitagem).\nPasso 3: Ambos constituem neologismos do léxico digital integrados à morfologia padrão do português.",
    "dificuldade": "facil",
    "tema": "Morfologia",
    "contemImagem": false
  },
  {
    "id": "b1-p06",
    "bimestre": 1,
    "livro": "Língua Portuguesa - 1ª Série (Vol 1)",
    "titulo": "Variação Linguística e Preconceito Linguístico",
    "enunciado": "A sociolinguística demonstra que a língua é inerentemente heterogênea e variável. Não existem variedades 'superiores' ou 'inferiores', mas sim variedades de maior ou menor prestígio social conforme a classe que as utiliza. O preconceito linguístico surge quando se atribui juízo de valor moral ou intelectual a uma variante não padrão.",
    "dadosExemplo": [
      "Variação Diatópica (Regional): 'mandioca' (Sudeste) vs 'aipim' (RJ/Sul) vs 'macaxeira' (Nordeste)",
      "Variação Diastrática (Social): gírias periféricas, jargões profissionais (médicos, advogados)",
      "Variação Diafásica (Estilística): registro formal vs registro informal/coloquial",
      "Variação Diacrônica (Histórica): 'vossa mercê' -> 'vossemecê' -> 'você' -> 'cê'"
    ],
    "pergunta": "Diferencie a variação diatópica da diastrática e explique por que a frase 'nós foi no shopping' não deve ser classificada pela linguística como 'erro lógico', mas como variação da norma culta padrão.",
    "resposta": "A variação diatópica relaciona-se à localização geográfica dos falantes (regionalismos), enquanto a diastrática relaciona-se aos grupos sociais, grau de escolaridade e faixa etária. A linguística considera 'nós foi' uma manifestação sistemática com regra gramatical própria da norma popular (marcação de plural restrita ao pronome, simplificando a concordância verbal), comunicativamente eficiente e compreensível, diferenciando-se da convenção social da norma culta.",
    "explicacao": "Passo 1: Todas as variedades linguísticas possuem gramática e lógica interna estruturada.\nPasso 2: Na variedade popular do português brasileiro, vigora a regra de concordância por economia mórfica: o plural é marcado no pronome inicial ('nós'), tornando redundante a marcação no verbo ('foi').\nPasso 3: A rotulação de 'erro' é de natureza social/normativa, não científica ou lógica.",
    "dificuldade": "media",
    "tema": "Variação Linguística & Sociolinguística",
    "contemImagem": false
  },
  {
    "id": "b1-p07",
    "bimestre": 1,
    "livro": "Língua Portuguesa - 1ª Série (Vol 1)",
    "titulo": "Sintaxe e Semântica das Locuções Adverbiais",
    "enunciado": "As locuções adverbiais são expressões compostas por duas ou mais palavras (geralmente preposição + substantivo/adjetivo) que exercem conjuntamente a função sintática de adjunto adverbial, indicando circunstâncias como tempo, modo, lugar, causa, intensidade ou dúvida.",
    "dadosExemplo": [
      "às pressas -> modo",
      "com certeza -> afirmação",
      "por causa da chuva -> causa",
      "ao cair da noite -> tempo",
      "em silêncio -> modo"
    ],
    "pergunta": "No período 'O trem partiu às pressas da estação ao cair da noite por causa da tempestade', identifique três locuções adverbiais distintas e classifique a circunstância semântica expressa por cada uma.",
    "resposta": "1) 'às pressas' -> circunstância de MODO; 2) 'ao cair da noite' -> circunstância de TEMPO; 3) 'por causa da tempestade' -> circunstância de CAUSA.",
    "explicacao": "Passo 1: 'às pressas' responde à pergunta 'de que maneira o trem partiu?' -> Modo.\nPasso 2: 'ao cair da noite' responde à pergunta 'quando o trem partiu?' -> Tempo.\nPasso 3: 'por causa da tempestade' responde à pergunta 'por qual motivo o trem partiu?' -> Causa.",
    "dificuldade": "facil",
    "tema": "Sintaxe",
    "contemImagem": false
  },
  {
    "id": "b1-p08",
    "bimestre": 1,
    "livro": "Língua Portuguesa - 1ª Série (Vol 1)",
    "titulo": "Regência Verbal: Mudança de Sentido e Preposições",
    "enunciado": "A regência verbal trata da relação de dependência sintática entre os verbos e seus complementos. Determinados verbos mudam de significado e transitividade conforme exigem ou não uma preposição específica.",
    "dadosExemplo": [
      "Aspirar (VTD) = inalar, sorver o ar ('Aspirou o aroma das flores')",
      "Aspirar (VTI com 'a') = desejar, almejar ('Aspira ao cargo de diretor')",
      "Assistir (VTD) = ajudar, prestar socorro ('O médico assistiu o paciente')",
      "Assistir (VTI com 'a') = presenciar, ver ('Assistimos ao jogo no estádio')",
      "Visar (VTI com 'a') = ter como meta / objetivo ('A lei visa ao bem-estar coletivo')"
    ],
    "pergunta": "Analise a frase: 'O estudante aspira uma vaga na universidade e assistiu o espetáculo ontem'. De acordo com a norma-padrão da língua, há desvios de regência verbal? Reescreva a frase corrigindo-a e justifique.",
    "resposta": "Sim, há dois desvios de regência. Correção: 'O estudante aspira a uma vaga na universidade e assistiu ao espetáculo ontem'. Justificativa: No sentido de 'almejar/desejar', o verbo 'aspirar' é transitivo indireto regido pela preposição 'a'; no sentido de 'ver/presenciar', o verbo 'assistir' é transitivo indireto também regido pela preposição 'a'.",
    "explicacao": "Passo 1: 'Aspirar' com sentido de ambição exige a preposição 'a' -> 'aspira a uma vaga'. Sem preposição, significaria inalar fisicamente a vaga.\nPasso 2: 'Assistir' com sentido de espectador exige a preposição 'a' -> 'assistiu ao espetáculo'. Sem preposição, significaria dar assistência médica ou socorro ao espetáculo.",
    "dificuldade": "media",
    "tema": "Sintaxe",
    "contemImagem": false
  },
  {
    "id": "b1-p09",
    "bimestre": 1,
    "livro": "Língua Portuguesa - 1ª Série (Vol 1)",
    "titulo": "Intertextualidade: Paráfrase, Paródia e Alusão",
    "enunciado": "A intertextualidade ocorre quando um texto faz referência explícita ou implícita a outro texto previamente existente na cultura. Os três principais mecanismos são: paráfrase (recriação com manutenção do sentido original), paródia (recriação com efeito cômico, crítico ou subversivo) e alusão (menção direta ou indireta a personagens/fatos).",
    "dadosExemplo": [
      "Texto matriz (Gonçalves Dias): 'Minha terra tem palmeiras, / Onde canta o Sabiá; / As aves, que aqui gorjeiam, / Não gorjeiam como lá.'",
      "Paródia (Oswald de Andrade): 'Minha terra tem palmares / onde gorjeia o mar / os passarinhos daqui / não cantam como os de lá.'",
      "Paródia (Murilo Mendes): 'Minha terra tem macieiras da Califórnia / onde cantam gaturamos de Veneza...'"
    ],
    "pergunta": "Explique a diferença funcional entre a paráfrase e a paródia e mostre como Oswald de Andrade cria uma paródia política no poema 'Canto de Regresso à Pátria'.",
    "resposta": "A paráfrase reafirma as ideias do texto original utilizando outras palavras, mantendo o mesmo posicionamento ideológico. A paródia distorce, ironiza ou ressignifica o texto original com intenção crítica ou humorística. Oswald de Andrade troca 'palmeiras' por 'palmares', transformando a exaltação romântica da natureza brasileira em uma alusão histórica à resistência quilombola de Zumbi dos Palmares contra a opressão.",
    "explicacao": "Passo 1: A paródia quebra o horizonte de expectativa do leitor ao usar a estrutura formal do texto canônico para introduzir um elemento ideológico dissonante.\nPasso 2: A substituição de 'palmeiras' (símbolo romântico da natureza exuberante) por 'palmares' (símbolo de resistência negra e conflito social) inverte o tom ufanista de Gonçalves Dias.",
    "dificuldade": "media",
    "tema": "Semântica & Pragmática",
    "contemImagem": false
  },
  {
    "id": "b1-p10",
    "bimestre": 1,
    "livro": "Língua Portuguesa - 1ª Série (Vol 1)",
    "titulo": "Semiótica: Charges, Cartuns e Leitura Multimodal",
    "enunciado": "Tanto a charge quanto o cartum utilizam linguagem verbo-visual (multimodal) e humor gráfico para produzir crítica social. No entanto, diferenciam-se pelo grau de temporalidade e ancoragem contextual.",
    "dadosExemplo": [
      "Charge: atrelada a uma notícia específica e passageira (ex: votação de uma lei na semana passada, escândalo pontual de uma autoridade)",
      "Cartum: atrelado a temas universais e atemporais da condição humana (ex: vícios humanos, relação homem-máquina, filas de hospital, egoísmo)"
    ],
    "pergunta": "Qual é o critério definidor que distingue fundamentalmente a charge do cartum quanto ao contexto de publicação e interpretação?",
    "resposta": "O critério é a temporalidade (historicidade): a charge está ligada a um fato ou figura pública noticiosa em um momento específico do tempo (requer conhecimento prévio da notícia para ser compreendida), enquanto o cartum aborda situações cotidianas ou existenciais universais e atemporais, compreensíveis independentemente da data de publicação.",
    "explicacao": "Passo 1: Se o desenho retrata um político real envolvido num escândalo da semana, trata-se de uma charge; fora daquele contexto histórico, o sentido pode se perder.\nPasso 2: Se o desenho critica genericamente o vício em celulares numa mesa de jantar, trata-se de um cartum, pois tem valor perene e universal.",
    "dificuldade": "facil",
    "tema": "Semiótica & Multimodalidade",
    "contemImagem": true
  },
  {
    "id": "b1-p11",
    "bimestre": 1,
    "livro": "Língua Portuguesa - 1ª Série (Vol 1)",
    "titulo": "Poesia Falada (Slam): Prosódia, Métrica Livre e Performance",
    "enunciado": "O Poetry Slam (campeonato de poesia falada) consolidou-se como uma das principais manifestações da literatura contemporânea e periférica. Diferente da poesia de gabinete escrita, o slam prioriza o corpo, a performance vocal, o ritmo sincopado e temas de urgência social.",
    "dadosExemplo": [
      "Regras clássicas do Slam: poesias autorais, até 3 minutos, sem acompanhamento musical nem figurino/adereços",
      "Recursos prosódicos: aliteração, rimas internas, modulação de velocidade vocal, pausas dramáticas",
      "Variação linguística: valorização do dialeto urbano periférico e das gírias como marcadores identitários"
    ],
    "pergunta": "Quais são os principais recursos fonético-prosódicos utilizados pelos poetas de slam para manter a atenção da plateia e reforçar a contundência da mensagem?",
    "resposta": "Os poetas de slam utilizam a aceleração e desaceleração do ritmo vocal (modulação temporal), rimas internas frequentes, repetições fonéticas enfáticas (aliterações e assonâncias), pausas dramáticas de silêncio e variação de volume/intensidade sonora para enfatizar ideias-chave e simular a pulsação do hip-hop e da fala das ruas.",
    "explicacao": "Passo 1: A ausência de música de fundo exige que o próprio poeta crie a base rítmica através de sua prosódia (entonação e ritmo fonético).\nPasso 2: As rimas internas encadeadas aumentam a densidade lírica e aceleram a percepção do ouvinte.",
    "dificuldade": "facil",
    "tema": "Variação Linguística & Sociolinguística",
    "contemImagem": false
  },
  {
    "id": "b1-p12",
    "bimestre": 1,
    "livro": "Língua Portuguesa - 1ª Série (Vol 1)",
    "titulo": "Semântica: Conotação vs Denotação",
    "enunciado": "A linguagem pode ser empregada em sentido denotativo (sentido literal, dicionarizado, unívoco, objetivo) ou conotativo (sentido figurado, simbólico, polissêmico, subjetivo).",
    "dadosExemplo": [
      "'A pedra caiu do muro' -> Denotação (mineral rochoso literal)",
      "'Tinha uma pedra no meio do caminho' -> Conotação (obstáculo, dificuldade existencial)",
      "'O coração humano bombeia sangue' -> Denotação (órgão muscular)",
      "'Ela tem um coração de ouro' -> Conotação (generosidade, bondade)"
    ],
    "pergunta": "Identifique se os termos sublinhados nas sentenças estão empregados em sentido denotativo ou conotativo:\nI. 'Ele quebrou o galho da árvore durante a tempestade.'\nII. 'O amigo quebrou um galho para mim quando consertou meu computador.'\nIII. 'A empresa congelou as contratações este mês.'",
    "resposta": "I. Denotativo (quebrar fisicamente a ramificação de madeira da árvore);\nII. Conotativo (expressão idiomática que significa 'prestar um favor/ajudar em situação difícil');\nIII. Conotativo (suspensão ou paralisação temporária das admissões, sem relação com temperatura física).",
    "explicacao": "Passo 1: Se a palavra é tomada em seu significado primeiro e objetivo do dicionário, é denotação.\nPasso 2: Se a palavra sofre deslocamento semântico metafórico ou compõe uma expressão idiomática, é conotação.",
    "dificuldade": "facil",
    "tema": "Semântica & Pragmática",
    "contemImagem": false
  },
  {
    "id": "b2-p01",
    "bimestre": 2,
    "livro": "Língua Portuguesa - 1ª Série (Vol 2)",
    "titulo": "Estrangeirismos: Xenismos vs Empréstimos Linguísticos Adaptados",
    "enunciado": "O contato entre línguas resulta frequentemente na incorporação de vocábulos de outros idiomas (estrangeirismos). A linguística categoriza esses estrangeirismos em dois tipos principais de incorporação:\n1. Xenismos (ou estrangeirismos puros): a forma gráfica e fonética original da língua de origem é mantida.\n2. Empréstimos linguísticos adaptados: o termo passa por adaptação ortográfica e fonológica às regras do português.",
    "dadosExemplo": [
      "delivery (inglês) -> mantido sem alteração gráfica (xenismo)",
      "shopping center (inglês) -> mantido sem alteração (xenismo)",
      "stress (inglês) -> adaptado para 'estresse' (empréstimo adaptado)",
      "volleyball (inglês) -> adaptado para 'vôlei' / 'voleibol' (empréstimo adaptado)",
      "croissant (francês) -> mantido sem alteração (xenismo)",
      "abajur (francês: abat-jour) -> adaptado ortograficamente (empréstimo adaptado)"
    ],
    "pergunta": "Classifique os seguintes quatro termos estrangeiros presentes na publicidade brasileira em xenismo ou empréstimo adaptado: (a) feedback, (b) leiaute, (c) outdoor, (d) xampu.",
    "resposta": "(a) feedback: Xenismo; (b) leiaute (de layout): Empréstimo adaptado; (c) outdoor: Xenismo; (d) xampu (de shampoo): Empréstimo adaptado.",
    "explicacao": "Passo 1: 'feedback' e 'outdoor' preservam a grafia exata em língua inglesa sem aportuguesamento -> Xenismo.\nPasso 2: 'leiaute' (aportuguesamento fonético de 'layout') e 'xampu' (aportuguesamento com dígrafo 'x' substituindo 'sh' e terminação 'u' para 'oo') foram formalmente dicionarizados no sistema ortográfico do português -> Empréstimos adaptados.",
    "dificuldade": "facil",
    "tema": "Morfologia",
    "contemImagem": false
  },
  {
    "id": "b2-p02",
    "bimestre": 2,
    "livro": "Língua Portuguesa - 1ª Série (Vol 2)",
    "titulo": "Neologismos Lexicais vs Neologismos Semânticos",
    "enunciado": "Os neologismos representam a vitalidade da língua em criar novos significantes ou novos significados para responder a novas realidades culturais e tecnológicas.\n• Neologismo lexical: criação de uma nova palavra a partir de elementos mórficos da língua ou empréstimos (ex: deletar, desengavetar, blogueiro).\n• Neologismo semântico (ou de sentido): atribuição de um novo sentido a uma palavra que já existia com outro significado anterior na língua.",
    "dadosExemplo": [
      "Palavra antiga 'gato' (animal) -> novo sentido 'ligação clandestina de energia' (neologismo semântico)",
      "Palavra antiga 'navegar' (andar de barco) -> novo sentido 'percorrer páginas da internet' (neologismo semântico)",
      "Palavra antiga 'muralha' (parede defensiva) -> novo sentido futebolístico 'goleiro intransponível' (neologismo semântico)",
      "Palavra nova 'printar' (print + -ar) -> neologismo lexical",
      "Palavra nova 'cibernauta' (ciber + nauta) -> neologismo lexical"
    ],
    "pergunta": "Analise a frase: 'O influenciador postou um story e viralizou, mas foi cancelado após o tweet'. Identifique se os termos 'viralizou' e 'cancelado' (no sentido de exclusão social digital) são neologismos lexicais ou semânticos.",
    "resposta": "'Viralizou' é um neologismo lexical (criação de um novo verbo derivado de 'viral' + '-izar'). 'Cancelado' é um neologismo semântico (a palavra 'cancelar' já existia no vocabulário português com sentido de rescindir contrato ou anular compromisso, mas ganhou um novo significado de boicote e reprovação pública nas redes sociais).",
    "explicacao": "Passo 1: Neologismo lexical gera um termo inédito no léxico ('viralizar' não existia nos dicionários tradicionais do século XX).\nPasso 2: Neologismo semântico recicla um significante já existente ('cancelar'), atribuindo-lhe um novo conceito cultural sem alterar sua raiz morfológica.",
    "dificuldade": "media",
    "tema": "Morfologia",
    "contemImagem": false
  },
  {
    "id": "b2-p03",
    "bimestre": 2,
    "livro": "Língua Portuguesa - 1ª Série (Vol 2)",
    "titulo": "Sintaxe: Orações Subordinadas Adjetivas (Explicativas vs Restritivas)",
    "enunciado": "As orações subordinadas adjetivas exercem a função de adjunto adnominal em relação a um substantivo ou pronome da oração principal, introduzidas por pronome relativo (que, quem, cujo, onde). A presença ou ausência de vírgulas altera drasticamente o valor semântico e a abrangência lógica do enunciado.",
    "dadosExemplo": [
      "Explicativa (com vírgulas): refere-se à totalidade do conjunto, expressando uma característica própria de todos os elementos ('Os alunos da classe, que estudaram muito, foram aprovados' = TODOS os alunos estudaram e todos foram aprovados).",
      "Restritiva (sem vírgulas): limita o sentido a uma parte do conjunto ('Os alunos da classe que estudaram muito foram aprovados' = APENAS OS QUE estudaram foram aprovados; os outros não foram)."
    ],
    "pergunta": "Considere as frases:\nI. 'Os cientistas, que buscam a cura do câncer, merecem investimentos.'\nII. 'Os cientistas que buscam a cura do câncer merecem investimentos.'\nExplique a diferença de significado entre as duas sentenças.",
    "resposta": "Na frase I (explicativa, entre vírgulas), afirma-se que a totalidade dos cientistas busca a cura do câncer e, por isso, todos merecem investimentos (generalização). Na frase II (restritiva, sem vírgulas), restringe-se o merecimento de investimentos exclusivamente ao subgrupo específico de cientistas que atuam na pesquisa contra o câncer (delimitação/especificação).",
    "explicacao": "Passo 1: A oração subordinada adjetiva explicativa funciona semanticamente como um aposto explicativo de todo o conjunto anterior.\nPasso 2: A oração subordinada adjetiva restritiva delimita o antecedente, dividindo o universo de cientistas em dois grupos: os que buscam a cura (que recebem a propriedade) e os que não buscam.",
    "dificuldade": "media",
    "tema": "Sintaxe",
    "contemImagem": false
  },
  {
    "id": "b2-p04",
    "bimestre": 2,
    "livro": "Língua Portuguesa - 1ª Série (Vol 2)",
    "titulo": "Figuras de Linguagem: Metáfora, Metonímia, Antítese e Paradoxo",
    "enunciado": "As figuras de linguagem são recursos estilísticos utilizados para ampliar as possibilidades expressivas do discurso. Observe os conceitos:\n• Metáfora: comparação implícita sem conectivo comparativo.\n• Metonímia: substituição de um termo por outro com base em uma relação de contiguidade material ou conceitual (o autor pela obra, a causa pelo efeito, a parte pelo todo, o recipiente pelo conteúdo).\n• Antítese: aproximação de palavras ou ideias com sentidos opostos que coexistem harmoniosamente.\n• Paradoxo (oximoro): fusão de ideias aparentemente inconciliáveis que geram contradição lógica.",
    "dadosExemplo": [
      "'Leu Machado de Assis a tarde inteira' -> Metonímia (o autor pela obra)",
      "'Bebeu dois copos de suco' -> Metonímia (o continente pelo conteúdo)",
      "'O tempo é um rio que corre sem parar' -> Metáfora (comparação do tempo a um rio)",
      "'O riso e o choro fazem parte da vida' -> Antítese (oposição simples de sentimentos)",
      "'Amor é fogo que arde sem se ver, é ferida que dói e não se sente' -> Paradoxo (contradição lógica interna: doer sem sentir)"
    ],
    "pergunta": "Classifique as figuras de linguagem presentes nos seguintes enunciados:\n1. 'Os bravos soldados defenderam a pátria com suor e sangue.'\n2. 'O silêncio ensurdecedor da sala denunciava a gravidade da reunião.'\n3. 'Ela era uma fera defendendo os filhotes.'\n4. 'Trabalhava de dia e descansava de noite.'",
    "resposta": "1. Metonímia (o efeito pelo causa / instrumento pelo trabalho árduo e sacrifício);\n2. Paradoxo (ou Oximoro, pois o silêncio não pode produzir o som ensurdecedor no plano lógico);\n3. Metáfora (atribuição direta de qualidades selvagens e protetoras da fera);\n4. Antítese (oposição contrastante entre dia e noite / trabalho e descanso).",
    "explicacao": "Passo 1: 'Suor e sangue' substitui esforço e sacrifício físico pela relação de produto/causa -> Metonímia.\nPasso 2: 'Silêncio ensurdecedor' une conceitos que se anulam mutuamente (ausência de som que ensurdece) gerando paradoxo.\nPasso 3: Chamar uma pessoa de fera sem conectivo comparativo é transferência direta de campos conceituais -> Metáfora.\nPasso 4: 'Dia x Noite' e 'Trabalhar x Descansar' são antônimos colocados em paralelo sem anulação lógica -> Antítese.",
    "dificuldade": "media",
    "tema": "Figuras de Linguagem & Estilística",
    "contemImagem": false
  },
  {
    "id": "b2-p05",
    "bimestre": 2,
    "livro": "Língua Portuguesa - 1ª Série (Vol 2)",
    "titulo": "Figuras de Sintaxe e Construção: Elipse, Zeugma e Assíndeto",
    "enunciado": "As figuras de construção (ou sintáticas) alteram a estrutura canônica da oração para dar dinamismo, ênfase ou concisão ao texto.",
    "dadosExemplo": [
      "Elipse: omissão de um termo facilmente subentendido pelo contexto ('Na rua, apenas passos apressados' -> omissão do verbo havia/estavam).",
      "Zeugma: omissão de um termo já citado anteriormente no mesmo período ('Eu prefiro chá; meu irmão, café' -> omissão do verbo 'prefere' já citado).",
      "Assíndeto: ausência de conjunções coordenativas entre orações ('Vim, vi, venci' -> sem conectivo 'e').",
      "Polissíndeto: repetição enfática de conjunções coordenativas ('E canta, e chora, e dança, e grita')."
    ],
    "pergunta": "Qual a diferença essencial entre elipse e zeugma? Identifique a figura presente em: 'Maria comprou o livro de literatura; Pedro, o de matemática.'",
    "resposta": "A elipse consiste na omissão de um termo que nunca foi mencionado antes na frase, mas pode ser deduzido pelo contexto geral. O zeugma é um tipo específico de elipse em que o termo omitido já foi expresso explicitamente em uma oração anterior. No exemplo dado, ocorre Zeugma (omissão do verbo 'comprou' na segunda oração, já citado na primeira).",
    "explicacao": "Passo 1: Se o termo foi dito antes e depois suprimido para evitar repetição ('comprou'), classifica-se como zeugma.\nPasso 2: Se o termo nunca apareceu no texto (ex: 'À mesa, quatro pratos'), trata-se de elipse pura do verbo 'estavam'.",
    "dificuldade": "facil",
    "tema": "Sintaxe",
    "contemImagem": false
  },
  {
    "id": "b2-p06",
    "bimestre": 2,
    "livro": "Língua Portuguesa - 1ª Série (Vol 2)",
    "titulo": "Lógica Argumentativa: Falácias e Tipologia dos Argumentos",
    "enunciado": "Em debates e artigos de opinião, a sustentação de um ponto de vista requer argumentos válidos (argumento de autoridade, comprovação por dados estatísticos, causa-efeito, consenso). Quando o raciocínio viola as regras da lógica formal ou apela para desvios emocionais, incorre-se em falácias argumentativas.",
    "dadosExemplo": [
      "Argumento de Autoridade: citação de especialista ou instituição reconhecida na área.",
      "Falácia 'Ad Hominem': atacar a pessoa do debatedor em vez de rebater seus argumentos.",
      "Falácia do Espantalho: distorcer o argumento do oponente para torná-lo fácil de refutar.",
      "Falácia da Falsa Causa (Post hoc ergo propter hoc): assumir que, porque B aconteceu após A, A causou B.",
      "Falácia do Apelo à Popularidade (Ad Populum): defender que algo é verdadeiro só porque a maioria acredita."
    ],
    "pergunta": "Em um debate sobre trânsito urbano, o debatedor A afirma: 'Estudos da OMS mostram que a redução da velocidade máxima diminui em 35% os atropelamentos fatais.' O debatedor B responde: 'Você defende isso porque você nem sabe dirigir e quer que todo mundo ande a passo de tartaruga!'. Classifique o tipo de argumento usado por A e a falácia cometida por B.",
    "resposta": "O debatedor A utilizou um Argumento com Base em Dados Estatísticos / Argumento de Autoridade Científica (dados da OMS). O debatedor B cometeu a falácia 'Ad Hominem' (ataque pessoal ao adversário, desqualificando sua habilidade de motorista) e a falácia do 'Espantalho' (caricaturar a proposta como 'andar a passo de tartaruga').",
    "explicacao": "Passo 1: A traz dados empíricos e fundamentação de autoridade sanitária mundial (OMS).\nPasso 2: B ignora os dados de acidentes e ataca a pessoa de A ('você nem sabe dirigir') e exagera a proposta ('passo de tartaruga'), configurando desvio desonesto do debate.",
    "dificuldade": "media",
    "tema": "Lógica Argumentativa & Discurso",
    "contemImagem": false
  },
  {
    "id": "b2-p07",
    "bimestre": 2,
    "livro": "Língua Portuguesa - 1ª Série (Vol 2)",
    "titulo": "Funções da Linguagem de Roman Jakobson",
    "enunciado": "Segundo o linguista Roman Jakobson, a comunicação humana organiza-se em torno de seis elementos essenciais (emissor, receptor, mensagem, canal, código e referente), correspondendo a seis funções da linguagem:\n1. Emotiva/Expressiva (foco no emissor: sentimentos, 1ª pessoa);\n2. Conativa/Apelativa (foco no receptor: verbos no imperativo, persuasão, vocativos);\n3. Referencial/Informativa (foco no referente: dados objetivos, 3ª pessoa, denotação);\n4. Metalinguística (foco no código: a língua explicando a própria língua);\n5. Fática (foco no canal: testar o contato, cumprimentos: 'alô?', 'entende?');\n6. Poética (foco na mensagem: rima, métrica, arranjo sonoro e visual das palavras).",
    "dadosExemplo": [
      "Anúncio de TV: 'Beba Coca-Cola e viva o agora!' -> Conativa / Apelativa",
      "Verbete de Dicionário: 'Linguística: ciência que estuda a linguagem humana' -> Metalinguística",
      "Manual de instruções: 'O dispositivo opera na voltagem 110-220V' -> Referencial",
      "Poema: 'A lua no mar derrama prata e luar' -> Poética"
    ],
    "pergunta": "Qual função da linguagem predomina no slogan publicitário 'Doe sangue, salve vidas: faça sua parte hoje!' e por quê?",
    "resposta": "Predomina a Função Conativa (ou Apelativa). A finalidade central do texto é influenciar o comportamento do interlocutor/receptor, convocando-o à ação por meio do uso de verbos no modo imperativo ('Doe', 'salve', 'faça') e do pronome de segunda pessoa implícito ('sua parte').",
    "explicacao": "Passo 1: O foco está direcionado explicitamente ao leitor/cidadão para induzir uma conduta altruísta.\nPasso 2: Os verbos imperativos 'doe', 'salve', 'faça' são a marca morfossintática típica da função conativa.",
    "dificuldade": "facil",
    "tema": "Semântica & Pragmática",
    "contemImagem": false
  },
  {
    "id": "b2-p08",
    "bimestre": 2,
    "livro": "Língua Portuguesa - 1ª Série (Vol 2)",
    "titulo": "Sintaxe: Regras Fundamentais do Uso da Crase",
    "enunciado": "A crase é a fusão da preposição 'a' com o artigo feminino 'a(s)' ou com os pronomes demonstrativos 'aquele(s)', 'aquela(s)', 'aquilo'. Ocorre crase diante de palavras femininas que admitam artigo quando o termo regente exigir preposição.",
    "dadosExemplo": [
      "Vou à praia (quem vai, vai 'a' + a praia = à)",
      "Proibida antes de palavras masculinas: 'Andou a cavalo', 'Pagou a prazo'",
      "Proibida antes de verbos: 'Começou a chorar'",
      "Proibida antes de pronomes de tratamento e indefinidos: 'Pediu a ela', 'Falou a todos'",
      "Obrigatória em locuções adverbiais femininas: 'às pressas', 'à noite', 'às vezes'"
    ],
    "pergunta": "Analise as três sentenças e indique em qual(is) o acento grave indicador de crase está empregado corretamente:\n1. 'Refiro-me à professora que acabou de entrar.'\n2. 'O atleta começou à correr em ritmo acelerado.'\n3. 'Escreveu o documento à lápis.'",
    "resposta": "Apenas a sentença 1 está correta. As sentenças 2 e 3 estão incorretas porque: na 2, 'correr' é um verbo (não ocorre crase antes de verbo); na 3, 'lápis' é um substantivo masculino (não ocorre crase antes de palavra masculina sem a elipse de 'à moda de').",
    "explicacao": "Passo 1: 'Refiro-me' exige preposição 'a' + artigo feminino 'a' de 'professora' -> 'à professora' (Correto).\nPasso 2: Antes de verbo infinitivo ('correr') não há artigo feminino -> Crase proibida.\nPasso 3: 'Lápis' é palavra masculina ('o lápis'), exigindo apenas a preposição simples 'a' -> 'a lápis' (Crase proibida).",
    "dificuldade": "facil",
    "tema": "Sintaxe",
    "contemImagem": false
  },
  {
    "id": "b2-p09",
    "bimestre": 2,
    "livro": "Língua Portuguesa - 1ª Série (Vol 2)",
    "titulo": "Heterônimos de Fernando Pessoa: Estilos e Visões de Mundo",
    "enunciado": "O poeta português Fernando Pessoa criou uma multiplicidade de personalidades poéticas autônomas (heterônimos), cada qual com biografia, filosofia, estilo sintático e visão de mundo próprios.",
    "dadosExemplo": [
      "Alberto Caeiro: o poeta do olhar direto, sensorial, que rejeita o pensamento metafísico ('Pensar é estar doente dos olhos').",
      "Ricardo Reis: o poeta clássico, pagão, adepto do carpe diem horaciano e do estoicismo, com métrica rigorosa e sintaxe latinizante.",
      "Álvaro de Campos: o poeta moderno, futurista, das máquinas, do dinamismo urbano e da angústia existencial nihilista ('Tabacaria').",
      "Fernando Pessoa (ortônimo): o poeta que racionaliza a própria emoção ('O poeta é um fingidor')."
    ],
    "pergunta": "Qual heterônimo pessoano é caracterizado pela recusa deliberada da reflexão filosófica abstrata em favor da apreensão sensorial pura e imediata da natureza, e qual o seu lema central?",
    "resposta": "É Alberto Caeiro (considerado o 'Mestre' dos outros heterônimos). Seu lema central afirma que as coisas não têm significado oculto além do que a visão alcança, sintetizado na ideia de que 'Pensar é estar doente dos olhos' e 'As coisas não têm significação: têm existência'.",
    "explicacao": "Passo 1: Caeiro cultiva a simplicidade, usando linguagem despojada e versos livres para defender que a natureza deve ser vista sem o filtro distorcedor das teorias humanas.\nPasso 2: Diferencia-se de Ricardo Reis (erudito e neoclássico) e de Álvaro de Campos (arrebatado pela civilização industrial).",
    "dificuldade": "media",
    "tema": "Figuras de Linguagem & Estilística",
    "contemImagem": false
  },
  {
    "id": "b3-p01",
    "bimestre": 3,
    "livro": "Língua Portuguesa - 1ª Série (Vol 3)",
    "titulo": "Literaturas Africanas em Língua Portuguesa: Variedade e Identidade",
    "enunciado": "A expressão 'literaturas africanas de língua portuguesa' é grafada no plural porque o continente africano reúne dezenas de nações com histórias, etnias e sistemas linguísticos distintos. Em países como Angola, Moçambique, Cabo Verde, Guiné-Bissau e São Tomé e Príncipe, o português atua como língua oficial ao lado de inúmeras línguas maternas locais.",
    "dadosExemplo": [
      "Angola: português oficial + quimbundo, umbundo, quicongo, tchokwe",
      "Moçambique: português oficial + emakhuwa, changana, sena, elomwe",
      "Cabo Verde: português oficial + crioulo cabo-verdiano (língua nacional)",
      "Guiné-Bissau: português oficial + kriol (crioulo da Guiné-Bissau)"
    ],
    "pergunta": "Explique por que se utiliza o termo 'literaturas' (no plural) e qual a função sociolinguística da apropriação da língua portuguesa pelos escritores africanos pós-independência (como Pepetela, Luandino Vieira e Mia Couto).",
    "resposta": "Usa-se 'literaturas' no plural para reconhecer a pluralidade cultural, histórica e linguística dos diferentes países africanos, evitando uma visão homogeneizadora. A apropriação do português pelos autores pós-coloniais serviu para reinventar o idioma do colonizador, incorporando estruturas sintáticas e vocabulário das línguas maternas locais para expressar a identidade nacional e a oralidade de seus povos.",
    "explicacao": "Passo 1: A África é um continente de 54 países com imensa diversidade; não existe uma única literatura africana homogênea.\nPasso 2: Na fase pós-independência, os escritores africanos deixaram de copiar os modelos literários de Lisboa e passaram a 'africanizar' o português, transformando-o em veículo de soberania e expressão identitária.",
    "dificuldade": "facil",
    "tema": "Linguística de Contato & Variedades",
    "contemImagem": false
  },
  {
    "id": "b3-p02",
    "bimestre": 3,
    "livro": "Língua Portuguesa - 1ª Série (Vol 3)",
    "titulo": "Marcas de Oralidade e Léxico de Origem Quimbundo em Angola",
    "enunciado": "No conto 'O drama de Vavó Tutúri', do escritor angolano Jofre Rocha, observam-se termos do quimbundo e recursos estilísticos próprios da oralidade angolana:\n«De longe chegava o ladrar teimoso dum cão, mas velha Tutúri estava já acordada [...]. Na cubata, Vavó Tutúri não tem nada pra comer [...]. Velha Tutúri chorou, chorou, chorou, ficou tempo doente.»",
    "dadosExemplo": [
      "musseque -> bairro popular / periferia de Luanda",
      "cubata -> habitação tradicional / moradia modesta",
      "Kalunga -> divindade do mar / morte / o grande além",
      "kamuzangala -> rapaz jovem / adolescente",
      "muxixeiro -> árvore típica angolana que produz frutos secos",
      "repetição 'chorou, chorou, chorou' -> aspecto verbal durativo/intensivo da tradição oral"
    ],
    "pergunta": "Como a inserção do léxico quimbundo e a repetição tripla de verbos contribuem para a expressividade e a caracterização cultural do conto?",
    "resposta": "O léxico de origem quimbundo ancora a narrativa na realidade sociocultural de Luanda, afirmando a identidade e o pertencimento dos personagens. A repetição do verbo ('chorou, chorou, chorou') funciona como um marcador de aspecto verbal intensivo e durativo típico da tradição oral contadora de histórias, transmitindo a profundidade e a extensão no tempo da dor de Vavó Tutúri.",
    "explicacao": "Passo 1: Em muitas línguas bantas, a reduplicação e a repetição verbal expressam aspecto iterativo (repetido) ou intensivo, transferindo-se para a literatura escrita em português.\nPasso 2: Os termos 'cubata', 'musseque' e 'Kalunga' não são meros adornos exóticos, mas conceitos existenciais da vivência do povo angolano.",
    "dificuldade": "media",
    "tema": "Linguística de Contato & Variedades",
    "contemImagem": false
  },
  {
    "id": "b3-p03",
    "bimestre": 3,
    "livro": "Língua Portuguesa - 1ª Série (Vol 3)",
    "titulo": "Neologismos Poéticos e Inovação Estilística em Mia Couto",
    "enunciado": "O escritor moçambicano Mia Couto é internacionalmente reconhecido por sua inventividade lexical, combinando raízes de palavras do português com sufixos inusitados para criar efeitos poéticos e sensoriais. Observe os termos extraídos de suas obras:\n• 'ninharice' (variação de ninharia com sufixo -ice de tolice);\n• 'tristídão' (fusão de tristeza + solidão/escuridão);\n• 'desentristecer' (prefixação inovadora);\n• 'choveril' (chovoso + sutil/febril).",
    "dadosExemplo": [
      "ninharia + -ice -> ninharice (algo insignificante e simultaneamente infantil/tolo)",
      "invenção lexical -> fusão morfológica (amálgama) e derivação não canônica",
      "sensação de oralidade mágica e reinvenção do mundo"
    ],
    "pergunta": "Qual é a motivação poético-linguística de Mia Couto ao forjar neologismos como 'ninharice' em vez de utilizar o termo padrão 'ninharia'?",
    "resposta": "Ao criar 'ninharice', o autor combina o sentido de coisa banal ('ninharia') com o sufixo depreciativo/lúdico '-ice' (presente em 'tolice', 'meninice', 'burrice'), conferindo à briga dos personagens uma conotação de infantilidade, absurdo e comportamento ridículo, além de provocar um estranhamento poético no leitor.",
    "explicacao": "Passo 1: A troca de sufixos na língua literária altera o tom estilístico e a carga afetiva da palavra.\nPasso 2: O sufixo '-ice' enfatiza a atitude/comportamento tolo dos indivíduos envolvidos no conflito, enriquecendo o significado além do substantivo estático 'ninharia'.",
    "dificuldade": "media",
    "tema": "Morfologia",
    "contemImagem": false
  },
  {
    "id": "b3-p04",
    "bimestre": 3,
    "livro": "Língua Portuguesa - 1ª Série (Vol 3)",
    "titulo": "Sintaxe: Transitividade Verbal e Complementos (OD e OI)",
    "enunciado": "A predicação verbal determina se o verbo possui sentido completo (intransitivo) ou se necessita de complementos para integrar o predicado:\n• Objeto Direto (OD): complemento ligado diretamente ao verbo, sem preposição obrigatória.\n• Objeto Indireto (OI): complemento ligado ao verbo por meio de preposição obrigatória.",
    "dadosExemplo": [
      "O menino leu o livro -> 'o livro' (Objeto Direto de ler - VTD)",
      "O escritor obedeceu às regras -> 'às regras' (Objeto Indireto de obedecer - VTI com preposição 'a')",
      "O professor entregou o prêmio aos alunos -> 'o prêmio' (OD) e 'aos alunos' (OI) (VTDI)"
    ],
    "pergunta": "Analise sintaticamente os complementos verbais na oração: 'O governo enviou mantimentos aos refugiados da guerra.'",
    "resposta": "'mantimentos' é o Objeto Direto (liga-se ao verbo transitivo direto e indireto 'enviou' sem preposição); 'aos refugiados da guerra' é o Objeto Indireto (liga-se ao verbo por meio da preposição obrigatória 'a' fundida com o artigo 'os').",
    "explicacao": "Passo 1: O verbo 'enviar' exige dois complementos: quem envia, envia algo (o quê? mantimentos -> OD) a alguém (a quem? aos refugiados -> OI).\nPasso 2: O verbo é classificado como Transitivo Direto e Indireto (bitransitivo).",
    "dificuldade": "facil",
    "tema": "Sintaxe",
    "contemImagem": false
  },
  {
    "id": "b3-p05",
    "bimestre": 3,
    "livro": "Língua Portuguesa - 1ª Série (Vol 3)",
    "titulo": "Estrutura do Parágrafo Argumentativo: Tópico Frasal e Desenvolvimento",
    "enunciado": "Um parágrafo dissertativo-argumentativo padrão articula-se em três partes lógicas:\n1. Tópico frasal: a frase nuclear que expressa a ideia-guia ou tese central do parágrafo;\n2. Desenvolvimento: frases que fundamentam, explicam, exemplificam ou justificam a afirmação inicial;\n3. Conclusão (ou fechamento): arremate do raciocínio dedutivo ou indutivo do parágrafo.",
    "dadosExemplo": [
      "Tópico frasal: 'A preservação das línguas indígenas é fundamental para a manutenção da biodiversidade cultural.'",
      "Desenvolvimento: 'Quando uma língua desaparece, perdem-se saberes ancestrais sobre plantas medicinais, ecossistemas e mitologias que não foram documentados.'",
      "Conclusão: 'Dessa forma, investir em educação bilíngue é proteger o patrimônio imaterial da humanidade.'"
    ],
    "pergunta": "Identifique a função do tópico frasal na arquitetura textual e explique como o leitor pode localizá-lo com segurança em um parágrafo argumentativo bem estruturado.",
    "resposta": "A função do tópico frasal é sintetizar e declarar explicitamente a tese ou declaração principal que será sustentada ao longo do parágrafo. Para localizá-lo, o leitor deve identificar a sentença mais abrangente e afirmativa (geralmente a primeira frase do parágrafo), da qual todas as frases subsequentes dependem como provas, dados ou desdobramentos lógicos.",
    "explicacao": "Passo 1: O tópico frasal funciona como uma 'âncora' temática para o leitor e para o redator.\nPasso 2: Se removermos o desenvolvimento, o parágrafo perde o suporte argumentativo; mas se removermos o tópico frasal, o leitor não sabe qual o ponto central em debate.",
    "dificuldade": "facil",
    "tema": "Lógica Argumentativa & Discurso",
    "contemImagem": false
  },
  {
    "id": "b3-p06",
    "bimestre": 3,
    "livro": "Língua Portuguesa - 1ª Série (Vol 3)",
    "titulo": "A Carta de Pero Vaz de Caminha e o Quinhentismo",
    "enunciado": "A Carta de Pero Vaz de Caminha (1500) é o documento inaugural da literatura informativa (de viagem) sobre o território brasileiro. Caracteriza-se por seu tom etnográfico, detalhismo descritivo das paisagens e dos povos originários tupiniquins, e o olhar eurocêntrico da expansão marítima mercantil e religiosa portuguesa.",
    "dadosExemplo": [
      "«A feição deles é serem pardos, maneira de avermelhados, de bons rostos e bons narizes, bem feitos.»",
      "«Andam nus, sem cobertura alguma. Nem fazem mais caso de encobrir ou deixar de encobrir suas vergonhas do que de mostrar a cara.»",
      "«Dar-se-á nela tudo por bem das águas que tem, porém o melhor fruto que nela se pode fazer me parece que será salvar esta gente.»"
    ],
    "pergunta": "Quais são as duas principais motivações da Coroa Portuguesa expressas no texto de Caminha em relação à nova terra encontrada?",
    "resposta": "As duas principais motivações são: 1) A motivação material/econômica (a exploração de riquezas da terra, como ouro, prata e fertilidade agrícola da terra 'em que plantando tudo dá'); 2) A motivação religiosa/espiritual (a catequização e conversão dos povos indígenas à fé católica, considerada por Caminha o 'melhor fruto').",
    "explicacao": "Passo 1: O Quinhentismo reflete a mentalidade renascentista portuguesa: aliança entre a expansão comercial marítima e a cruzada religiosa da Contra-Reforma.\nPasso 2: O olhar de Caminha combina a observação empírica dos corpos e riquezas potenciais com o dever de salvar almas para a Igreja Católica.",
    "dificuldade": "facil",
    "tema": "Etimologia & História da Língua",
    "contemImagem": false
  },
  {
    "id": "b3-p07",
    "bimestre": 3,
    "livro": "Língua Portuguesa - 1ª Série (Vol 3)",
    "titulo": "Carolina Maria de Jesus: Quarto de Despejo e Variação Linguística Popular",
    "enunciado": "Em 'Quarto de Despejo: Diário de uma Favelada' (1960), Carolina Maria de Jesus registrou seu cotidiano de mulher negra, catadora de papel e mãe solo na favela do Canindé, em São Paulo. O texto preserva marcas da norma popular e estilizações poéticas autênticas:\n«2 de maio de 1958. Eu não sou indolente. Eu não tenho preguiça. Eu não sou bêbada. [...] O que me aborrece é a fome. A fome é a dinamite do corpo humano.»",
    "dadosExemplo": [
      "Metáfora contundente: 'A fome é a dinamite do corpo humano'",
      "Desvios de concordância padrão: 'Eu escrevia os versos que eu ouvia no rádio e guardava eles'",
      "Poetização da dor: 'O céu estava da cor de chumbo fundido'"
    ],
    "pergunta": "Como a linguagem de Carolina Maria de Jesus articula o registro coloquial-popular com a potência poética e a denúncia social?",
    "resposta": "Carolina Maria de Jesus utiliza uma linguagem direta e visceral que, embora não se enquadre rigidamente nas regras gramaticais da norma culta tradicional, constrói metáforas impactantes sobre a miséria e a fome ('a fome é a dinamite do corpo humano'), legitimando a voz das periferias e quebrando a barreira elitista da produção literária brasileira.",
    "explicacao": "Passo 1: A autenticidade discursiva de Carolina reside na capacidade de transformar o diário íntimo em testemunho político e sociológico.\nPasso 2: Seus 'desvios' gramaticais não diminuem o valor literário da obra; pelo contrário, sublinham a urgência da sobrevivência e a originalidade de seu olhar criativo.",
    "dificuldade": "media",
    "tema": "Variação Linguística & Sociolinguística",
    "contemImagem": false
  },
  {
    "id": "b3-p08",
    "bimestre": 3,
    "livro": "Língua Portuguesa - 1ª Série (Vol 3)",
    "titulo": "Poesia Concreta e Semiótica Visual",
    "enunciado": "O Concretismo (surgido no Brasil na década de 1950 com os poetas Décio Pignatari, Haroldo de Campos e Augusto de Campos) rompeu com a estrutura linear do verso tradicional, propondo o 'poema-objeto' e a exploração do espaço gráfico da página como elemento sintático e semântico (verbivocovisual).",
    "dadosExemplo": [
      "Poema 'Beba Coca Cola' (Décio Pignatari): 'beba coca cola / babe cola / beba coca / babe cola caco / caco / cola / cloaca'",
      "Poema 'Lixo / Luxo' (Augusto de Campos): a palavra LUXO é construída visualmente pela repetição microscópica da palavra LIXO.",
      "Poema 'Velocidade' (Ronaldo Azeredo): disposição das letras em aceleração diagonal na folha."
    ],
    "pergunta": "Como o poema 'Lixo / Luxo' de Augusto de Campos utiliza a semiótica visual para produzir sua mensagem crítica sobre a sociedade de consumo?",
    "resposta": "O poema utiliza a tensão visual e semântica entre as palavras 'LIXO' e 'LUXO'. Ao compor a grande palavra 'LUXO' a partir de dezenas de pequenas palavras 'lixo', o autor demonstra visualmente que todo o luxo e a opulência da sociedade capitalista de consumo são gerados a partir do lixo (descarte, exploração material e degradação ambiental), fundindo forma visual e conteúdo crítico em uma unidade indissociável.",
    "explicacao": "Passo 1: Na poesia concreta, o significado não está apenas no que a palavra diz foneticamente, mas em como ela é distribuída no espaço da página.\nPasso 2: A sobreposição tipográfica 'lixo constrói luxo' expressa a ironia materialista da sociedade contemporânea sem necessitar de versos dissertativos longos.",
    "dificuldade": "media",
    "tema": "Semiótica & Multimodalidade",
    "contemImagem": true
  },
  {
    "id": "b3-p09",
    "bimestre": 3,
    "livro": "Língua Portuguesa - 1ª Série (Vol 3)",
    "titulo": "Gênero Dramático: Estrutura do Texto Teatral, Rubricas e Polifonia",
    "enunciado": "O texto dramático destina-se primordialmente à encenação teatral. Diferencia-se dos gêneros narrativos pela ausência de narrador intermediário convencional, estruturando-se no diálogo direto entre as personagens (réplicas) e nas indicações do autor sobre cenário, gestos e entonação (rubricas ou didascálias).",
    "dadosExemplo": [
      "Rubrica de movimento: '(Levanta-se bruscamente e caminha até a janela)'",
      "Rubrica de entonação/humor: '(Em tom irônico, contendo o riso)'",
      "Rubrica de cenário: '[Cenário: Uma sala escura com apenas uma lâmpada pendente]'",
      "Réplica: 'TEORIA: — Eu continuo, mesmo que doa.'"
    ],
    "pergunta": "Qual a função das rubricas (ou didascálias) em um texto dramático e qual o papel do leitor/encenador ao interpretá-las?",
    "resposta": "As rubricas têm a função de orientar a encenação, indicando ações corporais, deslocamentos, expressões faciais, tom de voz, figurino, iluminação e disposição do cenário. O leitor ou encenador utiliza as rubricas como guia para recriar o subtexto psicológico e a dinâmica espacial da peça concebida pelo dramaturgo.",
    "explicacao": "Passo 1: O diálogo fornece as falas, mas as rubricas estabelecem a linguagem não verbal e o ritmo cênico.\nPasso 2: Em muitos textos modernos, as rubricas assumem valor literário autônomo, revelando o estado de espírito das personagens.",
    "dificuldade": "facil",
    "tema": "Lógica Argumentativa & Discurso",
    "contemImagem": false
  },
  {
    "id": "b3-p10",
    "bimestre": 3,
    "livro": "Língua Portuguesa - 1ª Série (Vol 3)",
    "titulo": "Resenha Crítica: Avaliação Axiológica e Conectivos Conclusivos",
    "enunciado": "A resenha crítica é um gênero textual que combina o resumo informativo de uma obra cultural (livro, filme, série, peça de teatro) com a apreciação axiológica (juízo de valor fundamentado) do resenhista, orientando a decisão de consumo cultural do público.",
    "dadosExemplo": [
      "Operadores conclusivos: 'portanto', 'em suma', 'dessa forma', 'assim sendo'",
      "Operadores adversativos/concessivos: 'embora', 'contudo', 'apesar de', 'no entanto'",
      "Adjetivação axiológica: 'atuação brilhante', 'roteiro truncado', 'fotografia impecável', 'ritmo moroso'"
    ],
    "pergunta": "Em uma resenha sobre a temporada final de uma série, o crítico escreve: 'Apesar de a primeira metade da temporada sofrer com um ritmo excessivamente moroso, o episódio final compensa o espectador com um clímax emocionante e atuações memoráveis.' Qual recurso argumentativo o autor utilizou para equilibrar o ponto negativo e valorizar o desfecho da série?",
    "resposta": "O autor utilizou uma estratégia de concessão argumentativa (introduzida pelo conectivo concessivo 'Apesar de'). Ele reconhece um defeito real da obra (o ritmo moroso) para transmitir credibilidade e imparcialidade ao leitor, mas subordina essa falha à força do episódio final, fazendo com que a avaliação global da série permaneça positiva.",
    "explicacao": "Passo 1: A concessão permite que o crítico mostre sobriedade: ele não faz mera propaganda cega.\nPasso 2: Ao colocar o ponto negativo na oração subordinada concessiva ('apesar de...') e o elogio na oração principal ('o episódio final compensa...'), a impressão final predominante na mente do leitor é a do clímax satisfatório.",
    "dificuldade": "media",
    "tema": "Lógica Argumentativa & Discurso",
    "contemImagem": false
  }
];
