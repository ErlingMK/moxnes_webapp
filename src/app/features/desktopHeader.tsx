import Link from "next/link";
import {pages} from "@/app/utility";
import {usePathname} from "next/navigation";

export default function DesktopHeader() {
    let pathname = usePathname();
    return (
        <div className={"flex flex-row p-6 justify-between sticky top-0 z-10 bg-white"}>
            <div className={"flex flex-col"}>
                <h1 className={"font-bold text-2xl"}>Liv Mette Moxnes</h1>
                <h2 className={"font-light"}>Jurist og Coach</h2>
                <h3 className={"font-light"}>Autorisert av tilsynsrådet for advokat virksomhet</h3>
            </div>

            <div className={"flex flex-col items-end"}>
                <div className={"flex flex-row gap-5 items-start"}>
                    {pages.map(page => {
                        let className = "p-2 hover:underline hover:scale-110";

                        return (
                            <Link
                                className={pathname.endsWith(page.link) ? `${className} underline font-bold` : className}
                                href={`/${page.link}`}
                                key={page.link}>{page.title}</Link>
                        )
                    })}
                    <Link className={"bg-sky-500 hover:bg-sky-700 p-2 text-white rounded"}
                          href={"/contact"}>Kontakt</Link>
                </div>

                <h3 className={"pt-2 text-sm"}>E-post: <a className={"underline"}
                                                          href={"mailto:liv.mette.moxnes@gmail.com"}>liv.mette.moxnes@gmail.com</a>
                </h3>
            </div>
        </div>
    )
}