module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react/jsx-runtime'
  ],
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['off']
      }
    }
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // This ensures that the 'preferred style' is used for react imports:
    // "
    //   Change all default React imports (i.e. import React from "react") to destructured
    //   named imports (ex. import { useState } from "react") which is the preferred style
    //   going into the future.
    // "
    // There is a codemod here created by the react team to change this in your codebase:
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports
    'no-restricted-imports': [
      'error',
      {
        name: 'react',
        importNames: ['default'],
        message:
          "Please import directly (e.g. import { useEffect } from 'react')."
      }
    ]
  },
  root: true
}
