function aleatorios(n) {
    let arr = new Array(n)
    for (let i = 0; i < n; i++){
        arr[i] = Math.random()
    } 
    console.log(arr)
    return arr
}

aleatorios(2) //Exemplo com 2