import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F0D",
        surface: "#121A16",
        elev: "#18231D",
        accent: "#20B879",
        ink: "#E7EEE9",
        muted: "#A4B2A9",
        line: "#29372F",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: { page: "1120px" },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        glow: { "0%,100%": { opacity: "0.45" }, "50%": { opacity: "0.9" } },
      },
      animation: { float: "float 5s ease-in-out infinite", glow: "glow 4s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
