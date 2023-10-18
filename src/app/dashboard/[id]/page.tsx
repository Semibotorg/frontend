"use cleint"

import { HashtagIcon, UsersIcon } from "@heroicons/react/24/solid";
export default function DashboardPage() {
  const cards = [
    {
      Icon: UsersIcon,
      text: "Users",
      quantity: 500,
    },
    {
      Icon: HashtagIcon,
      text: "Channels",
      quantity: 200,
    },
  ];
  return (
    <div className="flex flex-wrap gap-6">
      {cards.map((card) => (
        <div
          key="none"
          className="flex flex-col gap-3 bg-card border-1 border-card-border h-[121px] w-[232px] rounded-xl p-4"
        >
          <div className="flex flex-row gap-3 items-center">
            <div className="bg-card-hover p-2 rounded-lg">
              <card.Icon color="#9D74F4" width={20} />
            </div>
            <div>
              <span className="text-white font-bold text-lg">{card.text}</span>
            </div>
          </div>
          <div className="text-white font-bold text-2xl">{card.quantity}</div>
        </div>
      ))}
    </div>
  );
}
