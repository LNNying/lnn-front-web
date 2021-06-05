export default  {
    /**
     * 项目标题
     * document.title
     */
    title: 'LNN',
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
    /**
     * 后台接口
     */
    baseUrl: process.env.NODE_ENV === 'production' ? '' : ''

}
