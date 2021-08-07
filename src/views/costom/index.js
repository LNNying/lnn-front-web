import Test from './component/TestComponent'

const TestComponent = {
    install: function (Vue) {
        Vue.component('Test', Test);
    }
}

export default TestComponent;
