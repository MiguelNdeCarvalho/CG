# Exercício 3: Transformar

1. Escreva uma função dobro(x) que tem como argumento um array x de números reais e que devolve um array com os dobros desses números. Por exemplo dobro([1, 2.1, 4, 5, -2, 3]) devolve [2, 4.2, 8, 10, -4, 6].

2. Escreva uma função quadrado(x) que tem como argumento um array x de números reais e que devolve um array com os quadrados desses números. Por exemplo quadrado([1, -2.5, 0.4]) devolve [1, 6.25, 0.16].

3. Escreva uma função unicos(x) que tem como argumento um array x de números reais e que devolve um array sem valores repetidos. Por exemplo quadrado([1, -2.5, 1]) devolve [1, -2.5].

4. Escreva uma função crescente(x) que tem como argumento um array x de números reais e que devolve um array com os valores por ordem crescente. Por exemplo crescente([1, -2.5, 1]) devolve [-2.5, 1, 1].

5. Escreva uma função estender(x, n) que tem como argumento um array x de números reais e um valor inteiro n e que devolve um array exatamente de comprimento n. Se o comprimento de x for menor que n devem ser acrescentados zeros suficientes. Se o comprimento de x for maior que n os valores a mais são descartados. Por exemplo estender([1, -2.5], 4) devolve [1, -2.5, 0, 9], e estender([1, 6.25, 0.16], 2) devolve [1, 6.25].

6. Escreva uma função mapa(f, x) que tem como argumentos uma função f: float -> float e um array x de números reais e que devolve um array com números yi = f(xi) em que x = [ ..., xi, ...] . Por exemplo mapa(x => 2 * x, [1, 2.1, 4, 5, -2, 3]) devolve [2, 4.2, 8, 10, -4, 6]. Quais das alíneas acima consegue tornar a resolver usando esta função?
