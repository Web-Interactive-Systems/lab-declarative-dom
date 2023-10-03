import { createElement, render } from './mini';

const elementProps = { id: 'element-id' };
const children = 'Hello world!';
const elementType = 'h1';

const component = createElement(elementType, elementProps, children);

/**
 Todo: Check the devtool console and copy/paste the output of the log object below

 //
 
 */
console.log('what is component?', component);

/**
 Todo: Explore `createElement` and explain what this function does


 */

/**
 Todo: check the file index.html and get the id of the app div container
 */
const containerId = 'Todo what is the root id';
const container = document.getElementById(containerId);

/**
 Todo: Check the implementation of render.
 Use render to render component in the html dom
 */
render();
