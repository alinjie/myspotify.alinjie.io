const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "**/*.{ts,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      "animation-duration": {
        100: "100ms"
      },
      keyframes: {
        "scale-y": {
          "0%, 100%": {
            transform: "scaleY(1)"
          },
          "50%": {
            transform: "scaleY(0.5)"
          },

        },
      },
      animation: {
        "scale-y-1": "scale-y 0.5s linear infinite",
        "scale-y-2": "scale-y 0.75s linear infinite",
        "scale-y-3": "scale-y 1s linear infinite",
        "scale-y-4": "scale-y 1.25s linear infinite",
        "scale-y-5": "scale-y 1.5s linear infinite",
        "scale-y-6": "scale-y 2s linear infinite",
        "scale-y-7": "scale-y 2.5s linear infinite",
      },
      width: {
        "max-content": "max-content"
      },
      gridTemplateColumns: {
        "autofit-150": "repeat(auto-fit, minmax(150px, 1fr))",
      },
      colors: {
        "spotify-green": "#1DB954",
        "spotify-dark": "#121212",
        "spotify-gray": "#181818"
      }
    },
  },
  variants: {
    opacity: ["disabled", "hover"],
  },
  plugins: [],
}
