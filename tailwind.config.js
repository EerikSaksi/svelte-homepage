// tailwind.config.js
const isProduction = !process.env.ROLLUP_WATCH; // or some other env var like NODE_ENV
module.exports = {
  theme: {
    backdropFilter: { // defaults to {}
      'none': 'none',
      'blur': 'blur(3.5px)',
    },
    plugins: [
      require('tailwindcss-filters'),
    ],
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
