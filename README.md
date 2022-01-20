# vue-tdd
Vue TDD

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

Vue Test Utils

1* npm init vite@latest

✔ Project name: … 000-jest
✔ Select a framework: › vue
✔ Select a variant: › vue

2° npm install --save-dev jest

3°  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "jest --coverage"
  },
  
04° npm install --save-dev babel-core@7.0.0-bridge.0

05° npm install --save-dev @vue/babel-preset-app

06° babel.config.js

module.exports = {
  presets: [
            '@vue/app'
  ]
}

## Running the first test in Vue with Jest

07° jest.config.js

module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  }
};
