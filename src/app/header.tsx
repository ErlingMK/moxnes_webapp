import Link from "next/link";


export default function Header() {
    const pages = ["Hjem", "Framtidsfullmakt", "Om meg", "Priser"]

    return (
        <div className={"flex flex-row p-6 justify-between sticky top-0 z-10 bg-white"}>
            <div className={"flex flex-col"}>
                <h1 className={"font-bold text-2xl"}>Liv Mette Moxnes</h1>
                <h2 className={"font-light"}>Jurist og Coach</h2>
                <h3 className={"ml-2 font-light"}>Autorisert av tilsynsrådet for advokat virksomhet</h3>
            </div>

            <div className={"flex flex-row gap-5 items-start"}>
                {pages.map(value => {
                    return (
                        <Link className={"p-2"} href={`/${value}`} key={value}>{value}</Link>
                    )
                })}
                <Link className={"bg-sky-500 hover:bg-sky-700 p-2 text-white rounded"} href={"/"}>Kontakt</Link>
            </div>
        </div>
    )
}