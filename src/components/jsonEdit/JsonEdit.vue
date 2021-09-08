<template>
    <textarea ref="mirror" />
</template>

<script>
    import * as CodeMirror from 'codemirror';
    import 'codemirror/addon/lint/lint.css';
    import 'codemirror/mode/javascript/javascript';
    import 'codemirror/theme/rubyblue.css';
    import 'codemirror/lib/codemirror.css';
    import 'codemirror/addon/lint/lint'
    import 'codemirror/addon/lint/json-lint'
    import {ref, onMounted, watch} from 'vue';
    export default {
        name: "JsonEdit",
        props: {
          jsonData: {
              String
          }
        },
        setup(props) {
            let mirror = ref(null);
            let codeMirror = null;

            watch(() => props.jsonData, newVal => {
                codeMirror.setValue(JSON.stringify(newVal, null, 2));
            });

            function initMirror() {
                codeMirror = CodeMirror.fromTextArea(mirror.value, {
                    mode: 'application/json',
                    theme: 'rubyblue',
                    lineNumbers: true,
                    lint: true
                });
                codeMirror.setValue(JSON.stringify(props.jsonData, null, 2));
            }

            function getJsonData() {
                return codeMirror.getValue();
            }

            onMounted(() => {
                initMirror();
            });

            return {
                mirror,
                getJsonData
            };
        }
    }
</script>

<style scoped>

</style>
