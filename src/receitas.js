const receitas = [
  //#region Lunch / Dinner

  //#region Chicken

  // Stroganoff
  {
    id: "strogonoff-frango",
    nome: "Strogonoff de frango",
    categoria: "almoco/jantar",
    img: "chicken-strogonoff.jpg",
    ingredientes: [
      "3 peitos de frango em cubos",
      "300g molho de tomate",
      "1 milho em lata",
      "250g creme de leite",
      "Ketchup",
      "Mostarda",
      "Molho inglês",
      "Batata palha",
      "1 dente de alho",
      "1/2 cebola picada",
      "1 colher de manteiga",
    ],
    passos: [
      "Em uma panela doure a cebola e o alho na manteiga, adicione o frango. Cozinhe até que toda a água do frango seque",
      "Adicione o molho de tomate, se necessário adicione água até cobrir o frango",
      "Adicione o ketchup, a mostarda, o molho inglês e o milho. Tempere com sal e pimenta",
      "Quando começar a cozinhar desligue o fogo e adicione o creme de leite. Caso necessário misture um pouco de farinha para engrossar a consistência do molho",
    ],
    complexidade: "Fácil",
    porcoes: 4,
    tempoTotal: "45",
    tempoCozimento: "30",
    tempoPreparo: "15",
    picante: 0,
    tags: ["Frango", "Almoço", "Jantar"],
  },
  // Teryaki
  {
    id: "frango-teriyaki",
    nome: "Frango Teriyaki",
    categoria: "almoco/jantar",
    img: "chicken-teriyaki.jpg",
    ingredientes: [
      "3 peitos de frango",
      "1 dente de alho",
      "3 colheres de sopa de shoyu",
      "2 colheres de sopa de vinho de arroz",
      "2/3 xícara de mel",
      "2 colheres de sopa de amido de milho (maisena)",
      "1 colher de sal de açúcar",
    ],
    passos: [
      "Corte o peito de frango em tiras, tempere com sal e pimenta",
      "Misture em uma tigela o shoyu, o vinho, o açúcar e o mel",
      "Deixe o peito de frango marinando por 30min",
      "Retire o frango e passe no amido de milho, cobrindo todos os lados",
      "Esquente óleo em uma frigideira e doure o frango de todos os lados",
      "Junte a marinada e deixe a carne cozinhar",
    ],
    complexidade: "Médio",
    porcoes: 4,
    tempoTotal: "45",
    tempoCozimento: "30",
    tempoPreparo: "15",
    picante: 0,
    tags: ["Frango", "Almoço", "Jantar"],
  },
  // Milanese
  {
    id: "milanesa-frango",
    nome: "Frango a milanesa",
    categoria: "almoco/jantar",
    img: "chicken-milanese.jpg",
    ingredientes: [
      "2 peitos de frango",
      "3 ovos",
      "Farinha",
      "Farinha de rosca",
      "Óleo pra fritar",
    ],
    passos: [
      "Corte os frangos em filés finos, tempere com sal e pimenta",
      "Coloque a farinha, a farinha de rosca e os ovos batidos em recipientes diferentes",
      "Mergulhe os filés na farinha de trigo, nos ovos e, por último, na farinha de rosca",
      "Aqueça o óleo em uma panela funda, frite os filés até ficarem dourados. Coloque os filés fritos em um prato com papel toalha para absorver o excesso de gordura",
    ],
    complexidade: "Médio",
    porcoes: 6,
    tempoTotal: "35",
    tempoCozimento: "10",
    tempoPreparo: "25",
    picante: 0,
    tags: ["Frango", "Almoço", "Jantar"],
  },
  // parmigiana
  {
    id: "parmegiana-frango",
    nome: "Parmegiana de frango",
    categoria: "almoco/jantar",
    img: "chicken-parmigiana.jpg",
    ingredientes: [
      "2 peitos de frango",
      "3 ovos",
      "Farinha",
      "Farinha de rosca",
      "Óleo pra fritar",
      "300g molho de tomate",
      "200g mussarela ralada",
    ],
    passos: [
      "Corte os frangos em filés finos, tempere com sal e pimenta",
      "Coloque a farinha, a farinha de rosca e os ovos batidos em recipientes diferentes",
      "Mergulhe os filés na farinha de trigo, nos ovos e, por último, na farinha de rosca",
      "Aqueça o óleo em uma panela funda, frite os filés até ficarem dourados. Coloque os filés fritos em um prato com papel toalha para absorver o excesso de gordura",
      "Coloque os filés em uma assadeira funda, acrescente o molho de tomate em cima dos filés e finalize com o queijo ralado",
      "Leve ao forno até derreter a mussarela",
    ],
    complexidade: "Médio",
    porcoes: 6,
    tempoTotal: "35",
    tempoCozimento: "10",
    tempoPreparo: "25",
    picante: 0,
    tags: ["Frango", "Almoço", "Jantar"],
  },
  // Chicken w/ Orange Sauce
  {
    id: "frango-molho-laranja",
    nome: "Frango com molho de laranja",
    categoria: "almoco/jantar",
    img: "orange-sauce-chicken.jpg",
    ingredientes: [
      "4 peitos de frango cortados em tiras",
      "400g mussarela fatiada",
      "400g presunto ou peito de peru",
      "4 laranjas pêra",
      "250g creme de leite",
      "50g manteiga",
      "1 dente de alho",
      "1/2 cebola picada",
      "Palitos de dente",
    ],
    passos: [
      "Tempere as tiras de frango com sal e pimenta",
      "Junte uma fatia de queijo e uma de presunto, caso necessário corte as fatias para ficarem da mesma expessura do frango",
      "Enrole o frango nas fatias e finalize com um palito de dente para segurar o enrolado",
      "Em uma frigideira grande derreta a manteiga e doure a cebola e o alho",
      "Junte os enrolados de frango, doure todos os lados",
      "Quando dourados tire os enrolados da frigideira e separe. Tire o suco das laranjas e misture na frigideira",
      "Quando borbulhar desligue o fogo, misture o creme de leite e volte os frangos para terminar de cozinhar",
    ],
    complexidade: "Médio",
    porcoes: 6,
    tempoTotal: "55",
    tempoCozimento: "20",
    tempoPreparo: "35",
    picante: 0,
    tags: ["Frango", "Almoço", "Jantar"],
  },
  // Chicken Pie
  {
    id: "torta-frango",
    nome: "Torta de frango",
    categoria: "almoco/jantar",
    img: "chicken-pie.jpg",
    ingredientes: [
      "2 peitos de frango",
      "500ml leite",
      "200ml de óleo de soja",
      "3 xícaras de farinha de trigo",
      "4 ovos",
      "2 colheres de café de fermento",
      "1 lata de milho",
      "100ml de molho de tomate",
      "Azeitonas picadas",
      "300g mussarela ralada",
    ],
    passos: [
      "Cozinhe o frango em água, desfie, tempere, misture o milho e as azeitonas e reserve",
      "Em um liquidificador bata o leite, o óleo, os ovos, a farinha e uma pitada de sal. Adicione o fermento por último",
      "Despeje metade da massa em uma assadeira, acrescente o frango desfiado por cima, finalize com o queijo",
      "Despeje o restante da massa. Leve ao forno 220° por 40min",
    ],
    complexidade: "Fácil",
    porcoes: 4,
    tempoTotal: "65",
    tempoCozimento: "30",
    tempoPreparo: "35",
    picante: 0,
    tags: ["Frango", "Almoço", "Jantar"],
  },
  // Pancake
  {
    id: "panqueca-frango",
    nome: "Panqueca de frango",
    categoria: "almoco/jantar",
    img: "chicken-pancake.jpg",
    ingredientes: [
      "2 peitos de frango desfiados e temperados",
      "3 ovos",
      "2 xícaras de fatrinha de trigo",
      "2 xícaras de leite",
      "2 colheres de sopa de manteiga",
      "Sal",
    ],
    passos: [
      "Bata os ovos, a farinha, o leite e o sal no liquidificador até atingir uma consistencia boa",
      "Aqueça uma frigideira e coloque um pouco de manteiga. Adicione a massa e deixe cozinhar de um lado",
      "Não adicione muita massa de uma vez, para que a panqueca não fique muito grossa",
      "Faça as panquecas até acabar a massa. Recheie com o frango, queijo e requeijão",
    ],
    complexidade: "Fácil",
    porcoes: 4,
    tempoTotal: "45",
    tempoPreparo: "15",
    tempoCozimento: "30",
    picante: 0,
    tags: ["Frango", "Almoço", "Jantar"],
  },
  // Fricasset
  {
    id: "fricassee-frango",
    nome: "Fricasse de frango",
    categoria: "almoco/jantar",
    img: "chicken-fricassee.jpg",
    ingredientes: [
      "2 peitos de frango desfiados",
      "1 lata de creme de leite",
      "2 lata de milho",
      "1 copo de requeijão",
      "100g azeitona picada",
      "200g mussarela ralada",
      "Batata palha",
    ],
    passos: [
      "Bata no liquidificador uma lata de milho, o requeijão, o creme de leite e um pouco dágua",
      "Misture a massa com o frango, o milho não batido, o queijo e as azeitonas em uma tigela grande",
      "Coloque em uma assadeira e leve ao forno até borbulhar",
      "Sirva com arroz e com batata palha por cima",
    ],
    complexidade: "Fácil",
    porcoes: 4,
    tempoTotal: "45",
    tempoPreparo: "15",
    tempoCozimento: "30",
    picante: 0,
    tags: ["Frango", "Almoço", "Jantar"],
  },
  // Cheesy Rice Chicken
  {
    id: "frango-arroz-queijo",
    nome: "Frango com arroz e molho branco",
    categoria: "almoco/jantar",
    img: "cheesy-rice-chicken.jpg",
    ingredientes: [
      "2 peitos de frango desfiado",
      "1 xícara de arroz",
      "1 lata de milho",
    ],
    passos: [
      "Cozinhe o arroz até ficar soltinho",
      "Misture o frango desfiado e o milho",
    ],
    complexidade: "Fácil",
    porcoes: 4,
    tempoTotal: "45",
    tempoCozimento: "30",
    tempoPreparo: "15",
    picante: 0,
    tags: ["Frango", "Almoço", "Jantar"],
  },

  //#endregion

  //#region Beef
  //a
  //#endregion

  //#region Pasta
  // a
  //#endregion

  //#endregion

  //#region Sides / Complements

  //#region Salad
  // a
  //#endregion

  //#region Potato

  // Potato Wedges
  {
    id: "batata-rustica",
    nome: "Batata Rústica",
    categoria: "side",
    img: "potato-wedges.jpg",
    ingredientes: [
      "4 batatas grandes",
      "Paprika, sal, pimenta, cuminho",
      "Azeite de oliva",
    ],
    passos: [
      "Lave as batatas e corte em 4, corte cada pedaço na metade novamente",
      "Junte todos os pedaços em uma tigela, adicione os temperos e o azeite, misture bem",
      "Unte uma assadeira com mais azeite e despeje as batatas. Tente não deixar um pedaço sobrepondo o outro",
      "Leve ao forno alto por 25-30min. Quando o lado que estiver pra baixo dourar vire todas as fatias e cozinhe até que o segundo lado doure",
      "Quando estiverem prontos retire o acesso de azeite com papel toalha. Se necessário ajuste o sal antes de servir",
    ],
    complexidade: "Fácil",
    tempoTotal: "45",
    tempoPreparo: "15",
    tempoCozimento: "30",
    picante: 0,
    porcoes: 4,
    tags: ["Batata", "Side"],
  },

  //#endregion

  //#region Sides
  // a
  //#endregion

  //#endregion

  //#region Drinks

  //#region Drinks
  // a
  //#endregion

  //#region Cocktails
  // a
  //#endregion

  //#endregion

  //#region Sweets

  //#region Deserts
  //a
  //#endregion

  //#endregion
];
export default receitas;
