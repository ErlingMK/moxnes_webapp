"use client";

import { Sidebar } from "./main/Sidebar";
import { Main } from "./main/Main";
import frontPhoto from "./front.jpg";
import Image from "next/image";
import About from "./about/page";
import { useRef } from "react";
import Header from "./header";
import Prices from "./prices/page";
import Contact from "./contact/page";

export default function Home() {
  const aboutSectionRef = useRef<HTMLElement>(null);
  const pricesSectionRef = useRef<HTMLElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);

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
    <div className={"flex flex-col gap-5"}>
      <Header scrollTo={scrollTo} />
      <Image src={frontPhoto} alt="photo of life stages" />
      <div className={"p-5 flex flex-row gap-5 items-start"}>
        <Main />
        <Sidebar />
      </div>
      <section ref={aboutSectionRef}>
        <hr />
        <About />
      </section>
      <section ref={pricesSectionRef}>
        <hr />
        <Prices />
      </section>
      <section ref={contactSectionRef}>
        <hr />
        <Contact />
      </section>
    </div>
  );
}
