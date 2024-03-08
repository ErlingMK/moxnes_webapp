"use client";

import { Main } from "./features/Main";
import frontPhoto from "./front.jpg";
import Image from "next/image";
import About from "./features/About";
import { useRef } from "react";
import Header from "./header";
import Prices from "./features/Prices";
import Contact from "./features/Contact";
import Introduction from "./features/Introduction";
import Why from "./features/Why";
import Missing from "./features/Missing";
import Section from "./components/Section";

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
        <Section>
          <Introduction />
        </Section>

        <Section>
          <Why />
        </Section>

        <Section>
          <Missing />
        </Section>

        <Section>
          <Main />
        </Section>

        <Section ref={aboutSectionRef}>
          <About />
        </Section>

        <Section ref={pricesSectionRef}>
          <Prices />
        </Section>

        <Section ref={contactSectionRef}>
          <Contact />
        </Section>
      </div>
    </div>
  );
}
