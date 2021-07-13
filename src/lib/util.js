let util = {};

util.isObject = (obj) => {
    return obj !== null && typeof obj === 'object';
};

// 判断两个对象是否相同
util.isObjectValueEqual = (obj1, obj2) => {
    let prop1 = Object.getOwnPropertyNames(obj1);
    let prop2 = Object.getOwnPropertyNames(obj2);

    if (prop1.length !== prop2.length) {
        return false;
    }
    for (let i = 0, len = prop1.length; i < len; i++) {
        let propName = prop1[i];
        if (!obj2.hasOwnProperty(propName)) {
            return false;
        }
        let propValue1 = obj1[propName];
        let propValue2 = obj2[propName];
        if (propValue1 instanceof Object) {
            if (util.isObjectValueEqual(propValue1, propValue2)) {
                // return true
            } else {
                return false;
            }
        } else if (propValue1 !== propValue2) {
            return false;
        }
    }
    return true;
};

// 判断两数据是否相同
util.looseEqual = (a, b) => {
    if (a === b) {
        return true;
    }
    const isObjectA = util.isObject(a);
    const isObjectB = util.isObject(b);
    if (isObjectA && isObjectB) {
        try {
            const isArrayA = Array.isArray(a);
            const isArrayB = Array.isArray(b);
            if (isArrayA && isArrayB) {
                return a.length === b.length && a.every((item, key) => {
                    return util.looseEqual(item, b[key]);
                })
            } else if (a instanceof Date && b instanceof Date) {
                return a.getTime() === b.getTime();
            } else if (!isArrayA && !isArrayB) {
                const objectKeyA = Object.keys(a);
                const objectKeyB = Object.keys(b);
                return objectKeyA.length === objectKeyB.length && objectKeyA.every(key => {
                    return util.looseEqual(a[key], b[key]);
                })
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b);
    } else {
        return false;
    }
};

// 对象数组去重
util.duplicateArray = (arr, key) => {
  if (Array.isArray(arr)) {
      throw Error(arr + '不是一个数组');
  }
  let _set = {};
  let result = [];
  arr.forEach(item => {
      _set[item[key]] || (_set[item[key]] = true, result.push(item))
  });
  return result;
};

// Set 普通数组去重
util.duplicateSetArray = (arr) => {
    if (Array.isArray(arr)) {
        throw Error(arr + '不是一个数组');
    }
    return [...new Set(arr)]
};


export default util;
