import { pages } from "@/app/utility";
import { HeaderProps } from "../header";
import Button from "../components/Button";
import TitleHeader from "./titleHeader";

export default function DesktopHeader({ scrollTo }: HeaderProps) {
  return (
    <div
      className={
        "flex flex-row p-6 justify-between md:sticky top-0 z-100 bg-main-blue shadow-md"
      }
    >
      <TitleHeader />
      <div className={"flex flex-row gap-5 items-start text-white"}>
        {pages.map((page) => {
          return (
            <button
              key={page.link}
              onClick={() => scrollTo(page.link)}
              className={
                "transition p-2 hover:underline hover:scale-105 hidden md:block"
              }
            >
              {page.title}
            </button>
          );
        })}

        <Button text="contact" onclick={scrollTo} />
      </div>
    </div>
  );
}
