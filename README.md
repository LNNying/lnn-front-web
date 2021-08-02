# lnn-front-web

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
### 涉及技术
vue-cli3
(https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)
```
webpack
```
vue3
```

// 解决iview menu open-names属性不生效问题
 openedNames() {
        this.$nextTick(() => {
          this.$refs.side_menu.updateOpened();
          this.$refs.side_menu.updateActiveName();
        })
      }


// 技术
Set
在js中Set 对象允许存储任何类型的唯一值，无论是原始值或者是对象引用。
顶层数据结构不具备key—>value特征,内部会自动加index序列。
可以存储不同类型的任何数据。
存储唯一值（对于基本数据类型String，Number，Boolean，undefined，null存储数据相同，对用引用数据类型“==”判断地址值是否相同）
构造函数
方法
size，add，delete，has，clear
遍历
keys()：返回一个包含集合中所有键的迭代器
values()：返回一个包含集合中所有值得迭代器
entries()：返回一个包含Set对象中所有元素得键值对迭代器
forEach(callbackFn, thisArg)：用于对集合成员执行callbackFn操作，如果提供了 thisArg
参数，回调中的this会是这个参数，没有返回值

--------------------------------------------------------------------------
Map
new Map([[], []]) 接收可迭代的数据 不能为普通对象 二维数据可以
对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。
size: 属性，取出字典的长度
set(key, value)：方法，向字典中添加新元素
get(key)：方法，通过键查找特定的数值并返回
has(key)：方法，判断字典中是否存在键key
delete(key)：方法，通过键 key 从字典中移除对应的数据
clear()：方法，将这个字典中的所有元素删除

与Object的区别：

一个 Object 的键只能是字符串或者 Symbol（ES6新增数据类型，可以不加引号），如果不是字符串对象会强转成字符串
但一个 Map 的键可以是任意值。
Map 中的键值是有序的（FIFO 原则 -> 队列 先进先出），而添加到对象中的键则不是。
Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算。
Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突，而map健不可重复，如果键名冲突则会覆盖对应的值。

遍历
for of
forEach

转换到数组
Array.from(map)

复制
let newMap = new Map(map)

--------------------------------------------------------------------------
WeakSet
和Set结构类似，存储不重复值的集合，但是成员必须是对象
add，delete，has
注意：WeakSet没有size属性，不可遍历。因为WeakSet的成员都是弱引用，随时可能消失，成员是不稳定的
用处：
1、存储dom节点，就不用担心从节点从文档移除时，会引发内存泄漏（即在被移除的节点上绑定的click等事件）。
2、下面代码保证了Foo的实例方法，只能在Foo的实例上调用。这里使用 WeakSet 的好处是，foos对实例的引用，不会被计入内存回收机制，
所以删除实例的时候，不用考虑foos，也不会出现内存泄漏。

--------------------------------------------------------------------------
WeakMap
WeakMap与Map的区别:
WeakMap 对象是一组键值对的集合，其中的键是弱引用对象，而值可以是任意。
注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。
WeakMap 中，每个键对自己所引用对象的引用都是弱引用，在没有其他引用和该键引用同一对象，这个对象将会被垃圾回收（相应的key则变成无效的），
所以，WeakMap 的 key 是不可枚举的。

只接受对象作为键名（null除外），不接受其他类型的值作为键名
键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的 不能遍历，方法有get、set、has、delete

-------------------------------------------------------------------------
js中弱引用针对于垃圾回收机制来说，它会屏蔽垃圾回收机制  弱引用一旦被垃圾回收器检测到，就会被回收。
垃圾回收有个规则：如果该对象如果还有引用，就不会被回收资源。而弱引用却不会屏蔽垃圾回收
强引用
我们常见的普通对象的引用 例如Object object = new Object();
特点：只要强引用指向一个对象，就表明这个对象是”活的”
如
强引用就是一个小孩A牵着一条狗，他们之间通过狗链儿连着
弱引用就是，旁边有个小孩B指着A牵的狗，说：嘿，那有条狗，B指向那条狗，但他们之间没有是指绑在一起的东西
当A放开狗链，狗就会跑掉（被垃圾回收），无论B是不是还指着
但是，当B不再指着那条狗，狗还被A牵着，不会影响它是否跑掉

-------------------------------------------------------------------------
JS 垃圾回收
js代码想要运行，需要操作系统或者运行时提供内存空间，来存储变量及它的值。在某些变量（例如局部变量）在不参与运行时，就需要系统回收被占用的内存空间，称为垃圾回收
内存泄漏：某些情况下，不再用到的变量所占内存没有及时释放，导致程序运行中，内存越占越大，极端情况下可导致系统崩溃、服务器宕机。

方法 标记清除、引用计数
引用计数
声明一个变量赋值  该值计数加1  当前再次修改变量不同  上一次值修改为0  垃圾收集器收集值为0
但是循环引用 不同清除 得手动obj1=null 回收  因为zhi计数都为2
function func() {
    let obj1 = {};
    let obj2 = {};

    obj1.a = obj2; // obj1 引用 obj2
    obj2.a = obj1; // obj2 引用 obj1
}
标记清除
变量进入执行环境标记为“进入环境” 离开执行环境标记为“离开环境”
垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记

--------------------------------------------------------------------------
迭代对象
Array, String, Map, Set, arguments, NodeList
判断一个数据是否具有可迭代能力,只有当数据具有Symbol.iterator属性的时候才可以使用for...of进行迭代

------------------------------------------------------------------------
v-geventbus   与   eventbus                 事件总线
插件               赋值为Vue实例
$gemit             $emit                    提交、发布事件
$gon               $on                      触发、订阅事件
$goff              $off                     清除事件
$gonce             $once                    触发一次事件

-------------------------------------------------------------------------
Object 内置方法

// 数组 是一个特殊对象
let arr = [1, 2, 3];
let arr = {
    '0': 1,
    '1': 2,
    '2': 3,
    'length': 3
};

// Object.is()
/**
 * 判断两个值是否相同
 * ES6所属
 */
Object.is('foo', 'foo') // true
Object.is(NaN, NaN) // true
Object.is({}, {}) // false
// ES5实现
Object.defineProperty(Object, 'is', {
    value: function(x, y) {
        if (x === y) {
            // 针对+0 不等于 -0的情况
            return x !== 0 || 1 / x === 1 / y;
        }
        // 针对NaN的情况
        return x !== x && y !== y;
    },
    configurable: true,
    enumerable: false,
    writable: true
});


// Object.create 与 Object.assign
function Test() {
    this.a = 3;
    this.b = 5;
}

let test = new Test();
// test.__proto__.e = 99;
Test.prototype.e = 99;
console.log(test);


let b = new Object();
Object.prototype.e = 99;
console.log(b);

/**
 * Object.create(原型对象, 构造对象自身所包含的属性)

 Object.assign(目标对象, ...原对象)
 原对象是可枚举的  目标对象不会包含原对象的原型属性的
 原对象如果不是对象类型 需要通过包装类进行转换 但是通过Number,Boolean, Function 包装出来的数据不可以枚举
 String可以枚举
 */


Object.entries() // 对象转化为数据 转化为二维数组
Object.fromEntries() // 二维数组转化为新的对象

Object.prototype.myFromEntries = function (o) {
    let _obj = {};
    for (let item of o) {
        _obj[item[0]] = item[1];
    }
    return _obj;
};

// 对象冻结  密封对象 不是返回新的对象  返回原对象
/**
 * freeze 描述符 writeable:false(修改)  configable:false(删除)  set: false(新增) get: true(获取)
 * seal   描述符 writeable:true(修改) configable:false(删除) set:false(新增) get: true(获取)
 * preventExtensions 描述符 writeable:true(修改) configable:true(删除) set:false(新增) get: true(获取)
 */


/**
 * 浅冻结 就是对象中的对象属性是可以操作  多层级
 * 可读
 * 以下在'use strict'下 报错
 * 不可新增  在冻结之前不可以新增
 * 不可删除
 * 不可修改
 * 也就是不可操作
 * get set 也是不能操作的
 * 以下是冻结以后
 * 但是通过原型(prototype, __proto__)操作原型上的数据
 * 但是不可以修改原型对象 如 Test.prototype = {}
 *
 * 在ES5中  如果不是对象的话 会报错
 * 在ES6中  如果不是对象的话 返回元数据
 * 如果是数组  .push  方法报错
 */
Object.freeze();
let newTest = Object.freeze(obj);
newTest === obj;

let arr = [];
let arr1 = Object.freeze(arr);
arr1.push();
// 报错  如下  （3是下标）
// VM940:1 Uncaught TypeError: Cannot add property 3, object is not extensible
// at Array.push (<anonymous>)
// at <anonymous>:1:6


// 判断对象是否冻结
Object.isFrozen();  // 对于空对象 返回true

// 深度冻结
/**
 * Object.keys 与 Object.getOwnPropertyNames 都是返回key的数据
 * keys 不能返回不可枚举的属性
 * getOwnPropertyNames 是底层方法  返回所有对象属性
 * */

function deepFreeze (obj) {
    let keys = Object.getOwnPropertyNames(obj);

    if (keys.length) {
        for (let i = 0, len = keys.length; i < len; i++) {
            let _value = obj[keys[i]];
            if (_value !== null && typeof _value === 'Object') {
                deepFreeze(_value);
            }
        }
    }
    return Object.freeze(obj);
}

// seal  封闭对象 密封对象
/**
 * 浅封闭
 * 可读
 * 可修改
 * 不可删除
 * 不可新增（扩展）
 * 对于原型
 * 以下是seal以后
 * 但是通过原型(prototype, __proto__)操作原型上的数据
 * 但是不可以修改原型对象 如 Test.prototype = {}
 * 数组与freeze一样
 * @type {{a: number, b: number}}
 */
let seal = {
    a: 1,
    b: 2
};
let newSeal = Object.seal(seal);
newSeal === seal;  // 同一个引用

// 对于空对象 返回true
Object.isSealed(); // 是否是一个seal

function deepSeal(obj) {
    let keys = Object.getOwnPropertyNames(obj);
    if (keys.length) {
        for (let i = 0, len = keys.length; i < len; i++) {
            let _value = obj[keys[i]];
            if (_value !== null && typeof _value === 'object') {
                deepSeal(_value);
            }
        }
    }
    return Object.seal(obj);
}

/**
 * 浅扩展
 * 不可新增(扩展)
 * 可修改
 * 可删除
 * 原型上的属性不受影响
 * 在ES5中  如果不是对象的话 会报错
 * 在ES6中  如果不是对象的话 返回元数据
 */
// Object.preventExtensions()  禁止扩展
// 返回原对象
Object.isExtensible() // 对象是否可扩展

function deepExtensiable(obj) {
    let keys = Object.getOwnPropertyNames(obj);
    if (keys.length) {
        for (let i = 0, len = keys.length; i < len; i++) {
            let _value = obj[keys[i]];
            if (_value !== null && typeof _value === 'object') {
                deepExtensiable(_value);
            }
        }
    }
    return Object.preventExtensions(obj);
}
