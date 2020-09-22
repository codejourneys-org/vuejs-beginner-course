# vuejs-beginner-course
We'll cover all the basics and work on a small project so you can learn by doing.

## branch "step-1"

### Create and serve a Vue.js App

Install the Vue CLI (v. 4.5.6):

``` npm install -g @vue/cli@4.5.6 ```

Create the application: 

``` vue add vue-beginner-course ```

Select the following options:
1) Manually select features
2) Babel
3) Linter / Formatter

Go to the app folder: 

``` cd vuejs-beginner-course ```

Serve the app:

``` npm run serve ```

## branch "step-2"

### Add TailwindCSS

Install TailwindCSS:

``` npm install tailwindcss ```

Add a postcss.config.js file:

```
// postcss.config.js
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};

```

We have to import Tailwind CSS into our project.

We create a new index.css file in src/assets/styles and load all Tailwind related styles in it.
Then we import the file in main.js, the entry point of our app.

```
// src/assets/styles/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```
// src/main.js
 import Vue from 'vue';
 import App from './App.vue';

+import './assets/styles/index.css';

 Vue.config.productionTip = false;

 new Vue({
   render: h => h(App),
 }).$mount(`#app`);
 
 ```
