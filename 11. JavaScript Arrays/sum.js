function arrSum(arr) {

    var res = 0;

    arr.forEach(ele => {
        res += ele;
    });

    return res;
}

console.log(arrSum([1, 2, 3]));