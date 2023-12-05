const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const entryFilePath = './src/index.js';
const outputFilePath = './src/public/bundle.js';

const readCode = (filePath) => {
  return fs.readFileSync(filePath, 'utf8');
};

const transpileCode = (code) => {
  return babel.transform(code, { presets: ['@babel/preset-env', '@babel/preset-react'] }).code;
};

const writeCode = (filePath, code) => {
  fs.writeFileSync(filePath, code);
};

const main = () => {
  const entryCode = readCode(entryFilePath);
  const transpiledCode = transpileCode(entryCode);
  writeCode(outputFilePath, transpiledCode);
};

main();
