/* eslint-disable @typescript-eslint/naming-convention */

/* global module */

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  overrides: [
    {
      files: ["src/utils/consts.ts"],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "default",
            format: ["UPPER_CASE"],
          },
        ],
      },
    },
  ],
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase", "snake_case", "PascalCase"],
      },
      {
        selector: "function",
        format: ["camelCase"],
      },
      {
        selector: "class",
        format: ["PascalCase"],
      },
    ],

    "no-var": "error",
    "no-unused-vars": "error",
    "no-console": "warn",
    curly: ["error", "all"],
    "no-extra-label": "error",
    "no-unused-labels": "error",
    "new-parens": "error",
    "no-new-wrappers": "error",
    "no-debugger": "error",
    "no-duplicate-case": "error",
    "no-throw-literal": "error",
    "no-return-await": "error",
    "no-unsafe-finally": "error",
    "object-shorthand": "error",
    "no-array-constructor": "error",
    "default-case": "error",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "no-empty-function": "error",
    "no-magic-numbers": "error",
    "no-else-return": "error",
    "consistent-return": "error",
    "no-prototype-builtins": "error",
  },
  ignorePatterns: [
    // paths to ignore
    "!/.eslintrc.js", // add this line to exclude the ESLint config file
  ],
};
