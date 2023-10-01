export interface Page {
    title: string,
    link: string
}

export const pages: Page[] = [
    {
        title: "Hjem",
        link: "/",
    },
    {
        title: "Om meg",
        link: "about"
    },
    {
        title: "Fremtidsfullmakt",
        link: "services"
    },
    {
        title: "Priser",
        link: "prices"
    },
]
