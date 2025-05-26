module.exports = {
  extends: ["next", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
  },
};
