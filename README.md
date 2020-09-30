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

## branch "step-3"

### Topics:

#### Conditional rendering 

``` v-if ``` and ```v-show```

#### List of elements 

``` <div v-for="(item, index) in items"></div> ```

#### Event handling 

- Listening to Events ``` v-on:click ```
- Event modifiers (https://vuejs.org/v2/guide/events.html)
``` 

    .stop
    .prevent
    .capture
    .self
    .once
    .passive

<!-- the click event's propagation will be stopped -->
<a v-on:click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form v-on:submit.prevent></form>

<!-- use capture mode when adding the event listener -->
<!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
<div v-on:click.capture="doThis">...</div>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div v-on:click.self="doThat">...</div>
```

#### Class style

```
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```