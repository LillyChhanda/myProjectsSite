const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production'
      ? [
          purgecss({
            content: ['./index.html', './assets/js/**/*.js'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          })
        ]
      : [])
  ]
};