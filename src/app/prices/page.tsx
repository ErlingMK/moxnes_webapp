export default function Page() {
  return (
    <div className={"flex flex-col gap-12 p-5"}>
      <h2 className={"text-lg font-semibold"}>Priser</h2>
      <p>
        Priser for utarbeidelse av fremtidsfullmakt er 1200kr per time pluss
        moms. Det vil føres timeliste og det vil faktureres for hver påbegynte
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
