let canvas=document.getElementById("juego");
let ctx=canvas.getContext("2d");

const VELOCIDAD=15;


//Gato
let gatoX=0;
let gatoY=0;
const ANCHOGATO= 50;
const ALTURAGATO=50; 
 
//Comida
let comidaX=50;
let comidaY=50;
const ANCHOCOMIDA=30;
const ALTUCOMIDA=30;

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}

function graficarGato(){    
    graficarRectangulo(gatoX,gatoY,ANCHOGATO,ALTURAGATO,"#0D4D82");

}   

function graficarComida(){   
 graficarRectangulo(comidaX,comidaY,ANCHOCOMIDA,ALTUCOMIDA,"#820D7A");


}



//Funcion iniciar juego 
function iniciarJuego(){   
    gatoX = (canvas.width / 2) - (ANCHOGATO / 2);   
    gatoY = (canvas.height / 2) - (ALTURAGATO / 2); 

      //COMIDA ESQUINA INFERIOR DERECHA
    comidaX = canvas.width - ANCHOCOMIDA;
    comidaY = canvas.height - ALTUCOMIDA;

    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    graficarGato();
    graficarComida();
 
}               


function limpiarCanva(){        
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}

function moverIzquierda(){  
    gatoX-=10;
    limpiarCanva(); 
    graficarGato();
    graficarComida();
}   
function moverDerecha(){  
    gatoX+=10;
    limpiarCanva(); 
    graficarGato();
    graficarComida();
}   
function moverArriba(){  
    gatoY+=10;
    limpiarCanva(); 
    graficarGato();
    graficarComida();
}   
function moverAbajo(){  
    gatoY-=10;
    limpiarCanva(); 
    graficarGato();
    graficarComida();
}   


document.getElementById("btnArriba").onclick = () => moverArriba();       
document.getElementById("btnAbajo").onclick = () => moverAbajo(); 
document.getElementById("btnIzquierda").onclick = () => moverIzquierda(); 
document.getElementById("btnDerecha").onclick = () => moverDerecha();


