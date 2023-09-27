import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { features } from "../content/features";
export default function Home() {
  return (
    <>
      <main className="max-w-7xl p-8 relative m-auto">
        <div className="flex justify-center flex-col items-center mb-64">
          <div className="mb-6">
            <h1 className="text-white font-bold text-4xl max-md:text-3xl text-center">
              Monetize your discord server with no fees!
            </h1>
          </div>
          <div className="flex flex-row max-md:w-full gap-5 max-md:flex-col max-md:gap-0">
            <div className="mt-8 max-md:mt-3">
              <button className="bg-discord max-md:w-full hover:bg-discord-hover transition active:scale-95 ease-linear text-white font-semibold flex justify-center items-center flex-row gap-3 pl-8 pr-8 pt-2 pb-2 rounded-md">
                <FontAwesomeIcon
                  color="#FFFFFF"
                  width={23}
                  className="text-lg"
                  icon={faDiscord}
                />
                <span className="text-md">Add bot</span>
              </button>
            </div>
            <div className="mt-8 max-md:mt-3">
              <button className="bg-navResponsive max-md:w-full hover:bg-navResponsiveHover transition active:scale-95 ease-linear text-white font-semibold flex justify-center items-center flex-row gap-3 pl-12 pr-12 pt-2 pb-2 rounded-md">
                <span className="text-md">Login</span>
              </button>
            </div>
          </div>
        </div>

        {/*Features section*/}
        <div className="flex items-center justify-between flex-col gap-40 w-full mb-64">
          {features.map((value) => (
            <div
              key={value.title}
              className={`flex ${
                value.reverse ? "flex-row-reverse" : "flex-row"
              } items-center max-md:flex-col justify-between w-full max-w-6xl`}
            >
              <div className="flex flex-col gap-3 mb-20">
                <span className="font-semibold text-white text-4xl max-w-md">
                  {value.title}
                </span>
                <span className="text-gray-600 max-w-md text-md mb-8">
                  {value.description}
                </span>
                <div>
                  <button className="bg-discord hover:bg-discord-hover transition active:scale-95 ease-linear text-white font-semibold flex justify-center items-center flex-row gap-3 pl-8 pr-8 pt-2 pb-2 rounded-md">
                    <span className="text-md">Start now</span>
                  </button>
                </div>
              </div>
              <div>
                <Image
                  width={400}
                  height={200}
                  src={`/illustrations/${value.image}`}
                  alt={value.title}
                ></Image>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mb-14">
          <div className="bg-navResponsive w-11/12 max-md:flex-col max-w-4xl rounded-lg h-64 max-md:h-auto p-10 flex justify-between items-center">
            <div className="flex flex-col justify-center gap-7">
              <span className="text-white text-3xl max-md:text-xl max-w-md font-semibold">
                Earn money from your discord server!
              </span>
              <div>
                <button className="bg-discord max-md:w-full hover:bg-discord-hover transition active:scale-95 ease-linear text-white font-semibold flex justify-center items-center flex-row gap-3 pl-14 pr-14 pt-2 pb-2 rounded-md">
                  <span className="text-md">Start now</span>
                </button>
              </div>
            </div>
            <div className="max-md:hidden">
              <Image
                width={350}
                height={350}
                src={`/illustrations/earn-money.svg`}
                alt={"earn money"}
              ></Image>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-navResponsive shadow rounded-ss-3xl rounded-tr-xl">
        <div className="w-full mx-auto p-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()} Semibot LTD . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
