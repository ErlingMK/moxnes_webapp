export default function Footer() {
  return (
    <div className="flex flex-col bg-main-blue text-white p-5">
      <p className={"font-bold"}>Liv Mette Moxnes</p>
      <p className={"text-sm"}>Jurist og Coach</p>
      <p className={"mt-2 text-sm"}>
        <span>E-post:</span>
        <a
          className="ml-2 underline text-white"
          href={"mailto:post@moxnesjus.no"}
        >
          post@moxnesjus.no
        </a>
      </p>
    </div>
  );
}
