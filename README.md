# leaf-tester-core

## Develop

```bash
$ npm i
$ npm run dev
```

访问：`http://localhost:9001`

## Usage

```js
import LeafTester from '@ali/leaf-tester-core';
import testerCoreStore from '@ali/leaf-tester-core/lib/stores/testerCoreStore';

const store = {
  testerCoreStore,
};

// baseUrl 和 url 按需要改为自己的
const requireConfig = {
  baseUrl: './vs',
  url: './vs/loader.js',
};

ReactDOM.render(
  <Provider {...store}>
    <LeafTester requireConfig={requireConfig} />
  </Provider>,
  document.getElementById('root')
);
```
