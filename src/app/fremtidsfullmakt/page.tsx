import Panel from "../components/Panel";

export default function FremtidsFullmakt() {
  return (
    <div className="flex flex-col gap-5 p-5 md:bg-white md:text-black bg-main-blue-faded text-white">
      <h2 className={"text-lg font-semibold"}>Fremtidsfullmakt</h2>
      <p>
        Når du gir en annen eller andre en fullmakt, gir du dem rett til å
        opptre på dine vegne i de forholdene som er beskrevet i fullmakten. Den
        som får en slik rett kalles fullmektig. Du kan oppnevne flere
        fullmektiger. Fullmakten trer i kraft når du ikke lenger er i stand til
        å ivareta livet ditt som før. Du kan opprette en fullmakt som skal
        gjelde med én gang når det gjelder dine økonomiske forhold.
      </p>
      <p>
        Du må være over 18 år og være i stand til å forstå fullmaktens
        betydning. At du var i stand til å forstå betydningen av å opprette en
        fullmakt når den ble undertegnet må bekreftes av vitner.
      </p>
      <p>
        Du kan opprette en fremtidsfullmakt på egen hånd, men vi anbefaler at du
        får hjelp og veiledning av advokat eller rettshjelper.
      </p>
      <p>
        Opprettelse av fremtidsfullmakt kan også berøre andre rettslige
        spørsmål, særlig med tanke på arv, familierett og spørsmål knyttet til
        NAV. Jeg kan bistå i slike problemstillinger.
      </p>
      <Panel
        content={
          <p>
            At du oppretter en fremtidsfullmakt kan også være viktig for dine
            nærmeste. Da slipper ektefellen eller barna dine bekymre seg om hva
            du egentlig hadde ønsket om du selv hadde forstått og kunnet
            bestemme. Opprettelsen av en fremtidsfullmakt vil også gi deg og
            dere mulighet til å diskutere hva som bør stå i fullmakten om du
            skulle ønske det.
          </p>
        }
      />
    </div>
  );
}
