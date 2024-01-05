import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["inter", "sans-serif"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
      },
      screens : {
        sn: {
          min: "0px",
          max: "320px",
        },
        sp: {
          min: "321px",
          max: "410px",
        },
        se: {
          min: "411px",
          max: "699px",
        },
        si: {
          min: "700px",
          max: "839px",
        },
        sr: {
          min: "840px",
          max: "1023px",
        },
        tabhor: {
          min: "1024px",
          max: "1279px",
        },
      }
    },
  },
  plugins: [],
};
export default config;
