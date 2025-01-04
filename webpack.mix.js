const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')  // This compiles app.js
   .vue()  // Ensures Vue components are compiled
   .sass('resources/sass/app.scss', 'public/css');  // For compiling SCSS (if you use it)
