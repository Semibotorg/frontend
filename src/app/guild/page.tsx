import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function GuildPage() {
  const guilds = [
    {
      name: "Guilssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssd",
      photo: "/logo/semibot.png",
      inGuild: false,
    },
    {
      name: "Guild2",
      photo: "/logo/semibot.png",
      inGuild: true,
    },
    {
        name: "Guild",
        photo: "/logo/semibot.png",
        inGuild: false,
      },
      {
        name: "Guild2",
        photo: "/logo/semibot.png",
        inGuild: true,
      },
      {
        name: "Guild",
        photo: "/logo/semibot.png",
        inGuild: false,
      },
      {
        name: "Guild2",
        photo: "/logo/semibot.png",
        inGuild: true,
      },
  ];

  const guildsSorted = guilds.sort((a, b) => (b.inGuild ? 1 : -1) - (a.inGuild ? 1 : -1));
    return (
    <main className="max-w-7xl p-8 relative m-auto">
      <div className="flex w-full justify-center mb-20 items-center">
        <h1 className="text-white text-center font-bold text-4xl max-md:text-3xl">
          Select Your Server
        </h1>
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center">
        {guildsSorted.map((guild) => (
          <div
            key={guild.name}
            className="p-8 rounded-lg bg-guild w-80 h-48 flex justify-between flex-col"
          >
            <div className="flex flex-row gap-5 items-center">
              <Image
                src={guild.photo}
                width={40}
                height={40}
                alt={"guild image"}
              />
              <span className="text-white font-semibold text-lg overflow-hidden text-ellipsis">
                {guild.name}
              </span>
            </div>
            <div>
              {guild.inGuild ? (
                <button className="bg-guildDashboardBtn w-full hover:bg-guildDashboardBtn-hover transition active:scale-95 ease-linear text-white font-semibold flex justify-center items-center flex-row gap-3 pl-14 pr-14 pt-2 pb-2 rounded-md">
                  <span className="text-md">Dashboard</span>
                </button>
              ) : (
                <button className="bg-discord w-full hover:bg-discord-hover transition active:scale-95 ease-linear text-white font-semibold flex justify-center items-center flex-row gap-3 pl-14 pr-14 pt-2 pb-2 rounded-md">
                  <FontAwesomeIcon
                    color="#FFFFFF"
                    width={23}
                    className="text-lg"
                    icon={faDiscord}
                  />
                  <span className="text-md">Add bot</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
