"use client";

import { Main } from "./main/Main";
import frontPhoto from "./front.jpg";
import Image from "next/image";
import About from "./about/page";
import { useRef } from "react";
import Header from "./header";
import Prices from "./prices/page";
import Contact from "./contact/page";
import Introduction from "./features/Introduction";
import Why from "./features/Why";
import Missing from "./features/Missing";

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
    <div className={"flex flex-col"}>
      <Header scrollTo={scrollTo} />
      <Image src={frontPhoto} alt="photo of life stages" />
      <div className="p-5 flex flex-col gap-5 lg:gap-36">
        <section>
          <Introduction onclick={scrollTo} />
        </section>

        <section>
          <hr />

          <Why />
        </section>
        <section>
          <hr />

          <Missing />
        </section>
        <section>
          <hr />

          <Main />
        </section>

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
    </div>
  );
}
