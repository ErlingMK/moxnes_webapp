import Image from "next/image";
import photo from "./main_photo.jpeg";
import Link from "next/link";
import CollapsablePanel from "../components/CollapsablePanel";

export default function Services() {
  return (
    <div className={"p-5 flex flex-row gap-5 items-start text-dark-gray"}>
      <div>
        <h1 className={"text-xl font-semibold"}>
          Hvorfor bør du gi en fremtidsfullmakt?
        </h1>

        <p>
          Du kan bli rammet av alvorlig sykdom og/eller demens som gjør at du
          ikke lenger kan ivareta økonomiske forpliktelser og personlige forhold
          som for eksempel å betale regninger, håndtere løpende inntekter og
          utgifter, håndtere ulike gjeldsforhold, kjøpe og selge verdipapirer,
          opprette eller avslutte bankkontoer, drift eller utleie av fast
          eiendom eller drift av næringsvirksomhet.
          <br />
          <br />
          <strong>Personlige forhold</strong> omfatter i utgangspunktet alle
          former for representasjon og ivaretakelse av rettigheter utover det
          rent økonomiske. Du kan for eksempel velge hvem som skal representere
          deg overfor Nav, kommune og sykehjem. Da vil fullmektigen din kunne
          søke om tjenester og ytelser fra det offentlige og klage på vedtak.
          Personlige forhold kan for eksempel være at man vil bo lengst mulig
          hjemme, at man vil ha med bestemte eiendeler til sykehjemmet eller at
          det skal brukes penger på sydenturer eller kulturelle arrangementer
          som man pleier å ha glede av, og hvem som skal overta ansvaret for
          dine kjæledyr. Fullmakt til å rydde opp i digitale tilganger vil også
          være et personlig forhold.
          <br />
          <br />
          Noen ønsker også å bestemme hvem som skal regnes som nærmeste
          pårørende. Hvis du ønsker å peke ut hvem som skal være din nærmeste
          pårørende, må det fremgå tydelig i fullmakten. Den du utpeker vil da
          få rettigheter som en nærstående har etter helselovgivningen
          <a href="Helsenorge.no" className={"underline"}>
            (Helsenorge.no????).
          </a>
        </p>
        <div className={"bg-light-gray-secondary p-5 mt-5"}>
          <p>
            Å skrive en fremtidsfullmakt er ikke viktig bare for deg, det er
            også viktig for dine nærmeste. Det vil kunne spare dem for mye
            usikkerhet og mange vanskeligheter.
          </p>
          <br />
          <p>
            Det er mange spørsmål som kan oppstå underveis og i årenes løp. Det
            er viktig å stille de gode spørsmålene og utarbeide en skreddersydd
            ordlyd som ikke kan misforståes eller skape tvil. Vi kan hjelpe
            deg/dere med dette.
          </p>
        </div>
        <br />
        <h2 className={"text-xl font-semibold"}>
          Hva skjer om du ikke har skrevet en fremtidsfullmakt?
        </h2>
        <p>
          Om du ikke har en fremtidsfullmakt når du blir syk kan det bli
          oppnevnt verge etter vergemålsloven. I vergemålsloven er det klare
          rammer for hva en verge kan gjøre på dine vegne.
          <strong>
            {" "}
            Da vil det være bestemmelsene i vergemålsloven som gjelder om
            oppnevnelse av verge og hvilke områder og hvilke måter den kan som
            er oppnevnt som verge må opptre på.
          </strong>
        </p>
        <div className={"bg-light-gray-secondary p-5 mt-5"}>
          <p>Fremtidsfullmakt kan derimot skreddersys etter dine behov.</p>
        </div>
        <br />
        <h2 className={"text-xl font-semibold"}>
          Og til slutt, bør du skrive fullmakten selv?
        </h2>
        <p>
          Det kan du, og det finnes maler og ferdigutfylte fullmakter på nettet
          som du kan bruke. Det kan være rimelig og enkelt nå, men kan fort bli
          dyrt og skape problemer når fullmakten trer i kraft.
        </p>
        <br />
        <p>
          Eksempler på hva man bør tenke nøye igjennom kan være; når egne barn
          oppnevnes ofte som fullmektiger og har du flere barn er det viktig å
          tenke dette nøye igjennom. Skal for eksempel bare en være fullmektig
          eller skal de være fullmektiger sammen, eller skal de dekke hvert sitt
          område? Ved å få hjelp til å klargjøre hvem som skal være
          fullmektiger, og presisere fullmektigenes ansvar kan man sikre enighet
          i familien og hindre konflikter.
        </p>
        <br />
        <p>
          Et annet eksempel er om det er ektefelle eller samboer som er tenkt å
          være fullmektig må man vurdere hva som skal skje om ekteskapet eller
          samboerforholdet oppløses?
        </p>
        <br />
        <p>
          Og bør den som er fullmektig få en godtgjørelse for arbeidet? Hvor
          stor skal denne godtgjørelsen være? Bør fullmektigen legge frem
          regnskap overfor arvingene?
        </p>
        <br />
        <p>
          Om du vil gi fullmektigen rett til å disponere over eiendom må dette
          gå klart frem av fullmakten. Kartverket (Grunnboken) krever
          stadfestelse av fullmakten før tinglysning, og hva som skal skje med
          gevinsten av salget må reguleres i fullmakten.
        </p>
        <br />
        <p>
          I tillegg krever noen banker også stadfestelse av fullmakten før
          fullmektigen kan opptre etter fullmakten.
        </p>

        <br />
        <p>
          Dette er bare noen få av problemstillingene som kan oppstå og som bør
          besvares på en tydelig og forståelig måte i fullmakten.
        </p>
      </div>

      <div>
        <div className={"bg-light-gray-secondary p-5 mt-5"}>
          <CollapsablePanel
            header="Fremtidsfullmakt er beskrevet i Vergemålsloven §78"
            content={
              <div>
                «En fremtidsfullmakt er en fullmakt til en eller flere personer
                om å representere fullmaktgiveren etter at fullmaktgiveren på
                grunn av sinnslidelse, herunder demen , eller alvorlig svekket
                helbred ikke lenger er i stand til å ivareta sine interesser
                innen de områdene som omfattes av fullmakten.»
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
                  Å gi noen en fremtidsfullmakt vil si at personen eller
                  personene som får en slik fullmakt vil kunne disponere
                  rettslig på et tidspunkt i fremtiden når visse forutsetninger
                  inntreffer.
                </p>
                <br />
                <p>
                  Den som gir noen en fullmakt kalles fullmaktsgiver, og den som
                  får en fullmakt er fullmektig.
                </p>
                <br />
                <p>
                  Det er to typer fremtidsfullmakter, hvor den ene er fullmakt
                  på det økonomiske området som skal tre i kraft fra
                  opprettelsen eller et annet tidspunkt og før fullmaktsgiveren
                  har mistet handleevnen. Deretter skal fullmakten fortsett å
                  gjelde etter at handleevnen er tapt (vedvarende fullmakter).
                </p>
                <br />
                <p>
                  Den andre er fullmakter på det økonomiske og/eller personlige
                  området som først skal tre i kraft når handleevnen er tapt
                  (rene fremtidsfullmakter).
                </p>
              </div>
            }
          />
        </div>
      </div>
      {/* <Image src={photo} alt={"Picture of hands"} className={"min-w-[450px]"} /> */}
    </div>
  );
}
