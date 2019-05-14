const shell = require('shelljs');
const chalk = require('chalk');
const path = require('path');

const log = (source, target) => console.log(`复制文件${chalk.blue(source)}为${chalk.blue(target)}`);

const dirPath = path.resolve(__dirname, '../types');
const files = shell.ls(dirPath).stdout.split('\n');
files.pop();
files.forEach((file) => {
  const dir = file.match(/.+(?=_)/)[0];
  const fileName = file.match(/(?<=_)[^_]+$/)[0];
  const source = path.resolve(dirPath, file);
  const target = path.resolve(dirPath, `../node_modules/${dir}`);
  shell.cp(source, target);
  shell.mv(`${target}/${file}`, `${target}/${fileName}`);
  log(source, `${target}/${fileName}`);
});
