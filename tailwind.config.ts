import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "helios-green": "#8CFF7A",
        "helios-dark": "#000000",
        "helios-gray": {
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        readable: "65ch",
      },
    },
  },
  plugins: [],
} satisfies Config;
