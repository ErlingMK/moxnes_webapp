import { pages } from "@/app/utility";
import TitleHeader from "@/app/features/titleHeader";
import { HeaderProps } from "../header";

export default function DesktopHeader({ scrollTo }: HeaderProps) {
  return (
    <div
      className={
        "flex flex-row p-6 justify-between sticky top-0 z-100 bg-main-blue shadow-md"
      }
    >
      <TitleHeader />
      <div className={"flex flex-row gap-5 items-start text-white"}>
        {pages.map((page) => {
          return (
            <button
              key={page.link}
              onClick={() => scrollTo(page.link)}
              className={"p-2 hover:underline hover:scale-110 hidden md:block"}
            >
              {page.title}
            </button>
          );
        })}

        <button
          key="contact"
          className={"bg-sky-500 hover:bg-sky-600 p-2 text-white rounded"}
          onClick={() => scrollTo("contact")}
        >
          Kontakt
        </button>
      </div>
    </div>
  );
}
