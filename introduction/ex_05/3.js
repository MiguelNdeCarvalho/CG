function max(x){
    let max = Math.max.apply(null, x);
    return max;
}

console.log(max([1, 2, 3, 4]))