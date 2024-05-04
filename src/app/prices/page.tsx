export default function Prices() {
  return (
    <div className="flex flex-col gap-5 p-5 md:bg-white md:text-black bg-main-blue-faded text-white">
      <h2 className={"text-lg font-semibold"}>Priser</h2>
      <p>
        Pris for opprettelse av fremtidsfullmakt kr. 1000,- per time pluss moms.
        Det vil bli fakturert per påbegynte halve time.
      </p>
      <p>
        Det kan avtales en fast pris om du ønsker det. Prisen vil da fastsettes
        ut fra antatt bruk av timer. Det vil inngås en oppdragsavtale som
        inneholder pris, antatt tidsbruk og tidspunkt for ferdigstillelse av
        oppdraget.
      </p>
    </div>
  );
}
