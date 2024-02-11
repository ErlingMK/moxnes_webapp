import CollapsablePanel from "../components/CollapsablePanel";
import Panel from "../components/Panel";

export function Main() {
  return (
    <div className={"flex flex-col gap-12"}>
      <div>
        <h1 className={"text-xl font-semibold"}>
          Det er en menneskerettighet å kunne bestemme over seg selv og sitt
          eget liv
        </h1>
        <p className={"text-lg"}>
          Ethvert individ skal ha rett til- i tråd med sine egne evner og
          forutsetninger – til å forme sitt liv etter sine egne ønsker og ideer.
          En fremtidsfullmakt skal sikre disposisjoner i tråd med
          fullmaktsgivers ønske i fremtiden. (Fra forarbeidene til
          Vergemålsloven)
        </p>
      </div>

      <div>
        <h2 className={"text-lg font-semibold"}>
          Hvorfor bør du opprette en fremtidsfullmakt?
        </h2>

        <p>
          Du kan bli rammet av alvorlig sykdom som gjør at du ikke lenger kan
          ivareta økonomiske forpliktelser og personlige forhold. Som for
          eksempel å betale regninger, håndtere løpende inntekter og utgifter,
          håndtere ulike gjeldsforhold, kjøpe og selge verdipapirer, opprette
          eller avslutte bankkontoer, drift eller utleie av fast eiendom eller
          drift av næringsvirksomhet.
        </p>

        <br />

        <p>
          Personlige forhold omfatter i utgangspunktet alle former for
          representasjon og ivaretakelse av rettigheter utover det rent
          økonomiske. Du kan for eksempel velge hvem som skal representere deg
          overfor Nav, kommune og sykehjem.
        </p>
        <CollapsablePanel
          header=""
          content={
            <div>
              <p>
                Fullmektigen din vil for eksempel kunne søke om tjenester og
                ytelser fra det offentlige og klage på vedtak. Personlige
                forhold kan også være at man vil bo lengst mulig hjemme, at man
                vil ha med bestemte eiendeler til sykehjemmet eller at det skal
                brukes penger på sydenturer eller kulturelle arrangementer som
                man pleier å ha glede av, og å bestemme hvem som skal overta
                ansvaret for dine kjæledyr. Fullmakt til å rydde opp i digitale
                tilganger vil også være et personlig forhold. Noen ønsker også å
                bestemme hvem som skal regnes som nærmeste pårørende. Hvis du
                ønsker å peke ut hvem som skal være din nærmeste pårørende, må
                det fremgå tydelig i fullmakten. Den du utpeker vil da få
                rettigheter som en nærstående har etter helselovgivningen
                (Helsenorge.no)
              </p>
            </div>
          }
        />
      </div>

      <Panel
        content={
          <div>
            <p>
              Å skrive en fremtidsfullmakt er ikke viktig bare for deg, det er
              også viktig for dine nærmeste. Det vil kunne spare dem for mye
              usikkerhet og mange vanskeligheter.
            </p>
            <br />
            <p>
              Det er mange spørsmål som kan oppstå underveis og i årenes løp.
              Det er viktig å stille de gode spørsmålene og utarbeide en
              skreddersydd ordlyd som ikke kan misforståes eller skape tvil. Vi
              kan hjelpe deg/dere med dette.
            </p>
          </div>
        }
      />

      <div>
        <h2 className={"text-lg font-semibold"}>
          Hva skjer om du ikke har skrevet en fremtidsfullmakt?
        </h2>
        <p>
          Om du ikke har en fremtidsfullmakt når du blir syk kan det bli
          oppnevnt verge etter vergemålsloven.
        </p>
        <CollapsablePanel
          header=""
          content={
            <div>
              <p>
                I vergemålsloven er det klare rammer for hva en verge kan gjøre
                på dine vegne. Da vil det være bestemmelsene i vergemålsloven
                som gjelder om oppnevnelse av verge og hvilke områder og hvilke
                måter den kan som er oppnevnt som verge må opptre på.
                <strong>
                  {" "}
                  Fremtidsfullmakt kan derimot skreddersys etter dine behov.
                </strong>
              </p>
            </div>
          }
        />
      </div>

      <div>
        <h2 className={"text-lg font-semibold"}>
          Bør du skrive fullmakten selv?
        </h2>
        <p>
          Det kan du, og det finnes maler og ferdigutfylte fullmakter på nettet
          som du kan bruke. Det kan være rimelig og enkelt nå, men kan fort bli
          dyrt og skape problemer når fullmakten trer i kraft.
        </p>

        <CollapsablePanel
          header=""
          content={
            <div>
              {" "}
              <p>
                Eksempler på hva man bør tenke nøye igjennom kan være; når egne
                barn oppnevnes ofte som fullmektiger og har du flere barn er det
                viktig å tenke dette nøye igjennom. Skal for eksempel bare en
                være fullmektig eller skal de være fullmektiger sammen, eller
                skal de dekke hvert sitt område? Ved å få hjelp til å klargjøre
                hvem som skal være fullmektiger, og presisere fullmektigenes
                ansvar kan man sikre enighet i familien og hindre konflikter.
              </p>
              <br />
              <p>
                Et annet eksempel er om det er ektefelle eller samboer som er
                tenkt å være fullmektig må man vurdere hva som skal skje om
                ekteskapet eller samboerforholdet oppløses?
              </p>
              <br />
              <p>
                Og bør den som er fullmektig få en godtgjørelse for arbeidet?
                Hvor stor skal denne godtgjørelsen være? Bør fullmektigen legge
                frem regnskap overfor arvingene?
              </p>
              <br />
              <p>
                Om du vil gi fullmektigen rett til å disponere over eiendom må
                dette gå klart frem av fullmakten. Kartverket (Grunnboken)
                krever stadfestelse av fullmakten før tinglysning, og hva som
                skal skje med gevinsten av salget må reguleres i fullmakten.
              </p>
              <br />
              <p>
                I tillegg krever noen banker også stadfestelse av fullmakten før
                fullmektigen kan opptre etter fullmakten.
              </p>
              <br />
              <p>
                Dette er bare noen få av problemstillingene som kan oppstå og
                som bør besvares på en tydelig og forståelig måte i fullmakten.
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
}
