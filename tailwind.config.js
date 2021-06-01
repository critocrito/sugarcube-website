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
        canvas: "#FAF8F7",
        bittersweet: "#FD7268",
        sapphire: "#0A2463",
        "fair-pink": "#F8ECE8",
        solitude: "#DFE2EC",
        notify: "#ECD47D",
        warning: "#C94D07",
      },
    },
  },
  variants: {},
};
