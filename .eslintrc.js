module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": "off",
    "import/no-unresolved": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/interactive-supports-focus": "off",
  },
};
