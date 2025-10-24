import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "Space Grotesk", "sans-serif"],
        "season-sans": ["season-sans", "sans-serif"],
        "season-serif": ["season-serif", "sans-serif"],
      },
      colors: {
        brand: {
          background: "#021323",
          black: "#0B0B0B",
          white: "#E2E2E2",
          "light-purple": "#D6B9FF",
          purple: "#6E25FF",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "header-bg": "hsl(var(--header-bg))",
        "header-glow": "hsl(var(--header-glow))",
        "crypto-accent": "hsl(var(--crypto-accent))",
        "auburn-primary": "hsl(var(--auburn-primary))",
        "auburn-light": "hsl(var(--auburn-light))",
        "auburn-dark": "hsl(var(--auburn-dark))",
        "auburn-glow": "hsl(var(--auburn-glow))",
        "amber-warm": "hsl(var(--amber-warm))",
        "amber-glow": "hsl(var(--amber-glow))",
        platinum: "hsl(var(--platinum))",
        charcoal: "hsl(var(--charcoal))",
        "deep-navy": "hsl(var(--deep-navy))",
        "electric-blue": "hsl(var(--electric-blue))",
        "neon-cyan": "hsl(var(--neon-cyan))",
        "premium-gold": "hsl(var(--premium-gold))",
        "rose-gold": "hsl(var(--rose-gold))",
        "hastra-teal": "hsl(var(--hastra-teal))",
        "hastra-teal-dark": "hsl(var(--hastra-teal-dark))",
        "hastra-teal-light": "hsl(var(--hastra-teal-light))",
        "hastra-slate": "hsl(var(--hastra-slate))",
        "hastra-slate-light": "hsl(var(--hastra-slate-light))",
        "hastra-slate-dark": "hsl(var(--hastra-slate-dark))",
        "hastra-muted": "hsl(var(--hastra-muted))",
        "hastra-muted-light": "hsl(var(--hastra-muted-light))",
        "hastra-muted-dark": "hsl(var(--hastra-muted-dark))",
      },
      boxShadow: {
        auburn: "0 0 20px hsl(var(--auburn-primary) / 0.3)",
        "auburn-lg": "0 0 30px hsl(var(--auburn-primary) / 0.4)",
        premium: "0 20px 40px -12px hsl(var(--electric-blue) / 0.25)",
        "premium-lg": "0 25px 50px -12px hsl(var(--electric-blue) / 0.35)",
        elegant: "0 25px 50px -12px hsl(240 8% 12% / 0.25)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        glow: "0 0 30px hsl(var(--header-glow) / 0.4)",
        neon: "0 0 20px hsl(var(--neon-cyan) / 0.5)",
        hastra: "0 0 20px hsl(var(--hastra-teal) / 0.3)",
        "hastra-lg": "0 0 30px hsl(var(--hastra-teal) / 0.4)",
        "brand-card":
          "11.813px 20.083px 27.52px 0 rgba(255, 255, 255, 0.30) inset, 4.17px 2.363px 23.627px 0 rgba(255, 255, 255, 0.30) inset",
        "token-holdings":
          "4.161px 2.358px 23.577px 0 rgba(255, 255, 255, 0.30) inset",
        button:
          "8.004px 13.606px 18.645px 0 rgba(255, 255, 255, 0.30) inset, 2.825px 1.601px 16.007px 0 rgba(255, 255, 255, 0.30) inset",
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-light": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--header-glow) / 0.3)" },
          "50%": { boxShadow: "0 0 30px hsl(var(--header-glow) / 0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-glow-premium": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--electric-blue) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--electric-blue) / 0.6)" },
        },
        "pulse-glow-hastra": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--hastra-teal) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--hastra-teal) / 0.6)" },
        },
        morph: {
          "0%, 100%": { borderRadius: "20px" },
          "25%": { borderRadius: "25px 15px" },
          "50%": { borderRadius: "15px 25px" },
          "75%": { borderRadius: "25px 20px" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        flash: {
          "0%": { opacity: "1" },
          "20%": { opacity: "0.4" },
          "60%": { opacity: "0.4" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "pulse-light": "pulse-light 2s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
        "pulse-glow-premium": "pulse-glow-premium 3s ease-in-out infinite",
        "pulse-glow-hastra": "pulse-glow-hastra 3s ease-in-out infinite",
        morph: "morph 8s ease-in-out infinite",
        "spin-slow": "spin-slow 4s linear infinite",
        flash: "flash 10s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
