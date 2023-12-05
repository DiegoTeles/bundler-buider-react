const bundle  = require('./webpack/bundler');
const buildDependencyGraph = require('./webpack/graph'); 
// Importe ou defina as funções necessárias para análise de dependências, construção do grafo, etc.

// Caminho do arquivo de entrada principal
const entryFile = './src/index.js';

// Construção do grafo de dependências
 
const dependencyGraph = buildDependencyGraph(entryFile); 

// console.log(`dependencyGraph`, dependencyGraph);

// Empacotamento dos arquivos
const bundledCode = bundle(dependencyGraph, entryFile);
// console.log(`bundledCode`, dependencyGraph);

// Exibir o resultado ou salvá-lo em um arquivo
// console.log(bundledCode);

// Ou salvar o código empacotado em um arquivo (exemplo usando fs)
const fs = require('fs');
fs.writeFileSync('bundle.js', bundledCode);

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used} MB`);
