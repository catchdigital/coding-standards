# Catch Front End Coding Standards

This document intends to give an overview of our general approach to front end development and should serve as a guide to get you started on most projects.  Please remember that this is a living document and will change over time as new ideas, methods, devices, browsers and W3C standards come about.

# Contents

- [HTML](#html)
  - [Doctype](#doctype)
  - [Style Guide](#style-guide)
    - [Indentation](#indentation)
- [Hello World!](#hello-world)
- [Hello World!](#hello-world-1)
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
```
// Websites
<!DOCTYPE html>

// Emails
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

## Style Guide
This style guide should serve as some simple guidelines to help you craft HTML documents.

### Indentation
Indent with 2 spaces.  Absolutely no tabs.  Each nested element requires indentation.
```
// Bad
<div>
    <h1>Hello World!</h1>
</div>

// Good
// Bad
<div>
  <h1>Hello World!</h1>
</div>
```

### Line Lengths
No line length limits, but be sensible.

### Spacing
Block elements (`main`, `section`, `header`, `div`, `h1`, `p` etc) on their own line
```
// Bad
<div>
  <ul><li>List item</li></ul>
</div>

// Good
<div>
  <ul>
    <li>List item</li>
  </ul>
</div>
```

Inline elements (`a`, `span`, etc) can sit on the same line or on their own depending on preference
```
// Good
<p>Lorem ipsum <a href="#">click here</a></p>

// Also good
<p>
  Lorem ipsum
  <a href="#">click here</a>
</p>
```

Add a space between each attribute
```
// Bad
<input type="text" name="first-name"value="Catch"class="control__input">

// Good
<input type="text" name="first-name" value="Catch" class="control__input">
```
*Note: always use `"` for attributes NEVER `'`*

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
```
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

```
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
```
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
```
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
```
.field-carousel .carousel .carousel__item span a {
  display: none;
}
```

Try not to reflect the HTML structure with nesting.  This is a really bad route to take, is usually completely unnecessary and will cause problems when you need to amend styles in media queries etc.

```
// No one wants to be doing this.  If you can simplify, then please do!
@media (min-width: 768px) {
  .field-carousel .carousel .carousel__item span a {
    display: inline-block;
  }
}
```

### BEM and Nesting
Nesting in SASS is a really great way of writing BEM quickly and in a less error-prone manner:
```
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
```
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
```
// Colours
$colour-red: #f00;
$colour-blue: #00f;

// Dimensions
$dimension-border-radius: 5px;
$dimension-padding: 20px;
```

For variable variations consider using modifiers on top of existing variable names
```
// Colour variations
$colour-red: #f00;
$colour-red-dark: darken(#f00, 20%);

// Dimension variations
$dimension-border-radius: 5px;
$dimension-border-radius-lg: ($dimension-border-radius * 2);
```

### Scoped Variables
You can scope variables inside selectors to avoid having a master list of unrelated unit/colour values.  When doing this, remember to ensure that you leave a space before the declarations for that rule-set.
```
.input {
  $height: 30px;

  height: $height;
  margin-bottom: ($height / 2);
}
```

## Grid
Moving forward we are using the Bootstrap grid system to offer a consistent and flexible way of laying out elements in templates.  You can [read more about this grid here](http://getbootstrap.com/css/#grid).

The grid should be used to arrange and organise elements on the page.  With this in mind, the brand specific styles you create should rely on an outer grid to contain it, rather than incorporating their own bespoke dimensions.  This will ensure that your CSS is a flexible and reusable as possible.

## Modules
Modules are self contained sets of styling that should be reusable across the website.  Don't worry about being too granular, it's fine to have the styling of generic form elements in a single module file for instance.

### BEM
Block Element Modifier (BEM) is a modular approach to writing CSS. You can [read more about BEM here](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) to get started.  Using BEM is a simple way of organising and structuring your CSS and opens up your CSS for easy extension.
```
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

```
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
```
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
```
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

## Style Guide
This style guide is heavily influenced by the [Airbnb ES5 Style Guide](https://github.com/airbnb/javascript/tree/master/es5).  Please have a read through this as well if you have time.

### Syntax
Readability is key.  Above everything else, always try and name things sensibly and allow some breathing space in your code.  We'd rather have more spaces and sensible grouping of computations and assignments than none at all.  Also remember to comment as much as you like.  More comments mean happier developers!

#### Indentation
Indent with 2 spaces.  Absolutely no tabs
```
// Bad
    var foo = 'bar';

// Good
  var foo = 'bar';
```

#### Line Lengths
Soft (desirable) limit of **80**, hard limit of **120**.

### Spacing
Introduce spacing to ensure that parts of code are sensibly grouped into their various roles
```
var val = 1;
var id;

function init(opts) {
  // Definition
  var startVal;

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
```
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
function (i) {
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
function(i) {
 ...
}
```

### Operators
Use spaces with operators
```
var c = a + b;
```

### IIFEs
Instantly Invoked Function Expressions, or closures are used to isolate the scope of your javascript file.  If you've ever used jQuery in `noConflict()` mode the chances are you've come across one of these before.

Always ensure there is a trailing comma at the end of the IIFE to avoid *invokception* through code concatenation
```
(function() {
  // JavaScript magic goes here
})();
```

Variables from outside the IIFE's scope can be passed in via reference like so:
```
(function($) {
  // jQuery jazz goes here
})(jQuery);
```

### Strict Mode
Always enable strict mode at the top of your IFFE to ensure more predictable and consistent behaviour from browsers:
```
(function() {
  'use strict';

  // JavaScript magic goes here
})();
```

### Variables
Always use the `var` keyword to declare a variable.  Not doing so will populate the global scope in strict mode which is bad times fo your and your dependencies.
```
var foo = 'bar';
```

Always declare each variable on a new line with a new var keyword
```
var foo = 'bar';
var bar = foo;
var baz = {};
```

#### Naming Conventions
Always use camel casing for no-specific variables
```
var myObject = {
  value: 1
}
```

Prefix any jQuery object with a `$` for readability
```
var $myDiv = $('div');
```

Constant like values (those that will never be changed once set) can be styled like so:
```
var PLUGIN_NAME = 'my-plugin';
```

#### Hoisting & Scope
Declare all variables at the top of their scope; you can always assign them later if you need to.
```
function objectLength(obj) {
  var length = 0;
  var prop;

  for (prop in obj) {
    length ++;
  }

  return length;
}
```

Since we write all our JS inside IFFEs, all variables should be declared at the top of the closure after declaring strict mode
```
(function($) {
  'use strict';

  var intervalId;
  var interval = 1000;
  var $element = $('[data-element-name]');

  intervalId = setInterval(function() {
    clearTimeout(timeoutId);

    $element.toggleClass('glow');
  }, interval);
})(jQuery);
```

More detailed information on hoisting [can be found here](https://github.com/airbnb/javascript/tree/master/es5#hoisting)

#### Namespacing & Grouping
Sometimes it makes sense to group variables into objects for cleaner and more semantic JS

```
var module = {
  $header: $('.module-header'),
  $content: $('.module-content')
};

var plugin = {
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
```
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
```
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
```
// Calculate position on load
calculateModulePosition($module);

// Calculate position on orientation change
$(window).on('orientationchange', function() {
  calculateModulePosition($module);
});

function calculateModulePosition($module) {
  var dimensions = {
    top: $module.offset().top,
    height: $module.innerHeight()
  };

  dimensions.bottom = dimensions.top + dimensions.height;

  if (dimensions.bottom > ... And so on...
}
```

#### Arguments
When writing functions that accept arguments it's often easier to accept a single object argument for changeable values:
```
// Initial code
function createModule(width, height, done) {
  width = width || 300;
  height = height || 200;

  ...

  done.call({});
}

// Edited code
function createModule(width, height, offset, done) {
  width = width || 300;
  height = height || 200;
  offset = offset || 0;

  ...

  done.call({});
}

// Further edited code
function createModule(width, height, offset, resize, done) {
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
function createModule(opts, done) {
  var defaults = {
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
```
// Don't do this
var defaults = new Object();

// Do this
var defaults = {};
```

One thing that simple objects are incredibly useful for is key, value parings like associative arrays in PHP.
```
var defaults = {
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
```
// Don't do this
var list = new Array();

// Do this
var list = [];
```

### jQuery
jQuery is very powerful and often overlooked for its simplicity in shimming the different JS quirks across different browsers.  Below are some simple tricks to make your life easier with jQuery.

#### Limiting Scope
Using parent scopes is more performance friendly and avoids querying the entire DOM.  It also ensures there a solid relationship between larger plugins/modules/blocks and their child elements.
```
var elements = {
  $module: $('.module')
};

elements.$header = elements.$module.find('.module__header');
elements.$footer = elements.$module.find('.module__footer');
```

#### Defining Plugins
Here's a simple (and contrived), but flexible approach to creating jQuery plugins:
```
(function($) {
  // Define jQuery plugin
  $.fn.myPlugin = function myPluginDefinition(opts) {
    return plugin($(this), opts);
  };

  function plugin($element, opts) {
    opts = opts || {};

    // Keep track of your plugin name
    var PLUGIN_NAME = 'myPlugin';
    // Assign all your public API methods to a single object
    var api = {};

    // Pair methods with the API
    api.getName = getName;

    // Returning the element data assignment will link our API to the element while allowing chaining with other jQuery methods
    return $element.data(PLUGIN_NAME, api);

    // All inner functions will be hoisted to the top of the scope,
    // but placing them down here allows the business logic to be immediately readable in the plugin
    function getName() {
      return PLUGIN_NAME;
    }
  }
})(jQuery);
```

#### Binding to Elements
Use data attributes to link functionality to elements that exist in the DOM.  Using classes can cause conflicts with CSS and should be avoided whilst using IDs is inflexible.

Another advantage of using data attributes is that they can hold data which can be used to initialise plugins which creates a seamless link from back to front:
```
// HTML
<div data-plugin-init="some-data"></div>

// JS
$('[data-plugin-init]').each(function() {
  $(this).myPlugin({
    name: $(this).attr('data-plugin-init')
  });
});
```
