const S = 230;

function card(parent,title,fn){
 const d=document.createElement("div");
 d.className="card";
 const c=document.createElement("canvas");
 c.width=c.height=S;
 const ctx=c.getContext("2d");
 ctx.strokeStyle="#000";
 ctx.lineWidth=1;
 fn(ctx);
 d.appendChild(c);
 const p=document.createElement("p");
 p.textContent=title;
 d.appendChild(p);
 parent.appendChild(d);
}

function ln(ctx,x1,y1,x2,y2){
 ctx.beginPath();
 ctx.moveTo(x1,y1);
 ctx.lineTo(x2,y2);
 ctx.stroke();
}

const g1=document.getElementById("g1");



//1
card(g1,"Ilusion 1",ctx=>{
 for(let i=0;i<S;i+=10)
  ln(ctx,i,0,i,S);
});

//2 
card(g1,"Ilusion 2",ctx=>{
 for(let i=0;i<S;i+=10)
  ln(ctx,0,i,S,i);
});

//3 
card(g1,"Ilusion 3",ctx=>{
 for(let i=0;i<S;i+=10){
  ln(ctx,i,0,i,S);
  ln(ctx,0,i,S,i);
 }
});

//4 
card(g1,"Ilusion 4",ctx=>{
 for(let i=0;i<S;i+=10){
  ln(ctx,i,0,S/2,S/2);
  ln(ctx,i,S,S/2,S/2);
 }
});

//5 
card(g1,"Ilusion 5",ctx=>{
 for(let i = -S; i <= S; i += 10){
  ln(ctx, i, S, i + S, 0);
 }
});

//6
card(g1,"Ilusion 6",ctx=>{
 for(let i=0;i<=S;i+=10){
  ln(ctx,i,0,0,S-i);
 }
});

//7
card(g1,"Ilusion 7",ctx=>{
 for(let i=0;i<=S;i+=10){
  ln(ctx,i,0,0,S-i);
  ln(ctx,S-i,0,S,S-i);
  ln(ctx,i,S,0,i);
  ln(ctx,S-i,S,S,i);
 }
});

//8
card(g1,"Ilusion 8",ctx=>{
 for(let i=0;i<S;i+=10){
  ln(ctx,0,i,S/2,S/2);
  ln(ctx,S,i,S/2,S/2);
 }
});

//9 
card(g1, "Ilusion 9", ctx => {
  const centro = S / 2;
  for (let i = 0; i <= centro; i += 8) {
    // Cuadrante Superior Derecho
    ln(ctx, centro, i, centro + i, centro);
    
    // Cuadrante Superior Izquierdo
    ln(ctx, centro, i, centro - i, centro);
    
    // Cuadrante Inferior Derecho
    ln(ctx, centro, S - i, centro + i, centro);
    
    // Cuadrante Inferior Izquierdo
    ln(ctx, centro, S - i, centro - i, centro);
  }
});

//10 rombo con diagonales
card(g1,"Ilusion 10",ctx=>{
 const cx = S/2;
 const cy = S/2;

 for(let i=0;i<=S/2;i+=10){

  // cuadrante 1 
  ln(ctx, cx, cy-i, cx+i, cy);

  // cuadrante 2
  ln(ctx, cx+i, cy, cx, cy+i);

  // cuadrante 3 
  ln(ctx, cx, cy+i, cx-i, cy);

  // cuadrante 4
  ln(ctx, cx-i, cy, cx, cy-i);
 }
});

//11
card(g1, "Ilusion 11", ctx => {
  const step = 8;
  const mid = S / 2;

  for (let i = 0; i <= mid; i += step) {
    //arcos latrerales
    ln(ctx, S - i, i, S - (mid - i), mid + i);//Izquierdo
    ln(ctx, i, i, mid - i, mid + i);//Derecho

    //Arco inferior
    ln(ctx, i, S, mid, S - i);
    ln(ctx, S - i, S, mid, S - i);  

    //Arco superior
    ln(ctx, i, 0, mid, i ); 
    ln(ctx, S - i, 0, mid, i);
    
    
  }
});

