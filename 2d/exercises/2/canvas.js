var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

// Quadrado
c.beginPath();
c.fillStyle = "steelblue";
c.fillRect(0,0,100,100);

// Círculo
c.beginPath();
c.arc(50,50,45,0,  Math.PI *2, false);
c.strokeStyle = `yellow`;
c.fillStyle = `yellow`; //Fill the arc
c.fill();
c.stroke();