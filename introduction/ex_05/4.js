function min(x){
    let min = Math.min.apply(null, x);
    return min;
}

console.log(min([1, 2, 3, 4]))