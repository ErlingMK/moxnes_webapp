import Panel from "../components/Panel";

export default function Page() {
  return (
    <div className={"flex flex-col gap-5 p-5"}>
      <h2 className={"text-lg font-semibold"}>Om meg</h2>
      <p>
        Jeg er jurist og jobber til daglig i offentlig forvaltning som
        seniorrådgiver. Jeg er utdannet coach ved Erickson Nordic coaching. Jeg
        legger stor vekt på å kunne bistå deg gjennom å stille gode spørsmål
        slik at du selv kan komme frem til hva som er det beste innholdet i din
        fremtidsfullmakt.
      </p>
      <p>
        Vi møtes på telefonen, i ett digitalt møte eller på kontoret på{" "}
        <a
          rel="noreferrer noopener"
          target="_blank"
          className="underline"
          href="https://www.google.com/maps/place/Bydelshuset/@59.2700181,10.4075876,15z/data=!4m2!3m1!1s0x0:0x5353ad55bbe87bb5?sa=X&ved=1t:2428&ictx=111"
        >
          bydelshuset i Tønsberg.
        </a>{" "}
        Jeg kan også komme hjem til deg/dere om det er innenfor en rimelig
        rekkevidde.
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
