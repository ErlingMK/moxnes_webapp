import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

export default function TitleHeader() {
  return (
    <div
      className={
        "flex justify-between gap-5 cursor-pointer text-soft-blue-gray"
      }
    >
      <div className={"flex flex-col"}>
        <Link href={"/"}>
          <h1 className={"font-bold md:text-2xl"}>Liv Mette Moxnes</h1>
          <h2 className={"font-light text-sm"}>Jurist og Coach</h2>
          <h3 className={"font-light text-sm"}>
            Autorisert av tilsynsrådet for advokat virksomhet
          </h3>
        </Link>

        <h4 className={"text-sm"}>
          <a className={"underline text-black"} href={"tel:91379998"}>
            +47 913 79 998
          </a>
        </h4>
        <h4 className={"text-sm"}>
          <a
            className={"underline text-black"}
            href={"mailto:liv.mette.moxnes@gmail.com"}
          >
            liv.mette.moxnes@gmail.com
          </a>
        </h4>
      </div>
    </div>
  );
}
