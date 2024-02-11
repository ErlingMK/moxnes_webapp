import { Sidebar } from "./main/Sidebar";
import { Main } from "./main/Main";
import frontPhoto from "./front.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src={frontPhoto} alt="photo of life stages" />
      <div className={"p-5 flex flex-row gap-5 items-start"}>
        <Main />
        <Sidebar />
      </div>
    </div>
  );
}
