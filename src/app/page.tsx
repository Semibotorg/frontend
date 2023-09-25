import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className="max-w-7xl p-8 relative m-auto">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-white font-bold text-4xl max-md:text-3xl text-center">
          Monetize your server with no fees!
        </h1>
        <div className="flex flex-row max-md:w-full gap-5 max-md:flex-col max-md:gap-0">
          <div className="mt-8 max-md:mt-3">
          <button className="bg-discord max-md:w-full hover:bg-discord-hover transition active:scale-95 ease-linear text-white font-semibold flex justify-center items-center flex-row gap-3 pl-4 pr-4 pt-2 pb-2 rounded-md">
            <FontAwesomeIcon
              color="#FFFFFF"
              width={23}
              className="text-lg"
              icon={faDiscord}
            />
            <span className="text-sm">Add bot</span>
          </button>
          </div>
          <div className="mt-8 max-md:mt-3">
          <button className="bg-navResponsive max-md:w-full hover:bg-navResponsiveHover transition active:scale-95 ease-linear text-white font-semibold flex justify-center items-center flex-row gap-3 pl-8 pr-8 pt-2 pb-2 rounded-md">
            <span className="text-sm">Login</span>
          </button>
          </div>
        </div>
      </div>
    </main>
  );
}
