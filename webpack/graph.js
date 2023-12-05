const { getDependencies } = require('./dependency');
const readFile = require('./readFile');

function buildDependencyGraph(entryFile) {
  const graph = {};

  function traverse(file) {
    if (!graph[file]) {
      const dependencies = getDependencies(file);
      graph[file] = {
        dependencies,
        code: readFile(file),
      };
      dependencies.forEach((dep) => traverse(dep));
    }
  }

  traverse(entryFile);
  return graph;
}

module.exports = buildDependencyGraph;
