function unicos(x)
{
    let arr = Array()

    for (let i = 0; i < x.length; i++) 
    {
        if (arr.includes(x[i]))
        {
            continue
        }
        else 
        {
            arr.push(x[i])
        }    
    }
    console.log(arr);
}

unicos([1, -2.5, 1])