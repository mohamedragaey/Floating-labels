/**
 * Main Script file
 * Here you can add all your cutome scripts and requires.
 */
try {
  window.$ = window.jQuery = require('jquery')
  require('./bootstrap-sass')
  // require('./additional-scripts')

  if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!')
  }
} catch (e) {
  console.log(e.message)
}
