import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderColor: {
        'nav': '#31293b',
      },
      backgroundColor: {
        'discord':"#5865F2",
        'discord-hover':"#4e5add",
        'bars':"#31293b",
        'navResponsive':'#2c2435',
        'navResponsiveHover':'#41354e'
      }
    },
  },
  plugins: [],
}
export default config
