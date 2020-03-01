function emparelhar(x,y){
    let arr = new Array();
    let str
    if (x.length == y.length){
        for(let i = 0; i<x.length; i++){
            arr.push(`{x: ${x[i]}, y: ${y[i]}}`);            
        }
        return arr;
    }else{
        return arr;
    }
}

console.log(emparelhar([1, 2.1, 4], [5, -2, 3]));
console.log(emparelhar([1, 2], [3]));