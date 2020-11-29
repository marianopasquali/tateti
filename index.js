
let Jugada=0;
let Jugador="X";
const Jugadores=["X","O"];
let victoria="";
let ganador="";



let BotonesArray = document.getElementsByClassName("small"); 


const b0= document.getElementById("boton0");
const b1= document.getElementById("boton1");
const b2= document.getElementById("boton2");
const b3= document.getElementById("boton3");
const b4= document.getElementById("boton4");
const b5= document.getElementById("boton5");
const b6= document.getElementById("boton6");
const b7= document.getElementById("boton7");
const b8= document.getElementById("boton8");
    

const puntaje =(variable) =>{

    if(variable==="X"){

        let win = parseInt(document.getElementById("wins_x").innerHTML);
        document.getElementById("wins_x").innerHTML= win+1;

    }

    if(variable==="O"){

        let win = parseInt(document.getElementById("wins_o").innerHTML);
        document.getElementById("wins_o").innerHTML = win+1;
    }
}


const ronda = () =>{
    
    

    if(Jugada%2!==0){

        document.getElementById("estado").innerHTML=`Es el turno del Jugador ${Jugadores[1]}`;
        Jugador=Jugadores[1];

    }else{

        document.getElementById("estado").innerHTML=`Es el turno del Jugador ${Jugadores[0]}`;
        Jugador=Jugadores[0];

    }

    

}

const Resolucion = () =>{


     //HORIZONTALES

   if((b0.innerHTML===b1.innerHTML)&&(b1.innerHTML===b2.innerHTML)&&(b0.innerHTML!=="")){

        let victoria = b0.innerHTML;
        return victoria;
    }

    if((b3.innerHTML===b4.innerHTML)&&(b4.innerHTML===b5.innerHTML)&&(b3.innerHTML!=="")){

        let victoria = b3.innerHTML;
        return victoria;
    }

    if((b6.innerHTML===b7.innerHTML)&&(b7.innerHTML===b8.innerHTML)&&(b6.innerHTML!=="")){

        let victoria = b6.innerHTML;
        return victoria;

    }

    

    //VERTICALES

    if((b0.innerHTML===b3.innerHTML)&&(b3.innerHTML===b6.innerHTML)&&(b0.innerHTML!=="")){

        let victoria = b0.innerHTML;
        return victoria;
    }

    if((b1.innerHTML===b4.innerHTML)&&(b4.innerHTML===b7.innerHTML)&&(b1.innerHTML!=="")){

        let victoria = b1.innerHTML;
    
        return victoria;
    }

    if((b2.innerHTML===b5.innerHTML)&&(b5.innerHTML===b8.innerHTML)&&(b2.innerHTML!=="")){

        let victoria = b2.innerHTML;
    
        return victoria;
    }

    //DIAGONALES


    if((b0.innerHTML===b4.innerHTML)&&(b4.innerHTML===b8.innerHTML)&&(b0.innerHTML!=="")){
    
        let victoria = b0.innerHTML;
    
        return victoria;
    }


    if((b2.innerHTML===b4.innerHTML)&&(b4.innerHTML===b6.innerHTML)&&(b2.innerHTML!=="")){
    
        let victoria = b2.innerHTML;
    
        return victoria;

    }else{

        let victoria="";

        return victoria;

    }


   




}

const Empate = (string) =>{

    if (Jugada>=9 && string===""){

        let leyenda = `Es un empate`;
        document.getElementById("estado").innerHTML=leyenda;
        document.getElementById("estado").style.color="#ff7e05";
        document.getElementById("restart_lbl").style.display="block";
        Jugada=0;
        
    }


}

const deshabilitar = ()=>{

    for(let i=0;i<BotonesArray.length;i++){

        BotonesArray[i].disabled=true;

    }


}

const Victoria = (string) => {


    if (string === "X"){

        let leyenda = `El ganador es el jugador ${string}`;
        document.getElementById("estado").innerHTML=leyenda;
        document.getElementById("estado").style.color="#056dff";
        document.getElementById("restart_lbl").style.display="block";
        deshabilitar();

    }

    if (string === "O"){

        let leyenda = `El ganador es el jugador ${string}`;
        document.getElementById("estado").innerHTML=leyenda;
        document.getElementById("estado").style.color="#056dff";
        document.getElementById("restart_lbl").style.display="block";
        deshabilitar();

    }



}


const start = () =>{

    setInterval(() => Empate(ganador), 1000);

    const resetBtn = document.getElementById("botonReset");

        resetBtn.addEventListener("click",()=>{

            document.getElementById("estado").style.color="#000000";
            document.getElementById("restart_lbl").style.display="none";

            for(i=0;i<BotonesArray.length;i++){

                BotonesArray[i].disabled=false;

                BotonesArray[i].style.background="#d30303";

                BotonesArray[i].innerHTML="";

                Jugada=0;

                ronda();
            }
        })

            
    for(let i=0;i<BotonesArray.length;i++){
       
        
        BotonesArray[i].addEventListener("click",()=>{

            Jugada++;

            BotonesArray[i].innerHTML=Jugador;

            BotonesArray[i].disabled=true;

            BotonesArray[i].style.background="grey";

            ronda();
        
            ganador = Resolucion();


            Victoria(ganador);


            puntaje(ganador);
       
        }   )
    }
   


    
}


window.onload=start;




