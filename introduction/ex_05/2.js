function media(x){
    let sum = 0;
    let media = 0;
    let arr = new Array();

    for(let i = 0; i<x.length; i++){
        sum += x[i];
    }
    media = sum / x.length;
    arr.push(media);
    return arr;
}

console.log(media([1, 2, 3, 4]))