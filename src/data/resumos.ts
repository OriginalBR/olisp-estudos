import { ResumoTeorico } from '../types';

export const RESUMOS_TEORICOS: ResumoTeorico[] = [
  {
    id: 'resumo-morfologia',
    bimestre: 1,
    tema: 'Morfologia',
    titulo: 'Morfologia: Afixos, Parassíntese e Neologismos',
    pontosChave: [
      'Estrutura: Radical (núcleo semântico) + Afixos (prefixos antes, sufixos depois) + Vogal Temática + Desinências.',
      'Parassíntese vs. Prefixal e Sufixal: Na parassíntese a anexação de prefixo e sufixo é simultânea (se remover um afixo, a palavra NÃO existe: envernizar -> não existe *vernizar nem *enverniz). Na derivação prefixal e sufixal, a anexação é independente (deslealdade -> existem desleal e lealdade).',
      'Neologismo Lexical (invenção de novo vocábulo: viralizar, tuitagem) vs. Neologismo Semântico (palavra antiga com novo significado: cancelar pessoas nas redes, navegar na web).',
      'Xenismo (grafia estrangeira mantida: feedback, delivery) vs. Empréstimo Adaptado (aportuguesado às regras fonéticas: xampu, leiaute, estresse).'
    ],
    comoReconhecer: 'Questões que pedem classificação de derivação, decomposição mórfica de radicais e sufixos, ou identificação de termos da cultura digital e neologismos de autores modernos.',
    dicaDeResolucao: 'Faça o "teste da retirada do afixo": tampe o prefixo; se a palavra não existir na língua portuguesa, tampe o sufixo; se também não existir, é PARASSÍNTESE. Para neologismos: o significante já existia no dicionário antigo? Se sim, é semântico; se a palavra é inédita, é lexical.',
    exemploResolvido: 'Anoitecer (a- + noit- + -ecer) -> Não existe *anoite nem *noitecer = Parassíntese. Desvalorização -> Existem desvalorizar e valorização = Prefixal e Sufixal.'
  },
  {
    id: 'resumo-sintaxe',
    bimestre: 1,
    tema: 'Sintaxe',
    titulo: 'Sintaxe: Regência, Crase, Transitividade e Orações Adjetivas',
    pontosChave: [
      'Transitividade: VTD (liga-se sem preposição ao Objeto Direto) | VTI (liga-se por preposição obrigatória ao Objeto Indireto) | VTDI (possui ambos os complementos).',
      'Regência verbal crítica: Aspirar (VTD = inalar; VTI com preposição "a" = desejar, almejar vaga) | Assistir (VTD = socorrer; VTI com preposição "a" = ver, presenciar jogo) | Visar (VTI com preposição "a" = ter como meta).',
      'Crase (à): Fusão de preposição "a" + artigo "a". PROIBIDA antes de verbos, palavras masculinas e pronomes indefinidos/pessoais. OBRIGATÓRIA em locuções adverbiais femininas (às pressas, à noite, às vezes).',
      'Orações Adjetivas: Explicativa (COM vírgulas) = refere-se a TODOS do conjunto (generalização). Restritiva (SEM vírgulas) = restringe a APENAS ALGUNS do conjunto (delimitação).'
    ],
    comoReconhecer: 'Questões de pontuação que mudam o sentido global da sentença, identificação de complementos verbais (OD vs OI) ou detecção de desvios de regência verbal e uso do acento grave.',
    dicaDeResolucao: 'Para crase: troque o substantivo feminino por um equivalente masculino (ex: "escola" por "colégio"). Virou "ao"? Há crase! Virou "o" ou "a"? Não há crase. Para orações adjetivas: "Com vírgula = todo mundo; Sem vírgula = só quem estudou".',
    exemploResolvido: '"O candidato aspira a uma vaga" (Correto: almejar = VTI). "Os cientistas, que buscam a cura, merecem apoio" (Explicativa: todos os cientistas buscam a cura e todos merecem apoio).'
  },
  {
    id: 'resumo-semantica-jakobson',
    bimestre: 1,
    tema: 'Semântica & Pragmática',
    titulo: 'Semântica: Conotação, Funções da Linguagem e Intertextualidade',
    pontosChave: [
      'Denotação (sentido literal, primeiro, dicionarizado e objetivo) vs. Conotação (sentido figurado, simbólico, polissêmico e subjetivo).',
      'As 6 Funções de Roman Jakobson: Emotiva (foco no emissor/1ª pessoa, sentimentos) | Conativa/Apelativa (foco no receptor/2ª pessoa, verbos imperativos, slogans) | Referencial (foco no referente, dados objetivos, jornais) | Metalinguística (o código explicando a si mesmo, dicionários) | Fática (foco no canal, saudações: "alô?", "entende?") | Poética (foco no formato estético, métrica, rimas).',
      'Intertextualidade: Paráfrase (reafirmação da mensagem com outras palavras, mantendo o sentido) vs. Paródia (recriação com tom crítico, satírico, cômico ou subversivo).'
    ],
    comoReconhecer: 'Análise de cartazes publicitários, campanhas de conscientização, verbetes, ou confrontação de poemas modernos com textos clássicos da literatura.',
    dicaDeResolucao: 'Identifique o foco comunicativo: Verbos no imperativo ordenando ou persuadindo o leitor? -> Função Conativa. Texto de dicionário ou poema que fala sobre escrever? -> Metalinguagem. Texto poético que quebra a expectativa de um clássico com crítica social? -> Paródia.',
    exemploResolvido: 'Cartaz "Doe sangue e salve vidas: faça sua parte!" -> Função Conativa. Oswald de Andrade trocando "palmeiras" por "palmares" -> Paródia crítica ao Romantismo ufanista.'
  },
  {
    id: 'resumo-figuras-linguagem',
    bimestre: 2,
    tema: 'Figuras de Linguagem & Estilística',
    titulo: 'Estilística: Figuras de Linguagem e Heterônimos de Fernando Pessoa',
    pontosChave: [
      'Metáfora: Comparação implícita sem conectivo comparativo ("Ele era uma fera no jogo").',
      'Metonímia: Substituição por proximidade conceitual ou material (o autor pela obra: "ler Machado"; o continente pelo conteúdo: "beber dois copos"; o efeito pela causa: "viver do suor").',
      'Antítese (oposição de ideias que coexistem logicamente: dia x noite) vs. Paradoxo/Oximoro (fusão de ideias inconciliáveis que violam a lógica formal: "silêncio ensurdecedor", "fogo que arde sem se ver").',
      'Fernando Pessoa e Heterônimos: Alberto Caeiro (o mestre sensorial da natureza pura, anti-filosofia: "Pensar é estar doente dos olhos") | Ricardo Reis (neoclássico, latinizante, estoico, carpe diem) | Álvaro de Campos (futurista, urbano, máquinas, dor existencial moderna) | Fernando Pessoa Ortônimo (racionalização da dor: "O poeta é um fingidor").'
    ],
    comoReconhecer: 'Identificação de figuras de estilo em poesias e crônicas ou diferenciação de heterônimos pessoanos por estilo vocabular e filosofia estética.',
    dicaDeResolucao: 'Diferença rápida: Antítese pode acontecer na realidade física (trabalhar de dia e dormir à noite); Paradoxo anula a lógica (um silêncio não pode emitir som ensurdecedor). Para Pessoa: se rejeita pensar e só contempla a árvore -> Caeiro; se fala de locomotivas e fúria moderna -> Álvaro de Campos.',
    exemploResolvido: '"O silêncio ensurdecedor da sala denunciava o pânico" -> Paradoxo / Oximoro. "Alberto Caeiro recusa teorias metafísicas para ver as coisas como elas são".'
  },
  {
    id: 'resumo-sociolinguistica',
    bimestre: 1,
    tema: 'Variação Linguística & Sociolinguística',
    titulo: 'Sociolinguística: Tipos de Variação, Preconceito e Literatura Marginal',
    pontosChave: [
      '4 Dimensões da Variação: Diatópica/Regional (geográfica: mandioca x aipim) | Diastrática/Social (classes sociais, idade, escolaridade, gírias) | Diafásica/Estilística (grau de formalidade do contexto) | Diacrônica/Histórica (tempo: vossa mercê -> você -> cê).',
      'Preconceito Linguístico: Não existem variedades inferiores ou superiores. A norma popular opera sob o princípio da economia mórfica (marcação de plural restrita ao pronome inicial "nós foi", "os menino"), possuindo sistematicidade e eficácia comunicativa.',
      'Poesia Falada (Slam) e Literatura Periférica: Carolina Maria de Jesus (Quarto de Despejo) e poetas de slam utilizam a oralidade e a linguagem popular como potência poética e denúncia política contra a desigualdade.'
    ],
    comoReconhecer: 'Enunciados com falas regionais, transcrições de conversação coloquial, poemas de slam ou discussões sobre norma-padrão vs. preconceito linguístico.',
    dicaDeResolucao: 'Em olimpíadas e provas de linguística, NUNCA assinale alternativas que considerem a fala popular como "erro lógico", "atraso" ou "deficiência intelectual". Escolha sempre respostas que valorizem a adequação contextual, a regra própria e a riqueza expressiva.',
    exemploResolvido: 'A construção "nós foi ao shopping" constitui variação diastrática com simplificação da desinência número-pessoal por economia de linguagem, não erro lógico de raciocínio.'
  },
  {
    id: 'resumo-historia-lingua',
    bimestre: 1,
    tema: 'Etimologia & História da Língua',
    titulo: 'História da Língua: Cantigas Medievais, Evolução Fonética e Quinhentismo',
    pontosChave: [
      'Cantigas Medievais (Galego-Português): Cantiga de Amigo (eu lírico feminino, saudade do namorado ausente "amigo", confidência com a natureza/mar de Vigo, paralelismo e refrão) vs. Cantiga de Amor (eu lírico masculino, vassalagem amorosa, senhora inacessível, dor da "coita de amor").',
      'Evolução Fonética: Queda de consoantes intervocálicas do latim para o português (síncope de -l- e -n-: luna -> lũa -> lua; dolore -> dor).',
      'Quinhentismo (Carta de Pero Vaz de Caminha, 1500): Literatura informativa e etnográfica. Articula a dupla motivação mercantil-religiosa: exploração de riquezas da terra ("em se plantando tudo dá") + dever de catequese e salvação das almas indígenas.'
    ],
    comoReconhecer: 'Trechos de textos líricos em galego-português medieval ou trechos da literatura de viajantes e cronistas coloniais do século XVI.',
    dicaDeResolucao: 'Para cantigas: voz de mulher lamentando saudades do namorado perto do mar e com refrão repetido? -> Cantiga de Amigo. Para Caminha: lembre-se do duplo interesse colonial -> Comercial/Econômico + Católico/Missionário.',
    exemploResolvido: 'Martim Codax ("Ondas do mar de Vigo, se vistes meu amigo?") -> Cantiga de Amigo com estrutura paralelística estrófica.'
  },
  {
    id: 'resumo-logica-discurso',
    bimestre: 2,
    tema: 'Lógica Argumentativa & Discurso',
    titulo: 'Argumentação: Falácias, Tipologia e Arquitetura Textual',
    pontosChave: [
      'Tipos de Argumentos: Autoridade Científica (citação de especialistas/OMS) | Dados Estatísticos empíricos | Relação de Causa e Efeito | Exemplificação empírica.',
      'Falácias Lógicas Comuns: Ad Hominem (atacar a pessoa e caráter do debatedor em vez do argumento) | Espantalho (distorcer ou caricaturar a posição do rival para atacá-la com facilidade) | Falsa Causa / Post hoc (assumir que sucessão temporal é causalidade) | Ad Populum (alegar que é verdade porque a maioria concorda).',
      'Estrutura do Parágrafo Argumentativo: Tópico Frasal (declaração da tese nuclear na abertura) + Desenvolvimento (provas, dados e relações lógicas) + Conclusão.',
      'Texto Teatral: Rubricas/Didascálias (orientações do autor sobre gestos, iluminação, tom de voz e movimento) + Réplicas (falas diretas).'
    ],
    comoReconhecer: 'Transcrições de debates, editoriais jornalísticos, análises de trechos teatrais e identificação de falácias argumentativas em diálogos.',
    dicaDeResolucao: 'Se alguém responder a um dado factual com ofensas à competência pessoal do interlocutor ("Você nem sabe dirigir!"), marque Ad Hominem. Se distorceu uma proposta com um exagero ridículo ("Quer que todos andem como tartaruga!"), marque Espantalho.',
    exemploResolvido: 'Debatedor A usa dados da OMS (Argumento de Autoridade/Estatístico). Debatedor B ataca A dizendo que ele é incompetente (Falácia Ad Hominem).'
  },
  {
    id: 'resumo-literaturas-africanas',
    bimestre: 3,
    tema: 'Linguística de Contato & Variedades',
    titulo: 'Linguística de Contato: Literaturas Africanas e Marcas de Oralidade',
    pontosChave: [
      'Pluralidade das "Literaturas Africanas": O uso do plural reconhece a diversidade cultural de nações independentes (Angola, Moçambique, Cabo Verde, Guiné-Bissau) e a coexistência do português com línguas maternas locais (Quimbundo, Umbundo, Changana, Crioulo).',
      'Apropriação Pós-Colonial: Escritores africanos (Pepetela, Luandino Vieira, Mia Couto) reinventam a norma europeia, introduzindo sintaxe, musicalidade e léxico africano como afirmação de soberania cultural.',
      'Marcas Linguísticas em Contos Angolanos e Moçambicanos: Léxico banto integrado (musseque = bairro periférico; cubata = habitação simples; Kalunga = mar/além) | Repetição verbal ("chorou, chorou, chorou") como marcador de aspecto durativo/intensivo da tradição oral | Neologismos inventivos em Mia Couto (ninharice = ninharia + -ice de tolice).'
    ],
    comoReconhecer: 'Textos literários angolanos e moçambicanos com léxico banto, oralidade marcada ou construções neológicas lúdicas.',
    dicaDeResolucao: 'A repetição de palavras em contos orais africanos não é vício de linguagem, mas sim recurso semântico para indicar a duração contínua ou a intensidade de uma ação no tempo (aspecto iterativo/durativo).',
    exemploResolvido: 'Em "O drama de Vavó Tutúri", a inserção de vocábulos quimbundo e a tripla repetição do verbo "chorou" reforçam o vínculo comunitário e a extensão do sofrimento da personagem.'
  },
  {
    id: 'resumo-semiotica-concretismo',
    bimestre: 1,
    tema: 'Semiótica & Multimodalidade',
    titulo: 'Semiótica: Charge vs. Cartum e Poesia Concreta Verbivocovisual',
    pontosChave: [
      'Linguagem Multimodal: Integração indissociável entre texto verbal (palavras) e linguagem visual (expressão facial, cores, diagramação e enquadramento).',
      'Charge vs. Cartum: Charge é TEMPORAL/HISTÓRICA (atrelada a fatos políticos ou notícias passageiras recentes da semana) | Cartum é ATEMPORAL/UNIVERSAL (critica o comportamento humano, costumes sociais e dilemas existenciais perenes).',
      'Poesia Concreta (Haroldo de Campos, Augusto de Campos, Décio Pignatari): Poema-objeto verbivocovisual que rompe com o verso linear. O espaço gráfico e a tipografia na página constituem a própria mensagem semântica (ex: poema Lixo / Luxo).'
    ],
    comoReconhecer: 'Questões com tiras de quadrinhos, charges políticas, imagens publicitárias multimodais ou poemas visuais geométricos concretistas.',
    dicaDeResolucao: 'Para Charge x Cartum: Se a piada depende de conhecer um político real ou escândalo atual, é Charge; se você entender a piada hoje ou daqui a 50 anos (ex: homem preso ao celular), é Cartum. No Concretismo: a disposição das letras forma um conceito visual direto.',
    exemploResolvido: 'O poema "Lixo / Luxo" de Augusto de Campos escreve a palavra LUXO com centenas de pequenas palavras "lixo", demonstrando visualmente a origem degradante do consumo supérfluo.'
  }
];
