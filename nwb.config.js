module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Reactaroid',
      externals: {
        react: 'React'
      }
    }
  }
}