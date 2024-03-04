import type { Config } from "tailwindcss";
import { breakpoints } from "./constants";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xxs': breakpoints.xxs,
      // => @media (min-width: 350px) { ... }

      'xs': breakpoints.xs,
      // => @media (min-width: 375px) { ... }

      'sm': breakpoints.sm,
      // => @media (min-width: 640px) { ... }

      'md': breakpoints.md,
      // => @media (min-width: 768px) { ... }

      'lg': breakpoints.lg,
      // => @media (min-width: 1024px) { ... }

      'xl': breakpoints.xl,
      // => @media (min-width: 1280px) { ... }

      '2xl': breakpoints['2xl'],
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // inspo on desktop. Use it to inform designs
        primary: {
          100: '#019b98',
          200: '#55ccc9',
          300: '#c1ffff',
        },
        accent: {
          100: '#dd0025',
          200: '#ffbfab',
        },
        text: {
          100: '#014e60',
          200: '#3f7a8d',
        },
        bg: {
          100: '#fbfbfb',
          200: '#f1f1f1',
          300: '#c8c8c8',
        },
        black: '#000000'
      }
    },
    maxWidth: {
      "largest-screen": breakpoints["2xl"]
    }
  },
  plugins: [],
} satisfies Config;
