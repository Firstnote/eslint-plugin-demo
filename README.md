# eslint-plugin-fnlint

my eslint-plugin demo

> from yo & generator-eslint

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-fnlint`:

```
$ npm install eslint-plugin-fnlint --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-fnlint` globally.

## Usage

Add `fnlint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "fnlint"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "fnlint/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





