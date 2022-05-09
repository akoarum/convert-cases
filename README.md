# convert-cases

Utilities to convert camelCase to sanke_case and snake_case to camelCase.  
Nested object keys can also be converted together.

## Get started

```
// use npm
$ npm i convert-cases -S

// use Yarn
$ yarn add convert-cases
```

## Usage

4 functions are provided.

- `deeplyCamelize` : Convert all nested object keys to camelCase.
- `deeplySnakize` : Convert all nested object keys to snake_case.
- `snakeToCamel` : Converts single string to camelCase.
- `camelToSnake` : Converts single string to snake_case.

### How to camelCase the keys of nested objects together

```js
import { deeplyCamelize } from 'convert-cases'

const obj = {
  test_case: '1',
  array: [
    { array_case: 1 },
    { array_case: 2 },
  ],
}

deeplyCamelize(obj) // { testCase: '1', array: [ { arrayCase: 1 }, { arrayCase: 2 } ] }
```

#### In the case of TypeScript

You can specify the type before and after conversion by specifying generics.  
However, no strict type checking is performed.

```ts
deeplyCamelize<BeforeObjType, AfterObjType>(obj)
```

### How to snake_case the keys of nested objects together

```js
import { deeplySnakize } from 'convert-cases'

const obj = {
  testCase: '1',
  array: [
    { arrayCase: 1 },
    { arrayCase: 2 },
  ],
}

deeplySnakize(obj) // { test_case: '1', array: [ { array_case: 1 }, { array_case: 2 } ] }
```

#### In the case of TypeScript

You can specify the type before and after conversion by specifying generics.  
However, no strict type checking is performed.

```ts
deeplySnakize<BeforeObjType, AfterObjType>(obj)
```

#### How to convert a single string to camelCase

```js
import { snakeToCamel } from 'convert-cases'

snakeToCamel('snake_case') // 'snakeCase'
```

#### How to convert a single string to snake_case

```js
import { camelToSnake } from 'convert-cases'

snakeToCamel('camelCase') // 'camel_case'
```

