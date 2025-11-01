import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";

const eslintConfig = [
  ...nextTypescript,
  {
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      ".vscode/**",
      "coverage/**",
    ],
  },
  ...nextCoreWebVitals,
  eslintConfigPrettier,
];

export default eslintConfig;
