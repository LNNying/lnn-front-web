
let routerList = [];
let routerFileList = require.context('./module', false, /\.js$/);

routerFileList.keys().forEach(key => {
    routerList.push(...routerFileList(key).default);
});

export default [
    ...routerList
]

