# Catch Front End Coding Standards

This document intends to give an overview of our general approach to front end development and should serve as a guide to get you started on most projects.  Please remember that this is a living document and will change over time as new ideas, methods, devices, browsers and W3C standards come about.

# Contents

- [HTML](#html)
  - [Doctype](#doctype)
  - [Style Guide](#style-guide)
    - [Indentation](#indentation)
    - [Line Lengths](#line-lengths)
    - [Spacing](#spacing)
- [CSS](#css)
  - [File Architecture](#file-architecture)
    - [Includes](#includes)
    - [Base](#base)
    - [Components](#components)
  - [Style Guide](#style-guide-1)
    - [Syntax](#syntax)
      - [Indentation](#indentation-1)
      - [Line Lengths](#line-lengths-1)
    - [Spacing](#spacing-1)
  - [Nesting](#nesting)
    - [BEM and Nesting](#bem-and-nesting)
  - [Variables](#variables)
    - [Scoped Variables](#scoped-variables)
  - [Grid](#grid)
  - [Modules](#modules)
    - [BEM](#bem)
    - [Media Queries](#media-queries)
    - [normalize.css](#normalizecss)
  - [Building](#building)
    - [Watching](#watching)
    - [Grunt / Gulp etc.](#grunt--gulp-etc)
- [JavaScript](#javascript)
  - [Style Guide](#style-guide-2)
    - [Syntax](#syntax-1)
      - [Indentation](#indentation-2)
      - [Line Lengths](#line-lengths-2)
    - [Spacing](#spacing-2)
    - [Control Blocks and Function Style](#control-blocks-and-function-style)
    - [Operators](#operators)
    - [IIFEs](#iifes)
    - [Strict Mode](#strict-mode)
    - [Variables](#variables-1)
      - [Naming Conventions](#naming-conventions)
      - [Hoisting & Scope](#hoisting-&-scope)
      - [Namespacing & Grouping](#namespacing-&-grouping)
    - [Functions](#functions)
      - [Naming Functions](#naming-functions)
      - [Pure Functions](#pure-functions)
      - [Grouping](#grouping)
      - [Arguments](#arguments)
    - [Objects](#objects)
    - [Arrays](#arrays)
    - [jQuery](#jquery)
      - [Limiting Scope](#limiting-scope)
      - [Defining Plugins](#defining-plugins)
      - [Binding to Elements](#binding-to-elements)

# HTML
All pages must use HTML in order to display anything in the browser, but while the raw markup is hidden from the end users, developers need to be able to quickly understand and interpret the HTML in order to work with it.  With this in mind, readability is key above everything else.

## Doctype
HTML5 for websites and and XHTML 1.0 Transitional for emails.
```html
<!-- Websites -->
<!DOCTYPE html>

<!-- Emails -->
<!DOCTYPE html>
```

## Style Guide
This style guide should serve as some simple guidelines to help you craft HTML documents.

### Indentation
Indent with 2 spaces.  Absolutely no tabs.  Each nested element requires indentation.
```html
<!-- Bad -->
<div>
    <h1>Hello World!</h1>
</div>

<!-- Good -->
<div>
  <h1>Hello World!</h1>
</div>
```

### Line Lengths
No line length limits, but be sensible.

### Spacing
Block elements (`main`, `section`, `header`, `div`, `h1`, `p` etc) on their own line
```html
<!-- Bad -->
<div>
  <ul><li>List item</li></ul>
</div>

<!-- Good -->
<div>
  <ul>
    <li>List item</li>
  </ul>
</div>
```

Inline elements (`a`, `span`, etc) can sit on the same line or on their own depending on preference
```html
<!-- Good -->
<p>Lorem ipsum <a href="#">click here</a></p>

<!-- Also Good -->
<p>
  Lorem ipsum
  <a href="#">click here</a>
</p>
```

Add a space between each attribute
```html
<!-- Bad -->
<input type="text" name="first-name"value="Catch"class="control__input">

<!-- Good -->
<input type="text" name="first-name" value="Catch" class="control__input">
```
*Note: always use `"` for attributes NEVER `'`*

Always associate a label with every form control. Use a for attribute on the ( label ) element linked to the id attribute of the form element, or using WAI-ARIA attributes. In specific situations it may be acceptable to hide ( label ) elements visually, but in most cases labels are needed to help all readers understand the required input.

```html
<!-- Bad -->
<input type="text">

<!-- Good -->
<label for="username">Username</label>
<input id="username" type="text" name="username">

<!-- Also good -->
<input id="username" type="text" aria-label="username">
```

# CSS
Here at Catch we use SASS (SCCS syntax) and Autoprefixer to author CSS.  SASS provides a solid set of features for writing clean and concise styles with minimal effort and repetition, while Autoprefixer ensures that our final CSS ships with the latest vendor prefixes.

In terms of CSS style, try and think as abstractly and reusable as possible to ensure that your CSS scales well, and remember to spend time to refine your code as it grows.  Think in modules, blocks, elements, templates and atoms.  If you're reusing lots of styles, consider promoting them to their own class.

While SASS allows us to loop and include and often comes with automagic features, it can lead down some bad routes for you and your website when it comes to maintenance.  Always try and keep your SASS as close to the final CSS as possible.

## File Architecture
A typical SASS folder structure looks like this:
```
styles.scss
  /includes/
    _includes.scss
    _variables.scss
    _mixins.scss
  /base/
    _base.scss
    _reset.scss
    _typography.scss
  /components/
    _components.scss
    _header.scss
```

### Includes
Includes should always contain non-compiling SASS such as functions, mixins and variables

### Base
Base SASS files should always contain basic theming styles which are required to build out basic page elements like paragraphs, lists, headings along with grid systems and anything that is useful ACROSS the website.

### Components
Components are exactly as they sound.  They should contain styling for self contained blocks which fit into wider parts of the website.  Components can be website headers, footers, forms, carousels etc.  Components should be abstract and focus on appearance and functionality rather than content or context.

## Style Guide
This style guide is heavily influenced by the [Code Guide by @mdo](http://codeguide.co/#css).  Please have a read through this as well if you have time.

### Syntax
Readability is key, SASS allows you to do great things, but can often lead to a spider's nest of code.  Also remember to comment as much as you like.  More comments mean happier developers!  If your SASS is not syntax highlighted, have a look for a relevant package for your text editor to ensure it renders like standard CSS.

#### Indentation
Indent with 2 spaces.  Absolutely no tabs.
```scss
// Bad
h1 {
    text-transform: uppercase;
}

// Good
h1 {
  text-transform: uppercase;
}
```

#### Line Lengths
Soft (desirable) limit of **80**, hard limit of **120**.

### Spacing
 - Only one selector per line for multi-selector rules
 - Add a space before opening curly brace `{`
 - Trailing curly braces on their own line `}`
 - Each declaration should be on it's own line even if there is just one declaration per selector

```scss
// Bad
input[type="number"] { border: solid grey 1px;}

// Bad
input[type="number"], input[type="tel"] {
  border: solid grey 1px;
}

// Really bad
input[type="number"],input[type="tel"]{border: solid grey 1px;}

// Good
input[type="number"],
input[type="tel"] {
  border: solid grey 1px;
}
```

Ensure there's a line between each CSS rule, even those that are nested.
```scss
// Bad
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 3rem;
}

// Good
h1 {
  font-size: 3rem;
}

h2 {
  font-size: 3rem;
}

// Bad
p {
  margin: 1em 0;
  a {
    color: inherit;
    text-decoration: underline;
  }
}

// Good
p {
  margin: 1em 0;

  a {
    color: inherit;
    text-decoration: underline;
  }
}

// Immediately nested selectors are fine like this, but consider minimising nesting like this

// Good
p {
  a {
    color: inherit;
    text-decoration: underline;
  }
}
```

## Nesting
Try not to nest too much.  Nesting leads to unnecessary specificity in your CSS which makes it rigid and hard to edit.

Consider that:
```scss
.field-carousel {
  .carousel {
    .carousel__item {
      span {
        a {
          display: none;
        }
      }
    }
  }
}
```
Compiles to:
```css
.field-carousel .carousel .carousel__item span a {
  display: none;
}
```

Try not to reflect the HTML structure with nesting.  This is a really bad route to take, is usually completely unnecessary and will cause problems when you need to amend styles in media queries etc.

```scss
// No one wants to be doing this.  If you can simplify, then please do!
@media (min-width: 768px) {
  .field-carousel .carousel .carousel__item span a {
    display: inline-block;
  }
}
```

### BEM and Nesting
Nesting in SASS is a really great way of writing BEM quickly and in a less error-prone manner:
```scss
.card {
  border: solid grey 1px;

  &--featured {
    border-color: blue;
  }

  &__content {
    padding: 20px;

    &__title {
      font-size: 2rem;
    }
  }
}
```

Compiles to:
```css
.card {
  border: solid grey 1px;
}

.card--featured {
  border-color: blue;
}

.card__content {
  padding: 20px;
}

.card__content__title {
  font-size: 2rem;
}
```
No nested CSS, no specificity, just semantic and clean OOCSS styles which are easy to target in JS, media queries and external stylesheets if necessary.

## Variables
Variables are great for storing units, integers and colour values. Try to namespace and group variables by their usage like so for more consistency and clarity when away from their use.
```scss
// Colours
$colour-red: #f00;
$colour-blue: #00f;

// Dimensions
$dimension-border-radius: 5px;
$dimension-padding: 20px;
```

For variable variations consider using modifiers on top of existing variable names
```scss
// Colour variations
$colour-red: #f00;
$colour-red-dark: darken(#f00, 20%);

// Dimension variations
$dimension-border-radius: 5px;
$dimension-border-radius-lg: ($dimension-border-radius * 2);
```

### Scoped Variables
You can scope variables inside selectors to avoid having a master list of unrelated unit/colour values.  When doing this, remember to ensure that you leave a space before the declarations for that rule-set.
```scss
.input {
  $height: 30px;

  height: $height;
  margin-bottom: ($height / 2);
}
```

## Grid
Moving forward we are using the Bootstrap grid system to offer a consistent and flexible way of laying out elements in templates.  You can [read more about this grid here](http://getbootstrap.com/css/#grid).

The grid should be used to arrange and organise elements on the page.  With this in mind, the brand specific styles you create should rely on an outer grid to contain it, rather than incorporating their own bespoke dimensions. This will ensure that your CSS is a flexible and reusable as possible.

## Modules
Modules are self contained sets of styling that should be reusable across the website.  Don't worry about being too granular, it's fine to have the styling of generic form elements in a single module file for instance.

### BEM
Block Element Modifier (BEM) is a modular approach to writing CSS. You can [read more about BEM here](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) to get started.  Using BEM is a simple way of organising and structuring your CSS and opens up your CSS for easy extension.
```scss
// Block (wraps elements)
.form-control {
  ...
}

// Elements (is a descendant of parent block)
.form-control__input {
  ...
}

// Modifier (modifies the block)
.form-control--valid {
  ...
}

// Modifier (modifies the block element)
.form-control__input--disabled {
  ...
}
```

### Media Queries
Media queries should be used inversely using `min-width` to ensure websites stay mobile first.  To compliment the bootstrap grid, there are some preset variables to use in your media queries to ensure everyone's on the same page:

```scss
@media (min-width: $screen-xs-min) {
  // At least 480px;
}

@media (min-width: $screen-sm-min) {
  // At least 768px;
}

@media (min-width: $screen-md-min) {
  // At least 992px;
}

@media (min-width: $screen-lg-min) {
  // At least 1200px;
}
```

Media queries should sit at the bottom of a SASS file to target contextual rules like so:
```scss
// form-control.scss
.form-control {
  ...
}

...

@media (min-width: 768px) {
  .form-control {
    ...
  }
}
```

Don't do this:
```scss
// form-control.scss
.form-control {
  ...
}

...

@media (min-width: 768px) {
  h1 {
    ...
  }
}
```

### Preferred units
Create a base font size

For fonts use ems / rems based off the base size

For padding use ems if appropriate

For line-height use unitless



### normalize.css
All projects should utilise `normalize.css` for basic element resets to ensure that styles start off consistently for all browsers.

## Building
We're utilising `node-sass` for building.  If you don't have node installed you can install in with HomeBrew using:
```
brew install node
```

You should also ensure that you have `node-sass`, and autoprefixer installed globally with NPM:
```
npm install -g node-sass postcss-cli autoprefixer
```

**The commands below assume that you have the [package.json](package.json) file in the root of the folder you're executing them from.**

When you have everything installed, simply run from the location of the package.json file
```
npm install
```

This will install dependencies and run the build script for the first time.

To build again:
```
npm run build
```

### Watching
To watch changes to SASS and compile as you work you can setup a watcher locally.  If you don't have the node `watch` package globally installed:
```
npm install -g watch
```

To watch styles
```
watch 'npm run build' ./path-of-dir-to-watch
```

### Grunt / Gulp etc.
Great tools, but kind of superfluous for our needs.  Building using NPM and global packages is a quick and awesome winner.  [See here for a detailed overview](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)

# JavaScript
JavaScript (JS) is a beautiful and thoroughly enjoyable language when understood and done right.  There is a lot of right/wrong guides when it comes to writing JS and indeed it has fallen victim to trends and fads, but behind each glossy framework and responsive carousel jQuery plugin is a pretty solid language, which - while often lacking in top level features - should provide a decent foundation for anything you can dream of.  Paramount to the success of your JS is readable and consistent code which adheres a certain style.

Here at Catch, our JS needs are quite minimal.  With this in mind, these guidelines are anything but comprehensive, but should help you in getting off on the right foot for most projects undertaken at Catch HQ.

***Note**: This guide assumes a basic understanding of JavaScript.  If there's anything that you'd like clarifying, the chances are it's already been asked on Stack Overflow, but sometimes a good, old fashioned chat is better, so come and grab someone!*

***Note 2**: This guide assumes you are using Babel, and requires that you use babel-preset-env or the equivalent. It also assumes you are installing shims/polyfills in your app, with babel-polyfill or the equivalent.*

## Style Guide
This style guide is heavily influenced by the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) and [Standard JS](https://standardjs.com/rules.html) Please have a read through this as well if you have time.

### Syntax
Readability is key.  Above everything else, always try and name things sensibly and allow some breathing space in your code.  We'd rather have more spaces and sensible grouping of computations and assignments than none at all.  Also remember to comment as much as you like.  More comments mean happier developers!

#### Indentation
Indent with 2 spaces.  Absolutely no tabs
```js
// Bad
    const foo = 'bar';

// Good
  const foo = 'bar';
```

#### References
Use `const` for all your references; avoid using `var`.

```js
// Bad
var a = 1;
var b = 2;

// Good
const a = 1;
const b = 2;
```

If you must reasign references use `let`
as it is block scoped rather than function scoped

```js
// let and const only exist in the blocks they are defined in
{
  const a = 1;
  let b = 2;
}

console.log(a); // Reference error
```

#### Objects
Use the literal syntax for object creation
```js
// Bad
const myObject = new Object();

// Good
const myObject = {}
```

Use object shorthand
```js
const someDude = "Some Dude";

// Bad
const obj = {
  someDude: someDude
}

// Good
const obj = {
  someDude
}
```

Group shorthand objects together.

Only quote invalid identifiers.
```js
// Bad
const obj = {
  'some': "some",
  'dude': "dude",
  'some-thing': "some thing"
}

// Good
const obj = {
  some: "some",
  dude: "dude",
  'some-thing': "some thing"
}
```

#### Arrays
Use the literal syntax for array creation
```js
// Bad
const myArray = new Array();

// Good
const myArray = [];
```

#### Destructuring
Use the destructuring when accessing multiple properties of an object

```js
// Bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// Good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// Best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```

Use array destructuring
```js
const arr = [1, 2, 3, 4];

// Bad
const first = arr[0];
const second = arr[1];

// Good
const [first, second] = arr;
```

Use object destructuring for multiple return values, not array destructuring.

> Why? You can add new properties over time or change the order of things without breaking call sites.

```js
// Bad
function processInput(input) {
  // then a miracle occurs
  return [left, right, top, bottom];
}

// The caller needs to think about the order of return data
const [left, __, top] = processInput(input);

// Good
function processInput(input) {
  // Then a miracle occurs
  return { left, right, top, bottom };
}

// The caller selects only the data they need
const { left, top } = processInput(input);
```

#### Strings
Use single quotes `''` for strings.

```js
// Bad
console.log("hello there")
console.log(`hello there`)

// Good
console.log('hello there')
$('<div class="box">')
console.log(`hello ${name}`)
```

Use template strings instead of concatination
> Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

```js
// Bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// Bad
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// Bad
function sayHi(name) {
  return `How are you, ${ name }?`;
}

// Good
function sayHi(name) {
  return `How are you, ${name}?`;
}
```

Don't use `eval()`

#### Functions
Use named functions expressions instead of function declarations

>Why? Function declarations are hoisted, which means that it’s easy - too easy - to reference the function before it is defined in the file. This harms readability and maintainability. If you find that a function’s definition is large or complex enough that it is interfering with understanding the rest of the file, then perhaps it’s time to extract it to its own module! Don’t forget to explicitly name the expression, regardless of whether or not the name is inferred from the containing variable (which is often the case in modern browsers or when using compilers such as Babel). This eliminates any assumptions made about the Error’s call stack. (Discussion)

```js
// Bad
function foo() {
  // ...
}

// Bad
const foo = function () {
  // ...
};

// Good
// Lexical name distinguished from the variable-referenced invocation(s)
const short = function longUniqueMoreDescriptiveLexicalFoo() {
  // ...
};
```

Never declare a function in a non function block (`if`, `while`, etc). Assign the function to a variable instead.

Never name a perameter `arguments`. This will take precedent over the `arguments` object that is given to every function scope.

```js
// Bad
function foo(name, options, arguments) {
  // ...
}

// Good
function foo(name, options, args) {
  // ...
}
```

Never use `arguments`, opt to use rest syntax use `...` instead.

> Why? `...` is explicit about which arguments you want pulled. Plus, rest arguments are a real Array, and not merely Array-like like arguments.

```js
// Bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// Good
function concatenateAll(...args) {
  return args.join('');
}
```

Never reassign perameters
```js
// Bad
function f1(a) {
  a = 1;
  // ...
}

function f2(a) {
  if (!a) { a = 1; }
  // ...
}

// Good
function f3(a) {
  const b = a || 1;
  // ...
}

function f4(a = 1) {
  // ...
}
```

#### Arrow Function
When you must use an anonymous function (as when passing an inline callback), use arrow function notation.

>Why? It creates a version of the function that executes in the context of this, which is usually what you want, and is a more concise syntax.

>Why not? If you have a fairly complicated function, you might move that logic out into its own named function expression.

```js
// Bad
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// Good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
```

#### Classes and contructors
Use the literal syntax for object creation

#### Modules
Always use modules (import/export) over a non-standard module system. You can always transpile to your preferred module system.

Why? Modules are the future, let’s start using the future now.

```js
// Bad
const AirbnbStyleGuide = require('./AirbnbStyleGuide');
module.exports = AirbnbStyleGuide.es6;

// OK
import AirbnbStyleGuide from './AirbnbStyleGuide';
export default AirbnbStyleGuide.es6;

// Best
import { es6 } from './AirbnbStyleGuide';
export default es6;
```

#### Iterators and Generators
Use the literal syntax for object creation

#### Properties
Use the literal syntax for object creation

#### Variables
Always use `const` and `let` to declare variables to ensure you don't polute the global namespace

```js
// Bad
someVar = something

// Good
const someVar = something
```

Use one `const` or `let` per variable or assignment
```js
// Bad
const something = someFunction(),
    somethingElse = true,
    aThirdThing = 3;

// Good
const something = someFunction();
const somethingElse = true;
const aThirdThing = 3;
```

Group `const`s and `let`s
```js
// Bad
const something;
let i;
const somethingElse;

// Good
const something;
const somethingElse;
let i;
```

#### Hoisting
Use the literal syntax for object creation

#### Comparison operators & Equality
Use the literal syntax for object creation

#### Blocks
Use the literal syntax for object creation

#### Objects
Use the literal syntax for object creation

#### Control Statement
Use the literal syntax for object creation

#### Comments
Use the literal syntax for object creation

#### Whitespace
Use the literal syntax for object creation

#### Commas
Use the literal syntax for object creation

#### Semicolons
Use the literal syntax for object creation

#### Typecasting and Coercion
Use the literal syntax for object creation

#### Naming Conventions
Use the literal syntax for object creation

#### Accessors
Use the literal syntax for object creation

#### Events
Use the literal syntax for object creation

#### jQuery
Use the literal syntax for object creation

#### More Reading
Use the literal syntax for object creation

#### Line Lengths
Soft (desirable) limit of **80**, hard limit of **120**.

### Spacing
Introduce spacing to ensure that parts of code are sensibly grouped into their various roles
```js
const val = 1;
let id;

function init (opts) {
  // Definition
  let startVal;

  // Assignment
  id = opts.name;

  // Control
  if (val < 2) {
    startVal = 0;
  }

  // Method call
  plugin.compute(startVal);
}
```

### Control Blocks and Function Style
`if`, `for` etc. should always have a space either side of the parenthesis `()`.  Always use curly braces, even for single lines.  Functions should have no space before the parens.
```js
// Bad
if(someVal){
  someVal += 1;
}

// Really bad
if (someVal) someVal += 1;

// Good
if (someVal) {
  someVal += 1;
}

// Good
for (i = 0; i < 10; i ++) {
 someVal += i;
}

// Bad
function(i) {
  ...
}

// Bad
function(i){
  ...
}

// Bad
function(i)
{
  ...
}

// Good
function (i) {
 ...
}
```

### Operators
Use spaces with operators
```js
const c = a + b;
```

### IIFEs
Instantly Invoked Function Expressions, or closures are used to isolate the scope of your javascript file.  If you've ever used jQuery in `noConflict()` mode the chances are you've come across one of these before.

Always ensure there is a trailing comma at the end of the IIFE to avoid *invokception* through code concatenation
```js
(function () {
  // JavaScript magic goes here
})();
```

Variables from outside the IIFE's scope can be passed in via reference like so:
```js
(function ($) {
  // jQuery jazz goes here
})(jQuery);
```

### Strict Mode
Always enable strict mode at the top of your IFFE to ensure more predictable and consistent behaviour from browsers:
```js
(function () {
  'use strict';

  // JavaScript magic goes here
})();
```

### Variables
Always use the `const` or `let` keyword to declare a variable.  Not doing so will populate the global scope in strict mode which is bad times fo your and your dependencies.
```js
const foo = 'bar';
```

Always declare each variable on a new line with a new const / let keyword
```js
const foo = 'bar';
const bar = foo;
const baz = {};
```

#### Naming Conventions
Always use camel casing for no-specific variables
```js
const myObject = {
  value: 1
}
```

Prefix any jQuery object with a `$` for readability
```js
const $myDiv = $('div');
```

Constant like values (those that will never be changed once set) can be styled like so:
```js
const PLUGIN_NAME = 'my-plugin';
```

#### Hoisting & Scope
Declare all variables at the top of their scope; you can always assign them later if you need to.
```js
function objectLength (obj) {
  let length = 0;
  let prop;

  for (prop in obj) {
    length ++;
  }

  return length;
}
```

Since we write all our JS inside IFFEs, all variables should be declared at the top of the closure after declaring strict mode
```js
(function ($) {
  'use strict';

  let intervalId;
  const interval = 1000;
  const $element = $('[data-element-name]');

  intervalId = setInterval(function () {
    clearTimeout(timeoutId);

    $element.toggleClass('glow');
  }, interval);
})(jQuery);
```

More detailed information on hoisting [can be found here](https://github.com/airbnb/javascript/tree/master/es5#hoisting)

#### Namespacing & Grouping
Sometimes it makes sense to group variables into objects for cleaner and more semantic JS

```js
const module = {
  $header: $('.module-header'),
  $content: $('.module-content')
};

const plugin = {
  $button: $('.plugin-button'),
  $content: $('.plugin-content')
};

// Hide module and plugin content
module.$content.hide();
plugin.$content.hide();
```

### Functions
Functions are first class objects, which gives them extreme flexibility.  Our advice is to keep functions as pure and obvious as possible.

#### Naming Functions
You should always endeavour to name your functions to make debugging as easy as possible and avoid too many stack traces plagued by `(anonymous function)`:
```js
startCarousel(function carouselInitCallback(e) {
  console.trace(e);
});

// Output
Object {...}
  carouselInitCallback @ script.js:21
  setupCarousel @ carousel.js:456
  startCarousel @ carousel.js:521
```

#### Pure Functions
Although not always practical, try to make functions self contained to avoid any nasty surprises in your JavaScript.  Pure functions always return a value and do not alter values from outside their scope
```js
// Pure
function incrementCounter(counter, increment) {
  counter.value += parseInt(increment, 10);

  return counter.value;
}

myCounter.value = incrementCounter(myCounter, 10);

// NOT Pure.  Functions augments value from outside its scope
function incrementCounter(increment) {
  myCounter.value += parseInt(increment, 10);

  return myCounter.value;
}

myCounter.value = incrementCounter(myCounter, 10);
```

#### Grouping
Keeping JS as DRY (Don't Repeat Yourself) as possible is paramount to creating clean and concise code.  It's always a good idea to group bits of code which will be invoked more than once and always need computation like so:
```js
// Calculate position on load
calculateModulePosition($module);

// Calculate position on orientation change
$(window).on('orientationchange', function () {
  calculateModulePosition($module);
});

function calculateModulePosition ($module) {
  const dimensions = {
    top: $module.offset().top,
    height: $module.innerHeight()
  };

  dimensions.bottom = dimensions.top + dimensions.height;

  if (dimensions.bottom > ... And so on...
}
```

#### Arguments
When writing functions that accept arguments it's often easier to accept a single object argument for changeable values:
```js
// Initial code
function createModule (width, height, done) {
  width = width || 300;
  height = height || 200;

  ...

  done.call({});
}

// Edited code
function createModule (width, height, offset, done) {
  width = width || 300;
  height = height || 200;
  offset = offset || 0;

  ...

  done.call({});
}

// Further edited code
function createModule (width, height, offset, resize, done) {
  width = width || 300;
  height = height || 200;
  offset = offset || 0;

  // Optional argument means we have to check arguments and add more code
  if (typeof resize === 'function' && typeof done !== 'function') {
    done = resize;
  }

  ...

  done.call({});
}

// A better approach using composition and extension
function createModule (opts, done) {
  const defaults = {
    width: 300,
    height: 200,
    offset: 0,
  };

  opts = $.extend({}, defaults, opts);

  ...

  done.call({});
}
```

### Objects
Objects are the building blocks of JavaScript.  Functions are objects as are Arrays, which often gets confusing, especially when it comes to array like objects

You should always define objects using the literal notation
```js
// Don't do this
const defaults = new Object();

// Do this
const defaults = {};
```

One thing that simple objects are incredibly useful for is key, value parings like associative arrays in PHP.
```js
const defaults = {
  width: 300
};

function getDefault(key) {
  // Check we have a value before returning it
  if (! (key in defaults)) {
    return false;
  }

  // Access value by key
  return defaults[key];
}
```

### Arrays
Just like objects, you should always define arrays using the literal notation
```js
// Don't do this
const list = new Array();

// Do this
const list = [];
```

### jQuery
jQuery is very powerful and often overlooked for its simplicity in shimming the different JS quirks across different browsers.  Below are some simple tricks to make your life easier with jQuery.

#### Limiting Scope
Using parent scopes is more performance friendly and avoids querying the entire DOM.  It also ensures there a solid relationship between larger plugins/modules/blocks and their child elements.
```js
const elements = {
  $module: $('.module')
};

elements.$header = elements.$module.find('.module__header');
elements.$footer = elements.$module.find('.module__footer');
```

#### Defining Plugins
Here's a simple (and contrived), but flexible approach to creating jQuery plugins:
```js
(function ($) {
  // Define jQuery plugin
  $.fn.myPlugin = function myPluginDefinition (opts) {
    return plugin($(this), opts);
  };

  function plugin ($element, opts) {
    opts = opts || {};

    // Keep track of your plugin name
    const PLUGIN_NAME = 'myPlugin';
    // Assign all your public API methods to a single object
    const api = {};

    // Pair methods with the API
    api.getName = getName;

    // Returning the element data assignment will link our API to the element while allowing chaining with other jQuery methods
    return $element.data(PLUGIN_NAME, api);

    // All inner functions will be hoisted to the top of the scope,
    // but placing them down here allows the business logic to be immediately readable in the plugin
    function getName () {
      return PLUGIN_NAME;
    }
  }
})(jQuery);
```

#### Binding to Elements
Use data attributes to link functionality to elements that exist in the DOM.  Using classes can cause conflicts with CSS and should be avoided whilst using IDs is inflexible.

Another advantage of using data attributes is that they can hold data which can be used to initialise plugins which creates a seamless link from back to front:
```html
<!-- HTML -->
<div data-plugin-init="some-data"></div>
```

```js
// JS
$('[data-plugin-init]').each(function () {
  $(this).myPlugin({
    name: $(this).attr('data-plugin-init')
  });
});
```

### Parting Words
Be consistent.

If you’re editing code, take a few minutes to look at the code around you and determine its style. If they use spaces around all their arithmetic operators, you should too. If their comments have little boxes of hash marks around them, make your comments have little boxes of hash marks around them too.

The point of having style guidelines is to have a common vocabulary of coding so people can concentrate on what you’re saying rather than on how you’re saying it. We present global style rules here so people know the vocabulary, but local style is also important. If code you add to a file looks drastically different from the existing code around it, it throws readers out of their rhythm when they go to read it. Avoid this.
