import CollapsablePanel from "../components/CollapsablePanel";

export function Sidebar() {
  return (
    <div className={"flex flex-col"}>
      <div
        className={"bg-secondary-blue text-white p-5 mt-5 rounded-lg shadow-md"}
      >
        <CollapsablePanel
          header="Fremtidsfullmakt er beskrevet i Vergemålsloven §78"
          content={
            <p>
              «En fremtidsfullmakt er en fullmakt til en eller flere personer om
              å representere fullmaktgiveren etter at fullmaktgiveren på grunn
              av sinnslidelse, herunder demen , eller alvorlig svekket helbred
              ikke lenger er i stand til å ivareta sine interesser innen de
              områdene som omfattes av fullmakten.»
            </p>
          }
        />
      </div>

      <div
        className={"bg-secondary-blue text-white p-5 mt-5 rounded-lg shadow-md"}
      >
        <CollapsablePanel
          header="Noen forklaringer det er greit å ha med seg"
          content={
            <div>
              <ul className={"list-disc px-3 space-y-5"}>
                <li>
                  Å gi fullmakt til noen vil si at denne personen kan disponerer
                  rettslig på vegne av deg.
                </li>
                <li>
                  Å gi noen en fremtidsfullmakt vil si at personen eller
                  personene som får en slik fullmakt vil kunne disponere
                  rettslig på et tidspunkt i fremtiden når visse forutsetninger
                  inntreffer.
                </li>
                <li>
                  Den som gir noen en fullmakt kalles fullmaktsgiver, og den som
                  får en fullmakt er fullmektig.
                </li>
                <li>
                  Det er to typer fremtidsfullmakter, hvor den ene er fullmakt
                  på det økonomiske området som skal tre i kraft fra
                  opprettelsen eller et annet tidspunkt og før fullmaktsgiveren
                  har mistet handleevnen. Deretter skal fullmakten fortsett å
                  gjelde etter at handleevnen er tapt (vedvarende fullmakter).
                </li>
                <li>
                  Den andre er fullmakter på det økonomiske og/eller personlige
                  området som først skal tre i kraft når handleevnen er tapt
                  (rene fremtidsfullmakter).
                </li>
              </ul>
            </div>
          }
        />
      </div>
    </div>
  );
}
