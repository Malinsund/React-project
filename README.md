# Mat-Malle, a recipe page with my own favorite recipes

Mat-Malle is a recipe page where i shre my own favorite recipes with a personal twist. You can save the recipes you like for future reference or inspiration.

### Features:

- Save your favorite recipes
- Contact form for questions or feedback
- High-quality images of the actual food
- Click on recipe images to view them in full size for garnishing inspiration

### Technologies used

This project utilizez the following technologies:

- React
- TypeScript
- Vite

### Language

The application is primarily in Swedish. For users who prefer another language, using Google Translate is recommended, espacially in Chrome.

## Installation

to run this project locally, follow these steps:

1. Clone this repository to your VS code or local code editor
2. Install depandencies using npm or yarn, open the terminal an type `npm install` or `yarn install`
3. start the development server by typing `npm run dev` or `yarn dev` to view the application.

## further information

This is a school project where we could pick anything we wanted, I love food and I love cooking so I knew early what i wanted to work on!
these are the requriments for the project;

[x] The project contains and uses at least 6 komponents, whereas a minimum of 2 are `Stateful`-components.
[x] React Router is used to dynamically update the URL
[x] Git and GitHub is being used
[x] the project folder contains this README.md file
[x] The assignment is submitted on time
[x] A presentation is completed

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
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
