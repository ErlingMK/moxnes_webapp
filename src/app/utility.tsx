export interface Page {
  title: string;
  link: string;
}

export const pages: Page[] = [
  {
    title: "Hjem",
    link: "/",
  },
  {
    title: "Fremtidsfullmakt",
    link: "services",
  },
  {
    title: "Priser",
    link: "prices",
  },
  {
    title: "Om meg",
    link: "about",
  },
];
