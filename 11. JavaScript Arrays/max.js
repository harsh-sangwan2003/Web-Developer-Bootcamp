function arrMax(arr) {

    let res = Number.MIN_SAFE_INTEGER;

    arr.forEach(ele => {
        res = Math.max(res, ele);
    });

    return res;
}

console.log(arrMax([1, 2, 3, 4, 5]));