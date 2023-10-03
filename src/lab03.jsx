import { createElement, render } from './mini';

/**
  vite, the build system we use for this app, supports jsx
  https://vitejs.dev/guide/features.html#jsx

  Jsx is file extension introduced by React. 
  It allows us to combine html, js and css declaratively.

  It would be nice to use jsx template to render our DOM, 
  instead of something like this:
  
  ```
  const elementProps = { id: 'element-id' };
  const children = 'Hello world!';
  const elementType = 'h1';
  const element = createElement
  ```

  We can write it in jsx like:

  ```
  <div class='container'>
    <span>Hello World!</span>
  </div>
  ```
 */

/**
 Vite uses esbuild to transpile jsx.
 Consider the following code:

 ```
 import Button from './button'
 let button = <Button>Click me</Button>
 render(button)
 ```

 It will be converted into: 

 ```
 import Button from "./button";
 let button = React.createElement(Button, null, "Click me");
 render(button);
 ```

 Notice `React.createElement` and `render`.

 `React.createElement` is the default react factory function.
 Similarly, `render` is react render method.
 By defautl esbuild uses React createElement and render for jsx.

 We can, however, customize the factory function using a pragma annotation:
 
 / ** @jsx name_of_custom_function * /

 vite (and esbuild) with then use name_of_custom_function to transpile jsx into dom.

 */

/**
  Todo: Complete the code below to render component in the dom.
  You should use our 
  - `createElement` in the pragma annotation to transpile jsx
  - render method to render the component

*/

/** @jsx Todo */
const component = (
  <div class='container'>
    <span>Hello World!</span>
  </div>
);
