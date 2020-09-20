import { IServiceComponentProps } from "@cosmetics-and-more/components";

export const cosmeticServices: IServiceComponentProps[] = [
  {
    title: "Gesichtsbehandlung - Klassisch",
    duration: 70,
    description: `Reinigung, Hautanalyse, Peeling, Entfernung von Unreinheiten, Augenbrauenkorrektur, Wirkstoffpackung, Gesicht-, Hals und Dekolletemassage, Ampulle, Tagescreme.`,
    price: 51,
  },
  {
    title: "Klassische Rückenmassage mit Peeling",
    duration: 40,
    description: `Die Massage dient der Lockerung der Muskulatur, entspannt und beruhigt. Durch den Einsatz von natürlichen Ölen wird die Haut gepflegt.`,
    price: 42,
  },
  {
    title: "Handpflege",
    variants: [
      { title: "Maniküre", price: 14 },
      {
        title: "Mit Handmassage",
        price: 20,
      },
      {
        title: "Mit Naturlack oder Polieren",
        price: 17,
      },
      {
        title: "Mit Farblack",
        price: 20,
      },
      {
        title: "Mit Shellac",
        price: 30,
        info: "Hält circa 14 Tage",
      },
    ],
  },
  {
    title: "Fußpflege",
    variants: [
      { title: "Pediküre", price: 20 },
      { title: "Mit Fußmassage", price: 25 },
      { title: "Mit Naturlack oder polieren", price: 22 },
      { title: "Mit Farblack", price: 24 },
      { title: "Mit Shellac", price: 30, info: "Hält circa 14 Tage" },
    ],
  },
  {
    title: "Haarentfernung mit Warmwachs",
    variants: [
      {
        title: "Unterschenkel",
        price: 20,
      },
      {
        title: "Oberschenkel",
        price: 23,
      },
      {
        title: "Beine komplett",
        price: 36,
      },
      {
        title: "Oberlippe",
        price: 7,
      },
    ],
  },
  {
    title: "Sonstiges",
    variants: [
      { title: "Augenbrauenkorrektur", price: 6 },
      { title: "Augenbrauen Färben", price: 6 },
      { title: "Wimpern Färben", price: 6 },
    ],
  },
];
