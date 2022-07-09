type path = string;
type createDirObject = {
  [x: string]: any;
  hasOwnProperty: (arg0: string) => any;
}

const currentDir: path = process.cwd();
let dirPath: string | boolean = currentDir;

/**
 * 正規表現で最後のpathを削除
 * @param dirPath
 */
const concatPath = (dirPath: string | boolean) => {
  if (typeof dirPath !== "boolean") {
    const lastPath: RegExpMatchArray | null = dirPath.match(/\/([^/]*?)$/);
    if (lastPath) {
      return dirPath.replace(lastPath[0], '');
    }
  }
  return false;
}

/**
 * @param object
 */
const createDir = (object: createDirObject) => {
  let countDir: number = 1;
  let key: string | number;
  for(key in object) {
    if (!object.hasOwnProperty(key)) continue;
    if(typeof object[key] === 'object'){
      dirPath += `/${key}`;

      const fs = require('fs');
      fs.mkdir(dirPath, { recursive: true }, (err: any | null) => {
        if (err) throw err;
        console.log(`create directory ${key}`);
      });
      const depth = createDir(object[key]) + 1;
      countDir = Math.max(depth, countDir);
    }
  }

  dirPath = concatPath(dirPath);
  return countDir;
}

export default createDir;