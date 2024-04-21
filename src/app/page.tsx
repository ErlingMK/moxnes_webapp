import Introduction from "./features/Introduction";

export default function Home() {
  return (
    <div className={"flex flex-col"}>
      <div>
        <div className="z-10 relative">
          <video width={1920} height={1080} loop autoPlay muted>
            <source src="videos/loop_new.mp4" type="video/mp4" />
          </video>

          <div className="absolute top-1/3 left-1/4 z-20 bg-main-blue-faded p-5 mr-5">
            <Introduction />
          </div>
        </div>
      </div>
    </div>
  );
}
