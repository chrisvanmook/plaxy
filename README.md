# plaxy
[![Build Status](https://travis-ci.org/chrisvanmook/plaxy.svg?branch=master)](https://travis-ci.org/chrisvanmook/plaxy) [![dependencies](https://david-dm.org/chrisvanmook/plaxy.svg)](https://david-dm.org/chrisvanmook/plaxy.svg)
A simple jQuery parallax scrolling plugin

## Install
Simply use bower: `bower install plaxy --save`
Alternatively, you can pull this repo and include the file in the `dist` folder.

Include the `plaxy.min.js` and `plaxy.min.css` in your html file *after* the jQuery library.
`` <script src="/path/to/plaxy.min.js"></script> ``
`` <link rel="stylesheet" href="/path/to/plaxy.min.css" /> ``

## Usage
Include the following in your script:
`$('.parallax').simpleParallax();`

### Configuration
- **speed** - (Number) The speed sensitivity of the effect (lower = faster). Default: **5**
- **device** - (Bool) If the effect should be enabled on mobile devices. Default **false**

## Todo's:
- General enhancement (css, calculations on position etc.)
-
- Improve contributing document


