import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import './css/style.css'; 


const employees = [
  {
  "ID": 0,
  "Name": "Adrian Mata",
  "Email": "amataodev@gmail.com",
  "Type": "FTE",
  "Role": "Others",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "CALCULATORS": [
  "LOGIC",
  "VBA"
  ],
  "FLOWS": [
  "POWERAUTOMATE"
  ],
  "WEBSITES": [
  "POWERBI",
  "POWERAPPS"
  ]
  }
  },
  {
  "ID": 1,
  "Name": "Carlos Delgado",
  "Email": "carlosdm@templet.io",
  "Type": "FTE",
  "Role": "Video",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "DESIGN PIECES": [
  "EDITING",
  "MONTAGE",
  "CREATIVE"
  ],
  "VIDEOS": [
  "ANIMATION",
  "CLIPEDITING",
  "TEMPLATEEDITING",
  "ADVANCEDEDITING",
  "STORYBOARDING"
  ]
  }
  },
  {
  "ID": 2,
  "Name": "Daniel Mata",
  "Email": "daniel@templet.io",
  "Type": "FTE",
  "Role": "Program",
  "Rate": "PRO",
  "ResType_Skill": {
  "SHEETS": [
  "OUTLINECREATION",
  "INTERVIEW"
  ],
  "PLANS": [
  "SCHEDULING",
  "SHARING",
  "QA"
  ],
  "WEBSITES": [
  "UIDESIGN"
  ]
  }
  },
  {
  "ID": 3,
  "Name": "David Mata",
  "Email": "david@templet.io",
  "Type": "FTE",
  "Role": "HTML",
  "Rate": "PRO",
  "ResType_Skill": {
  "WEBSITES": [
  "HTML",
  "POWERAPPS",
  "JAVASCRIPT",
  "BACKEND",
  "DATABASE",
  "EXCEL"
  ]
  }
  },
  {
  "ID": 4,
  "Name": "Dessiree Carias",
  "Email": "dess.carias@templet.io",
  "Type": "FTE",
  "Role": "PM",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "": [
  ""
  ]
  }
  },
  {
  "ID": 5,
  "Name": "Diego Rondón",
  "Email": "diego.rondon@templet.io",
  "Type": "FTE",
  "Role": "Design",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "DESIGN PIECES": [
  "FORMATTING",
  "EDITING",
  "MONTAGE",
  "CREATIVE"
  ],
  "SHEETS": [
  "FORMATTING",
  "REFORMATTING",
  "CREATIVE"
  ],
  "SLIDE DECKS": [
  "FORMATTING",
  "REFORMATTING",
  "CREATIVE"
  ]
  }
  },
  {
  "ID": 6,
  "Name": "Eduardo Sánchez",
  "Email": "eduardo@templet.io",
  "Type": "FTE",
  "Role": "HTML",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "WEBSITES": [
  "HTML",
  "FRONTEND"
  ],
  "EMAILS": [
  "HTML"
  ]
  }
  },
  {
  "ID": 7,
  "Name": "Erick Hernández",
  "Email": "erickhs@templet.io",
  "Type": "FTE",
  "Role": "PM",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "WEBSITES": [
  "CREATIVETHINKING",
  "PROBLEMSOLVING",
  "ORGANIZATION",
  "COMMUNICATION",
  "RESEARCH",
  "TRANSLATION",
  "ASANA",
  "TASKCREATOR"
  ],
  "EMAILS": [
  "HTML"
  ]
  }
  },
  {
  "ID": 8,
  "Name": "Jaime Velasquez",
  "Email": "jaimev@templet.io",
  "Type": "FTE",
  "Role": "PM",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "PLANS": [
  "SCHEDULING",
  "SHARING",
  "QA"
  ]
  }
  },
  {
  "ID": 9,
  "Name": "Javier Acevedo",
  "Email": "j.acevedo@templet.io",
  "Type": "FTE",
  "Role": "Program",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "PLANS": [
  "SCHEDULING",
  "SHARING",
  "QA"
  ],
  "WEBSITES": [
  "UIDESIGN"
  ],
  "VIDEOS": [
  "ANALYSIS",
  "SCREENRECORDING"
  ]
  }
  },
  {
  "ID": 10,
  "Name": "Juan Sebastián Parra",
  "Email": "js.parra@templet.io",
  "Type": "FTE",
  "Role": "Design",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "SHEETS": [
  "FORMATTING",
  "REFORMATTING",
  "ANALYTIC"
  ],
  "SLIDE DECKS": [
  "FORMATTING",
  "REFORMATTING",
  "ANALYTIC"
  ],
  "EMAILS": [
  "FORMATTING",
  "REFORMATTING",
  "ANALYTIC"
  ],
  "CALCULATORS": [
  "FORMATTING"
  ]
  }
  },
  {
  "ID": 11,
  "Name": "Karen Serna",
  "Email": "karen.serna@templet.io",
  "Type": "FTE",
  "Role": "Design",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "SHEETS": [
  "FORMATTING",
  "REFORMATTING",
  "CREATIVE"
  ],
  "SLIDE DECKS": [
  "FORMATTING",
  "REFORMATTING",
  "CREATIVE"
  ],
  "EMAILS": [
  "FORMATTING",
  "REFORMATTING",
  "CREATIVE"
  ]
  }
  },
  {
  "ID": 12,
  "Name": "Mónica Sepúlveda",
  "Email": "monica@templet.io",
  "Type": "FTE",
  "Role": "PM",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "PLANS": [
  "SCHEDULING",
  "SHARING",
  "QA"
  ],
  "DESIGN PIECES": [
  "HIGHLEVELCREATIVE"
  ]
  }
  },
  {
  "ID": 13,
  "Name": "Oscar Cánchica",
  "Email": "oscar@sysbites.com.co",
  "Type": "FTE",
  "Role": "HTML",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "WEBSITES": [
  "HTML",
  "JAVASCRIPT",
  "BACKEND",
  "DATABASE"
  ]
  }
  },
  {
  "ID": 14,
  "Name": "Rafael Hernández",
  "Email": "rafael@templet.io",
  "Type": "FTE",
  "Role": "PM",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "SHEETS": [
  "OUTLINECREATION"
  ],
  "PLANS": [
  "SCHEDULING",
  "SHARING",
  "QA"
  ],
  "WEBSITES": [
  "UIDESIGN"
  ],
  "VIDEOS": [
  "ANALYSIS",
  "SCREENRECORDING"
  ]
  }
  },
  {
  "ID": 15,
  "Name": "Rafael Moreno",
  "Email": "r.moreno@templet.io",
  "Type": "FTE",
  "Role": "Video",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "DESIGN PIECES": [
  "EDITING",
  "MONTAGE",
  "CREATIVE"
  ],
  "VIDEOS": [
  "CLIPEDITING",
  "TEMPLATEEDITING",
  "ADVANCEDEDITING"
  ]
  }
  },
  {
  "ID": 16,
  "Name": "Shalanda Nicholson",
  "Email": "s.nicholson@templet.io",
  "Type": "FTE",
  "Role": "Program",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "SHEETS": [
  "PROOFREADING"
  ],
  "SLIDE DECKS": [
  "PROOFREADING"
  ]
  }
  },
  {
  "ID": 17,
  "Name": "Melani Diaz",
  "Email": "elisadm09@gmail.com",
  "Type": "FREELANCER",
  "Role": "Design",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "DESIGN PIECES": [
  "FORMATTING",
  "EDITING",
  "MONTAGE",
  "CREATIVE"
  ],
  "SHEETS": [
  "FORMATTING",
  "REFORMATTING",
  "CREATIVE"
  ],
  "SLIDE DECKS": [
  "FORMATTING",
  "REFORMATTING",
  "CREATIVE"
  ]
  }
  },
  {
  "ID": 18,
  "Name": "Daniel Anaya",
  "Email": "RetouchDC@gmail.com",
  "Type": "FREELANCER",
  "Role": "Design",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "EMAILS": [
  "FORMATTING",
  "REFORMATTING",
  "CREATIVE",
  "ANALYTIC"
  ],
  "WEBSITES": [
  "FORMATTING",
  "REFORMATTING",
  "CREATIVE",
  "ANALYTIC"
  ]
  }
  },
  {
  "ID": 19,
  "Name": "Johana Justinico",
  "Email": "johanajustinico@gmail.com",
  "Type": "FREELANCER",
  "Role": "Design",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "SHEETS": [
  "FORMATTING",
  "REFORMATTING"
  ],
  "SLIDE DECKS": [
  "FORMATTING",
  "REFORMATTING"
  ],
  "EMAILS": [
  "FORMATTING",
  "REFORMATTING"
  ]
  }
  },
  {
  "ID": 20,
  "Name": "Lucia Manrique",
  "Email": "lucia.a.lapiz@gmail.com",
  "Type": "FREELANCER",
  "Role": "Design",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "SHEETS": [
  "FORMATTING",
  "REFORMATTING"
  ],
  "SLIDE DECKS": [
  "FORMATTING",
  "REFORMATTING"
  ],
  "EMAILS": [
  "FORMATTING",
  "REFORMATTING"
  ]
  }
  },
  {
  "ID": 21,
  "Name": "Natalia Hernández",
  "Email": "natalia_hs@outlook.com",
  "Type": "FREELANCER",
  "Role": "Design",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "DESIGN PIECES": [
  "FORMATTING",
  "EDITING",
  "MONTAGE"
  ],
  "SHEETS": [
  "FORMATTING",
  "REFORMATTING"
  ],
  "SLIDE DECKS": [
  "FORMATTING",
  "REFORMATTING",
  "CREATIVE"
  ]
  }
  },
  {
  "ID": 22,
  "Name": "Pamela Bracho",
  "Email": "pamela.esser92@gmail.com",
  "Type": "FREELANCER",
  "Role": "Design",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "DESIGN PIECES": [
  "FORMATTING",
  "EDITING",
  "MONTAGE",
  "CREATIVE"
  ],
  "SHEETS": [
  "FORMATTING",
  "REFORMATTING",
  "CREATIVE"
  ],
  "SLIDE DECKS": [
  "FORMATTING",
  "REFORMATTING",
  "CREATIVE"
  ]
  }
  },
  {
  "ID": 23,
  "Name": "Carolina Meoniz",
  "Email": "caromeoniz@gmail.com",
  "Type": "FREELANCER",
  "Role": "Design",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "DESIGN PIECES": [
  "FORMATTING",
  "EDITING"
  ],
  "SHEETS": [
  "FORMATTING",
  "REFORMATTING"
  ],
  "SLIDE DECKS": [
  "FORMATTING",
  "REFORMATTING"
  ]
  }
  },
  {
  "ID": 24,
  "Name": "Carlos Escobar",
  "Email": "escobar@templet.io",
  "Type": "FREELANCER",
  "Role": "Video",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "VIDEOS": [
  "CLIPEDITING",
  "TEMPLATEEDITING",
  "ADVANCEDEDITING",
  "RECORDING"
  ]
  }
  },
  {
  "ID": 25,
  "Name": "Fidias Torres",
  "Email": "fidiasaudio@gmail.com",
  "Type": "FREELANCER",
  "Role": "Video",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "VIDEOS": [
  "AUDIONENHANCEMENT"
  ]
  }
  },
  {
  "ID": 26,
  "Name": "Ronald Molina",
  "Email": "anversocreativo@gmail.com",
  "Type": "FREELANCER",
  "Role": "Video",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "VIDEOS": [
  "CLIPEDITING",
  "ANIMATION",
  "TEMPLATEEDITING",
  "ADVANCEDEDITING"
  ]
  }
  },
  {
  "ID": 27,
  "Name": "Alfredo Pierantoni",
  "Email": "alfredo@fotoruido.com",
  "Type": "FREELANCER",
  "Role": "Video",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "VIDEOS": [
  "RECORDING"
  ]
  }
  },
  {
  "ID": 28,
  "Name": "Pablo Rodríguez",
  "Email": "pablogrodriguez@gmail.com",
  "Type": "FREELANCER",
  "Role": "Video",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "VIDEOS": [
  "CLIPEDITING",
  "ANIMATION",
  "TEMPLATEEDITING",
  "ADVANCEDEDITING"
  ]
  }
  },
  {
  "ID": 29,
  "Name": "Carlos Velez",
  "Email": "tenkarlos@gmail.com",
  "Type": "FREELANCER",
  "Role": "Video",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "VIDEOS": [
  "CLIPEDITING",
  "TEMPLATEEDITING",
  "ADVANCEDEDITING"
  ]
  }
  },
  {
  "ID": 30,
  "Name": "Rocio Luque",
  "Email": "rocioruizluque@gmail.com",
  "Type": "FREELANCER",
  "Role": "Video",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "DESIGN PIECES": [
  "EDITING",
  "MONTAGE",
  "CREATIVE"
  ],
  "VIDEOS": [
  "CLIPEDITING",
  "TEMPLATEEDITING",
  "ADVANCEDEDITING"
  ]
  }
  },
  {
  "ID": 31,
  "Name": "Calisa Paulson",
  "Email": "calisa.paulson@gmail.com",
  "Type": "FREELANCER",
  "Role": "Copywriting",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "SHEETS": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "SLIDE DECKS": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "EMAILS": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "WEBSITES": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ]
  }
  },
  {
  "ID": 32,
  "Name": "Janice Hughes",
  "Email": "janice@hugheswritting.com",
  "Type": "FREELANCER",
  "Role": "Copywriting",
  "Rate": "PRO",
  "ResType_Skill": {
  "SHEETS": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "SLIDE DECKS": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "EMAILS": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "WEBSITES": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ]
  }
  },
  {
  "ID": 33,
  "Name": "Jessica Coleman",
  "Email": "jessica@lamplighteragency.com",
  "Type": "FREELANCER",
  "Role": "Copywriting",
  "Rate": "PRO",
  "ResType_Skill": {
  "SHEETS": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "SLIDE DECKS": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "EMAILS": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "WEBSITES": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ]
  }
  },
  {
  "ID": 34,
  "Name": "Jessie Curnock",
  "Email": "jesscurnockcook@icloud.com",
  "Type": "FREELANCER",
  "Role": "Copywriting",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "SHEETS": [
  "COPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "SLIDE DECKS": [
  "COPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "EMAILS": [
  "COPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "WEBSITES": [
  "COPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ]
  }
  },
  {
  "ID": 35,
  "Name": "Paul Korzeniowski",
  "Email": "paulkorzen@aol.com",
  "Type": "FREELANCER",
  "Role": "Copywriting",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "SHEETS": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "SLIDE DECKS": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "EMAILS": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "WEBSITES": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ]
  }
  },
  {
  "ID": 36,
  "Name": "Gagan Kaur",
  "Email": "gagan@deepworkz.com",
  "Type": "FREELANCER",
  "Role": "Copywriting",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "SHEETS": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "SLIDE DECKS": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "EMAILS": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ],
  "WEBSITES": [
  "COPYWRITING",
  "CREATIVECOPYWRITING",
  "RESEARCHCOPYWRITING",
  "TRANSLATION",
  "PROOFREADING"
  ]
  }
  },
  {
  "ID": 37,
  "Name": "Steve Obrien",
  "Email": "steve@steveobrienvo.com",
  "Type": "FREELANCER",
  "Role": "Voice-Over",
  "Rate": "PRO",
  "ResType_Skill": {
  "VIDEOS": [
  "VOICEOVER"
  ]
  }
  },
  {
  "ID": 38,
  "Name": "Amanda Fellows",
  "Email": "amanda@amandafellowsvo.com",
  "Type": "FREELANCER",
  "Role": "Voice-Over",
  "Rate": "PRO",
  "ResType_Skill": {
  "VIDEOS": [
  "VOICEOVER"
  ]
  }
  },
  {
  "ID": 39,
  "Name": "Elysia Rotaru",
  "Email": "helloelysia@gmail.com",
  "Type": "FREELANCER",
  "Role": "Voice-Over",
  "Rate": "PRO",
  "ResType_Skill": {
  "VIDEOS": [
  "VOICEOVER"
  ]
  }
  },
  {
  "ID": 40,
  "Name": "Wolf Williams",
  "Email": "wolf@wolfwilliams.com",
  "Type": "FREELANCER",
  "Role": "Voice-Over",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "VIDEOS": [
  "VOICEOVER"
  ]
  }
  },
  {
  "ID": 41,
  "Name": "Tinedo Guia",
  "Email": "tinedoaugustoguia@gmail.com",
  "Type": "FREELANCER",
  "Role": "Voice-Over",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "VIDEOS": [
  "VOICEOVERSP"
  ]
  }
  },
  {
  "ID": 42,
  "Name": "Ruben Crow",
  "Email": "rubencrow4@hotmail.com",
  "Type": "FREELANCER",
  "Role": "Voice-Over",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "VIDEOS": [
  "VOICEOVER"
  ]
  }
  },
  {
  "ID": 43,
  "Name": "Kim Lee",
  "Email": "kimreynoldslee@gmail.com",
  "Type": "FREELANCER",
  "Role": "Voice-Over",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "VIDEOS": [
  "VOICEOVER"
  ]
  }
  },
  {
  "ID": 44,
  "Name": "Alexis Rodríguez",
  "Email": "ruano84@hotmail.com",
  "Type": "FREELANCER",
  "Role": "HTML",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "WEBSITES": [
  "HTML",
  "POWERAPPS",
  "JAVASCRIPT",
  "BACKEND",
  "DATABASE",
  "EXCEL"
  ]
  }
  },
  {
  "ID": 45,
  "Name": "Eduardo Baptista",
  "Email": "edbp2494@gmail.com",
  "Type": "FREELANCER",
  "Role": "Others",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "WEBSITES": [
  "QA"
  ]
  }
  },
  {
  "ID": 46,
  "Name": "Mariels Carpio",
  "Email": "mariels.carpio@gmail.com",
  "Type": "FREELANCER",
  "Role": "Others",
  "Rate": "SENIOR",
  "ResType_Skill": {
  "SHEETS": [
  "TRANSLATION"
  ],
  "SLIDE DECKS": [
  "TRANSLATION"
  ],
  "VIDEOS": [
  "TRANSLATION"
  ],
  "EMAILS": [
  "TRANSLATION"
  ],
  "WEBSITES": [
  "TRANSLATION"
  ]
  }
  },
  {
  "ID": 47,
  "Name": "Neyza Polo",
  "Email": "neyzapolo24@gmail.com",
  "Type": "FREELANCER",
  "Role": "HTML",
  "Rate": "JUNIOR",
  "ResType_Skill": {
  "WEBSITES": [
  "HTML",
  "FRONTEND"
  ],
  "EMAILS": [
  "HTML",
  "FRONTEND"
  ]
  }
  }
  ]
