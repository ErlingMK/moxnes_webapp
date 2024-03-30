import Panel from "../components/Panel";

export default function About() {
  return (
    <div className={"flex flex-col gap-8"}>
      <h2 className={"text-lg font-semibold"}>Om meg</h2>
      <ul className="list-disc space-y-5  ml-8">
        <li className="text-main-blue">
          <span className="text-black">
            Jeg er jurist og jobber til daglig i offentlig forvaltning som
            seniorrådgiver. Jeg er utdannet coach ved Erickson Nordic coaching.
            Jeg legger stor vekt på å kunne bistå deg gjennom å stille gode
            spørsmål slik at du selv kan komme frem til hva som er det beste
            innholdet i din fremtidsfullmakt.
          </span>
        </li>
        <li className="text-main-blue">
          <span className="text-black">
            Vi møtes på telefonen eller i ett digitalt møte. Jeg kan også komme
            hjem til deg/dere om det er innenfor en rimelig rekkevidde.
          </span>
        </li>
        <Panel
          content={
            <div>
              <p>
                Jeg har tillatelse fra Tilsynsrådet for advokatvirksomhet og er
                forsikret for eventuelle feil gjort overfor klient.
              </p>
            </div>
          }
        />
      </ul>
    </div>
  );
}
