const display = document.getElementsByClassName('display')[0];
const arr = document.getElementsByClassName("btn")
for(var obj of arr){
    if(!obj.classList.contains('nd')){
        obj.addEventListener('click', function(){
            if(display.innerHTML != '0') display.innerHTML += this.innerHTML;
            else display.innerHTML = this.innerHTML;
        });
    }
    //objects with class nd(Non-Displayable) are not supposed to be printed on display
    // Handling nd class elements separately
    else{
        //For clear button
        if(obj.innerHTML == 'C'){
            obj.onclick = function(){
                display.innerHTML = '0';
            }
        }
        //For reversing the sign
        else if(obj.innerHTML == '+/-'){
            obj.onclick = function(){
                display.innerHTML = eval('-1 *'+display.innerHTML); 
            }
        }
        //For evaluation
        else if(obj.innerHTML == '='){
            obj.onclick = function(){
                //Here, before evaluation, I am replacing 'x' with '*' because 'x' is not a mathematical symbol
                display.innerHTML = eval(display.innerHTML.replace('x','*')); 
            }
        }
    }
}