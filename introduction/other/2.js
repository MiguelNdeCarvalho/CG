//Funcao do Professor para checkar
function r(x){
    return Math.round(x * 1000) / 1000;
}

function linspace(a, b, n) {
    let arr = [];
    let step = (b - a) / (n - 1);
    for (var i = 0; i < n; i++) {
      arr.push(a + (step * i));
    }
    return arr;
  }

function grafico(funcao, x_min, x_max, num_points) {
    
    if (x_min >= x_max){
        return -1;
    }
    if(num_points < 2){
        return -1;
    }

    let x = linspace(x_min,x_max, num_points);
    let pos = Array(); 


    for(let i = 0; i < num_points; i++) {
        pos.push({ x: r(x[i]), y: r(funcao(x[i])) });
    }

    return pos;
}

console.log(grafico(x => 2 * x, 3, 5, 3));
console.log(grafico(x => 1 - Math.pow(x,2), -4, 4, 7));

