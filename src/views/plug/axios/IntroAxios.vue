<template>
    <h2>Axios 使用手册</h2>
    <el-row :gutter="10">
        <el-col :span="12">
            <div class="content">
                <p><span><h3>特性</h3></span> <br />
                    <span class="margin-left-20">从浏览器中创建 XMLHttpRequests</span> <br />
                    <span class="margin-left-20">从 node.js 创建 http 请求</span> <br />
                    <span class="margin-left-20">支持 Promise API</span> <br />
                    <span class="margin-left-20">拦截请求和响应</span> <br />
                    <span class="margin-left-20">转换请求数据和响应数据</span> <br />
                    <span class="margin-left-20">取消请求</span> <br />
                    <span class="margin-left-20">自动转换 JSON 数据</span> <br />
                    <span class="margin-left-20">客户端支持防御 XSRF</span> <br />
                </p>
                <p><span><h3>安装</h3></span> <br />
                    <span><pre class="single-content"> npm install axios</pre></span>
                </p>
                <p><span><h3>案例</h3></span>
                    执行 GET 请求 <el-input v-model="https" size="mini" class="margin-left-10" style="width: 200px;" placeholder="测试GET接口-(http)" clearable />
                    <el-button size="mini" type="primary" class="margin-left-10" @click="clickGet">测试 GET</el-button>
                    <span>
                        <pre class="single-content">
                            无参请求
                            axios.get('/user').then(response => {
                                console.log(response);
                            }).catch(err => {
                                console.log(err);
                            });

                            参数请求1
                            axios.get('/user?ID=1212').then(response => {
                                console.log(response);
                            }).catch(err => {
                                console.log(err);
                            });

                            参数请求2
                            axios.get('/user', {
                                param: {
                                    ID:1 212
                                }
                            }).then(response => {
                                console.log(response);
                            }).catch(err => {
                                console.log(err);
                            });
                        </pre>
                    </span>
                    执行 POST 请求
                    <span>
                        <pre class="single-content">
                            axios.post('/user', {
                                firstName: 'firstName',
                                lastName: 'lastName'
                            }).then(response => {
                                console.log(response);
                            }).catch(err => {
                                console.log(err);
                            });
                        </pre>
                    </span>
                    执行多个并发请求
                    <span>
                        <pre class="single-content">
                            function getUseAccount() {
                                return axios.get('/user');
                            }

                            function getUserPermissions() {
                                return axios.get('userPermissions');
                            }

                            axios.all([getUseAccount, getUserPermissions])
                                .then(axios.spread(function(acct, perms) {
                                // 两个请求现在都执行完成
                            }))
                        </pre>
                    </span>
                </p>
                <p><span><h3>axios API</h3></span>
                    可以通过向 axios 传递相关配置来创建请求
                    <span>
                        <pre class="single-content">
                            // 发送请求
                            axios({
                                method: 'post', // 请求类型
                                url: '/user', // 请求路径
                                data: {       // 请求参数
                                    firstName: 'firstName',
                                    lastName: 'lastName'
                                }
                            });

                            // 获取图片
                            axios({
                                method: 'get',
                                url: '/image',
                                responseType: 'stream'  // 相应数据类型 blob 二进制
                            })
                        </pre>
                    </span>
                </p>
                <p><span><h3>请求方法的别名</h3></span> <br />
                    <span class="margin-left-20">在使用别名方法时， url、method、data 这些属性都不必在配置中指定。</span> <br />
                    <span class="margin-left-20">axios.request(config)</span> <br />
                    <span class="margin-left-20">axios.get(url[, config])</span> <br />
                    <span class="margin-left-20">axios.delete(url[, config])</span> <br />
                    <span class="margin-left-20">axios.head(url[, config])</span> <br />
                    <span class="margin-left-20">axios.options(url[, config])</span> <br />
                    <span class="margin-left-20">axios.post(url[, data[, config]])</span> <br />
                    <span class="margin-left-20">axios.put(url[, data[, config]])</span> <br />
                    <span class="margin-left-20">axios.patch(url[, data[, config]])</span>
                </p>
                <p><span><h3>并发</h3></span> <br />
                    <span class="margin-left-20">处理并发请求的助手函数</span> <br />
                    <span class="margin-left-20">axios.all(iterable)</span> <br />
                    <span class="margin-left-20">axios.spread(callback)</span>
                </p>
                <p><span><h3>创建实例</h3></span> <br />
                    <span class="margin-left-20">axios.create([config])</span>
                    <span>
                        <pre class="single-content">
                            const instance = axios.create({
                                baseURL: 'http://127.0.0.1',  // 基本接口路径
                                timeout: 1000,  // 接口超时时间
                                headers: {'X-Custom-Header': 'foobar'}  // 请求头
                            })
                        </pre>
                    </span>
                </p>
                <p><span><h3>请求配置</h3></span>
                    <span>
                        <pre class="single-content">
{
    // 是用于请求的服务器 URL
    url: '/user'

    // 请求方法
    method: 'post'

    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
    baseURL: 'http://.....',

    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    transformRequest: [
        function(data, header) {
            return data;
        }.
    ],

    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [
        function(data) {
             // 对 data 进行任意转换处理
            return data;
        }
    ],

    // 是即将被发送的自定义请求头
    headers: {'X-Requested-With': 'XMLHttpRequest'},

    // `params` 是即将与请求一起发送的 URL 参数
    // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
    params: {
        id: 1211
    },

    // 负责序列化params的函数
    // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
    paramsSerializer: function(params) {
        return Qs.stringify(params, {arrayFormat: 'brackets'})
    },

    // data 是作为请求主体被发送的数据
    // 只适用于 PUT POST PATCH DELETE
    // 在没有设置`transformRequest` 时，必须是以下类型之一：
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - 浏览器专属：FormData, File, Blob
    // - Node 专属： Stream
    data: {
        firstName: 'firstName'
    },

    // 如果请求话费了超过 `timeout` 的时间，请求将被中断
    timeout: 1000,

    // withCredentials 表示跨域请求时是否需要使用凭证
    withCredentials: false,

    // `adapter` 允许自定义处理请求，以使测试更轻松
    // 返回一个 promise 并应用一个有效的响应
    adapter: function(config) {

    },

    // 表示应该使用HTTP基础验证,并提供凭证
    // 这将设置一个 Authorization 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
    auth: {
        userName: 'LNN',
        password: 123423
    },

    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer',
    // 'blob', 'document', 'json', 'text', 'stream'
    // responseType: 'json', // default
    responseType: 'json',

    // default 表示服务器响应的字符集
    responseEncoding: 'utf8',

    // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
    xsrfCookieName: 'XSRF-TOKEN',

    // default 携带xsrf令牌值的http头的名称
    xsrfHeaderName: 'X-XSRF-TOKEN',

    // 允许为上传处理进度事件
    onUploadProgress: function(progressEvent) {},

    // 允许为下载处理进度事件
    onDownloadProgress: function(progressEvent) {},

    // 定义允许的响应内容的最大尺寸
    maxContentLength: 2000,

    // 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
    // 如果 `validateStatus` 返回 `true`
    // (或者设置为 `null` 或 `undefined`)，promise 将被 resolve;
    // 否则，promise 将被 rejected
    validateStatus: function(status) {},

    // 定义在 node.js 中 follow 的最大重定向数目
    // 如果设置为0，将不会 follow 任何重定向
    maxRedirects: 5,

    //`socketPath`定义要在node.js中使用的UNIX套接字。
    //例如，“/var/run/docker.sock”向docker守护进程发送请求。
    //只能指定'socketPath'或'proxy'。
    //如果两者都指定，则使用'socketPath'。
    socketPath: null,

    // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http
    // 和 https 时使用的自定义代理。允许像这样配置选项：
    // `keepAlive` 默认没有启用
    httpAgent: new http.Agent({ keepAlive: true}),
    httpsAgent: new https.Agent({ keepAlive: true}),

    // proxy 定义代理服务器的主机名称和端口
    // auth 表示 HTTP 基础验证应当用于连接代理，并提供凭据
    // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header`
    // 设置的自定义 `Proxy-Authorization` 头。
    proxy: {
        host: '127.0.0.1',
        port: 9000,
        auth: {
            username: 'LNN',
            password: 2323
        }
    },

    // `cancelToken` 指定用于取消请求的 cancel token
    // const CancelToken = axios.CancelToken;
    // const source = CancelToken.source();
    cancelToken: source.token
    cancelToken: new CancelToke(function(e) {});
}
                        </pre>
                    </span>
                </p>
                <p><span><h3>响应结构</h3></span>
                    <span>
                        <pre class="single-content">
{
    // 有服务器提供的相应
    data: {},

    // 来自服务器响应的 HTTP 状态码
    status: 200,

    // 来自服务器响应的 HTTP 状态信息
    statusText: 'OK',

    // 服务器的响应头
    header: {},

    // 视为请求提供的配置信息
    config: {},

    // 请求
    // 'request'是生成此响应的请求
    // 它是node.js（在重定向中）中的最后一个ClientRequest实例
    // 以及浏览器中的XMLHttpRequest实例
    request: {}
}
                        </pre>
                    </span>
                </p>
                <p><span><h3>配置默认值</h3></span>
                    <span class="margin-left-20">你可以指定将被用在各个请求的配置默认值</span> <br />
                    <span class="margin-left-20">全局的 axios 默认值</span>
                    <span>
                        <pre class="single-content">
                            axios.defaults.baseURL = 'https://api.example.com';
                            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
                            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                        </pre>
                    </span>
                    <span class="margin-left-20">自定义实例默认值</span>
                    <span>
                        <pre class="single-content">
                            const instance = axios.create({
                              baseURL: 'https://api.example.com'
                            });
                            instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
                        </pre>
                    </span>
                    <span class="margin-left-20">配置的优先顺序</span> <br />
                    <span class="margin-left-20">配置会以一个优先顺序进行合并。这个顺序是：在 lib/defaults.js 找到的库的默认值，
                        然后是实例的 defaults 属性，最后是请求的 config 参数。后者将优先于前者</span>
                </p>
                <p><span><h3>拦截器</h3></span>
                    <span class="margin-left-20">在请求或响应被 then 或 catch 处理前拦截它们。</span>
                    <span>
                        <pre class="single-content">
