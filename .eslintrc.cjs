/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  plugins: ["functional"],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    "plugin:functional/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "prettier/prettier": ["error", { "endOfLine": "lf" }]
  }
};
