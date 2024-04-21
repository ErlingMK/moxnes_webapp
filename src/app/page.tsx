import About from "./about/page";
import Introduction from "./features/Introduction";
import FremtidsFullmakt from "./fremtidsfullmakt/page";
import Prices from "./prices/page";

export default function Home() {
  return (
    <div className={"flex flex-col"}>
      <div>
        <div className="z-10 relative">
          <video width={1920} height={1080} loop autoPlay muted playsInline>
            <source src="videos/loop_new.mp4" type="video/mp4" />
          </video>
          <div className="md:absolute md:top-3/4 md:ml-5 z-20 bg-main-blue-faded p-5 md:mr-5">
            <Introduction />
          </div>
        </div>

        <div className="md:hidden">
          <About />
        </div>

        <div className="md:hidden">
          <Prices />
        </div>

        <div className="md:hidden">
          <FremtidsFullmakt />
        </div>
      </div>
    </div>
  );
}
