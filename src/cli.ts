#!/usr/bin/env node

import loadYamlFile from './loadYamlFile';
import createDir from './createDir';
import {
  PACKAGE_VERSION,
  CREATE_DIR_YAML
} from './config';

const program = require('commander');
const currentDir = process.cwd();
const path = require('path');

program
  .version(PACKAGE_VERSION)
  .option('-c, --create', 'create directory')
  .option('--sample', 'copy sample yaml')
  .parse(process.argv);

if (program.create) {
  if (require.main === module) {
    try {
      const data = loadYamlFile(path.join(currentDir, CREATE_DIR_YAML));

      const countDir: number = createDir(data);
      console.log(`number of directories created: ${countDir}`)
    } catch (err) {
      console.error(err.message);
    }
  }
}
if (program.sample) {
  const fs = require('fs');
  const sampleDir: string = __dirname.replace('/dist', '/sample');
  const sampleFile: string = path.join(sampleDir,`/${CREATE_DIR_YAML}`);

  fs.copyFileSync(sampleFile, path.join(currentDir,`/${CREATE_DIR_YAML}`));
  console.log(`copy file ${CREATE_DIR_YAML}`);
}
