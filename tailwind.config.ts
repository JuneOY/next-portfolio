import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'gray-dark': '#121212',
        'glitch-green': '#00ff00',
        'glitch-rose': '#f0f',
        'glitch-blue': '#0ff',
        'neon-blue-xs': '#08cff6',
        'neon-blue-s': '#194262',
        'neon-blue-m': '#0e2535',
        'neon-blue-l': '#05131e',
        'neon-blue-xl': '#020204',
        'dark-background': '#010C15',
        'menu-text': '#607B96',
        'blue-background': '#011627',
        'hello-name': '#E5E9F0',
        'purple-text': '#4D5BCE',
        'hello-gray': '#607B96',
        'codeline-link': '#E99287',
        'codeline-tag': '#4D5BCE',
        'codeline-name': '#43D9AD',
        'mobile-menu-blue': '#011627',
        'placeholder-gray': '#465E77',
        'greenfy': '#43D9AD',
        'bluefy-dark': '#011627',
        'purplefy': '#5565E8',

      }
    },
    fontFamily: {
      fira_light: "Fira Code Light",
      fira_regular: "Fira Code Regular",
      fira_retina: "Fira Code Retina",
      fira_medium: "Fira Code Medium",
      fira_semibold: "Fira Code SemiBold",
      fira_bold: "Fira Code Bold",
      fira_variable: "Fira Code Variable",
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
