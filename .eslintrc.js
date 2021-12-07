module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"],
    "react/function-component-definition": "off",
    "arrow-body-style": "off",
    "comma-dangle": "off",
    "react/prop-types": "off",
    "react/jsx-one-expression-per-line": "off",
    "operator-linebreak": "off",
    "import/prefer-default-export": "off",
    "object-curly-newline": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens",
        assignment: "parens",
        return: "parens",
        arrow: "parens",
        condition: "ignore",
        logical: "ignore",
        prop: "ignore",
      },
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    "no-irregular-whitespace": "off",
  },
};
