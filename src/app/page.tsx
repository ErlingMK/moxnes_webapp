"use client";

import About from "./features/About";
import { useRef } from "react";
import Header from "./header";
import Prices from "./features/Prices";
import Page from "./contact/page";
import Introduction from "./features/Introduction";
import Section from "./components/Section";
import Panel from "./components/Panel";

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
      <div>
        <div className="z-10 relative">
          <video width={1920} height={1080} loop autoPlay muted>
            <source src="videos/loop.mp4" type="video/mp4" />
          </video>

          <div className="absolute top-1/3 left-1/4 z-20 bg-main-blue-faded p-5 mr-5">
            <Introduction />
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-5 lg:gap-12">
        <Section first>
          <div className="flex flex-col gap-8 mt-5">
            <p>
              Når du gir en annen eller andre en fullmakt, gir du dem rett til å
              opptre på dine vegne i de forholdene som er beskrevet i
              fullmakten. Den som får en slik rett kalles fullmektig. Du kan
              oppnevne flere fullmektiger. Fullmakten trer i kraft når du ikke
              lenger er i stand til å ivareta livet ditt som før. Du kan
              opprette en fullmakt som skal gjelde med én gang når det gjelder
              dine økonomiske forhold.
            </p>
            <p>
              Du må være over 18 år og være i stand til å forstå fullmaktens
              betydning. At du var i stand til å forstå betydningen av å
              opprette en fullmakt når den ble undertegnet må bekreftes av
              vitner.
            </p>
            <p>
              Du kan opprette en fremtidsfullmakt på egen hånd, men vi anbefaler
              at du får hjelp og veiledning av advokat eller rettshjelper.
            </p>
            <p>
              Opprettelse av fremtidsfullmakt kan også berøre andre rettslige
              spørsmål, særlig med tanke på arv, familierett og spørsmål knyttet
              til NAV. Jeg kan bistå i slike problemstillinger.
            </p>
            <Panel
              content={
                <p>
                  At du oppretter en fremtidsfullmakt kan også være viktig for
                  dine nærmeste. Da slipper ektefellen eller barna dine bekymre
                  seg om hva du egentlig hadde ønsket om du selv hadde forstått
                  og kunnet bestemme. Opprettelsen av en fremtidsfullmakt vil
                  også gi deg og dere mulighet til å diskutere hva som bør stå i
                  fullmakten om du skulle ønske det.
                </p>
              }
            />
          </div>
        </Section>

        <Section ref={aboutSectionRef}>
          <About />
        </Section>

        <Section ref={pricesSectionRef}>
          <Prices />
        </Section>

        <Section id="contact" ref={contactSectionRef}>
          <Page />
        </Section>
      </div>
    </div>
  );
}
