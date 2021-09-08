<template>
    <h2>codemirror编辑器插件(JSON) <a href="https://blog.csdn.net/JLU_Lei/article/details/80259697">参考链接</a></h2>
    <el-row :gutter="10">
        <el-col :span="12">
            <div class="content">
                <h4>使用说明</h4>
                <p>
                    安装codemirror npm install codemirror 同时需要安装 npm install jsonlint (json语法检测)
                </p>
                <p>
                    在main.js 添加 <br />
                    <span class="margin-left-20">import jsonlint from 'jsonlint'</span> <br />
                    <span class="margin-left-20">window.jsonlint = jsonlint;</span> <br />
                    <span class="margin-left-20">全局导入jsonlint</span>
                </p>
                <p>
                    如果项目编译过程中报 file，system在jsonlint模块中未找到，执行 <br />
                    <span class="margin-left-20">npm install file system</span>
                </p>
                <h4>配置项</h4>
                <pre style="margin-top: 10px">
                    codeMirror = CodeMirror.fromTextArea(mirror.value, {
                        mode: 'application/json',
                        gutters: ['CodeMirror-lint-markers'],
                        theme: 'rubyblue',
                        lineNumbers: true,
                        lint: true
                    });
                </pre>
                <p>
                    mirror.value<span class="margin-left-20">textarea dom对象</span>
                </p>
                <p>
                    mode<span class="margin-left-20">设置编译器编程语言关联内容,可以为string或对象({name: 'application/json', json: true})
                    <a href="https://codemirror.net/mode/index.html">查看相关mode</a>
                </span>
                </p>
                <p>
                    theme<span class="margin-left-20">编译器主题 需要引入相关主题 如 import 'codemirror/theme/rubyblue.css' 都在 codemirror/theme/ 改目录下</span>
                </p>
                <p>
                    tabSize<span class="margin-left-20">设置tab空格的宽度</span>
                </p>
                <p>
                    lineNumbers<span class="margin-left-20">是否使用行号 Boolean值</span>
                </p>
                <p>
                    smartIndent<span class="margin-left-20">自动缩进是否开启 Boolean值</span>
                </p>
                <p>
                    indentUnit<span class="margin-left-20">缩进单位</span>
                </p>
                <p>
                    lint<span class="margin-left-20">是否开启json检测 Boolean值</span>
                </p>
                <p>
                    其他属性请查看 <a href="https://blog.csdn.net/JLU_Lei/article/details/80259697">链接</a>
                </p>
                <h4>触发事件</h4>
                <p>
                    changes<span class="margin-left-20">每次编辑器内容更改时触发</span>
                </p>
                <p>
                    beforeChange<span class="margin-left-20">事件在更改生效前触发</span>
                </p>
                <p>
                    cursorActivity<span class="margin-left-20">当光标或选中(内容)发生变化，或者编辑器的内容发生了更改的时候触发</span>
                </p>
                <p>
                    keyHandled<span class="margin-left-20">快捷键映射(key map)中的快捷键被处理(handle)后触发</span>
                </p>
                <p>
                    inputRead<span class="margin-left-20">当用户输入或粘贴时编辑器时触发</span>
                </p>
                <p>
                    例子
                </p>
                <pre>绑定
                    codeMirror.on('changes', () => {
                        console.log(codeMirror)
                    })
                </pre>
                <pre>解绑
                    codeMirror.off('changes')
                </pre>
                <h4>API</h4>
                <p>
                    codeMirror.setValue(content)<span class="margin-left-20">设置内容</span> <el-button size="mini" type="primary" @click="clickNode(1)">测试</el-button>
                </p>
                <p>
                    codeMirror.getValue(content)<span class="margin-left-20">获取内容</span> <el-button size="mini" type="primary" @click="clickNode(2)">测试</el-button>
                </p>
                <p>
                    codeMirror.getLine(n)<span class="margin-left-20">获取第n行的内容</span> <el-button size="mini" type="primary" @click="clickNode(3)">测试第二行</el-button>
                </p>
                <p>
                    codeMirror.lineCount()<span class="margin-left-20">获取当前行数</span> <el-button size="mini" type="primary" @click="clickNode(4)">测试</el-button>
                </p>
                <p>
                    codeMirror.lastLine()<span class="margin-left-20">获取最后一行的行号</span> <el-button size="mini" type="primary" @click="clickNode(5)">测试</el-button>
                </p>
                <p>
                    codeMirror.isClean()<span class="margin-left-20">boolean类型判断编译器是否是clean的(无数据)</span> <el-button size="mini" type="primary" @click="clickNode(6)">测试</el-button>
                </p>
                <p>
                    codeMirror.getSelection()<span class="margin-left-20">获取选中内容</span> <el-button size="mini" type="primary" @click="clickNode(7)">测试</el-button>
                </p>
                <p>
                    codeMirror.getSelections()<span class="margin-left-20">返回array类型选中内容(选中多个) （测试与getSelection返回一致）</span> <el-button size="mini" type="primary" @click="clickNode(8)">测试</el-button>
                </p>
                <p>
                    codeMirror.replaceSelection(替换的内容)<span class="margin-left-20">替换选中的内容(String类型)</span> <el-button size="mini" type="primary" @click="clickNode(9)">测试替换true</el-button>
                </p>
                <p>
                    codeMirror.getCursor()<span class="margin-left-20">获取光标位置,返回{line,char}</span> <el-button size="mini" type="primary" @click="clickNode(10)">测试</el-button>
                </p>
                <p>
                    codeMirror.setOption('','')<span class="margin-left-20">设置编辑器属性(这个属性只能单个配置)</span> <el-button size="mini" type="primary" @click="clickNode(11)">测试切换主题</el-button>
                </p>
                <p>
                    codeMirror.getOption('')<span class="margin-left-20">获取某个属性值</span> <el-button size="mini" type="primary" @click="clickNode(12)">测试获取主题</el-button>
                </p>
                <p>
                    codeMirror.addKeyMap('','')<span class="margin-left-20">添加key-map键值，该键值具有比原来键值更高的优先级</span>
                </p>
                <p>
                    codeMirror.removeKeyMap('','')<span class="margin-left-20">移除key-map</span>
                </p>
                <p>
                    codeMirror.addOverlay('')<span class="margin-left-20">Enable a highlighting overlay…没试出效果</span>
                </p>
                <p>
                    codeMirror.removeOverlay('')<span class="margin-left-20">移除Overlay</span>
                </p>
                <p>
                    codeMirror.setSize(width,height)<span class="margin-left-20">设置编译器大小</span> <el-button size="mini" type="primary" @click="clickNode(13)">测试重置300 * 300</el-button>
                </p>
                <p>
                    codeMirror.scrollTo(x, y)<span class="margin-left-20">设置scroll到position位置</span>
                </p>
                <p>
                    codeMirror.refresh()<span class="margin-left-20">刷新编辑器</span> <el-button size="mini" type="primary" @click="clickNode(14)">测试</el-button>
                </p>
                <p>
                    codeMirror.execCommand(execCommand)<span class="margin-left-20">执行命令</span>
                </p>
                <b>注：JSON.stringify参数 参数1 -> 序列化数据  参数2 -> 可以为数组，也可以为方法 例如
                    <pre> 方法
                        var data = {
                            name:"niuzai",
                            info:{
                                age:18,
                                sex:"male"
                              }
                            };
                        JSON.stringify(data, function(key, val){
                            console.log("key is %s", key);
                            console.log("val is %s", typeof(val));
                            return val;
                        });
                    </pre>
                    <pre> 数组
                        JSON.stringify(data, ["name", "info", "sex"]);

                        //age由于不在列表里，所以没被序列化
                        //"{"name":"niuzai","info":{"sex":"male"}}"
                    </pre>
                    参数3 -> space 用来控制结果字符串里面的间距。如果是一个数字, 则在字符串化时每一级别会比上一级别缩进多这个数字值的空格（最多10个空格）；
                    如果是一个字符串，则每一级别会比上一级别多缩进用该字符串（或该字符串的前十个字符）
                </b>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="form-control">
                <textarea ref="mirror"></textarea>
            </div>
            <div class="result">
                <h4>操作结果</h4>
                <div ref="content" style="width: 100%; height: 100%;"></div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import * as CodeMirror from 'codemirror/lib/codemirror';
    import 'codemirror/addon/lint/lint.css';
    import 'codemirror/lib/codemirror.css';
    import 'codemirror/theme/rubyblue.css';
    import 'codemirror/mode/javascript/javascript';
    import 'codemirror/addon/lint/lint';
    import 'codemirror/addon/lint/json-lint';
    import {ref, onMounted} from 'vue';
    export default {
        name: "CodeMirror",
        setup() {
            let mirror = ref(null);
            let codeMirror = null;
            let content = ref(null);
            const json = '{"test": 231, "set": true}';

            function initMirror() {
                codeMirror = CodeMirror.fromTextArea(mirror.value, {
                    mode: 'application/json',
                    gutters: ['CodeMirror-lint-markers'],
                    theme: 'rubyblue',
                    lineNumbers: true,
                    lint: true
                });
            }

            function clickNode(flag) {
                let desc = '';
                switch (flag) {
                    case 1:
                        codeMirror.setValue(JSON.stringify(JSON.parse(json), null, 2));
                        desc = '操作成功-setValue';
                        break;
                    case 2:
                        desc = codeMirror.getValue();
                        break;
                    case 3:
                        desc = codeMirror.getLine(2);
                        break;
                    case 4:
                        desc = codeMirror.lineCount();
                        break;
                    case 5:
                        desc = codeMirror.lastLine();
                        break;
                    case 6:
                        desc = codeMirror.isClean();
                        break;
                    case 7:
                        desc = codeMirror.getSelection();
                        break;
                    case 8:
                        desc = codeMirror.getSelections();
                        break;
                    case 9:
                        codeMirror.replaceSelection('false');
                        desc = '操作成功-replaceSelection';
                        break;
                    case 10:
                        desc = codeMirror.getCursor();
                        break;
                    case 11:
                        codeMirror.setOption('theme', 'material-ocean');
                        desc = '操作成功-setOption';
                        break;
                    case 12:
                        desc = codeMirror.getOption('theme');
                        break;
                    case 13:
                        codeMirror.setSize(300, 300);
                        desc = '操作成功-setSize';
                        break;
                    case 14:
                        codeMirror.refresh();
                        desc = '操作成功-refresh';
                        break;
                }
                content.value.innerText = desc;
            }

            onMounted(() => {
                initMirror();
            });


            return {
                mirror,
                content,
                clickNode
            };
        }
    }
</script>

<style lang="less">
    @result-back-color: #cbcbcb;
    @code-back-color: #1e241a;
    .content {
        background-color: @code-back-color;
        width: 100%;
        height: calc(100vh - 100px);
        overflow-x: hidden;
        overflow-y: scroll;
        color: #fff;
        /*padding: 5px;*/
        p {
            margin: 5px;
        }
        a {
            color: #ebff12;
        }
        b {
            color: #ff7330;
        }
    }
    .form-control {
        width: 100%;
        height: calc(50vh - 50px);
    }
    .result {
        width: 100%;
        height: calc(50vh - 60px);
        background-color: @result-back-color;
        margin-top: 10px;
        overflow-x: hidden;
        overflow-y: scroll;
    }

</style>
