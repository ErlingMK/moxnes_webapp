import Link from "next/link";

export default function Introduction() {
  return (
    <div className="flex flex-col items-start text-white gap-8">
      <h1 className="md:text-md font-semibold">
        Har du tenkt på at du kan bli rammet av en alvorlig sykdom eller ulykke
        og ikke lenger kan ivareta deg selv og ditt liv?
      </h1>
      <p>Både unge og gamle kan dessverre oppleve dette.</p>
      <p>
        Du kan gi fullmakt til noen du stoler på og som kan sørge for at livet
        ditt kan bli slik du ønsker det, også etter at du ble alvorlig syk eller
        skadet.
      </p>

      <p>
        Du kan opprette fullmakten på egen hånd. Det ligger maler på nettet du
        kan bruke. Mange vil allikevel ha god nytte av å få hjelp av en
        jurist/advokat for å gjøre de vurderingene som er nødvendige. Det kan
        for eksempel oppstå spørsmål knyttet til arv og andre juridiske
        spørsmål.
      </p>
      <Link href="contact" className="underline">
        <p>Ta kontakt for en uforpliktende og gratis første samtale.</p>
      </Link>
    </div>
  );
}
