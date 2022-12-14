/*
 * @Author: fencer yangd@mshutech.com
 * @Date: 2022-08-25 20:44:18
 * @LastEditors: fencer yangd@mshutech.com
 * @LastEditTime: 2022-12-14 16:47:01
 * @FilePath: /eslint/index.js
 * @Description: eslint
 */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "react-app",
    "plugin:@typescript-eslint/eslint-recommended",
  ]
    .concat(["./rules/common.yml", "./rules/react.yml"].map(require.resolve))
    .concat(["plugin:mobx/recommended", "plugin:prettier/recommended"]),
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["@typescript-eslint", "prettier", "import", "mobx"],
  parser: "@typescript-eslint/parser",
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "mobx/exhaustive-make-observable": "warn",
    "mobx/unconditional-make-observable": "error",
    "mobx/missing-make-observable": "error",
    "mobx/missing-observer": "warn",
    "mobx/no-anonymous-observer": "warn",
  },
};
