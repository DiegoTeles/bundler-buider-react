const { getDependencies } = require('./dependency');
const readFile = require('./readFile');

function buildDependencyGraph(entryFile) {
  const graph = {};

  function traverse(file) {
    if (!graph[file]) {
      const fileContent = readFile(file); // Alteração para usar readFile
      const dependencies = getDependencies(fileContent); // Ajuste para obter as dependências do conteúdo lido
      console.log('dependencies :>> ', dependencies);
      graph[file] = {
        dependencies,
        code: fileContent, // Atribui o conteúdo lido do arquivo à propriedade 'code'
      };
      dependencies.forEach((dep) => traverse(dep));
    }
  }

  traverse(entryFile);
  return graph;
}

module.exports = buildDependencyGraph;
