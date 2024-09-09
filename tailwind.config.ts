/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          20: "#141525",
          50: "#D9D9D9",
          100: "#1F202D",
          200: "#AE4310",
          300: "#E67527",
          400: "#8000FF",
          500: "#050614",
          600: "#EDDFE0",
          700: "#ACB7F3",
          800: "#C3FFEA",
          900: "#32302F",
        },
      },
      // border: "hsl(var(--border))",
      // input: "hsl(var(--input))",
      // ring: "hsl(var(--ring))",
      // background: "hsl(var(--background))",
      // foreground: "hsl(var(--foreground))",
      // primary: {
      //   DEFAULT: "hsl(var(--primary))",
      //   foreground: "hsl(var(--primary-foreground))",
      // },
      // secondary: {
      //   DEFAULT: "hsl(var(--secondary))",
      //   foreground: "hsl(var(--secondary-foreground))",
      // },
      // destructive: {
      //   DEFAULT: "hsl(var(--destructive))",
      //   foreground: "hsl(var(--destructive-foreground))",
      // },
      // muted: {
      //   DEFAULT: "hsl(var(--muted))",
      //   foreground: "hsl(var(--muted-foreground))",
      // },
      // accent: {
      //   DEFAULT: "hsl(var(--accent))",
      //   foreground: "hsl(var(--accent-foreground))",
      // },
      // popover: {
      //   DEFAULT: "hsl(var(--popover))",
      //   foreground: "hsl(var(--popover-foreground))",
      // },
      // card: {
      //   DEFAULT: "hsl(var(--card))",
      //   foreground: "hsl(var(--card-foreground))",
      // },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: {
          height: "0",
        },
        to: {
          height: "var(--radix-accordion-content-height)",
        },
      },
      "accordion-up": {
        from: {
          height: "var(--radix-accordion-content-height)",
        },
        to: {
          height: "0",
        },
      },
      "spin-reverse": {
        "0%": { transform: "rotate(360deg)" },
        "100%": { transform: "rotate(0deg)" },
      },
      bounce: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-25%)" },
      },
    },
    animation: {
      "spin-reverse": "spin-reverse 5s linear infinite",
      "slow-bounce": "bounce 2s ease-in-out infinite",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
