const fs = require('fs'); // Importa o módulo 'fs' do Node.js para operações de arquivo

function readFile(filePath) {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8'); // Lê o conteúdo do arquivo
      return fileContent;
    } catch (error) {
      console.error(`Erro ao ler o arquivo: ${error}`);
      return null;
    }
  }
  
  module.exports = readFile;