const path = require('path');

const resolve = dir => {
    return path.join(__dirname, dir)
}
// 需要将它改为'/my-app/'
// 服务器中的文件名称
const BASE_URL = process.env.NODE_ENV === 'production' ? '' : '/';

module.exports = {
    outputDir: 'dist',
    // 基本接口路径
    publicPath: BASE_URL,
    // 设为false打包时不生成.map文件
    productionSourceMap: false,
    // 如果你不需要使用eslint，把lintOnSave设为false即可
    lintOnSave: false,
    // 路径设置
    chainWebpack: config => {
        config.resolve.symlinks(true);
        config.resolve.alias
            .set('@', resolve('src'))
    },
    // 修改图标
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    // devServer: {
    //   proxy: 'localhost:3000'
    // }
}
