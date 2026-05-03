const size = 250;

function ctx(id){
    let c = document.getElementById(id);
    c.width = size;
    c.height = size;
    return c.getContext("2d");
}

// 1 Verticales
(()=>{
let c = ctx("c1");
for(let x=0;x<size;x+=8){
    c.beginPath();
    c.moveTo(x,0);
    c.lineTo(x,size);
    c.stroke();
}
})();

// 2 Horizontales
(()=>{
let c = ctx("c2");
for(let y=0;y<size;y+=8){
    c.beginPath();
    c.moveTo(0,y);
    c.lineTo(size,y);
    c.stroke();
}
})();

// 3 Cuadrícula
(()=>{
let c = ctx("c3");
for(let i=0;i<size;i+=10){
    c.beginPath(); c.moveTo(i,0); c.lineTo(i,size); c.stroke();
    c.beginPath(); c.moveTo(0,i); c.lineTo(size,i); c.stroke();
}
})();

// 4 Reloj arena
(()=>{
let c = ctx("c4");

for(let i=0; i<=size; i+=10){
    c.beginPath();
    c.moveTo(i,0);
    c.lineTo(size/2, size/2);
    c.stroke();
    c.beginPath();
    c.moveTo(i, size);
    c.lineTo(size/2, size/2);
    c.stroke();
}
})();

// 5 Diagonales
(()=>{
let c = ctx("c5");

for(let i = 0; i <= size; i += 10){

    // desde borde superior hacia lado izquierdo
    c.beginPath();
    c.moveTo(i, 0);
    c.lineTo(0, i);
    c.stroke();

    // desde borde derecho hacia borde inferior
    c.beginPath();
    c.moveTo(size, i);
    c.lineTo(i, size);
    c.stroke();
}
})();

// 6 Curva
(()=>{
let c = ctx("c6");

for(let i = 0; i <= size; i += 10){

    c.beginPath();
    c.moveTo(0, i);        // punto en la parte superior
    c.lineTo(i, size);     // punto en el lado derecho
    c.stroke();
}
})();

// 7 Malla circular
(()=>{
let c = ctx("c7");

for(let i=0; i<=size; i+=10){
    // arriba izquierda
    c.beginPath();
    c.moveTo(i, 0);
    c.lineTo(0, size - i);
    c.stroke();

    // arriba derecha
    c.beginPath();
    c.moveTo(i, 0);
    c.lineTo(size, i);
    c.stroke();

    // abajo izquierda
    c.beginPath();
    c.moveTo(size - i, size);
    c.lineTo(0, size - i);
    c.stroke();

    // abajo derecha
    c.beginPath();
    c.moveTo(i, size);
    c.lineTo(size, size - i);
    c.stroke();
}
})();

// 8 X
(()=>{
let c = ctx("c8");
for(let i=0;i<size;i+=5){
    c.beginPath();
    c.moveTo(0,i);
    c.lineTo(size/2,size/2);
    c.stroke();

    c.beginPath();
    c.moveTo(size,i);
    c.lineTo(size/2,size/2);
    c.stroke();
}
})();

// 9 Estrella
(()=>{
let c = ctx("c9");

let cx = size / 2;
let cy = size / 2;

for(let i = 0; i <= size; i += 10){

    c.beginPath();
    c.moveTo(0, i);        // punto en la parte superior
    c.lineTo(i, size);     // punto en el lado derecho
    c.stroke();

    c.beginPath();
    c.moveTo(cx + i, 0);
    c.lineTo(cx, cy + i);     // baja hacia el centro
    c.stroke();

    c.beginPath();
    c.moveTo(i, 0);        // punto en la parte superior
    c.lineTo(size, i);     // punto en el lado derecho
    c.stroke();
}
})();


// 10 Rombos
(()=>{
let c = ctx("c10");

for(let i=0;i<size/2;i+=10){
    c.beginPath();
    c.moveTo(size/2, i);
    c.lineTo(size-i, size/2);
    c.lineTo(size/2, size-i);
    c.lineTo(i, size/2);
    c.closePath();
    c.stroke();
}
})();

// 11 Pétalos
(()=>{
let c = ctx("c11");
let steps = 50;

for(let i=0;i<=steps;i++){
    let x = (i/steps)*size;

    c.beginPath();
    c.moveTo(0,x);
    c.lineTo(size-x,0);
    c.stroke();

    c.beginPath();
    c.moveTo(size,x);
    c.lineTo(x,0);
    c.stroke();

    c.beginPath();
    c.moveTo(0,size-x);
    c.lineTo(size,x);
    c.stroke();

    c.beginPath();
    c.moveTo(size,size-x);
    c.lineTo(x,size);
    c.stroke();
}
})();

// 12 Flor
(()=>{
let c = ctx("c12");
let steps = 50;

for(let i=0;i<=steps;i++){
    let x = (i/steps)*size;

    c.beginPath();
    c.moveTo(0,x);
    c.lineTo(size/2,size-x);
    c.stroke();

    c.beginPath();
    c.moveTo(size,x);
    c.lineTo(size/2,size-x);
    c.stroke();

    c.beginPath();
    c.moveTo(x,0);
    c.lineTo(size-x,size/2);
    c.stroke();

    c.beginPath();
    c.moveTo(x,size);
    c.lineTo(size-x,size/2);
    c.stroke();
}
})();

// 13 Curva invertida
(()=>{
let c = ctx("c13");
let steps = 50;

for(let i=0;i<=steps;i++){
    let x = (i/steps)*size;

    c.beginPath();
    c.moveTo(0,x);
    c.lineTo(size-x,size);
    c.stroke();
}
})();

// 14 Cuadrados concéntricos
(()=>{
let c = ctx("c14");
for(let i=0;i<size/2;i+=8){
    c.strokeRect(i,i,size-2*i,size-2*i);
}
})();

// 15 Triángulos
(()=>{
let c = ctx("c15");
let steps = 50;

for(let i=0;i<=steps;i++){
    let x = (i/steps)*(size/2);

    c.beginPath();
    c.moveTo(size/2,x);
    c.lineTo(x,size);
    c.lineTo(size-x,size);
    c.closePath();
    c.stroke();
}
})();

// 16 Círculos
(()=>{
let c = ctx("c16");
for(let r=5;r<size/2;r+=8){
    c.beginPath();
    c.arc(size/2,size/2,r,0,Math.PI*2);
    c.stroke();
}
})();