//import {html, render} from 'https://unpkg.com/lit-html?module';
import {html, render} from './node_modules/lit-html/lit-html.js';
//import {html, render} from 'lit-html';

// Define a template
const myTemplate = (name) => html`<p>Hola ${name}</p>`;

// Render the template to the document
render(myTemplate('Mundo...'), document.body);