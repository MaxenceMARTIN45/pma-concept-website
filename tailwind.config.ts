import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: { md: "992px" },
    extend: {
      colors: {
        brand: "#3932d5",
        "brand-title": "#3a32d6",
        "brand-dark": "#2c26a9",
        navy: "#101e8e",
        ink: "#212121",
      },
      fontFamily: { sans: ["var(--font-poppins)", "Poppins", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
