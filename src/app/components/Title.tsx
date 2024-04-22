import Link from "next/link";

export default function TitleHeader() {
  return (
    <div className={"flex justify-between gap-5 cursor-pointer text-white"}>
      <div className={"flex flex-col"}>
        <Link href={"/"}>
          <p className={"font-bold md:text-2xl"}>Liv Mette Moxnes</p>
          <p className={"font-light"}>Jurist og Coach</p>
          <p className={"font-light"}>
            Autorisert av Tilsynsrådet for advokat virksomhet
          </p>
        </Link>
      </div>
    </div>
  );
}
