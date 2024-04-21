import Panel from "../components/Panel";

export default function Page() {
  return (
    <div className={"flex flex-col gap-5 p-5"}>
      <h2 className={"text-lg font-semibold"}>Hvem er jeg?</h2>
      <p>
        Jeg er jurist og jobber til daglig i offentlig forvaltning som
        seniorrådgiver. Jeg er utdannet coach ved Erickson Nordic coaching. Jeg
        legger stor vekt på å kunne bistå deg gjennom å stille gode spørsmål
        slik at du selv kan komme frem til hva som er det beste innholdet i din
        fremtidsfullmakt.
      </p>
      <p>
        Jeg skriver fullmakten og sørger for at de rettslige rammene som skal
        til for at den er gyldig er på plass.
      </p>
      <p>
        Vi møtes på telefonen eller i ett digitalt møte. Jeg kan også komme hjem
        til deg/dere om det er innenfor en rimelig rekkevidde.
      </p>
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
    </div>
  );
}
