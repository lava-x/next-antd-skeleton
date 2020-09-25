/**
 * Linting TypeScript
 * https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
 *
 * or see Medium
 * https://medium.com/@brygrill/create-react-app-with-typescript-eslint-prettier-and-github-actions-f3ce6a571c97
 */
module.exports = {
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  settings: {
    "import/resolver": {
      "babel-module": {},
      typescript: {}
    },
    "import/core-modules": ["styled-jsx/css"]
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "react"],
      parserOptions: {
        /**
         * Linting with Type
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
         *
         * For monorepo
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/MONOREPO.md
         */
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"]
      },
      extends: [
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
      ],
      rules: {
        "prettier/prettier": [
          "error",
          {
            endOfLine: "auto"
          }
        ],
        // -- https://github.com/benmosher/eslint-plugin-import/issues/1558#issuecomment-563222416
        // should enable the "import/extensions": ["error", "ignorePackages"] at settings
        // -- eslint-plugin-react - https://github.com/yannickcr/eslint-plugin-react
        "react/prop-types": [0],
        "react/react-in-jsx-scope": [0],
        "react/jsx-props-no-spreading": [0],
        // -- eslint-plugin-jsx-a11y - https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
        "jsx-a11y/anchor-is-valid": [
          "error",
          {
            components: ["Link"],
            specialLink: ["hrefLeft", "hrefRight"],
            aspects: ["preferButton"]
          }
        ],
        // -- @typescript-eslint - https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
        "@typescript-eslint/no-explicit-any": [0],
        "@typescript-eslint/no-inferrable-types": [
          "error",
          {
            ignoreParameters: true,
            ignoreProperties: true
          }
        ],
        "@typescript-eslint/explicit-module-boundary-types": [
          "error",
          {
            allowArgumentsExplicitlyTypedAsAny: true
          }
        ],
        "@typescript-eslint/lines-between-class-members": [
          "error",
          "always",
          {
            exceptAfterSingleLine: true
          }
        ]
      }
    },
    {
      files: ["*.js", "*.jsx"],
      parser: "babel-eslint",
      plugins: ["prettier", "react"],
      extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
      rules: {
        "import/extensions": 0,
        "prettier/prettier": "error",
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/destructuring-assignment": [0],
        "react/prop-types": [0],
        "react/no-unused-prop-types": [0],
        "react/jsx-props-no-spreading": [0],
        "react/prefer-stateless-function": [0],
        "react/require-default-props": [0],
        "jsx-a11y/anchor-is-valid": [0]
      }
    }
  ]
};
