import CollapsablePanel from "../components/CollapsablePanel";

export function Sidebar() {
  return (
    <div>
      <div className={"bg-light-gray-secondary p-5 mt-5"}>
        <CollapsablePanel
          header="Fremtidsfullmakt er beskrevet i Vergemålsloven §78"
          content={
            <div>
              «En fremtidsfullmakt er en fullmakt til en eller flere personer om
              å representere fullmaktgiveren etter at fullmaktgiveren på grunn
              av sinnslidelse, herunder demen , eller alvorlig svekket helbred
              ikke lenger er i stand til å ivareta sine interesser innen de
              områdene som omfattes av fullmakten.»
            </div>
          }
        />
      </div>

      <div className={"bg-light-gray-secondary p-5 mt-5"}>
        <CollapsablePanel
          header="Noen forklaringer det er greit å ha med seg"
          content={
            <div>
              <p>
                Å gi fullmakt til noen vil si at denne personen kan disponerer
                rettslig på vegne av deg.
              </p>
              <br />
              <p>
                Å gi noen en fremtidsfullmakt vil si at personen eller personene
                som får en slik fullmakt vil kunne disponere rettslig på et
                tidspunkt i fremtiden når visse forutsetninger inntreffer.
              </p>
              <br />
              <p>
                Den som gir noen en fullmakt kalles fullmaktsgiver, og den som
                får en fullmakt er fullmektig.
              </p>
              <br />
              <p>
                Det er to typer fremtidsfullmakter, hvor den ene er fullmakt på
                det økonomiske området som skal tre i kraft fra opprettelsen
                eller et annet tidspunkt og før fullmaktsgiveren har mistet
                handleevnen. Deretter skal fullmakten fortsett å gjelde etter at
                handleevnen er tapt (vedvarende fullmakter).
              </p>
              <br />
              <p>
                Den andre er fullmakter på det økonomiske og/eller personlige
                området som først skal tre i kraft når handleevnen er tapt (rene
                fremtidsfullmakter).
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
}
