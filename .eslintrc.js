module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-debugger": 1,
    "no-console": 1,
    "prefer-const": 1,
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
