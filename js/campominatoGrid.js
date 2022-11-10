const btnGeneraGridEl = document.querySelector("#genera-grid");
let contatoreScelteGiuste=0;
let bombsList;
let numSquare;
generaGrid();

btnGeneraGridEl.addEventListener("click", generaGrid)

function generaGrid(){
    const selectNumSquareEl = document.querySelector("[name=numSquare]");
    const outputGridEl = document.querySelector(".my-grid-output");
    contatoreScelteGiuste=0;
    
    


    numSquare=(parseInt(selectNumSquareEl.value)) ;
    const numRiga=Math.sqrt(numSquare,2)
    outputGridEl.innerHTML="";

    bombsList=bombGenerator(numSquare);
    console.log(bombsList);
    
    for(let i=0;i<numSquare;i++){
        const newCell=document.createElement("div");
        newCell.classList.add("my-square");
        newCell.style.width=`calc(100% / ${numRiga})`;
        newCell.innerHTML=i+1;
        newCell.dataset.Index=i+1;

        newCell.addEventListener("click",onNewCell)
        outputGridEl.append(newCell);
    }

}

function onNewCell(){
    if(bombsList.includes(+this.dataset.Index)){
        console.log("sei esploso");
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
    const outputGridEl = document.querySelector(".my-grid-output");
    txt=`${txt} il tuo punteggio è di ${numPunteggio}`
    alert(txt);

    const square=document.querySelectorAll(".my-square");
    console.log(square);
    square.forEach(function(i){
        i.removeEventListener("click",onNewCell)
        
        
    })
    



}