function argmax (x){
    let temp;
    let temp_pos;
    for(let i = 0; i < x.length; i++) {
        if(x[i] < x[i+1]){
            temp = x[i];
            temp_pos = i;
        }
    }
    return { index: temp_pos, value: temp };
}

console.log(argmax([42,1,2]));