//12
card(g1, "Ilusion 12", ctx => {
  const step = 8;
  const mid = S / 2;

  for (let i = 0; i <= mid; i += step) {
    
    //Inferior
    ln(ctx, i, S, mid, S - i);
    ln(ctx, S - i, S, mid, S - i);  

    //Superior
    ln(ctx, i, 0, mid, i ); 
    ln(ctx, S - i, 0, mid, i);

    // Izquierdo
    ln(ctx, 0, i, i, mid);      
    ln(ctx, 0, S - i, i, mid);   
    
    // Derecho
    ln(ctx, S, i, S - i, mid);      
    ln(ctx, S, S - i, S - i, mid);
    
  }
});


//13 triangulo central
card(g1, "Ilusion 13", ctx => {
  const step = 8;
  const mid = S / 2;

  for (let i = 0; i <= mid; i += step) {
    
    ln(ctx, mid + i, 0, S, i);     
    ln(ctx, mid - i, 0, 0, i);     

    
    ln(ctx, mid, i, mid - i, 230 - (mid - i));   
    ln(ctx, mid , i, mid + i, 230 - (mid - i));   

    
    ln(ctx, i, S, mid, (S - i)+57.5);      
    ln(ctx, S - i, S, mid, (S - i)+57.5);  
    
    //arco inferior 

    ln(ctx, i , S- i, mid + i, S - (mid - i));
    
  }
});

//14
card(g1, "Ilusion 14", ctx => {
  const step = 10;
  // i es el "margen" que se le da a cada cuadro
  for (let i = 0; i < S / 2; i += step) {
    ln(ctx, i, i, S - i, i);         
    ln(ctx, i, S - i, S - i, S - i); 
    ln(ctx, i, i, i, S - i);         
    ln(ctx, S - i, i, S - i, S - i); 
  }
});

//15
card(g1, "Ilusion 15", ctx => {
  const step = 10;
  const mid = S / 2;
  for (let i = 0; i < mid; i += step) {
    // La base sube (S-i), los lados se encogen hacia el centro
    ln(ctx, i, S - i, S - i, S - i); // Base
    ln(ctx, i, S - i, mid, i);       // Lado izquierdo
    ln(ctx, S - i, S - i, mid, i);   // Lado derecho
  }
});

//16
card(g1, "Ilusion 16", ctx => {
  const step = 8;
  const mid = S / 2;
  for (let r = step; r < mid; r += step) {
    ctx.beginPath();
    // arc(x, y, radio, angulo_inicio, angulo_fin)
    ctx.arc(mid, mid, r, 0, Math.PI * 2);
    ctx.stroke();
  }
});

card(g2, "Ilusion 17", ctx => {
  const step = 8;
  for (let i = 0; i <= S; i += step) {
    // Curvas que convergen hacia los ejes
    ln(ctx, i, 0, S, i);           // Superior derecha
    ln(ctx, 0, i, i, S);           // Inferior izquierda
    ln(ctx, i, 0, 0, S - i);       // Superior izquierda
    ln(ctx, S, i, S - i, S);       // Inferior derecha
    
    // Líneas de profundidad centrales
    ln(ctx, S/2, i, i, S/2);
  }
});
card(g2, "Ilusion 18", ctx => {
  const mid = S / 2;
  ctx.lineWidth = 0.5;
  
  for (let i = 0; i < mid; i += 4) {
    // Círculos concéntricos ligeramente desplazados
    ctx.beginPath();
    ctx.arc(mid - 5, mid, i, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(mid + 5, mid, i, 0, Math.PI * 2);
    ctx.stroke();
  }
});

card(g2, "Ilusion 19", ctx => {
  // 1. Fondo negro de seguridad para el canvas (opcional, pero mejora el contraste)
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, S, S);

  const gap = 30; // Espaciado entre líneas
  const lineW = 6;  // Grosor de la línea gris

  ctx.strokeStyle = "#888"; // Color gris de la rejilla
  ctx.lineWidth = lineW;

  // 2. Dibujar la rejilla gris
  for (let i = gap; i < S; i += gap) {
    // Líneas verticales
    ln(ctx, i, 0, i, S);
    // Líneas horizontales
    ln(ctx, 0, i, S, i);
  }

  // 3. Dibujar círculos blancos en las intersecciones
  ctx.fillStyle = "#fff";
  for (let x = gap; x < S; x += gap) {
    for (let y = gap; y < S; y += gap) {
      ctx.beginPath();
      // El radio es un poco más grande que la mitad del grosor de la línea
      ctx.arc(x, y, lineW * 0.7, 0, Math.PI * 2);
      ctx.fill();
    }
  }
});

