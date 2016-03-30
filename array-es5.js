"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

Array.prototype.max = function () {
    return Math.max.apply(Math, _toConsumableArray(this));
};

Array.prototype.min = function () {
    return Math.min.apply(Math, _toConsumableArray(this));
};
Array.prototype.unique = function () {
    var newArr = [],
        obj = {};
    this.forEach(function (el) {
        if (!obj[typeof el + el]) {
            newArr[newArr.length] = el;
            obj[typeof el + el] = 1;
        }
    });
    return newArr;
};
// underscore 对应的洗牌算法
// 定义一个数组（shuffled），长度（length）是原数组（arr）长度
// 取 0 到 index (初始0) 随机值 rand, shuffled[index] = shuffled[rand], shuffled[rand] = arr[index]
// index++ ; 重复第二步，直到 index = length -1
Array.prototype.shuffle = function () {
    var _this = this;

    var random = function random(min, max) {
        if (!max) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    };
    var length = this.length,
        shuffled = Array(length),
        rand = undefined;
    this.forEach(function (val, i) {
        rand = random(0, i);
        if (rand !== i) shuffled[i] = shuffled[rand];
        shuffled[rand] = _this[i];
    });
    return shuffled;
};
Array.prototype.sum = function () {
    return this.reduce(function (preVal, curVal) {
        return preVal + curVal;
    }, 0);
};
//------------------------------------------------
Array.prototype.unique1 = function () {
    return Array.from(new Set(this));
};
Array.prototype.unique2 = function () {
    var seen = new Map();
    return this.filter(function (a) {
        return !seen.has(a) && seen.set(a, 1);
    });
};
