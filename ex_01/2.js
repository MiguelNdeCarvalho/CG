function intervalo(a,b){

    let arr = new Array()
    range = b - a

    if (b < a){
        arr =  []
    }
    
    else{
        for (let i = 0 ; i <= range ; i++) {
            arr[i] = a
            a++
        }
    }
    console.log(arr);
}

intervalo(2,5)