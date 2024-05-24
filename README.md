# PomodoreV2 

This repo is based on a youtube code-along with Landon Sclangen aiming to get a React 18+vite project to pass the test suite for freeCodeCamp's 25+5 clock challenge, 
All while getting an soft start on React code after working with Vue for 18 months. 

This repo has a few improvements that made it pass all the 29 of 29 user stories.

The project can be viewed here:
https://pomodore-v2.vercel.app/
 
Credits:

Landons work on youtube: https://www.youtube.com/watch?v=vf2J0lWpr0A&t=2236s 
Landons orignal github repo: https://github.com/Landon345/FCC-twentyfive-plus-five-clock.
freeCodeCamp: https://www.freecodecamp.org/

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
