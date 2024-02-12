import Panel from "../components/Panel";

export default function About() {
  return (
    <div className={"p-5 flex flex-col gap-5 items-start"}>
      <h2 className={"text-4xl"}>Hvem er jeg?</h2>
      <p>
        Jeg er jurist og avla juridisk embetseksamen i 1989. Jeg jobber i dag
        som seniorrådgiver i kriminalomsorgen. I 2016 utdannet jeg meg som coach
        ved Erickson coaching Norge.
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
      <p>Jeg er 63 år og har tre voksne sønner og et barnebarn, og en hund.</p>
      <p>
        Utdannelsen som coach har gjort meg bevisst på å stille de riktige
        spørsmålene for å klargjøre hvilke ønsker/mål klienten har. Jeg tilbyr
        oppfølging og veiledning i prosessen det er å komme frem til hva
        fullmakten skal inneholde.
      </p>
      <p>
        Jeg skriver fullmakten og sørger for at de rettslige rammene som skal
        til for at den er gyldig er på plass.
      </p>
      <p>
        Vi møtes på telefonen eller i ett digitalt møte. Jeg kan også komme hjem
        til deg/dere om det er innenfor en rimelig rekkevidde.
      </p>
    </div>
  );
}
