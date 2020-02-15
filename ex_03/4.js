function crescente(x){

    let arr = Array()

    for (let i = 0; i < x.length; i++)
    {
        if (x[i] > x[i+1])
        {    
            temp = x[i]
            x[i] = x[i+1]
            x[i+1] = temp
        }    
    } 
    console.log(x);
    
    
}

crescente([1, -2.5, 1])