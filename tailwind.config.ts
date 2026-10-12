import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0f",
        card: "#111120",
        "card-alt": "#0d0d14",
        border: "#1e1e2e",
        accent: "#7c6fcd",
        "accent-hover": "#6a5db8",
        muted: "#8888aa",
        nav: "#a0a0b8",
      },
    },
  },
  plugins: [],
};

export default config;
