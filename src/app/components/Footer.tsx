export default function Footer() {
  return (
    <div className="flex justify-between bg-main-blue text-white p-5">
      <div className="flex flex-col ">
        <p className={"font-bold"}>Moxnes Jus & Coaching</p>
        <p className={"text-sm"}>Organisasjonsnummer: 929450035</p>
      </div>

      <div className="flex flex-col mb-3">
        <p className={"text-sm"}>Postboks 50, 3120 Teie Nøtterøy</p>
        <p className={"text-sm"}>
          <span>E-post:</span>
          <a className="ml-1 underline " href={"mailto:post@moxnesjus.no"}>
            post@moxnesjus.no
          </a>
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
