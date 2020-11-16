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
        "scale-y-200": "scale-y 0.2s linear infinite",
        "scale-y-400": "scale-y 0.4s linear infinite",
        "scale-y-600": "scale-y 0.6s linear infinite",
        "scale-y-800": "scale-y 0.8s linear infinite",
        "scale-y-1000": "scale-y 1s linear infinite",
        "scale-y-1200": "scale-y 1.2s linear infinite",
        "scale-y-1400": "scale-y 1.4s linear infinite",
        "scale-y-1600": "scale-y 1.6s linear infinite",
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
