const babel = require('@babel/core');

function applyBabel(content) {
  try {
    const babelOptions = {
      presets: ['@babel/preset-react']
    };
    const { code } = babel.transformSync(content, babelOptions);
    return code;
  } catch (error) {
    console.error(`Erro ao aplicar o Babel: ${error}`);
    return content;
  }
}

function transpileUsingBabel(content) {
  // Lógica simplificada de transpilação usando Babel
  return content + ' // Transpiled using Babel';
}

module.exports = applyBabel;
