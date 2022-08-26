module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    quotes: ["warn", "double"],
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off",
  }
}
