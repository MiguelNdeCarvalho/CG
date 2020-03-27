function r(x)
{
    return Math.round(x * 1000) / 1000;
}

function derivada(funcao, epsilon){
    return x => (funcao(x + epsilon) - funcao (x - epsilon)) / (2 * epsilon);
}


console.log(r(derivada(x => 2 * x, 0.1)(0)));