const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  mode: "jit",
  purge: {
    content: ["./lib/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  },
  theme: {
    screens: {
      tablet: "576px",
      laptop: "992px",
      desktop: "1440px",
    },

    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        xs: "0.7rem",
        sm: "0.8rem",
        base: "1rem",
        lg: "1.563rem",
        xl: "2.441rem",
        "2xl": "3.052rem",
      },

      colors: {
        canvas: "#faf8f7",
        bittersweet: "#fd7268",
        sapphire: "#0a2463",
        "fair-pink": "#f8ece8",
        solitude: "#dfe2ec",
        notify: "#ecd47d",
        warning: "#c94d07",
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.sapphire"),
            h1: {
              color: theme("colors.sapphire"),
            },
            h2: {
              color: theme("colors.sapphire"),
            },
            h3: {
              color: theme("colors.sapphire"),
            },
            a: {
              color: theme("colors.sapphire"),
            },
            img: {
              marginTop: "0",
              marginBottom: "0",
            },
          },
        },
        lg: {
          css: {
            img: {
              marginTop: "0.0rem",
              marginBottom: "0rem",
            },
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
