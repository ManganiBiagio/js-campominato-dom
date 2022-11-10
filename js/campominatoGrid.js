//animazione di entrata 

const myTimeout=setTimeout(closeVideo,3300);

function closeVideo(){
    const boxAnimationEl= document.querySelector(".box-animazione");
    boxAnimationEl.classList.add("d-none");

}




//--------------------------------------------------------------
const btnGeneraGridEl = document.querySelector("#genera-grid");


let contatoreScelteGiuste=0;
let bombsList;
let numSquare;
generaGrid();

btnGeneraGridEl.addEventListener("click", generaGrid)

function generaGrid(){
    const resulteEl=document.querySelector(".resulte");
    const selectNumSquareEl = document.querySelector("[name=numSquare]");
    const outputGridEl = document.querySelector(".my-grid-output");
    contatoreScelteGiuste=0;
    resulteEl.classList.add("d-none");
    
    


    numSquare=(parseInt(selectNumSquareEl.value)) ;
    const numRiga=Math.sqrt(numSquare,2);
    outputGridEl.innerHTML="";

    bombsList=bombGenerator(numSquare);
    console.log(bombsList);
    
    for(let i=0;i<numSquare;i++){
        const newCell=document.createElement("div");
        newCell.classList.add("my-square");
        newCell.style.width=`calc(100% / ${numRiga})`;
        
        newCell.dataset.Index=i+1;

        newCell.addEventListener("click",onNewCell)
        outputGridEl.append(newCell);
    }

}

function onNewCell(){
   
    if(bombsList.includes(+this.dataset.Index)){
        
        this.classList.toggle("bg-danger")
        finePartita("hai perso",contatoreScelteGiuste);
    }
    else{
        this.classList.add("active-square");
        contatoreScelteGiuste++;
        if(contatoreScelteGiuste===(numSquare-16)){
            finePartita("hai vinto",contatoreScelteGiuste);
        }

    }
    
}

/**
 * Genera un numero casuale tra min e max compresi
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function generatorNumRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**
 * 
 * @param {number} numSquare 
 * @returns {Array}
 */
function bombGenerator(numSquare){
    const bombsList=[];
    while(bombsList.length<16){
        let numRandom=generatorNumRandom(1,numSquare)
        if(!bombsList.includes(numRandom)){
            bombsList.push(numRandom);
        }
    }
    return bombsList;
}


function finePartita(txt,numPunteggio){
    const resulteEl=document.querySelector(".resulte");
    txt=`${txt} il tuo punteggio è di ${numPunteggio}`;
    resulteEl.innerHTML=txt;
    resulteEl.classList.remove("d-none");
    
    

    const square=document.querySelectorAll(".my-square");
    square.forEach(function(i){
        if(bombsList.includes(+i.dataset.Index)){
            i.classList.add("bg-danger");
            
        }
        else{
            i.classList.add("active-square");
    
        }
        
        i.removeEventListener("click",onNewCell);
    })
    



}