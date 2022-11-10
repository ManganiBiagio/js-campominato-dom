const btnGeneraGridEl = document.querySelector("#genera-grid");
generaGrid();

btnGeneraGridEl.addEventListener("click", generaGrid)

function generaGrid(){
    const selectNumSquareEl = document.querySelector("[name=numSquare]");
    const outputGridEl = document.querySelector(".my-grid-output");


    const numSquare=(parseInt(selectNumSquareEl.value)) ;
    const numRiga=Math.sqrt(numSquare,2)
    outputGridEl.innerHTML="";
    for(let i=0;i<numSquare;i++){
        const newCell=document.createElement("div");
        newCell.classList.add("my-square");
        newCell.style.width=`calc(100% / ${numRiga})`;
        newCell.innerHTML=i+1
        newCell.addEventListener("click",function(){
            this.classList.toggle("active-square");
            console.log(this.innerHTML);
        })
        outputGridEl.append(newCell);
    }
    




}