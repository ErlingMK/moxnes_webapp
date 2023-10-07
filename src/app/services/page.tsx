import Image from "next/image";
import photo from "./main_photo.jpeg";

export default function Services() {
  return (
    <div className={"p-5 flex flex-row gap-5 items-start"}>
      <div>
        <h1 className={"text-xl font-semibold"}>Hva er en fullmakt?</h1>
        <p>
          Du kan bestemme selv og sikre disposisjoner i tråd med dine
          ønsker/vilje i fremtiden. Fremtidsfullmakt er et privat alternativ til
          offentlig vergemål.
          <br />
          <br />I forarbeidene til vergemålsloven uttrykkes det i tråd med
          menneskerettighetene : «Ethvert individ skal ha rett til- i tråd med
          sine egne evner og forutsetninger- til å forme sitt liv etter egne
          ønsker og ideer.»
        </p>

        <br />
        <div className={""}>
          <h2 className={"font-semibold"}>Det er flere typer fullmakter:</h2>
          <div className={"pl-2"}>
            <h3 className={"font-semibold mt-2"}>Vedvarende fullmakt</h3>
            <p className={"pl-2"}>
              omfatter for det første fullmakter på det økonomiske området som
              skal tre i kraft fra opprettelsen eller et annet tidspunkt og før
              fullmaktsgiveren har mistet handleevnen, og som deretter skal
              fortsette å gjelde etter at handleevnen er tapt.
            </p>
            <h3 className={"font-semibold mt-5"}>«Rene» fremtidsfullmakter</h3>
            <p className={"pl-2"}>
              omfatter fullmakter på det økonomiske og/eller det personlige
              området som først skal tre i kraft når handleevnen er tapt.
              Fullmaktsgiver må være fylt 18 år og ha evnen til å forstå
              fullmaktens betydning. Det kreves ikke legeattest. Fullmektig må
              være fylt 18 år på det tidspunktet fullmakten trer i kraft og ikke
              være satt under vergemål. En juridisk person (for eksempel et
              advokat firma) kan ikke utpekes som fullmektig. Vergemålsloven
              stiller krav om vitners tilstedeværelse og underskrifter. Kan man
              ikke bare sette opp fullmakten på egen hånd? Det kan man, det
              ligger eksempler og maler på nettet som kan lastes ned. Det kan
              allikevel lønne seg å få hjelp til å sette opp fullmakten, da det
              er mange fallgruver. Jeg kan hjelpe med å stille de gode spørsmål
              for å identifisere fremtidige behov og problemstillinger og
              utarbeide er ordlyd som er fullmaktgivers reelle vilje som ikke
              senere kan misforståes.
            </p>
          </div>
        </div>
      </div>
      <div className={"bg-slate-200 p-5 mt-5"}>
        <h2 className={"font-semibold"}>
          Fremtidsfullmakt er beskrevet i Vergemålsloven §78
        </h2>
        <br />
        <p>
          «En fremtidsfullmakt er en fullmakt til en eller flere personer om å
          representere fullmaktgiveren etter at fullmaktgiveren på grunn av
          sinnslidelse, herunder demen , eller alvorlig svekket helbred ikke
          lenger er i stand til å ivareta sine interesser innen de områdene som
          omfattes av fullmakten.»
        </p>
      </div>

      {/* <Image src={photo} alt={"Picture of hands"} className={"min-w-[450px]"} /> */}
    </div>
  );
}
