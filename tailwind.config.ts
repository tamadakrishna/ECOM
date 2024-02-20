import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'laptop': {'max': '1600px'},

      'tab': {'max': '767px'},

      'mobile': {'max': '639px'},

      'small_screen': {'min': '640px'},

      'large_screen': {'max': '640px'}
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Mont: ["Montserrat", "sans-serif"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
