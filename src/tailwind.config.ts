

  const defaultTheme = ('"Exo 2"')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Exo 2"', ...defaultTheme.fontFamily.sans],
      },
    }
  }
}