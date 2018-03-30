/*
 * Filename:    ecma6.js
 * Description: Example of ECMA6 Features
 * Author:      Luke Sathrum
 */

// Old way to do multiline strings
const html = '<ul>\n' +
             '  <li>One</li>\n' +
             '  <li>Two</li>\n' +
             '</ul>';
             
console.log(html);

// New way with templated strings
const new_html = `<ul>
  <li>One</li>
  <li>Two</li>
</ul>`;

console.log(new_html);

// Embedded Expressions (Interpolation)
const text = "Hello World!";

// Old Way
console.log('<h1>' + text + '</h1>');

// New Way (Interpolation)
console.log(`<h1>${text}</h1>`);

// Another Interpolation Example
const quantity = 5, price = 1.5;
console.log(`The total price is $${quantity * price}`);

