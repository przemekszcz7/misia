// Dane resturacji "Misia" Obiady Domowe w Szczecinie

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'zupy' | 'glowne' | 'dodatki' | 'napoje';
}

export const RESTAURANT_INFO = {
  name: "Misia",
  fullName: "„Misia” Obiady Domowe",
  slogan: "Obiady jak u mamy – najlepsze w Szczecinie",
  location: "Plac Kilińskiego 1 paw nr 37",
  additionalAddressInfo: "wejście również od ulicy Wyzwolenia",
  city: "Szczecin",
  postcode: "71-414",
  phone: "783 218 214",
  phoneFormatted: "+48783218214",
  email: "misiabar.szczecin@gmail.com",
  facebookUrl: "https://www.facebook.com/profile.php?id=100063785021622",
  reviewsUrl: "https://www.facebook.com/profile.php?id=100063785021622&sk=reviews",
  
  // Hours
  hours: [
    { day: "Poniedziałek", time: "11:00 - 17:00", open: true, index: 1 },
    { day: "Wtorek", time: "11:00 - 17:00", open: true, index: 2 },
    { day: "Środa", time: "11:00 - 17:00", open: true, index: 3 },
    { day: "Czwartek", time: "11:00 - 17:00", open: true, index: 4 },
    { day: "Piątek", time: "11:00 - 17:00", open: true, index: 5 },
    { day: "Sobota", time: "ZAMKNIĘTE", open: false, index: 6 },
    { day: "Niedziela", time: "ZAMKNIĘTE", open: false, index: 0 }
  ],
  
  // Daily special details
  todaySpecial: {
    title: "Dzisiejsze Danie Dnia",
    mainDish: "Rumsztyk z cebulą",
    soups: ["Buraczkowa", "Pieczarkowa z makaronem"],
    price: "31 zł",
    tags: ["Świeże składniki", "Prawdziwy rumsztyk", "Dwie zupy do wyboru"]
  }
};

export const MENU_CATEGORIES = [
  { id: 'glowne', label: 'Dania Główne' },
  { id: 'zupy', label: 'Zupy Domowe' },
  { id: 'dodatki', label: 'Dodatki' },
  { id: 'napoje', label: 'Napoje' }
];

export const REGULAR_MENU_ITEMS: MenuItem[] = [
  {
    id: "g1",
    name: "Tradycyjny Kotlet Schabowy",
    description: "Złocisty, chrupiący kotlet z polskiej wieprzowiny, z ziemniaczkami z koperkiem i domową kapustą zasmażaną.",
    price: "28",
    category: "glowne"
  },
  {
    id: "g2",
    name: "Domowe Gołąbki w Sosie Pomidorowym",
    description: "Dwa obfite gołąbki z mięsem mielonym i ryżem, zawijane w delikatne liście kapusty, polane aksamitnym sosem pomidorowym.",
    price: "26",
    category: "glowne"
  },
  {
    id: "g3",
    name: "Pierogi Lepiarskie (Ruskie)",
    description: "Ręcznie lepione pierogi z sycącym farszem z białego sera oraz tłuczonych ziemniaków z przysmażaną cebulką (8 szt.).",
    price: "22",
    category: "glowne"
  },
  {
    id: "g4",
    name: "Tradycyjne Kopytka z Masłem i Cukrem",
    description: "Puszyste kluski ziemniaczane wyrabiane ręcznie na miejscu według starej receptury.",
    price: "18",
    category: "glowne"
  },
  {
    id: "z1",
    name: "Tradycyjna Zupa Szczawiowa",
    description: "Gotowana na wędzonym boczku, podawana z pokrojonym jajkiem i odrobiną kwaśnej śmietany.",
    price: "12",
    category: "zupy"
  },
  {
    id: "z2",
    name: "Prawdziwy Rosół z Makaronem",
    description: "Esencjonalny wywar z trzech rodzajów mięs z domowym makaronem nitki i świeżą natką pietruszki.",
    price: "13",
    category: "zupy"
  },
  {
    id: "d1",
    name: "Zestaw Domowych Surówek",
    description: "Trzy rodzaje surówek przygotowywanych codziennie rano (marchewkowa, z buraczków oraz z białej kapusty).",
    price: "8",
    category: "dodatki"
  },
  {
    id: "d2",
    name: "Ziemniaki Puree z Koperkiem",
    description: "Aksamitne tłuczone ziemniaki z dodatkiem masła, posypane świeżo siekanym koperkiem.",
    price: "7",
    category: "dodatki"
  },
  {
    id: "n1",
    name: "Tradycyjny Kompot Owocowy",
    description: "Słodki i orzeźwiający kompot z truskawek, jabłek i wiśni, podawany na zimno.",
    price: "5",
    category: "napoje"
  }
];

export const FACEBOOK_REVIEWS = [
  {
    id: "u1",
    name: "Joanna G.",
    text: "Przepyszne obiady. Smacznie jak w domu!",
    date: "Tydzień temu",
    avatar: "J"
  },
  {
    id: "u2",
    name: "Mariusz W.",
    text: "super miła obsługa bardzo dobre obiadki polecam !!!",
    date: "2 tygodnie temu",
    avatar: "M"
  },
  {
    id: "u3",
    name: "Daria K.",
    text: "Gołąbki i szczawiowa pycha 😋 i najlepsze surówki",
    date: "Miesiąc temu",
    avatar: "D"
  }
];