// 请求拦截
axios.interceptors.request.use(
    function(config) {
        // 在发送前做了什么
        return config;
    }, function(error) {
        // 对请求错误做了什么
        return Promise.reject();
    });

// 响应拦截
let response = axios.interceptors.response.use(
    function(config) {
        // 对响应数据做点什么
        return config;
    }, function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });

// 删除拦截器
axios.interceptors.response.eject(response);

// 自定义添加拦截器
const instance = axios.create();
instance.interceptors.response.use();
                        </pre>
                    </span>
                </p>
                <p><span><h3>使用 application/x-www-form-urlencoded format</h3></span>
                    <span class="margin-left-20">默认情况下，axios将JavaScript对象序列化为JSON。 要以application / x-www-form-urlencoded格式发送数据，您可以使用以下选项之一。</span> <br />
                    <span class="margin-left-20">import qs from 'qs';</span> <br />
                    <span class="margin-left-20">在浏览器中 qs 是 axios 自带的数据格式化 qs.stringify qs.parse</span>
                    <span class="margin-left-20">在node.js 中 const querystring = require('querystring'); querystring.stringify querystring.parse; 也可以用qs</span>
                </p>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="content result-content">
                <h4>操作结果</h4>
                <json-edit :json-data="htmlText" />
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import axios from 'axios';
    import {ref, onMounted} from 'vue';
    import JsonEdit from "../../../components/jsonEdit/JsonEdit";
    export default {
        name: "IntroAxios",
        components: {JsonEdit},
        setup() {
            let htmlText = ref(null);
            const https = ref(null);

            function initAxios() {
                axios.defaults.headers.common["token"] = '';
                axios.defaults.headers.post["Content-type"] = 'application/json'
            }

            function clickGet() {
                try {
                    axios.get(https.value).then(response => {
                        htmlText.value = response;
                    }).catch(err => {
                        htmlText.value = err;
                        console.log(err);
                    });
                } catch (e) {
                    htmlText.value = e;
                }
            }

            onMounted(() => {
                initAxios();
            });

            return {
                clickGet,
                htmlText,
                https
            }
        }
    }
</script>

<style lang="less" scoped>
    @result-back-color: #cbcbcb;
    @code-back-color: #1e241a;

    .content {
        width: 100%;
        height: calc(100vh - 100px);
        overflow-x: hidden;
        overflow-y: scroll;
        background-color: #eaeaea;
        p {
            margin: 10px;
        }

    }
    .single-content {
        padding: 5px;
        color: #fff;
        background-color: @code-back-color;
    }
    .result-content {
        background-color: @result-back-color;
    }
</style>
