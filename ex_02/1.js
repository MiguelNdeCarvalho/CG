function pares(x) {
    let arr = Array()
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 == 0){
            arr.push(x[i])
        }
    }
    console.log(arr)
}

pares([1, 2, 4, 5, 2, 3])