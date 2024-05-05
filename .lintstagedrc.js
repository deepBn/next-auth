const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

// Prettify JS and TS files
const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, buildPrettierCommand],
  "*.{md,json}": [buildPrettierCommand],
};
