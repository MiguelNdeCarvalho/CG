function positivos(x){

    let arr = Array()

    for (let i = 0; i < x.length; i++) {
        if (x[i] > 0){
            arr.push(x[i])
        }
    }
    console.log(arr);
    
}

positivos([1, -2.5, 0.4, 0.0, -1.5, 2, 2.3])