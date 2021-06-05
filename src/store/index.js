import { createStore } from 'vuex'

let modules = {};

let storeFiles = require.context('./module', false, /\.js$/);

storeFiles.keys().forEach(key => {
  modules[key.replace(/(modules|\/|\.|js)/g, '')] = {
      ...storeFiles(key).default,
      namespaces: true
  }
});

export default createStore({ modules })
