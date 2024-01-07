import Image from "next/image";
import frontPagePhoto from "./front_page_photo.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className={"relative bf"}>
      <Image src={frontPagePhoto} alt={"Picture of old couple"} />
      <div
        className={
          "bg-black/60 md:bg-black/30 border-1 absolute top-14 mx-5 p-5 w-3/4 "
        }
      >
        <p className={"text-white text-left "}>
          Det er en menneskerettighet å kunne bestemme over seg selv og sitt
          eget liv: Ethvert individ skal ha rett til- i tråd med sine egne evner
          og forutsetninger – til å forme sitt liv etter sine egne ønsker og
          idéer. En fremtidsfullmakt skal sikre disposisjoner i tråd med
          fullmaktsgivers ønske/vilje i fremtiden. (Fra forarbeidene til
          Vergemålsloven)
        </p>
        <br />

        <Link
          href={"/services"}
          className={"bg-sky-500 hover:bg-sky-700 p-2 text-white rounded"}
        >
          Les mer
        </Link>
      </div>
    </div>
  );
}
