#!/usr/bin/env node

import loadYamlFile from './loadYamlFile';
import createDir from './createDir';

const program = require('commander');
const PACKAGE_VERSION: string = require('../package.json').version;
const CREATE_DIR: string = 'createdir.yaml';
const currentDir = process.cwd();
const path = require('path');

program
  .version(PACKAGE_VERSION)
  .option('-c, --create', 'create directory')
  .parse(process.argv);

if (program.create) {
  if (require.main === module) {
    try {
      const data = loadYamlFile(path.join(currentDir, CREATE_DIR));

      const countDir: number = createDir(data);
      console.log(`number of directories created: ${countDir}`)
    } catch (err) {
      console.error(err.message);
    }
  }
}
