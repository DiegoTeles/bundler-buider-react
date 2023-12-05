const applyBabel = require('./loaders/babel');
const readFile = require('./readFile');

function bundle(graph, entryFile) {
  let modules = '';

  // Itera sobre o grafo de dependências e cria uma string com os módulos
  for (let file in graph) {
    let code = graph[file].code;

    // Verifica se o arquivo é um JavaScript e aplica o Babel se for
    if (file.endsWith('.js')) {
      code = applyBabel(code);
    }

    modules += `
        '${file}': function(require, module, exports) {
          ${code}
        },
      `;

    // Lê e adiciona o conteúdo dos arquivos das dependências ao grafo
 /*    if (['react', 'react-dom'].includes(file)) {
      const content = readFile(file);
      graph[file].code = content || ''; // Adiciona o conteúdo ao grafo
    } */
  }

  // Resto do código para o empacotamento...

  // Criar o módulo de saída com os módulos empacotados
  const bundledCode = `
    (function(modules) {
      function require(file) {
        const fn = modules[file];
        const module = { exports: {} };
        fn(require, module, module.exports);
        return module.exports;
      }
      require('${entryFile}');
    })({${modules}});
  `;

  return bundledCode;
}

module.exports = bundle;
