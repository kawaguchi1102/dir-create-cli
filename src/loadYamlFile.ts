const loadYamlFile = (filename: string) => {
  const fs = require('fs');
  const yaml = require('js-yaml');
  const yamlText = fs.readFileSync(filename, 'utf8')
  return yaml.safeLoad(yamlText);
}

export default loadYamlFile;