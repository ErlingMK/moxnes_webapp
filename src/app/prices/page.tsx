export default function Prices() {
  return (
    <div className={"flex p-5 flex-col gap-5"}>
      <h2 className={"text-3xl "}>Priser</h2>
      <p>
        Priser for utarbeidelse av fremtidsfullmakt kr 1200 per time pluss moms.
        Det vil føres timeliste, og det vil faktureres for hver påbegynte
        halvtime.
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
