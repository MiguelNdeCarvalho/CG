var canvas = document.getElementById('canvas');

//Make Canvas use all the screen region
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

var c = canvas.getContext('2d');

// Draw Rectangles
c.fillStyle= 'rgba(255, 0, 0, 0.5)';
c.fillRect(100,100,100,100);
c.fillStyle= 'rgba(0, 0, 255, 0.5)';
c.fillRect(400,100,100,100);
c.fillStyle= 'rgba(0, 255, 0, 0.5)';
c.fillRect(300,300,100,100);

// Draw Lines
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,300);
c.strokeStyle = `#fa34a3`
c.stroke();

// Circle
c.beginPath();
c.arc(300,300,30, 0, Math.PI * 2, false);
c.strokeStyle = `blue`;
c.fillStyle = `green`; //Fill the arc
c.fill();
c.stroke();

// Arc
c.beginPath();
c.moveTo(20, 20);           // Create a starting point
c.lineTo(100, 20);          // Create a horizontal line
c.arcTo(150, 20, 150, 70, 50); // Create an arc
c.lineTo(150, 120);         // Continue with vertical line
c.stroke();                // Draw it