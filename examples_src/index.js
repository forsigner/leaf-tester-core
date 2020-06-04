import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import { toJS } from 'mobx';
import axios from 'axios';

import testerCoreStore from '../src/stores/testerCoreStore';
import LeafTester from '../src/components/LeafTester';

require('./stylesheets/common.less');

// useStrict(true);
// useStrict(false);

// For easier debugging
window.__APP_STATE__ = { testerCoreStore };
window.__toJS__ = toJS;

/*
function onSend_1(params) {
  testerCoreStore.updateFetchStatus(true);
  console.log('params:', params);
  const response = {
    time: {
      timingPhases: { total: 563 },
    },
    headers: {
      foo: 'bar',
    },
    status: 200,
    statusText: 'OK',
    body: {
      hello: 'world',
    },
  };
  setTimeout(() => {
    testerCoreStore.init({ response });
    testerCoreStore.updateFetchStatus(false);
  }, 2000);
}
*/

async function onSend_2(params) {
  testerCoreStore.updateFetchStatus(true);
  const networkErrorString = 'Error: Network Error';
  let t0;
  let t1;
  let result;
  let response;
  const { method, url, headers = {}, query = {}, body = {} } = params;
  const config = {
    // 这样所有响应码都不会进入 reject
    validateStatus: () => true,
  };
  const options = {
    method: method.toLowerCase(),
    url,
    headers,
    params: query,
    data: body,
  };
  try {
    t0 = window.performance.now();
    result = await axios.create(config)(options);
  } catch (err) {
    const errString = err.toString();
    // Error: Network Error
    if (errString === networkErrorString) {
      throw new Error(networkErrorString);
    }

    // TODO
    if (!Object.keys(err).length) {
      response = { data: errString };
    }
  } finally {
    t1 = window.performance.now();
  }

  const { data, status, statusText } = result;
  response = {
    body: data,
    headers: result.headers,
    statuCode: status,
    statusMessage: statusText,
    time: {
      timingPhases: { total: t1 - t0 },
    },
  };
  testerCoreStore.init({ response });
  testerCoreStore.updateFetchStatus(false);
}

const operations = <div>open</div>;

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider testerCoreStore={testerCoreStore}>
        <LeafTester
          onSend={onSend_2}
          tabBarExtraContent={operations}
          requireConfig={{
            baseUrl: './vs',
            url: './vs/loader.js',
          }}
        />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

init();

if (module.hot) {
  module.hot.accept('../src/components/LeafTester', () => {
    render();
  });
}

function init() {
  configAxios();
  render();
}

function configAxios() {
  // config axios

  axios.interceptors.request.use(
    config => {
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    res => {
      return res.data;
    },
    error => {
      console.log('[ERROR]接口返回了错误数据，请检查是前端错误还是后端错误！');
      return Promise.reject(error.response.data);
    }
  );
}
