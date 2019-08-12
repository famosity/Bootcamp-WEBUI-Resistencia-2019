//vars to handle elements from DOM
var grid = document.getElementsByClassName('img-holder')
let counter = document.getElementById('counter')
let emptyBox = document.getElementById('empty-box')
//aux var to push keys already given so if they match those cords will not given again..
let auxVar = []
//another counter to iterate grid items
let gcounter = 0
//pool of coords given randomly through shuffle function
const coords ={
    "c1":[1,1],"c2":[1,2],"c3":[1, 3],
    "c4":[2,1],"c5":[2,2],"c6":[2, 3],
    "c7":[3,1],"c8":[3,2],"c9":[3,3]
}
function shufflePieces(){
    while (auxVar.length < 9)
    {
        let random = Math.floor((Math.random()*9)+1)
        //variable name iterativa para ir asignando valores de objeto coordenadas
        let name = `c${+random}`
        //setea en values coordenadas segun la variable name
        let values = coords[name]
        //condicion si la key de una coordenada ya fue dada no lo asigna y si lo asigna push la key a
        //un array de validacion que es auxVar
        if (auxVar.includes(name)){
        //    console.log('Ya se otorgo dicho  valor')
        //  v++
    }else{
        //pushea valores a columna y filas
        grid[gcounter].style.gridColumnStart = values[1]
        grid[gcounter].style.gridRowStart = values[0]        
            auxVar.push(name)
            gcounter++
        }
    }
}
function movePiece(rowPiece,columnPiece,piece){
    let rowEmptyBox = parseInt(emptyBox.style.gridRowStart)
    let columnEmptyBox = parseInt(emptyBox.style.gridColumnStart)
    //console.log(`Pieza Row = ${rowPiece} Pieza Column = ${columnPiece}`)
    //console.log(`EmptyBox Row ${rowEmptyBox} EmptyBox Column ${columnEmptyBox}`)

    if(columnPiece == columnEmptyBox){
        if(rowPiece == rowEmptyBox-1){
            piece.style.gridRowStart = emptyBox.style.gridRowStart
            emptyBox.style.gridRowStart = rowPiece
            //console.log('una hacia arriba')
        }
        if(rowEmptyBox == rowPiece-1){
            piece.style.gridRowStart = emptyBox.style.gridRowStart
            emptyBox.style.gridRowStart = rowPiece
            //console.log('una para abajo')
        }
    }
    if(rowPiece == rowEmptyBox){
        if(columnPiece == columnEmptyBox-1){
            piece.style.gridColumnStart = emptyBox.style.gridColumnStart
            emptyBox.style.gridColumnStart = columnPiece
            //console.log('una para la izquierda')
        }
        if(columnPiece == columnEmptyBox + 1){
            piece.style.gridColumnStart = emptyBox.style.gridColumnStart
            emptyBox.style.gridColumnStart = columnPiece
            //console.log('una para la derecha')
        }  
    }
}
function handleChangeEvent(){
    //i va a ir recorriendo los elementos
    let x =1;
    let name
    let piezasOK = 0
for (let i = 0; i < grid.length; i++) {
        name = `c${+x}`
        if(grid[i].style.gridRowStart == coords[name][0] && grid[i].style.gridColumnStart == coords[name][1]){
            piezasOK++
        }
        x++
    }
    if(piezasOK === 9){
        document.getElementById('puzzle-box').innerHTML = `<h1>YOU WIN</h1>`
    }
}
function handleClickEvent(){
    for (let e = 0; e < grid.length; e++) {
       grid[e].addEventListener('click',(clk)=>{
           movePiece(clk.path[1].style.gridRowStart,clk.path[1].style.gridColumnStart,clk.path[1]);
           handleChangeEvent()
       })
    }
}

function init(){
    shufflePieces();
    handleClickEvent();

}