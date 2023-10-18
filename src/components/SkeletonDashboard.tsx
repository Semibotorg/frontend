"use client";

export function SkeletonDashboard() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {arr.map(() => (
        <>
        <div className="p-8 rounded-lg  bg-guild w-80 h-48 flex justify-between flex-col">
          <div className="animate-pulse h-48 flex justify-between flex-col">
            <div className="flex flex-row gap-5 items-center">
              <div className="bg-guildDashboardBtn-hover text-transparent select-none font-semibold rounded-full w-10 h-10 overflow-hidden flex justify-center items-center">
                Loading...
              </div>

              <span className="text-white font-semibold text-lg overflow-hidden text-ellipsis">
                <div className="h-4 bg-guildDashboardBtn-hover rounded-md w-32"></div>
              </span>
            </div>
            <div>
              <div className="bg-guildDashboardBtn-hover w-full  text-white font-semibold flex justify-center items-center flex-row gap-3 pl-14 pr-14 pt-2 pb-2 rounded-md">
                <span className="text-md bg-transparent text-transparent select-none">
                  Dashboard
                </span>
              </div>
            </div>
          </div>
        </div>
        </>
      ))}
    </>
  );
}
