# Exercício 2: Filtrar

1. Escreva uma função pares(x) que tem como argumento um array x de números inteiros e que devolve um array apenas com os números pares. Por exemplo pares([1, 2, 4, 5, 2, 3]) devolve [2, 4, 2].

2. Escreva uma função positivos(x) que tem como argumento um array x de números reais e que devolve um array apenas com os números positivos. Por exemplo positivos([1, -2.5, 0.4, 0.0, -1.5, 2, 2.3]) devolve [1, 0.4, 2, 2.3].

3. Escreva uma função limite_sup(x, a) que tem como argumentos um array x de números reais e um valor a e que devolve um array apenas com os números menores ou iguais que o valor a. Por exemplo limite_sup([1, -2.5, 0.4, 0.0, -1.5, 2, 2.3], 0.4) devolve [1, -2.5, 0.4, 0.0, -1.5].

4. Escreva uma função filtro(f, x) que tem como argumentos uma função f: float -> boolean e um array x de números reais e que devolve um array apenas com os números xi de x tais que f(xi) === true. Por exemplo filtro(x => x % 2 === 0, [1, 2, 4, 5, 2, 3]) devolve [2, 4, 2]. Quais das alíneas acima consegue tornar a resolver usando esta função?
