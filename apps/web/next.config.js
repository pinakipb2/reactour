const withTM = require('next-transpile-modules')([
  '@reactour/utils',
  '@reactour/mask',
  '@reactour/popover',
  '@reactour/tour',
])

module.exports = withTM({
  reactStrictMode: true,
})