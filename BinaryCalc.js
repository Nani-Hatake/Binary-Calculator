document.addEventListener('DOMContentLoaded',()=>{
    let currentInput=""
    let resultDiv=document.querySelector('.res');
    const btn0=document.querySelector('.btn0');
    const btn1=document.querySelector('.btn1');
    const btnSum=document.querySelector('.btnSum');
    const btnSub=document.querySelector('.btnSub');
    const btnMul=document.querySelector('.btnMul');
    const btnDiv=document.querySelector('.btnDiv');
    const btnClr=document.querySelector('.btnClr');
    const btnEql=document.querySelector('.btnEql');
    const btnRemove=document.querySelector('.btnRemove');
    btnClr.addEventListener('click',()=>{
        currentInput=""
        resultDiv.textContent=currentInput
    });
     btn0.addEventListener('click', () => {
        currentInput =currentInput+ '0';
        resultDiv.textContent = currentInput;
    });
    btn1.addEventListener('click',()=>{
        currentInput=currentInput+'1'
        resultDiv.textContent=currentInput;
    });
    btnSum.addEventListener('click',()=>{
        currentInput=currentInput+'+'
        resultDiv.textContent=currentInput;
    });
    btnSub.addEventListener('click',()=>{
        currentInput=currentInput+'-'
        resultDiv.textContent=currentInput;
    });
    btnMul.addEventListener('click',()=>{
        currentInput=currentInput+'*'
        resultDiv.textContent=currentInput;
    });
    btnDiv.addEventListener('click',()=>{
        currentInput=currentInput+'/'
        resultDiv.textContent=currentInput;
    });
    btnEql.addEventListener('click', () => {
        try {
            const regex = /([01]+)([+\-*/])([01]+)/;
            const match = currentInput.match(regex);
            if (match) {
                let operand1 = parseInt(match[1], 2); 
                let operator = match[2];  
                let operand2 = parseInt(match[3], 2); 
                console.log("Operand 1:", operand1, "Operator:", operator, "Operand 2:", operand2);

                let result;
                switch (operator) {
                    case '+':
                        result = operand1 + operand2;
                        break;
                    case '-':
                        result = operand1 - operand2;
                        break;
                    case '*':
                        result = operand1 * operand2;
                        break;
                    case '/':
                        result = Math.floor(operand1 / operand2); // Integer division
                        break;
                    default:
                        result = 'Error';
                        break;
                }
                currentInput = result.toString(2);
            } else {
                currentInput = "Error"; 
                 }
        } catch (error) {
            currentInput = "Error"; 
        }
        resultDiv.textContent=currentInput;
    });
        resultDiv.textContent = currentInput; 
        btnRemove.addEventListener('click', () => {
            currentInput = currentInput.slice(0, -1); // Remove the last character
            resultDiv.textContent = currentInput;

    });
});


