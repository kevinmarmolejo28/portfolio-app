module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        light: "#ff9d26",
        DEFAULT: "#fc900d",
        dark: "#b06304",
        transparent: "#fc900d80",
      },
      black: {
        light: "#374151",
        DEFAULT: "#111827",
        dark: "#000000",
      },
      white: {
        light: "#ffffff",
        DEFAULT: "#ffffff",
        dark: "#cccccc",
      },
      gray: {
        DEFAULT: "#2d2f33",
        dark: "#25262A",
      },
      orange: {
        DEFAULT: "#fc900d",
      },
    },
    fontSize: {
      tiny: "0.70em",
      xs: "0.75em",
      sm: "0.875em",
      base: "1em",
      lg: "1.125em",
      xl: "1.25em",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
  },
  extend: {},
  plugins: [],
};
