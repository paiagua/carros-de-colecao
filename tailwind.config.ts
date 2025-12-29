import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Oswald', 'system-ui', 'sans-serif'],
      },
      colors: {
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
        cta: {
          DEFAULT: "hsl(var(--cta))",
          foreground: "hsl(var(--cta-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        'hero-gradient': 'var(--hero-gradient)',
        'accent-gradient': 'var(--accent-gradient)',
        'cta-gradient': 'var(--cta-gradient)',
      },
      boxShadow: {
        'card': 'var(--card-shadow)',
        'card-hover': 'var(--card-shadow-hover)',
        'glow': 'var(--shadow-glow)',
        'cta': 'var(--shadow-cta)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" }
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--accent) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--accent) / 0.6)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(3deg)" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg) scale(1)" },
          "50%": { transform: "translateY(-20px) rotate(-5deg) scale(1.05)" }
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-25px) rotate(8deg)" }
        },
        "float-fast": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg) scale(1)" },
          "50%": { transform: "translateY(-18px) rotate(-3deg) scale(0.95)" }
        },
        "elegant-float": {
          "0%, 100%": { 
            boxShadow: "0 8px 32px rgba(248, 178, 1, 0.4), 0 0 40px rgba(248, 178, 1, 0.15)",
          }
        },
        "elegant-shine": {
          "0%": { 
            backgroundPosition: "-200% center",
          },
          "100%": { 
            backgroundPosition: "200% center",
          }
        },
        "shimmer-gold": {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" }
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 8px 32px rgba(248, 178, 1, 0.4), 0 0 40px rgba(248, 178, 1, 0.2)"
          },
          "50%": { 
            boxShadow: "0 12px 48px rgba(248, 178, 1, 0.6), 0 0 80px rgba(248, 178, 1, 0.4)"
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "shimmer": "shimmer 2s infinite linear",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-medium": "float-medium 4s ease-in-out infinite",
        "float-fast": "float-fast 3s ease-in-out infinite",
        "elegant-float": "elegant-float 60s ease-in-out infinite",
        "elegant-shine": "elegant-shine 12s ease-in-out infinite",
        "shimmer-gold": "shimmer-gold 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;