"use client";

import { pages } from "@/app/utility";
import TitleHeader from "./Title";
import Link from "next/link";

export default function Header() {
  return (
    <div
      className={
        "flex flex-row p-6 justify-between md:sticky top-0 z-50 bg-main-blue shadow-md"
      }
    >
      <TitleHeader />
      <div className={"flex flex-row gap-5 items-start text-white"}>
        {pages.map((page) => {
          return (
            <button
              key={page.link}
              onClick={() => {}}
              className={
                "transition p-2 hover:underline hover:scale-105 hidden md:block"
              }
            >
              {page.title}
            </button>
          );
        })}

        <Link
          href="/contact"
          className={
            "transition bg-sky-500 hover:bg-sky-400 p-2 text-white rounded shadow-md hover:scale-105"
          }
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
}
