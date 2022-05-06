const display = document.getElementsByClassName('display')[0];
const btns = document.getElementsByClassName("btn")
for(var obj of btns){
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

// CODE FOR SHIFTING THE THEME (MODE)
const container = document.getElementById('container');
const mode = document.getElementById('mode');
let isDark = true;
mode.addEventListener('click',function(){
    if(isDark){
        this.innerHTML = '<i class="fa-solid fa-moon"></i>';
        this.style.backgroundColor = '#dbf0f9';
        this.style.color = '#515151';
        container.style.backgroundColor = '#f3fafd';
        display.style.color = '#515151';
        // for each button class object
        for(let obj of btns){
            if(obj.classList.contains('clear')){
                obj.style.backgroundColor = '#ffe5e5';
            }
            else if(!obj.classList.contains('orange') && !obj.classList.contains('green')){
                obj.style.backgroundColor = '#dbf0f9';
                obj.style.color = '#515151';
            }
        }
    }
    else{
        this.innerHTML = '<i class="fa-solid fa-sun"></i>';
        this.style.backgroundColor = '#333333';
        this.style.color = 'white';
        container.style.backgroundColor = '#1a1a1a';
        display.style.color = 'white';
        for(let obj of btns){
            if(obj.classList.contains('clear')){
                obj.style.backgroundColor = '#330000';
            }
            else if(!obj.classList.contains('orange') && !obj.classList.contains('green')){
                obj.style.backgroundColor = '#333333';
                obj.style.color = 'white';
            }
        }
    }
    isDark = !isDark;
})