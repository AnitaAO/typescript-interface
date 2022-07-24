// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Interfaces</h1>`;

//the interface => focus on "Point"
interface Point {
  x: number;
  y: number
}

let drawPount = (point: Point) => { //custom type "point"
  
};

drawPount({ //call the function
  x: 1,
  y: 2,
});
