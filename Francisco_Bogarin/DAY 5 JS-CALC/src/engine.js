var result
var value1, value2, operator

function calculate(value1, operator, value2){
    let displayBox = document.getElementById('display-box')
    let historyBox = document.getElementById('history-box')
    
    if(operator == '+'){
        result = value1 + value2
        displayBox.textContent = result
        historyBox.innerHTML += result + '<br>'
    }
    if(operator == '-'){
        result = value1 - value2
        displayBox.textContent = result
        historyBox.innerHTML += result + '<br>'
    }
    if(operator == '*'){
        result = value1 * value2
        displayBox.textContent = result
        historyBox.innerHTML += result + '<br>'
    }
    if(operator == '/'){
        result = value1 / value2
        displayBox.textContent = result
        historyBox.innerHTML += result + '<br>'
    }
    console.log(`${value1} ${value2} ${operator}`)
}
function init(){
    let displayBox = document.getElementById('display-box')
    let historyBox = document.getElementById('history-box')
    document.addEventListener('keyup', (k)=>{
        if (displayBox.textContent == ''){displayBox.textContent = 0}
        switch(k.key){
            case '+':operator = '+';if(value1 == ''){value1 = 0} ;value1 = parseFloat(displayBox.textContent) ; displayBox.textContent = 0;
            break;
            case '-':operator = '-';if(value1 == ''){value1 = 0} ;value1 = parseFloat(displayBox.textContent) ; displayBox.textContent = 0;
            break;
            case '/':operator = '/';if(value1 == ''){value1 = 0} ;value1 = parseFloat(displayBox.textContent) ; displayBox.textContent = 0;
            break;
            case '*':operator = '*';if(value1 == ''){value1 = 0} ;value1 = parseFloat(displayBox.textContent) ; displayBox.textContent = 0;
            break;
            case 'Enter': calculate(value1,operator,value2);
            break;
            case 'Backspace':displayBox.textContent = (displayBox.textContent).slice(0, -1); while(displayBox.textContent == ''){displayBox.textContent = 0};
            break;
            case'(Space character)':console.log('espacio')
            break;
            default: if (k.key >= 0 && k.key < 10 || k.key == '.'){displayBox.textContent += k.key ;value2 = displayBox.textContent}
            break;
        }
    })
    //FUNCTIONS BY CLICK
    var btns = document.querySelectorAll('button')
    for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', ()=> {
        k = btns[i].textContent
        switch(k){
            case '+':operator = '+'; if(value1 == ''){value1 = 0};value1 = parseFloat(displayBox.textContent) ; displayBox.textContent = 0;
            break;
            case '-':operator = '-'; if(value1 == ''){value1 = 0};value1 = parseFloat(displayBox.textContent) ; displayBox.textContent = 0;
            break;
            case '/':operator = '/'; if(value1 == ''){value1 = 0};value1 = parseFloat(displayBox.textContent) ; displayBox.textContent = 0;
            break;
            case '*':operator = '*'; if(value1 == ''){value1 = 0};value1 = parseFloat(displayBox.textContent) ; displayBox.textContent = 0;
            break;;
            case '=': calculate(value1,operator,value2); 
            break;
            case 'del':displayBox.textContent = (displayBox.textContent).slice(0, -1); while(displayBox.textContent == '0'){displayBox.textContent = 0};
            break;
            case 'clear': value = 0; displayBox.textContent = 0; historyBox.textContent = 0;
            break;
            case '.': displayBox.textContent += k ;value2 = parseFloat(displayBox.textContent)
            default: if (k >= 0 && k < 10 || k.key == '.'){displayBox.textContent += k ;value2 = parseFloat(displayBox.textContent)}
            break;
        }
    }
    
    )}



}