const optData = [
  {
  "TaskID": "36_1",
  "TaskName": "Task 36 - Part 1",
  "Dependency": "",
  "Brand": "ORCHEST",
  "Area": "CREATIVE",
  "ResType": "DESIGN PIECES",
  "Skill": "CREATIVE",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Rafael Moreno",
  "Day": "Monday",
  "Hours": 5,
  "Total_Hours": 8
  },
  {
  "TaskID": "36_2",
  "TaskName": "Task 36 - Part 2",
  "Dependency": "",
  "Brand": "ORCHEST",
  "Area": "CREATIVE",
  "ResType": "DESIGN PIECES",
  "Skill": "CREATIVE",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Rafael Moreno",
  "Day": "Tuesday",
  "Hours": 3,
  "Total_Hours": 8
  },
  {
  "TaskID": "42_1",
  "TaskName": "Task 42 - Part 1",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "CREATIVE",
  "ResType": "SLIDE DECKS",
  "Skill": "CREATIVE",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Melani Diaz",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "42_2",
  "TaskName": "Task 42 - Part 2",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "CREATIVE",
  "ResType": "SLIDE DECKS",
  "Skill": "CREATIVE",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Melani Diaz",
  "Day": "Tuesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "42_3",
  "TaskName": "Task 42 - Part 3",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "CREATIVE",
  "ResType": "SLIDE DECKS",
  "Skill": "CREATIVE",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Melani Diaz",
  "Day": "Wednesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "43_1",
  "TaskName": "Task 43 - Part 1",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Melani Diaz",
  "Day": "Thursday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "43_2",
  "TaskName": "Task 43 - Part 2",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Melani Diaz",
  "Day": "Friday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "1_1",
  "TaskName": "Task 1 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CREATIVE",
  "ResType": "DESIGN PIECES",
  "Skill": "CREATIVE",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Rocio Luque",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "1_2",
  "TaskName": "Task 1 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CREATIVE",
  "ResType": "DESIGN PIECES",
  "Skill": "CREATIVE",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Rocio Luque",
  "Day": "Tuesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "1_3",
  "TaskName": "Task 1 - Part 3",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CREATIVE",
  "ResType": "DESIGN PIECES",
  "Skill": "CREATIVE",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Rocio Luque",
  "Day": "Wednesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "14_1",
  "TaskName": "Task 14 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "VIDEO",
  "ResType": "VIDEOS",
  "Skill": "CLIPEDITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Rocio Luque",
  "Day": "Thursday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "14_2",
  "TaskName": "Task 14 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "VIDEO",
  "ResType": "VIDEOS",
  "Skill": "CLIPEDITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Rocio Luque",
  "Day": "Friday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "11_1",
  "TaskName": "Task 11 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CREATIVE",
  "ResType": "SHEETS",
  "Skill": "COPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Janice Hughes",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "11_2",
  "TaskName": "Task 11 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CREATIVE",
  "ResType": "SHEETS",
  "Skill": "COPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Janice Hughes",
  "Day": "Tuesday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "10_1",
  "TaskName": "Task 10 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CONTENT",
  "ResType": "SHEETS",
  "Skill": "COPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Janice Hughes",
  "Day": "Wednesday",
  "Hours": 4,
  "Total_Hours": 10
  },
  {
  "TaskID": "10_2",
  "TaskName": "Task 10 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CONTENT",
  "ResType": "SHEETS",
  "Skill": "COPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Janice Hughes",
  "Day": "Thursday",
  "Hours": 4,
  "Total_Hours": 10
  },
  {
  "TaskID": "10_3",
  "TaskName": "Task 10 - Part 3",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CONTENT",
  "ResType": "SHEETS",
  "Skill": "COPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Janice Hughes",
  "Day": "Friday",
  "Hours": 2,
  "Total_Hours": 10
  },
  {
  "TaskID": "25_1",
  "TaskName": "Task 25 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CREATIVE",
  "ResType": "SHEETS",
  "Skill": "TRANSLATION",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Mariels Carpio",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "25_2",
  "TaskName": "Task 25 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CREATIVE",
  "ResType": "SHEETS",
  "Skill": "TRANSLATION",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Mariels Carpio",
  "Day": "Tuesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "25_3",
  "TaskName": "Task 25 - Part 3",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CREATIVE",
  "ResType": "SHEETS",
  "Skill": "TRANSLATION",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Mariels Carpio",
  "Day": "Wednesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "2_1",
  "TaskName": "Task 2 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CONTENT",
  "ResType": "SLIDE DECKS",
  "Skill": "COPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Calisa Paulson",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 10
  },
  {
  "TaskID": "2_2",
  "TaskName": "Task 2 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CONTENT",
  "ResType": "SLIDE DECKS",
  "Skill": "COPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Calisa Paulson",
  "Day": "Tuesday",
  "Hours": 4,
  "Total_Hours": 10
  },
  {
  "TaskID": "2_3",
  "TaskName": "Task 2 - Part 3",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CONTENT",
  "ResType": "SLIDE DECKS",
  "Skill": "COPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Calisa Paulson",
  "Day": "Wednesday",
  "Hours": 2,
  "Total_Hours": 10
  },
  {
  "TaskID": "4_1",
  "TaskName": "Task 4 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CONTENT",
  "ResType": "SHEETS",
  "Skill": "CREATIVECOPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Calisa Paulson",
  "Day": "Wednesday",
  "Hours": 2,
  "Total_Hours": 10
  },
  {
  "TaskID": "4_2",
  "TaskName": "Task 4 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CONTENT",
  "ResType": "SHEETS",
  "Skill": "CREATIVECOPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Calisa Paulson",
  "Day": "Thursday",
  "Hours": 4,
  "Total_Hours": 10
  },
  {
  "TaskID": "4_3",
  "TaskName": "Task 4 - Part 3",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CONTENT",
  "ResType": "SHEETS",
  "Skill": "CREATIVECOPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Calisa Paulson",
  "Day": "Friday",
  "Hours": 4,
  "Total_Hours": 10
  },
  {
  "TaskID": "8_1",
  "TaskName": "Task 8 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CONTENT",
  "ResType": "SHEETS",
  "Skill": "COPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Paul Korzeniowski",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 6
  },
  {
  "TaskID": "8_2",
  "TaskName": "Task 8 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "CONTENT",
  "ResType": "SHEETS",
  "Skill": "COPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Paul Korzeniowski",
  "Day": "Tuesday",
  "Hours": 2,
  "Total_Hours": 6
  },
  {
  "TaskID": "6_1",
  "TaskName": "Task 6 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "COPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Paul Korzeniowski",
  "Day": "Tuesday",
  "Hours": 2,
  "Total_Hours": 6
  },
  {
  "TaskID": "6_2",
  "TaskName": "Task 6 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "COPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Paul Korzeniowski",
  "Day": "Wednesday",
  "Hours": 4,
  "Total_Hours": 6
  },
  {
  "TaskID": "23_1",
  "TaskName": "Task 23 - Part 1",
  "Dependency": "",
  "Brand": "ATNI",
  "Area": "CONTENT",
  "ResType": "SLIDE DECKS",
  "Skill": "COPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Gagan Kaur",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "23_2",
  "TaskName": "Task 23 - Part 2",
  "Dependency": "",
  "Brand": "ATNI",
  "Area": "CONTENT",
  "ResType": "SLIDE DECKS",
  "Skill": "COPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Gagan Kaur",
  "Day": "Tuesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "23_3",
  "TaskName": "Task 23 - Part 3",
  "Dependency": "",
  "Brand": "ATNI",
  "Area": "CONTENT",
  "ResType": "SLIDE DECKS",
  "Skill": "COPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Gagan Kaur",
  "Day": "Wednesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "30_1",
  "TaskName": "Task 30 - Part 1",
  "Dependency": "",
  "Brand": "ATNI",
  "Area": "CONTENT",
  "ResType": "EMAILS",
  "Skill": "CREATIVECOPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Gagan Kaur",
  "Day": "Thursday",
  "Hours": 4,
  "Total_Hours": 6
  },
  {
  "TaskID": "30_2",
  "TaskName": "Task 30 - Part 2",
  "Dependency": "",
  "Brand": "ATNI",
  "Area": "CONTENT",
  "ResType": "EMAILS",
  "Skill": "CREATIVECOPYWRITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Gagan Kaur",
  "Day": "Friday",
  "Hours": 2,
  "Total_Hours": 6
  },
  {
  "TaskID": "37",
  "TaskName": "Task 37",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Diego Rondón",
  "Day": "Monday",
  "Hours": 2,
  "Total_Hours": 2
  },
  {
  "TaskID": "38",
  "TaskName": "Task 38",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Diego Rondón",
  "Day": "Monday",
  "Hours": 2,
  "Total_Hours": 2
  },
  {
  "TaskID": "39_1",
  "TaskName": "Task 39 - Part 1",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Diego Rondón",
  "Day": "Monday",
  "Hours": 1,
  "Total_Hours": 2
  },
  {
  "TaskID": "39_2",
  "TaskName": "Task 39 - Part 2",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Diego Rondón",
  "Day": "Tuesday",
  "Hours": 1,
  "Total_Hours": 2
  },
  {
  "TaskID": "47",
  "TaskName": "Task 47",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "LAYOUT",
  "ResType": "EMAILS",
  "Skill": "HTML",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Eduardo Sánchez",
  "Day": "Monday",
  "Hours": 1,
  "Total_Hours": 1
  },
  {
  "TaskID": "27",
  "TaskName": "Task 27",
  "Dependency": "",
  "Brand": "ORCHEST",
  "Area": "DEVELOPMENT",
  "ResType": "WEBSITES",
  "Skill": "HTML",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Eduardo Sánchez",
  "Day": "Monday",
  "Hours": 2,
  "Total_Hours": 2
  },
  {
  "TaskID": "5_1",
  "TaskName": "Task 5 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "ANALYTIC",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Juan Sebastián Parra",
  "Day": "Monday",
  "Hours": 5,
  "Total_Hours": 6
  },
  {
  "TaskID": "5_2",
  "TaskName": "Task 5 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "ANALYTIC",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Juan Sebastián Parra",
  "Day": "Tuesday",
  "Hours": 1,
  "Total_Hours": 6
  },
  {
  "TaskID": "40",
  "TaskName": "Task 40",
  "Dependency": "",
  "Brand": "FRONTIER",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Juan Sebastián Parra",
  "Day": "Tuesday",
  "Hours": 4,
  "Total_Hours": 4
  },
  {
  "TaskID": "41_1",
  "TaskName": "Task 41 - Part 1",
  "Dependency": "",
  "Brand": "FRONTIER",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Juan Sebastián Parra",
  "Day": "Tuesday",
  "Hours": 2,
  "Total_Hours": 6
  },
  {
  "TaskID": "41_2",
  "TaskName": "Task 41 - Part 2",
  "Dependency": "",
  "Brand": "FRONTIER",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Juan Sebastián Parra",
  "Day": "Wednesday",
  "Hours": 4,
  "Total_Hours": 6
  },
  {
  "TaskID": "53",
  "TaskName": "Task 53",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "REFORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Juan Sebastián Parra",
  "Day": "Wednesday",
  "Hours": 2,
  "Total_Hours": 2
  },
  {
  "TaskID": "55",
  "TaskName": "Task 55",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "ANALYTIC",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Juan Sebastián Parra",
  "Day": "Thursday",
  "Hours": 6,
  "Total_Hours": 6
  },
  {
  "TaskID": "70",
  "TaskName": "Task 70",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Juan Sebastián Parra",
  "Day": "Friday",
  "Hours": 4,
  "Total_Hours": 4
  },
  {
  "TaskID": "33_1",
  "TaskName": "Task 33 - Part 1",
  "Dependency": "",
  "Brand": "ATNI",
  "Area": "LAYOUT",
  "ResType": "WEBSITES",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Daniel Anaya",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "33_2",
  "TaskName": "Task 33 - Part 2",
  "Dependency": "",
  "Brand": "ATNI",
  "Area": "LAYOUT",
  "ResType": "WEBSITES",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Daniel Anaya",
  "Day": "Tuesday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "31_1",
  "TaskName": "Task 31 - Part 1",
  "Dependency": "",
  "Brand": "ATNI",
  "Area": "LAYOUT",
  "ResType": "EMAILS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Lucia Manrique",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 6
  },
  {
  "TaskID": "31_2",
  "TaskName": "Task 31 - Part 2",
  "Dependency": "",
  "Brand": "ATNI",
  "Area": "LAYOUT",
  "ResType": "EMAILS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Lucia Manrique",
  "Day": "Tuesday",
  "Hours": 2,
  "Total_Hours": 6
  },
  {
  "TaskID": "44_1",
  "TaskName": "Task 44 - Part 1",
  "Dependency": "",
  "Brand": "FRONTIER",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Lucia Manrique",
  "Day": "Tuesday",
  "Hours": 2,
  "Total_Hours": 8
  },
  {
  "TaskID": "44_2",
  "TaskName": "Task 44 - Part 2",
  "Dependency": "",
  "Brand": "FRONTIER",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Lucia Manrique",
  "Day": "Wednesday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "44_3",
  "TaskName": "Task 44 - Part 3",
  "Dependency": "",
  "Brand": "FRONTIER",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Lucia Manrique",
  "Day": "Thursday",
  "Hours": 2,
  "Total_Hours": 8
  },
  {
  "TaskID": "22_1",
  "TaskName": "Task 22 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Natalia Hernández",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 10
  },
  {
  "TaskID": "22_2",
  "TaskName": "Task 22 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Natalia Hernández",
  "Day": "Tuesday",
  "Hours": 4,
  "Total_Hours": 10
  },
  {
  "TaskID": "22_3",
  "TaskName": "Task 22 - Part 3",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Natalia Hernández",
  "Day": "Wednesday",
  "Hours": 2,
  "Total_Hours": 10
  },
  {
  "TaskID": "24_1",
  "TaskName": "Task 24 - Part 1",
  "Dependency": "",
  "Brand": "ATNI",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Natalia Hernández",
  "Day": "Wednesday",
  "Hours": 2,
  "Total_Hours": 8
  },
  {
  "TaskID": "24_2",
  "TaskName": "Task 24 - Part 2",
  "Dependency": "",
  "Brand": "ATNI",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Natalia Hernández",
  "Day": "Thursday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "24_3",
  "TaskName": "Task 24 - Part 3",
  "Dependency": "",
  "Brand": "ATNI",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Natalia Hernández",
  "Day": "Friday",
  "Hours": 2,
  "Total_Hours": 8
  },
  {
  "TaskID": "9_1",
  "TaskName": "Task 9 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "REFORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Pamela Bracho",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 6
  },
  {
  "TaskID": "9_2",
  "TaskName": "Task 9 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "REFORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Pamela Bracho",
  "Day": "Tuesday",
  "Hours": 2,
  "Total_Hours": 6
  },
  {
  "TaskID": "12_1",
  "TaskName": "Task 12 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "REFORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Pamela Bracho",
  "Day": "Tuesday",
  "Hours": 2,
  "Total_Hours": 6
  },
  {
  "TaskID": "12_2",
  "TaskName": "Task 12 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "REFORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Pamela Bracho",
  "Day": "Wednesday",
  "Hours": 4,
  "Total_Hours": 6
  },
  {
  "TaskID": "21_1",
  "TaskName": "Task 21 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Pamela Bracho",
  "Day": "Thursday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "21_2",
  "TaskName": "Task 21 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Pamela Bracho",
  "Day": "Friday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "3_1",
  "TaskName": "Task 3 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "REFORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Carolina Meoniz",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 6
  },
  {
  "TaskID": "3_2",
  "TaskName": "Task 3 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "REFORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Carolina Meoniz",
  "Day": "Tuesday",
  "Hours": 2,
  "Total_Hours": 6
  },
  {
  "TaskID": "7_1",
  "TaskName": "Task 7 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "REFORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Carolina Meoniz",
  "Day": "Tuesday",
  "Hours": 2,
  "Total_Hours": 6
  },
  {
  "TaskID": "7_2",
  "TaskName": "Task 7 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SHEETS",
  "Skill": "REFORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Carolina Meoniz",
  "Day": "Wednesday",
  "Hours": 4,
  "Total_Hours": 6
  },
  {
  "TaskID": "20_1",
  "TaskName": "Task 20 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Carolina Meoniz",
  "Day": "Thursday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "20_2",
  "TaskName": "Task 20 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "LAYOUT",
  "ResType": "SLIDE DECKS",
  "Skill": "FORMATTING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Carolina Meoniz",
  "Day": "Friday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "19_1",
  "TaskName": "Task 19 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "VIDEO",
  "ResType": "VIDEOS",
  "Skill": "CLIPEDITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Carlos Escobar",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "19_2",
  "TaskName": "Task 19 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "VIDEO",
  "ResType": "VIDEOS",
  "Skill": "CLIPEDITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Carlos Escobar",
  "Day": "Tuesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "19_3",
  "TaskName": "Task 19 - Part 3",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "VIDEO",
  "ResType": "VIDEOS",
  "Skill": "CLIPEDITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Carlos Escobar",
  "Day": "Wednesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "16_1",
  "TaskName": "Task 16 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "VIDEO",
  "ResType": "VIDEOS",
  "Skill": "ADVANCEDEDITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Ronald Molina",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "16_2",
  "TaskName": "Task 16 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "VIDEO",
  "ResType": "VIDEOS",
  "Skill": "ADVANCEDEDITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Ronald Molina",
  "Day": "Tuesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "16_3",
  "TaskName": "Task 16 - Part 3",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "VIDEO",
  "ResType": "VIDEOS",
  "Skill": "ADVANCEDEDITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Ronald Molina",
  "Day": "Wednesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "49_1",
  "TaskName": "Task 49 - Part 1",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "VIDEO",
  "ResType": "VIDEOS",
  "Skill": "CLIPEDITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Pablo Rodríguez",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "49_2",
  "TaskName": "Task 49 - Part 2",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "VIDEO",
  "ResType": "VIDEOS",
  "Skill": "CLIPEDITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Pablo Rodríguez",
  "Day": "Tuesday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "69_1",
  "TaskName": "Task 69 - Part 1",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "VIDEO",
  "ResType": "VIDEOS",
  "Skill": "CLIPEDITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Pablo Rodríguez",
  "Day": "Wednesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "69_2",
  "TaskName": "Task 69 - Part 2",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "VIDEO",
  "ResType": "VIDEOS",
  "Skill": "CLIPEDITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Pablo Rodríguez",
  "Day": "Thursday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "69_3",
  "TaskName": "Task 69 - Part 3",
  "Dependency": "",
  "Brand": "FLOW",
  "Area": "VIDEO",
  "ResType": "VIDEOS",
  "Skill": "CLIPEDITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Pablo Rodríguez",
  "Day": "Friday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "15_1",
  "TaskName": "Task 15 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "VIDEO",
  "ResType": "VIDEOS",
  "Skill": "CLIPEDITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Carlos Velez",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "15_2",
  "TaskName": "Task 15 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "VIDEO",
  "ResType": "VIDEOS",
  "Skill": "CLIPEDITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Carlos Velez",
  "Day": "Tuesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "15_3",
  "TaskName": "Task 15 - Part 3",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "VIDEO",
  "ResType": "VIDEOS",
  "Skill": "CLIPEDITING",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Carlos Velez",
  "Day": "Wednesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "29_1",
  "TaskName": "Task 29 - Part 1",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "DEVELOPMENT",
  "ResType": "WEBSITES",
  "Skill": "HTML",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Alexis Rodríguez",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "29_2",
  "TaskName": "Task 29 - Part 2",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "DEVELOPMENT",
  "ResType": "WEBSITES",
  "Skill": "HTML",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Alexis Rodríguez",
  "Day": "Tuesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "29_3",
  "TaskName": "Task 29 - Part 3",
  "Dependency": "",
  "Brand": "LIBERTY",
  "Area": "DEVELOPMENT",
  "ResType": "WEBSITES",
  "Skill": "HTML",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Alexis Rodríguez",
  "Day": "Wednesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "34_1",
  "TaskName": "Task 34 - Part 1",
  "Dependency": "",
  "Brand": "ATNI",
  "Area": "DEVELOPMENT",
  "ResType": "WEBSITES",
  "Skill": "HTML",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Alexis Rodríguez",
  "Day": "Thursday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "34_2",
  "TaskName": "Task 34 - Part 2",
  "Dependency": "",
  "Brand": "ATNI",
  "Area": "DEVELOPMENT",
  "ResType": "WEBSITES",
  "Skill": "HTML",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Alexis Rodríguez",
  "Day": "Friday",
  "Hours": 4,
  "Total_Hours": 8
  },
  {
  "TaskID": "26_1",
  "TaskName": "Task 26 - Part 1",
  "Dependency": "",
  "Brand": "FRONTIER",
  "Area": "DEVELOPMENT",
  "ResType": "WEBSITES",
  "Skill": "HTML",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Neyza Polo",
  "Day": "Monday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "26_2",
  "TaskName": "Task 26 - Part 2",
  "Dependency": "",
  "Brand": "FRONTIER",
  "Area": "DEVELOPMENT",
  "ResType": "WEBSITES",
  "Skill": "HTML",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Neyza Polo",
  "Day": "Tuesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "26_3",
  "TaskName": "Task 26 - Part 3",
  "Dependency": "",
  "Brand": "FRONTIER",
  "Area": "DEVELOPMENT",
  "ResType": "WEBSITES",
  "Skill": "HTML",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Neyza Polo",
  "Day": "Wednesday",
  "Hours": 4,
  "Total_Hours": 12
  },
  {
  "TaskID": "32_1",
  "TaskName": "Task 32 - Part 1",
  "Dependency": "",
  "Brand": "ATNI",
  "Area": "DEVELOPMENT",
  "ResType": "EMAILS",
  "Skill": "HTML",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Neyza Polo",
  "Day": "Thursday",
  "Hours": 4,
  "Total_Hours": 5
  },
  {
  "TaskID": "32_2",
  "TaskName": "Task 32 - Part 2",
  "Dependency": "",
  "Brand": "ATNI",
  "Area": "DEVELOPMENT",
  "ResType": "EMAILS",
  "Skill": "HTML",
  "DueDate": 5,
  "Type": 0,
  "Assignee": "Neyza Polo",
  "Day": "Friday",
  "Hours": 1,
  "Total_Hours": 5
  }
  ];
