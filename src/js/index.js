/* Third Party Library - jQuery for easy cross-browsing element selecting purposes only */
window.jQuery = window.$ = require('./lib/jquery-2.2.4.min.js')
window.NYTD = {} // to Store Global Object name spaced as NYTD

/* Main Controller */
document.addEventListener("DOMContentLoaded", require('./controllers'))
