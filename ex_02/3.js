function limite_sup(x, a){
    
    let arr = Array()

    for (let i = 0; i < x.length; i++) {
        if (x[i] <= a){
            arr.push(x[i])
        }
    }
    console.log(arr);
    
}

limite_sup([1, -2.5, 0.4, 0.0, -1.5, 2, 2.3], 0.4)