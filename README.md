# dir-create-cli [![npm version](https://badge.fury.io/js/dir-create-cli.svg)](https://www.npmjs.com/package/dir-create-cli)

a command line tool to create directories.

## Installation

```sh
npm install -g dir-create-cli
```

## Usage

Create a directory from `createdir.yaml` in the current directory:

```console
$ dir-create --create
```

Example of a sample `createdir.yaml` description:

```yaml
sample:
    parent_1:
        child_1:
    parent_2:
        child_1:
            item_1:
            item_2:
        child_2:
            item_1:
```

## Options

```text
-V, --version           output the version number
-c, --create            create directory
-h, --help              display help for command
```

## License

This project is licensed under the [MIT License](LICENSE).