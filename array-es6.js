Array.prototype.max = function() {
    return Math.max(...this);
}

Array.prototype.min = function() {
    return Math.min(...this);
}
Array.prototype.unique = function() {
    let newArr = [],
        obj = {};
    this.forEach(el => {
       if(!obj[typeof el + el]) {
           newArr[newArr.length] = el;
           obj[typeof el + el] = 1;
       } 
    });
    return newArr;
}
// underscore 对应的洗牌算法
// 定义一个数组（shuffled），长度（length）是原数组（arr）长度
// 取 0 到 index (初始0) 随机值 rand, shuffled[index] = shuffled[rand], shuffled[rand] = arr[index]
// index++ ; 重复第二步，直到 index = length -1
Array.prototype.shuffle = function() {
    const random = (min, max) => {
        if(!max) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    }
    let length = this.length,
        shuffled = Array(length),
        rand;
    this.forEach((val, i) => {
        rand = random(0, i);
        if(rand !== i) shuffled[i] = shuffled[rand];
        shuffled[rand] = this[i];
    });
    return shuffled;
}
Array.prototype.sum = function() {
    return this.reduce((preVal, curVal) => {
        return preVal + curVal;
    }, 0);
}
//------------------------------------------------
Array.prototype.unique1 = function() {
    return Array.from(new Set(this));
}
Array.prototype.unique2 = function() {
    const seen = new Map();
    return this.filter(a => !seen.has(a) && seen.set(a, 1));
}