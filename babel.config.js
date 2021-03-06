module.exports = function(api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/Components',
            navigation: './src/Navigation',
            screens: './src/Screens',
            wrappers: './src/Wrappers'
          }
        }
      ]
    ]
  }
}
