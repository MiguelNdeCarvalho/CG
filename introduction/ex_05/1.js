function soma(x){
    let sum = 0;
    let arr = new Array();
    for(let i=0; i<x.length; i++){
        sum = sum + x[i];
    }
    arr.push(sum);
    return arr;
}

console.log(soma([1, 2, 3, 4]))