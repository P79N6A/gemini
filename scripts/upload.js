const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const chalk = require('chalk');

const isDir = filePath => fs.lstatSync(filePath).isDirectory();
const log = msg => console.log(chalk.blue(msg));

shell.ls(path.resolve(__dirname, '../build/')).forEach((file) => {
  const filePath = path.resolve(__dirname, `../build/${file}`);
  shell.exec(`scp -r -P 22 ${filePath} ubuntu@115.159.213.232:/home/ubuntu/documents/zone-server/static/gemini/`);
  log(`上传文件${isDir(filePath) ? '夹' : ''}完成：${filePath}`);
});