card(g2, "Ilusion 20", ctx => {
  ctx.lineWidth = 2.5;
ctx.strokeStyle = "#222";
ctx.globalAlpha = 0.8;
  const cx=S/2, cy=S/2, n=22;
  for(let i=1;i<=n;i++){
    const r=S*.46*i/n, rot=(i/n)*Math.PI*.5;
    ctx.beginPath();
    for(let k=0;k<5;k++){
      const a=k*Math.PI*2/5 - Math.PI/2 + rot;
      k===0 ? ctx.moveTo(cx+Math.cos(a)*r, cy+Math.sin(a)*r)
            : ctx.lineTo(cx+Math.cos(a)*r, cy+Math.sin(a)*r);
    }
    ctx.closePath(); ctx.stroke();
  }
});

card(g2, "Ilusion 21", ctx => {
  const n = 50;
  const mid = S / 2;

  // Curvas
  for (let i = 0; i <= n; i++) {
    let t = i / n;

    ln(ctx,
      t * S, 0,
      S, S * t
    );

    ln(ctx,
      0, t * S,
      S * t, S
    );
  }

  ctx.beginPath();
  ctx.arc(mid, mid, S * 0.12, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(mid, mid, S * 0.05, 0, Math.PI * 2);
  ctx.fillStyle = "#000";
  ctx.fill();
});

card(g2, "Ilusion 22", ctx => {
  const step = 6; // Grosor de las barras
  const halfS = S / 2;
  const radius = S * 0.35; // Radio del círculo central

  ctx.lineWidth = 1.5;

  // 1. Dibujar el fondo (Patrón horizontal)
  for (let y = 0; y < S; y += step) {
    for (let x = 0; x < S; x += step * 2) {
      // Dibujamos rectángulos negros alternos
      ctx.fillStyle = ( (y/step) % 2 === 0 ) ? "#000" : "#fff";
      // Si la fila es par, desfasamos el dibujo
      let offsetX = ( (y/step) % 2 === 0 ) ? step : 0;
      ctx.fillRect(x + offsetX, y, step, step);
    }
  }

  // 2. Crear un clip circular para el centro
  ctx.save(); // Guardamos el estado actual
  ctx.beginPath();
  ctx.arc(halfS, halfS, radius, 0, Math.PI * 2);
  ctx.clip(); // Todo lo que se dibuje ahora solo se verá dentro de este círculo

  // 3. Dibujar el patrón central (Patrón vertical rotado)
  // Rellenamos primero de blanco para limpiar el fondo
  ctx.fillStyle = "#fff";
  ctx.fill(); 
  
  for (let x = halfS - radius; x < halfS + radius; x += step) {
    for (let y = halfS - radius; y < halfS + radius; y += step * 2) {
      // Patrón alterno vertical
      ctx.fillStyle = ( (x/step) % 2 === 0 ) ? "#000" : "#fff";
      let offsetY = ( (x/step) % 2 === 0 ) ? step : 0;
      ctx.fillRect(x, y + offsetY, step, step);
    }
  }

  // 4. Restaurar y añadir un borde sutil al círculo
  ctx.restore(); // Quitamos el clip
  ctx.beginPath();
  ctx.arc(halfS, halfS, radius, 0, Math.PI * 2);
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.stroke();
});
card(g2, "Ilusion 23", ctx => {
  const mid = S / 2;
  for (let i = 0; i <= S; i += 10) {
    ln(ctx, i, 0, mid, mid);
    ln(ctx, i, S, mid, mid);
    ln(ctx, 0, i, mid, mid);
    ln(ctx, S, i, mid, mid);
  }
});
card(g2, "Ilusion 24", ctx => {
  const cx = S / 2;
  const cy = S / 2;
  const r = S * 0.45;

  for (let i = 0; i < 360; i += 5) {
    let a = i * Math.PI / 180;
    let x = cx + Math.cos(a) * r;
    let y = cy + Math.sin(a) * r;
    ln(ctx, cx, cy, x, y);
  }
});

