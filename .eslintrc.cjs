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
    "prettier/prettier": ["error", { "endOfLine": "lf" }],
    // 순수 함수형으로 코드를 작성하도록 도움 (https://github.com/eslint-functional/eslint-plugin-functional)
    "functional/no-expression-statement": "off",
    "functional/functional-parameters": "off"
  }
};
