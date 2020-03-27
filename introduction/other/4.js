function r(x)
{
    return Math.round(x * 1000) / 1000;
}

function dot(arr1,arr2)
{
    return arr1.x * arr2.x + arr1.y * arr2.y + arr1.z * arr2.z;
}

function norm(arr)
{
    return Math.sqrt(Math.pow(arr.x,2) + Math.pow(arr.y,2) + Math.pow(arr.z,2));
}

function vers(arr)
{
    let divide = norm(arr);

    if(norm(arr) === 1)
    {
        return arr;
    }
    arr.x = arr.x / divide;
    arr.y = arr.y / divide;
    arr.z = arr.z / divide;

    return arr;
}

function angle(arr1, arr2) 
{
    return Math.acos(dot(arr1, arr2) / (norm(arr1) * norm(arr2)))
}

function orth(arr1, arr2){
    let temp_x = (arr1.y * arr2.z) - (arr1.z * arr2.y);
    let temp_y = (arr1.x * arr2.z) - (arr1.z * arr2.x);
    let temp_z = (arr1.x * arr2.y) - (arr1.y * arr2.x);

    return { x: temp_x, y: temp_y, z: temp_z };
}





//Funcao dot Testes
console.log('---------------------------------------------');
console.log('Dot:');
console.log(r(dot({x: 1, y: 0, z: 0},  {x: 0, y: 1, z: 0})));
console.log(r(dot({x: 1, y: 0, z: 0},  {x: 1, y: 1, z: 0})));
console.log(r(dot({x: 1, y: 0, z: 0},  {x: 1, y: 0, z: 0})));

//Funcao norm Testes
console.log('---------------------------------------------');
console.log('Norm:');
console.log(r(norm({x: 0, y: 1, z:0})));
console.log(r(norm({x: 1, y: 1, z:0})));
console.log(r(norm({x: 1, y: 0, z:0})));

//Funcao vers Testes
console.log('---------------------------------------------');
console.log('Vers:');
console.log(vers({x: 0, y: 1, z:0}));
console.log(vers({x: 1, y: 1, z:0}));
console.log(vers({x: 1, y: 0, z:0}));

//Funcao angle Testes
console.log('---------------------------------------------');
console.log('Angle:');
console.log(r(angle({x: 1, y: 0, z:0}, {x: 0, y: 1, z:0})));
console.log(r(angle({x: 1, y: 0, z:0}, {x: 1, y: 1, z:0})));
console.log(r(angle({x: 1, y: 0, z:0}, {x: 1, y: 0, z:0})));

//Funcao orth Testes
console.log('---------------------------------------------');
console.log('Orth:');
console.log(orth({x: 1, y: 0, z:0}, {x: 0, y: 1, z:0}));
console.log(orth({x: 1, y: 0, z:0}, {x: 1, y: 1, z:0}));
console.log(orth({x: 1, y: 0, z:0}, {x: 1, y: 0, z:0}));