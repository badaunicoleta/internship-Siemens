// Array of Objects
const quiz = [
  {
    q:'What is the capital of France?',
    options:['London','Paris','Berlin','Madrid'],
    answer:1
  },
  {
    q:'What is 45 times 1 million?',
    options:['45,000,000','45','450','All of the above'],
    answer:0
  },
  {
    q:'What things are needed for photosynthesis?',
    options:['C6,H12,and O6','CO2,H2O, and Light','Protons, and Electrons','All of the above'],
    answer:1
  },
  {
    q:'What is the formula for Density?',
    options:['D=M+V','D=M-V','D=M/V','D=M*V'],
    answer:2
  },
  {
    q:'What letter represents an imaginary number?',
    options:['a','i','l','x'],
    answer: 1
  },
  {
    q:'What scientific instrument measures air pressure in units known as atmospheres?',
    options: ['voltmeter','ampermeter','nanometer','barometer'],
    answer: 3
  },
  {
    q:'Amethyst and citrine are extra-pretty varieties of what common mineral that is great for Scrabble?',
    options: ['quartz','gold','salt','platinum'],
    answer: 0
  },
  {
    q:'What is the type of number expressed as a pair of a real and an imaginary number?',
    options: ['real number','rational number','complex number','integer number'],
    answer: 2,
  },
  {
    q:'Which of the four standard bases in DNA typically pairs with thymine?',
    options: ['adenine','cytosine','guanine','all of the above'],
    answer: 0,
  },
  {
     q: "(2i)(3i)?",
     options: ["5i","6i","-5","-6"],
     answer: 3,
  },
  {
    q: "How do you write a complex number?",
    options: ["a-bi","a+bi","ai+b","ai-b"],
    answer: 1,
  },
  {
    q: "(4 - 2i) - (3 + 6i)?",
    options: ["7 - 4i","1 + 4i","1 - 8i","7 - 8i"],
    answer: 2,
  },
  {
    q: "(3 + 2i) + (4 - 5i)?",
    options: ["7 + 7i","1 - 7i","1 - 3i","7 - 3i"],
    answer: 3,
  },
  {
    q: "Find the sum. (5-2i) + (-7+8i)?",
    options: ["1 + 7i","-2+6i","12 - 3i","7 + 4i"],
    answer: 1,
  },
  {
    q: "-6i+3i?",
    options: ["-3i","-9","+3i","4i"],
    answer: 0,
  },
  {
    q: "3i+5i+2i+10?",
    options: ["-10-10i","-11+11i","-11","10+10i"],
    answer: 3,
  },
  {
    q: "What is the capital of Germany?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: 2,
  },
  {
    q: "What is the capital of Spain?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: 3,
  },
  {
    q: "What is the capital of England?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: 0,
  },
  {
    q: "What is the capital of Romania?",
    options: ["Bucharest", "Paris", "London", "Madrid"],
    answer: 0,
  },
  {
    q: "What is the capital of Hungary?",
    options: ["Bucharest", "Prague", "Budapest", "Sofia"],
    answer: 2,
  },
  {
    q: "What is the capital of Czech Republic?",
    options: ["Bucharest", "Prague", "Budapest", "Sofia"],
    answer: 1,
  },
  {
    q: "What is the capital of Bulgaria?",
    options: ["Bucharest", "Prague", "Budapest", "Sofia"],
    answer: 3,
  },
  {
    q: "What is the capital of Italy?",
    options: ["Rome", "Prague", "Budapest", "Sofia"],
    answer: 0,
  },
  {
    q: "What is the capital of Sweden?",
    options: ["Rome", "Prague", "Stockholm", "Sofia"],
    answer: 2,
  },
  {
    q: "What is the capital of Norway?",
    options: ["Rome", "Oslo", "Stockholm", "Sofia"],
    answer: 1,
  },
  {
    q: "What is the capital of Finland?",
    options: ["Helsinki", "Oslo", "Stockholm", "Sofia"],
    answer: 0,
  },
  {
    q: "What is the capital of Russia?",
    options: ["Helsinki", "Oslo", "Stockholm", "Moscow"],
    answer: 3, 
  },
  {
    q: "What is the capital of Greece?",
    options: ["Athens", "Oslo", "Stockholm", "Moscow"],
    answer: 0,
  },
  {
    q: "What is the capital of Portugal?",
    options: ["Athens", "Lisbon", "Stockholm", "Madrid"],
    answer: 1,
  },
  {
    q: "In which civilization dot patterns were first employed to represent numbers?",
    options: ["Japanese", "Chinese", "korean", "vietnamese"],
    answer: 1,
  },
  {
    q: "The ancient Babylonians had their number system based on?",
    options: ["50", "70", "10", "60"],
    answer: 3, 
  },
  {
    q: "Which number system was commonly employed in various ancient civilizations and is eventoday in some regions?",
    options: ["five", "four", "six", "seven"],
    answer: 0,
  },
  {
    q: "In which ancient civilization, numbers were for the first time represented by words?",
    options: ["indian", "chinese", "german", "italian"],
    answer: 0,
  },
  {
    q: "In which numerals X, M, V, L, etc. belong to?",
    options: ["roman numerals", "arabic numerals", "egyptean numerals", "cistercian numerals"],
    answer: 0,
  },
  {
    q: "In which ancient civilization, odd and even numbers were divided into two sets, the odd onesdenoted as males and the even females?",
    options: ["chinese", "japanese", "vietnamese", "indian"],
    answer: 0,
  },
  {
    q: "Among the numbers Fibonacci, Kaprekar, Mersenne and Figurate numbers which one isancient in origin?",
    options: ["kaprekar", "mersenne","fibonacci", "figurate"],
    answer: 2,
  },
  {
    q: "Apart from the number system, ancient Indians are held in high esteem for their contributions to the field. What is it?",
    options: ["indeterminate equations", "determinate equations","known equations", "unknown equations"],
    answer: 0,
  },
  {
    q: "Who wrote an elaborate history of Greek geometry from its earliest origins?",
    options: ["Eudemus", "Proculs","Simplicius", "Thales"],
    answer: 0,
  },
  {
    q: "Which natural phenomenon was employed in ancient times to estimate the heights objects?",
    options: ["electromagnetic radiation","solar eclipse", "moon eclipse", "Shadows cast by the sun"],
    answer: 3,
  },
  {
    q: "Who published a treatise on trigonometry which contains the earliest use of our abbreviations:sin, tan, sec, for sine, tangent and secant?",
    options: ["Gregorio de Saint","Albert Gerard", "John Napier", "Johann Herdde"],
    answer: 1,
  },
  {
    q: "He has been described as the greatest 'might have been' in the history of Mathematics",
    options: ["Blaise Pascal","Bonaventura Cavalier", "Gaspard Monge", "Gregorio de Saint"],
    answer: 0, 
  },
  {
    q: "He invented a method of determining the optical values of a linear function subject to certain constraints. This method is known as linear programming? Who was he?",
    options: ["George Canter"," George Dantzig", "Bertrand Russel", "Richard Dedekind"],
    answer: 1, 
  },
  {
    q: "The first to discover 'zero'",
    options: ["Babylonian","Egyptian", "Chinese", "Indian"],
    answer: 3,
  },
  {
    q: "He achieved real fame when he submitted a paper to the Institute solving one of Fermat's claimson polygonal numbers made to Mersenne. He also wrote the memoir on definite integrals thatlater became the basis of his theory of complex functions.",
    options: ["Evariste Galois","Bernhard Riemann", "Georg Cantor", "Augustin Cauchy"],
    answer: 3, 
  },
  {
    q: "Italian Mathematician during the Renaissance period who was credited for solving one of theoutstanding ancient problems of mathematics, cubic equations.",
    options: ["Niccolo Tartaglia","Scipione del Ferro", "Gerolamo Cardano", "Regiiomontanus"],
    answer: 1,
  },
  {
    q: "It is centered on the dialogues and publications. It was also the time of religious innovation.",
    options: ["early enlightenment","high enlightenment", "late enlightenment", "mid enlightenment"],
    answer: 1, 
  },
  {
    q: " It was an intellectual movement that originated in Western Europe as a countermovement to the late 18th centuryenlightenment.",
    options: ["age of enlightenment","digital age", "modern science development", "romanticism"],
    answer: 3,
  },
  {
    q: "He called nature 'a history of the path to freedom' and encouraged a reunion of man's spirit with nature",
    options: ["Jean Baptiste Lamarck","Johann Goethe", "Friedrich Schelling", "Alexander Humboldt"],
    answer: 1,
  },
  {
    q: "Most important man of science in Britain who can be described as a Romantic",
    options: ["Humphry Davy","Johann Goethe", "Friedrich Schelling", "Alexander Humboldt"],
    answer: 0, 
  }
]


