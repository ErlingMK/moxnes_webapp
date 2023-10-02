import {RxHamburgerMenu} from "react-icons/rx"

export default function TitleHeader() {
    return (
        <div className={"flex justify-between p-4 gap-5"}>
            <div className={"flex flex-col"}>
                <h1 className={"font-bold md:text-2xl"}>Liv Mette Moxnes</h1>
                <h2 className={"font-light text-sm"}>Jurist og Coach</h2>
                <h3 className={"font-light text-sm"}>Autorisert av tilsynsrådet for advokat virksomhet</h3>
            </div>

            <div className={"self-center text-2xl"}>
                <RxHamburgerMenu/>
            </div>
        </div>
    );
}