const kanbanGrid = [
  { headerText: 'Monday',
    keyField: 'Monday',
    allowToggle: false,
    isExpanded: true },

  { headerText: 'Tuesday',
    keyField: 'Tuesday',
    allowToggle: false,
    isExpanded: true },

  { headerText: 'Wednesday',
    keyField: 'Wednesday',
    allowToggle: false,
    isExpanded: true },

  { headerText: 'Thursday',
    keyField: 'Thursday',
    allowToggle: false,
    isExpanded: true },

  { headerText: 'Friday',
    keyField: 'Friday',
    allowToggle: false,
    isExpanded: true },
];
const employee_available_times = [
  [
  0,
  0,
  0,
  0,
  0
  ],
  [
  0,
  0,
  0,
  0,
  0
  ],
  [
  4,
  8,
  7,
  7,
  4
  ],
  [
  0,
  0,
  0,
  0,
  0
  ],
  [
  0,
  0,
  0,
  0,
  0
  ],
  [
  5,
  7,
  6,
  6,
  4
  ],
  [
  5,
  7,
  6,
  6,
  4
  ],
  [
  0,
  0,
  0,
  0,
  0
  ],
  [
  0,
  0,
  0,
  0,
  0
  ],
  [
  0,
  0,
  0,
  0,
  0
  ],
  [
  5,
  7,
  6,
  6,
  4
  ],
  [
  0,
  0,
  0,
  0,
  0
  ],
  [
  0,
  0,
  0,
  0,
  0
  ],
  [
  0,
  0,
  0,
  0,
  0
  ],
  [
  0,
  0,
  0,
  0,
  0
  ],
  [
  5,
  7,
  6,
  6,
  4
  ],
  [
  0,
  0,
  0,
  0,
  0
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ],
  [
  4,
  4,
  4,
  4,
  4
  ]
  ]
const dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

let optData2 = [];

employees.forEach((employee, idxEmployee) => {
  dayName.forEach((day, idxDay) => {
    optData2.push({
      "Counter": true,
      "Block": true,
      "TaskID": employee.Name.replace(" ", "") + "_" + day,
      "TaskName": employee.Name + " - " + day,
      "Area": "",
      "Assignee": employee.Name,
      "Day": day,
      "Hours": employee_available_times[idxEmployee][idxDay],
      "Hours_Free": employee_available_times[idxEmployee][idxDay] - optData.filter(x => x.Day === day && x.Assignee === employee.Name).reduce((a, x) => a + x.Hours, 0)
    })
  })
})

//console.log(optData2)

/*
optData2.push(...[...optData].map(x => {
  x.Counter = false;
  x.Block = false;
}));
*/

optData2.push(...optData);

const Kanban = () => {

  let kanbanObj;

  function cardTemplate(props) {
    if ("Counter" in props) {
      return (
        <div className="card-template">
          { (props.Hours_Free < 0) ? 
            <h1 className="CardHeader text-center bg-red-500">Overbooked: {props.Hours_Free} hours</h1> :
              (props.Hours_Free > 0) ?
              <h1 className="CardHeader text-center bg-green-500">{props.Hours_Free} hours free</h1> :
              <h1 className="CardHeader text-center bg-yellow-500">Complete</h1>
          }
        </div>
      );
    } else {
      return (
        <div className="card-template">
          <h1 className="CardHeader text-center">{props.TaskName}</h1>
          <div className='e-card-content'>
            <table className="card-template-wrap">
              <tbody>
                <tr>
                  <td className="CardHeader">Brand:</td>
                  <td>{props.Brand}</td>
                </tr>
                <tr>
                  <td className="CardHeader">Area:</td>
                  <td>{props.Area}</td>
                </tr>
                <tr>
                  <td className="CardHeader">DueDate:</td>
                  <td>{props.DueDate}</td>
                </tr>
                <tr>
                  <td className="CardHeader">Hours:</td>
                  <td>{props.Hours}</td>
                </tr>              
                <tr>
                  <td className="CardHeader">Total Hours:</td>
                  <td>{props.Total_Hours}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    /*
    return(    
      <div class="card mb-2 cursor-grab">
        <div class="card-body p-2">
            <div class="d-flex">
                <div class="flex-grow-1 ms-2">
                    <p class="title-task">{props.TaskName}</p>
                    <p class="date-task mb-0">{props.Hours} hours | Due date: {props.DueDate}</p>
                    <div class="form-check form-switch mt-1 mb-0">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                        <label class="form-check-label" for="flexSwitchCheckDefault">Block</label>
                    </div>
                    <span class="badge text-bg-orange">No resource</span>
                </div>
            </div>
        </div>
    </div>)
    */
  }

  function columnTemplate(props) {
    return (
      <div className="header-template-wrap">
      <div className={"header-icon e-icons " + props.keyField}></div>
      <div className="header-text">{props.headerText}</div>
      </div>
    );
  }

  function rowTemplate(props) {
    return (
      <div className='swimlane-template e-swimlane-template-table'>
        <div className="e-swimlane-row-text">
          <span>{props.textField}</span>
        </div>
      </div>
    );
  }

  function onKanbanDragStart(args) {

    if ("Counter" in args.data[0]) {

      // Block Free Hours Card
      args.cancel = true;

    } else {

      // Update Free Hours Card
      const idxCounter = kanbanObj.kanbanData.findIndex(x => x.TaskID === args.data[0].Assignee.replace(" ", "") + "_" + args.data[0].Day);
      kanbanObj.kanbanData[idxCounter].Hours_Free += args.data[0].Hours;
      kanbanObj.updateCard(kanbanObj.kanbanData[idxCounter]);

    }

  }

  function onKanbanDragStop(args) {

    // Update Data After Move Cards
    const idx = optData2.findIndex(x => x.TaskID === args.data[0].TaskID);
    optData2.splice(idx, 1, args.data[0]);
    let lsData = JSON.parse(localStorage.getItem("kanbankanban"))
    localStorage.setItem("kanbankanban", JSON.stringify({ ...lsData, dataSource: optData2 }))

    // Update Free Hours Card
    const idxCounter = kanbanObj.kanbanData.findIndex(x => x.TaskID === args.data[0].Assignee.replace(" ", "") + "_" + args.data[0].Day);
    kanbanObj.kanbanData[idxCounter].Hours_Free -= args.data[0].Hours;
    kanbanObj.updateCard(kanbanObj.kanbanData[idxCounter]);

  }
  /*
  function onKanbanActionComplete(args) {
    console.log(args)
    //console.log(JSON.parse(currentKanban.getLocalData()))
    //console.log(currentKanban.kanbanData)
    //currentKanban.refresh();
    //args.cancel = true
    //currentKanban.render();
  }*/

  return (
    <KanbanComponent
      id="kanban"
      keyField="Day"
      dataSource={optData2}
      cardSettings={{ 
        contentField: "Area", 
        headerField: "TaskName",
        selectionType: 'Single',
        template: cardTemplate }}
      swimlaneSettings={{
        keyField: "Assignee",
        allowDragAndDrop: true,
        showItemCount: false,
        template: rowTemplate }}
      ref={(kanban) => { kanbanObj = kanban }}
      dragStart={onKanbanDragStart}
      dragStop={onKanbanDragStop}
      //actionComplete={onKanbanActionComplete}
      enablePersistence={true}
    >
      <ColumnsDirective>
        {kanbanGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} template={columnTemplate}/>
        ))}
      </ColumnsDirective>
    </KanbanComponent>
  )
};

export default Kanban;
