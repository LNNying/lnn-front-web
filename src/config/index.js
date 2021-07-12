export default  {
    /**
     * 项目标题
     * document.title
     */
    title: '存储系统 v1.0',
    /**
     * 底部版权
     */
    copyright: '由LNN提供技术支持 - asgardnn@163.com',
    /**
     * @description 是否使用国际化，默认为false
     *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
     *              用来在菜单中显示文字
     */
    useI18n: true,
    /**
     * 默认打开界面
     */
    homeName: 'home',
    loginName: 'login',
    /**
     * 后台接口
     */
    baseUrl: process.env.NODE_ENV === 'production' ? '' : ''

}
