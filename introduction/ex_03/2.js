function quadrado(x)
{
  for (let i = 0; i < x.length; i++)
  {
    x[i] = x[i] ** 2
  }
  console.log(x); 
}

quadrado([1, -2.5, 0.4])