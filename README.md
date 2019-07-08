# Snake in the DOM
## Overview
Originally I've created this demo game for a talk at NaturalIntelligence.
This is a small version of the original game of Snake made famous by Nokia.
This projects demonstrates the following concepts:
- MVC
- JS module pattern
- Using the DOM as a viable game bed


## MVC
The project contains 3 main components:
- game.js serves as the model and BL
- view.js controls the display
- index.js is the controller synching the game and view

Additionally there's also a Utils module with flat array to matrix-like and vice-versa.
Can't do without these functions in a grid-based game.

## The (Revealing) Module Pattern
This pattern prevents tempering with its internals and serves as a very good class alternative.
It also provides support for private objects as well as an exposed interface.

## Webpack
I've used webpack to package the project with ES5 transpiling via Babel.