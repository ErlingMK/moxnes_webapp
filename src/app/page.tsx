"use client";

import { Sidebar } from "./main/Sidebar";
import { Main } from "./main/Main";
import frontPhoto from "./front.jpg";
import Image from "next/image";
import About from "./about/page";
import { useEffect, useRef } from "react";
import Header from "./header";
import Prices from "./prices/page";
import Contact from "./contact/page";

const map: { [key: string]: string } = {
  about: "#2AFAFA",
  prices: "blue",
  contact: "green",
  main: "#3f6699",
};

export default function Home() {
  const aboutSectionRef = useRef<HTMLElement>(null);
  const pricesSectionRef = useRef<HTMLElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.addEventListener("scroll", function () {
      const sections = document.querySelectorAll("section");

      let currentSection = sections[0];
      let top = -100000;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < 0 && rect.top > top) {
          currentSection = section;
          top = rect.top;
        }
      });

      console.log(currentSection.id);
      const header = document.getElementById("header");
      if (header) {
        header.style.backgroundColor = map[currentSection.id];
      }
    });
  }, []);

  function scrollTo(id: string) {
    const key = {
      about: aboutSectionRef,
      prices: pricesSectionRef,
      contact: contactSectionRef,
    }[id];

    if (key && key.current) {
      key.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
  return (
    <div>
      <header
        id="header"
        className={"md:sticky top-0 z-50 bg-main-blue p-6 transition shadow-md"}
      >
        <Header scrollTo={scrollTo} />
      </header>
      <section
        id="main"
        className={"h-screen w-screen flex flex-col -mt-32 pt-32 box-border"}
      >
        <Image src={frontPhoto} alt="photo of life stages" />
        <div
          className={
            "bg-main-blue h-full text-white flex flex-col justify-end p-10"
          }
        >
          <h1 className={"text-lg md:text-xl font-semibold"}>
            Det er en menneskerettighet å kunne bestemme over seg selv og sitt
            eget liv
          </h1>
          <p>
            Ethvert individ skal ha rett til- i tråd med sine egne evner og
            forutsetninger – til å forme sitt liv etter sine egne ønsker og
            ideer. En fremtidsfullmakt skal sikre disposisjoner i tråd med
            fullmaktsgivers ønske i fremtiden. (Fra forarbeidene til
            Vergemålsloven)
          </p>
        </div>
      </section>

      {/* <div className={"p-5 flex flex-col md:flex-row gap-5 items-start"}>
        <Main />
        <Sidebar />
      </div> */}
      <section
        id="about"
        ref={aboutSectionRef}
        className={
          "h-screen w-screen flex flex-col justify-end -mt-32 pt-32 box-border"
        }
      >
        <div className={"bg-[#2AFAFA] text-white"}>
          <About />
        </div>
      </section>
      <section id="prices" ref={pricesSectionRef} className={"h-screen"}>
        <hr />
        <Prices />
      </section>
      <section id="contact" ref={contactSectionRef}>
        <hr />
        <Contact />
      </section>
    </div>
  );
}
