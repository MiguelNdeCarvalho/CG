function argmax (x){
    let temp;
    let temp_pos;

    if(x.length === 0){
        temp = -Infinity;
        temp_pos = -1;
    }

    for(let i = 0; i < x.length; i++) {
        if(x[i] > temp || i === 0){
            temp = x[i];
            temp_pos = i;
        }
    }
    return `{ index: '${temp_pos}', value: ${temp}}`;
}

console.log(argmax([-1,-3,-42]));
console.log(argmax([1,2,42]));
console.log(argmax([2,42,1]));
console.log(argmax([42,1,2]));
console.log(argmax([]));