import Mailto from "../features/Mailto";

export default function Footer() {
  return (
    <div className="flex justify-between bg-main-blue text-white p-5">
      <div className="flex flex-col ">
        <p className={"font-bold"}>Moxnes Jus & Coaching</p>
        <p className={"text-sm"}>Organisasjonsnummer: 929450035</p>
      </div>

      <div className="flex flex-col mb-3">
        <p className={"text-sm"}>Postboks 50 Teie, 3106 Nøtterøy</p>
        <p className={"text-sm"}>
          <span>E-post: </span>
          <Mailto />
        </p>

        <p className="text-sm">
          <span>Telefon:</span>
          <a className="ml-1 underline" href={"tel:91379998"}>
            +47 913 79 998
          </a>
        </p>
      </div>
    </div>
  );
}
