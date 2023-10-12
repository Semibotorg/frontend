"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { userSlice } from "../../redux/slices/userSlice";
import { getGuilds, getUser } from "../../utils/index";
import { guildsSlice } from "@/redux/slices/guildsSlice";
import { loadingSlice } from "@/redux/slices/loadingSlice";
import { SkeletonDashboard } from "../components";

export default function GuildPage() {
  const dispatch = useDispatch();
  const userRedux = useSelector((state: RootState) => state.user);
  const guildsRedux = useSelector((state: RootState) => state.guilds);
  const loadingRedux = useSelector((state: RootState) => state.loading);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!userRedux && localStorage.token) {
      setLoading(true);
      dispatch(loadingSlice.actions.setLoading(true));
      getUser(localStorage.token ?? "")
        .then((data) => {
          if(data) dispatch(userSlice.actions.addUser(data));
          dispatch(loadingSlice.actions.setLoading(false));
        })
        .catch((err) => {
          localStorage.removeItem("token");
          dispatch(userSlice.actions.clearData({}));
          router.push('/')
          dispatch(loadingSlice.actions.setLoading(false));
        });
    } else if(!localStorage.token) {
      router.push('/')
    }
    if (
      userRedux &&
      guildsRedux?.included?.length == 0 &&
      guildsRedux?.excluded?.length == 0
    ) {
      getGuilds(localStorage.token ?? "")
        .then((data) => {
          dispatch(guildsSlice.actions.addGuilds(data));
          setLoading(false);
        })
        .catch((err) => {
          router.push('/')
          localStorage.removeItem("token");
          dispatch(userSlice.actions.clearData({}));
          dispatch(loadingSlice.actions.setLoading(false));
        });
    } else if (
      guildsRedux?.included?.length > 0 ||
      guildsRedux?.excluded?.length > 0
    ) {
      setLoading(false);
    }
  }, [dispatch, userRedux, guildsRedux, router]);

  return (
    <main className="max-w-7xl p-8 relative m-auto">
      <div className="flex w-full justify-center mb-20 items-center">
        <h1 className="text-white text-center font-bold text-4xl max-md:text-3xl">
          Select Your Server
        </h1>
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center">
        {!loading &&
          guildsRedux?.included?.map((guild) => (
            <div
              key={guild.name}
              className="p-8 rounded-lg bg-guild w-80 h-48 flex justify-between flex-col"
            >
              <div className="flex flex-row gap-5 items-center">
                {guild.icon ? (
                  <Image
                    src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.jpg`}
                    width={40}
                    height={40}
                    className="rounded-full"
                    alt={"guild image"}
                  />
                ) : (
                  <div>
                    <div className="bg-guildDashboardBtn-hover text-white font-semibold rounded-full w-10 h-10 overflow-hidden flex justify-center items-center">
                      {guild.name.substring(0, 2)}
                    </div>
                  </div>
                )}
                <span className="text-white font-semibold text-lg overflow-hidden text-ellipsis">
                  {guild.name}
                </span>
              </div>
              <div>
                <button className="bg-guildDashboardBtn w-full hover:bg-guildDashboardBtn-hover transition active:scale-95 ease-linear text-white font-semibold flex justify-center items-center flex-row gap-3 pl-14 pr-14 pt-2 pb-2 rounded-md">
                  <span className="text-md">Dashboard</span>
                </button>
              </div>
            </div>
          ))}
        {!loading &&
          guildsRedux?.excluded?.map((guild) => (
            <div
              key={guild.name}
              className="p-8 rounded-lg bg-guild w-80 h-48 flex justify-between flex-col"
            >
              <div className="flex flex-row gap-5 items-center">
                {guild.icon ? (
                  <Image
                    src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.jpg`}
                    width={40}
                    height={40}
                    className="rounded-full"
                    alt={"guild image"}
                  />
                ) : (
                  <div className="bg-guildDashboardBtn-hover text-white font-semibold rounded-full w-10 h-10 overflow-hidden flex justify-center items-center">
                    {guild.name.substring(0, 2)}
                  </div>
                )}
                <span className="text-white font-semibold text-lg max-w-guildName max-h-11 overflow-auto  text-ellipsis">
                  {guild.name}
                </span>
              </div>
              <div>
                <button className="bg-discord w-full hover:bg-discord-hover transition active:scale-95 ease-linear text-white font-semibold flex justify-center items-center flex-row gap-3 pl-14 pr-14 pt-2 pb-2 rounded-md">
                  <FontAwesomeIcon
                    color="#FFFFFF"
                    width={23}
                    className="text-lg"
                    icon={faDiscord}
                  />
                  <span className="text-md">Add bot</span>
                </button>
              </div>
            </div>
          ))}
        {loading && <SkeletonDashboard />}
      </div>
    </main>
  );
}
