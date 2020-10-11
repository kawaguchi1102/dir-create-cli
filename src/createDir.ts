const currentDir = process.cwd();
let dirPath = currentDir;

/**
 * 正規表現で最後のpathを削除
 * @param dirPath: any
 */
const concatPath = (dirPath: any) => {
  const lastPath = dirPath.match(/\/([^/]*?)$/)[0];
  return dirPath.replace(lastPath, '');
}

/**
 *
 * @param object: { [x: string]: any; hasOwnProperty: (arg0: string) => any; }
 */
const createDir = (object: { [x: string]: any; hasOwnProperty: (arg0: string) => any; }) => {
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