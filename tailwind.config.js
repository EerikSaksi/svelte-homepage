// tailwind.config.js
const isProduction = !process.env.ROLLUP_WATCH; // or some other env var like NODE_ENV
module.exports = {
  theme: {
    triangles: {
      // defaults to {}
      left: {
        direction: "down", // one of 'left', 'right', 'up', 'down', 'left-up', 'left-down', 'right-up', and 'right-down'
        size: "1em", // defaults to defaultSize
        height: "0.5em", // defaults to half the size; has no effect on the diagonal directions (e.g. 'left-up')
        color: "currentColor", // defaults to defaultColor
      },
    },
    extend: {
      width: {
        "1/24": "4.16666666%",
        "2/72": "2.77777777%"
      },
    },
  },
  variants: {
    triangles: ["responsive"], // defaults to []
  },
  plugins: [
    require("tailwindcss-triangles")({
      componentPrefix: "c-", // defaults to 'c-'
      defaultSize: "1em", // defaults to '1em'
      defaultColor: "currentColor", // defaults to 'currentColor'
    }),
  ],
  purge: {
    content: [
      "./src/**/*.svelte",
      // may also want to include HTML files
      // "./src/**/*.html"
    ],
    // this is for extracting Svelte `class:` syntax but is not perfect yet, see below
    defaultExtractor: (content) => {
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
      const broadMatchesWithoutTrailingSlash = broadMatches.map((match) => _.trimEnd(match, "\\"));
      const matches = broadMatches.concat(broadMatchesWithoutTrailingSlash);
      return matches;
    },
    enabled: isProduction, // disable purge in dev
  },
};
