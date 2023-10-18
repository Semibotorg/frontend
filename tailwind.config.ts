import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        nav: "#31293b",
        "card-border": "#312939",
      },
      textColor: {
        dashboard: "#727586",
      },
      backgroundColor: {
        "discord": "#5865F2",
        "discord-hover": "#4e5add",
        "bars": "#31293b",
        "navResponsive": "#2c2435",
        "sidebar": "#231D29",
        "sidebar-btn": "#2D2535",
        "navResponsiveHover": "#41354e",
        "card-hover":"#2C2633",
        "guild": "#221C28",
        "guildDashboardBtn": "#2A2332",
        "guildDashboardBtn-hover": "#32293C",
        "card": "#231D29",
        "sidebar-btn-nav":"#2e2637"
      },
      maxWidth: {
        guildName: "190px",
      },
      width: {
        sidebar: "270px",
      },
      minWidth: {
        sidebar: "270px",
      },
      borderWidth: {
        "1": "1px",
      },
    },
  },
  plugins: [],
};
export default config;
