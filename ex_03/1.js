function dobro(x){
    for (let i = 0; i < x.length; i++) {
        x[i] = x[i] * 2
    }
    console.log(x);
}

dobro([1, 2.1, 4, 5, -2, 3])