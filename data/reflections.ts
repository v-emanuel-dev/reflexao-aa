export type Reflection = {
  id: string
  slug: string
  title: string
  dateLabel: string
  fullDate: string
  excerpt: string
  source: string
  body: string[]
  quote: string
  tags: string[]
}

export const reflections: Reflection[] = [
  {
    id: '2026-05-14',
    slug: 'e-bom-ser-eu-mesmo',
    title: 'É bom ser eu mesmo',
    dateLabel: '14/05',
    fullDate: '14 de maio de 2026',
    excerpt:
      'Inúmeras vezes os novatos procuraram guardar para si certos fatos de suas vidas... desviaram-se para métodos mais fáceis... mas, não aprenderam o suficiente sobre a humildade...',
    source: 'Alcoólicos Anônimos, p. 93 e 94 ou p. 101 e 102',
    quote:
      'Humildade é a capacidade de olhar para mim mesmo e aceitar, com honestidade, o que vejo.',
    body: [
      'Humildade soa muito como humilhação mas, na realidade, ela é a capacidade de olhar para mim mesmo – e honestamente aceitar o que vejo.',
      'Não preciso ser o “mais esperto” nem o “mais estúpido” ou qualquer outro “mais”. Finalmente é muito bom ser “eu” mesmo.',
      'É mais fácil para mim aceitar-me se compartilhar toda a minha vida. Se não posso compartilhar nas reuniões, então é melhor ter um padrinho – alguém com que eu possa compartilhar “certos fatos” que podem me levar de volta à bebida e para a morte.',
      'Preciso praticar todos os Passos. Preciso do Quinto Passo para aprender a verdadeira humildade. Métodos mais fáceis não funcionam.'
    ],
    tags: ['Humildade', 'Aceitação', 'Quinto Passo']
  },
  {
    id: '2026-05-13',
    slug: 'coragem-em-pequenos-gestos',
    title: 'Coragem em pequenos gestos',
    dateLabel: '13/05',
    fullDate: '13 de maio de 2026',
    excerpt: 'A serenidade raramente chega como ruptura. Em geral, nasce de uma escolha simples repetida com honestidade.',
    source: 'Conteúdo mockado para navegação contextual',
    quote: 'A próxima decisão honesta pode ser pequena, mas não é irrelevante.',
    body: [
      'A prática diária transforma intenção em caminho. O que parecia impossível ganha contorno quando é dividido em gestos simples.',
      'Hoje, posso escolher não resolver toda a vida. Posso apenas cuidar do próximo passo com presença.'
    ],
    tags: ['Serenidade', 'Rotina']
  },
  {
    id: '2026-05-15',
    slug: 'um-dia-com-mais-clareza',
    title: 'Um dia com mais clareza',
    dateLabel: '15/05',
    fullDate: '15 de maio de 2026',
    excerpt: 'Clareza não é ausência de dúvida. É a disposição de caminhar sem negociar com aquilo que já se sabe ser essencial.',
    source: 'Conteúdo mockado para navegação contextual',
    quote: 'A clareza amadurece quando a ação acompanha a consciência.',
    body: [
      'Nem sempre recebo respostas completas. Ainda assim, posso agir de acordo com o que já compreendi.',
      'Quando simplifico o dia, a mente encontra menos desculpas para se afastar do essencial.'
    ],
    tags: ['Clareza', 'Ação']
  }
]

export const todayReflection = reflections[0]
