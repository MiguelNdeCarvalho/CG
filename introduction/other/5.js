function list_lens(arr)
{
    let aux = Array();
    for(let i = 0; i < arr.length; i++){
        aux.push(arr[i].length);
    }
    return aux;
}

console.log(list_len(["Ola", "Mundo", "1"]));
console.log(list_len(["1", "", "1"]));
