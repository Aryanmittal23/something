import type { Config } from "tailwindcss"
import defaultConfig from "shadcn/ui/tailwind.config"

const config: Config = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        // Primary brand colors based on logo
        brand: {
          navy: {
            50: "#f0f4ff",
            100: "#e0e9ff",
            200: "#c7d6ff",
            300: "#a5b8ff",
            400: "#8191ff",
            500: "#5d6aff",
            600: "#4338ca",
            700: "#1e3a8a", // Main logo navy
            800: "#1e2a5e",
            900: "#1a1f4a",
          },
          green: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e", // Main logo green
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
          },
        },
        // Supporting colors
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        "bounce-subtle": "bounceSubtle 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      boxShadow: {
        brand: "0 4px 14px 0 rgba(30, 58, 138, 0.15)",
        "brand-lg": "0 10px 25px -3px rgba(30, 58, 138, 0.2)",
        green: "0 4px 14px 0 rgba(34, 197, 94, 0.15)",
        "green-lg": "0 10px 25px -3px rgba(34, 197, 94, 0.2)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #1e3a8a 0%, #22c55e 100%)",
        "gradient-brand-light": "linear-gradient(135deg, #f0f4ff 0%, #f0fdf4 100%)",
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}

export default config
