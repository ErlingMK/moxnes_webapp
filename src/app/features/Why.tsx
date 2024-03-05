import CollapsablePanel from "../components/CollapsablePanel";
import Panel from "../components/Panel";

export default function Why() {
  return (
    <div className="flex flex-col">
      <h2 className={"text-lg font-semibold"}>
        Hvorfor bør du opprette en fremtidsfullmakt?
      </h2>

      <p>
        Du kan bli rammet av alvorlig sykdom som gjør at du ikke lenger kan
        ivareta økonomiske forpliktelser og personlige forhold. Som for eksempel
        å betale regninger, håndtere løpende inntekter og utgifter, håndtere
        ulike gjeldsforhold, kjøpe og selge verdipapirer, opprette eller
        avslutte bankkontoer, drift eller utleie av fast eiendom eller drift av
        næringsvirksomhet.
      </p>

      <CollapsablePanel
        header=""
        content={
          <div>
            <p>
              Personlige forhold omfatter i utgangspunktet alle former for
              representasjon og ivaretakelse av rettigheter utover det rent
              økonomiske. Du kan for eksempel velge hvem som skal representere
              deg overfor Nav, kommune og sykehjem.
            </p>
            <br />
            <p>
              Fullmektigen din vil for eksempel kunne søke om tjenester og
              ytelser fra det offentlige og klage på vedtak. Personlige forhold
              kan også være at man vil bo lengst mulig hjemme, at man vil ha med
              bestemte eiendeler til sykehjemmet eller at det skal brukes penger
              på sydenturer eller kulturelle arrangementer som man pleier å ha
              glede av, og å bestemme hvem som skal overta ansvaret for dine
              kjæledyr. Fullmakt til å rydde opp i digitale tilganger vil også
              være et personlig forhold. Noen ønsker også å bestemme hvem som
              skal regnes som nærmeste pårørende. Hvis du ønsker å peke ut hvem
              som skal være din nærmeste pårørende, må det fremgå tydelig i
              fullmakten. Den du utpeker vil da få rettigheter som en nærstående
              har etter helselovgivningen (Helsenorge.no)
            </p>
          </div>
        }
      />
      <br />
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
    </div>
  );
}
