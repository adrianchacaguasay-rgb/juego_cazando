let canvas=document.getElementById("juego");
let ctx=canvas.getContext("2d");
const VELOCIDAD=15;
let juegoActivo= true;


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

//puntaje
let puntaje=0;  
//tiempo
let tiempo=20;
let intervaloTiempo;

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
    clearInterval(intervaloTiempo);
    gatoX = (canvas.width / 2) - (ANCHOGATO / 2);   
    gatoY = (canvas.height / 2) - (ALTURAGATO / 2); 

      //COMIDA ESQUINA INFERIOR DERECHA
    comidaX = canvas.width - ANCHOCOMIDA;
    comidaY = canvas.height - ALTUCOMIDA;

    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    graficarGato();
    graficarComida();
    //contador tiempo   
    intervaloTiempo = setInterval(restarTiempo,1000);
 
}               


function limpiarCanva(){        
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}

const LIMITE_X = canvas.width - ANCHOGATO; 
const LIMITE_Y = canvas.height - ALTURAGATO;    

function detectarColision(){    
    if(gatoX<comidaX+ANCHOCOMIDA && gatoX+ANCHOGATO>comidaX && gatoY<comidaY+ALTUCOMIDA && gatoY+ALTURAGATO>comidaY){   
        alert("El gato comió la comida");   
        reaparecerComida();
        aumentarPuntaje();

    }
} 


function moverIzquierda(){  
    if(!juegoActivo)return;
    if(gatoX > 0){
    gatoX-=10;
    limpiarCanva(); 
    graficarGato();
    graficarComida();   
    detectarColision() 
    }
}   
function moverDerecha(){    
    if(!juegoActivo)return;   
    if(gatoX<LIMITE_X){   
    gatoX+=10;
    limpiarCanva(); 
    graficarGato();
    graficarComida();       
    detectarColision()
    }
}   
function moverArriba(){     
    if(!juegoActivo)return;
    if(gatoY>0){
    gatoY-=10;
    limpiarCanva(); 
    graficarGato();
    graficarComida();   
    detectarColision()   
    }
}   
function moverAbajo(){      
    if(!juegoActivo)return;
    if(gatoY<LIMITE_Y){
    gatoY+=10;
    limpiarCanva(); 
    graficarGato();
    graficarComida();       
    detectarColision()
    }
}   


 function aumentarPuntaje(){        
    puntaje=puntaje+1;
    mostrarEnSpan("puntos", puntaje);  
    //Ganar
    if(puntaje >= 6){
        clearInterval(intervaloTiempo);
        alert("Ganaste");
    }

 }  

 function reaparecerComida(){   
    comidaX=generarAleatorio(0, canvas.width-ANCHOCOMIDA);
    comidaY=generarAleatorio(0,canvas.height-ALTUCOMIDA);
 }

 
 function restarTiempo(){
    if(tiempo <= 0){
        clearInterval(intervaloTiempo);
        juegoActivo = false;

        setTimeout(() => {
            reiniciarJuego();
        }, 1000); // espera 1 segundo

        return;
    }

    tiempo--;
    mostrarEnSpan("tiempo", tiempo);
}


function reiniciarJuego(){  
    clearInterval(intervaloTiempo);
    juegoActivo=true;
    // reiniciar valores
    puntaje=0;
    tiempo=20;   
    //actualizar pantalla
    mostrarEnSpan("puntos","0");
    mostrarEnSpan("tiempo","0");
    //reiniciar posiciones 
    gatoX=(canvas.width/2)-(ANCHOGATO/2);
    gatoY=(canvas.height/2)-(ALTURAGATO/2);
    reaparecerComida();
    limpiarCanva();
    graficarGato();
    graficarComida();
    //reiniciar tiempo  
    intervaloTiempo=setInterval(restarTiempo,1000);
    
}

document.getElementById("btnArriba").onclick = () => moverArriba();       
document.getElementById("btnAbajo").onclick = () => moverAbajo(); 
document.getElementById("btnIzquierda").onclick = () => moverIzquierda(); 
document.getElementById("btnDerecha").onclick = () => moverDerecha();

