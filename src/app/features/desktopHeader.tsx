import Link from "next/link";
import { pages } from "@/app/utility";
import { usePathname } from "next/navigation";
import TitleHeader from "@/app/features/titleHeader";
import { HeaderProps } from "../header";
import { link } from "fs";

export default function DesktopHeader({ scrollTo }: HeaderProps) {
  let pathname = usePathname();
  return (
    <div
      className={
        "flex flex-row p-6 justify-between sticky top-0 z-100 bg-main-blue"
      }
    >
      <TitleHeader />
      <div className={"flex flex-col items-end text-white"}>
        <div className={"flex flex-row gap-5 items-start"}>
          {pages.map((page) => {
            // let className = "p-2 hover:underline hover:scale-110";

            return (
              <button
                key={page.link}
                onClick={() => scrollTo(page.link)}
                className={"p-2 hover:underline hover:scale-110"}
              >
                {page.title}
              </button>
              // <Link
              //   className={
              //     pathname.endsWith(page.link)
              //       ? `${className} underline font-bold`
              //       : className
              //   }
              //   href={`/${page.link}`}
              //   key={page.link}
              // >
              //   {page.title}
              // </Link>
            );
          })}
          <button
            key="contact"
            className={"bg-sky-500 hover:bg-sky-700 p-2 text-white rounded"}
            onClick={() => scrollTo("contact")}
          >
            Kontakt
          </button>
        </div>
      </div>
    </div>
  );
}
