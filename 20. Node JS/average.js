function Average(arr) {

    let sum = 0;

    arr.forEach(ele => sum = sum + ele);

    return sum / arr.length;
}

const avg1 = Average([1, 2, 3, 4, 5]);
console.log(avg1);