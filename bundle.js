
    (function(modules) {
      function require(file) {
        const fn = modules[file];
        const module = { exports: {} };
        fn(require, module, module.exports);
        return module.exports;
      }
      require('./src/index.js');
    })({
        './src/index.js': function(require, module, exports) {
          const App = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello World!!"));
};
// Renderiza o componente App na div com o id 'root' no arquivo HTML
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
        },
      });
  