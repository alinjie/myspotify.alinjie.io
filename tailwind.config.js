module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      width: {
        "max-content": "max-content"
      },
      gridTemplateColumns: {
        "autofit-150": "repeat(auto-fit, minmax(150px, 1fr))",
      },
      colors: {
        "spotify-green": "#1DB954",
        "spotify-black": "#191414"
      }
    },
  },
  variants: {
    opacity: ["disabled"]
  },
  plugins: [],
}
