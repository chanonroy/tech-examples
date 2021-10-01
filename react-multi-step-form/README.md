<p align="center">
  <img alt="roy" src="./public/favicon.png" width="60" />
</p>
<h1 align="center">
  Multi Section React Form
</h1>

<p align="center">
  Lightweight example of managing form state across multiple screens
</p>

## 📦 Project Setup

1.  **Install dependencies**

    Use the [yarn](https://classic.yarnpkg.com/en/) package manager to install dependencies

    ```shell
    yarn
    ```

 
2.  **Run development server**

    Start the development server with the following command:

    ```shell
    yarn start
    ```
3.  **Visit local environment**

    Navigate to `http://localhost:3000` to see the app in action

## 🤖 Tech Stack

Trying to keep things light, the app only has a few core dependencies/concepts

- **React** - ui rendering
- **Create React App** - to quickly scaffold React for the purposes of the exercise
- **Typescript** - static type checking
- **Eslint/Prettier** - code linting and automatic IDE formatting
- **Styled-Components** - to allow for CSS-in-JS component composition
- **Jest** - test task runner 
- **react-test-renderer** - a lightweight React package for testing
- **Github Actions** - to run tests in a CI environment

Things that I tried to avoid, but may consider adding in the future

- **Formik (with yup) / React Final Form** - I've found these packages to add bloat in the past, so I tried to keep all the validation logic to be custom through a hook called `use-text-input-state`.
- **React Router** - It was unclear from the exercise description about whether form pages can be deep-linked into, such as going straight into `/privacy` and having the pre-saved fields re-hydrate the form. If this was the case, it would be good to implement client-side routing.

## Screenshot

![image](https://github.com/chanonroy/multi-page-react-form/blob/main/src/images/screenshot.png)

