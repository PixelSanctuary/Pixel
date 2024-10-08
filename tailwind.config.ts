import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#39ff14"
      },
      boxShadow:{
        'glow': '0 0px 10px 3px #00010',
      },
      keyframes: {
        progress: {
          '0%': { backgroundImage: 'linear-gradient(180deg, rgba(57,255,20,0) 10%, rgba(57,255,20,.30) 100%)' },
          '25%': { backgroundImage: 'linear-gradient(180deg, rgba(57,255,20,0) 10%,  rgba(57,255,20,.30) 90%)' },
          '50%': { backgroundImage: 'linear-gradient(180deg, rgba(57,255,20,0) 10%,  rgba(57,255,20,.30) 80%)' },
          '75%': { backgroundImage: 'linear-gradient(180deg, rgba(57,255,20,0) 10%,  rgba(57,255,20,.30) 70%)' },
          '100%': { backgroundImage: 'linear-gradient(180deg, rgba(57,255,20,0) 10%,  rgba(57,255,20,.30) 60%)' },
        },
      },
      animation: {
        'progressBar': 'progress 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
