const fs = require('fs');

function getDependencies(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const dependencies = parseDependencies(fileContent);

    console.log('dependencies :>> ', dependencies);
    return dependencies.map((dep) => dep.replace(/'/g, '').replace(/"/g, '')); // Remover aspas extras das dependências
  } catch (error) {
    console.error(`Erro ao ler o arquivo:: getDependencies: ${error}`);
    return [];
  }
}

function parseDependencies(fileContent) {
  // Lógica para identificar as dependências no arquivo
  // Exemplo simplificado:

  const dependencyRegex = /require\(['"](.+?)['"]\)|from\s+['"](.+?)['"]/g;
  const dependencies = [];
  let match;
  while ((match = dependencyRegex.exec(fileContent)) !== null) {
    dependencies.push(match[1] || match[2]); // Verifica qual grupo foi capturado
  }
  return dependencies;
}

module.exports = { getDependencies, parseDependencies };
