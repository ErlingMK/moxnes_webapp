export default function Prices() {
  return (
    <div className={"flex flex-col gap-12"}>
      <h2 className={"text-lg font-semibold"}>Priser</h2>
      <ul className="list-disc space-y-5 ml-8">
        <li className="text-main-blue">
          <span className="text-black">
            Pris: er kr.1200,- per time pluss moms. Den første halvtimen er
            gratis.
          </span>
        </li>
      </ul>
    </div>
  );
}
