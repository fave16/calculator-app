const screen = document.querySelector('.screen');
const clearAll = document.querySelector(".btn-clear-all")
const clear = document.querySelector(".btn-clear")
const equal = document.querySelector('.btn-equal')
const buttons = document.querySelectorAll('.btn')
const fact = document.querySelector('.btn-red')



clearAll.addEventListener('click', function(e){
             screen.value= "" 
})

clear.addEventListener('click' , function(e){
       let val = screen.value
       screen.value = val.replace(val.charAt(val.length-1),"")
    //    screen.value = val.slice(0,-1);
    //    scre
        
}) 

buttons.forEach(function(button){
       button.addEventListener('click', function(e){
           let value = e.target.dataset.num;
           screen.value += value;
       })
})

equal.addEventListener('click', function(e){
    if(screen.value !== ""){
        try {
            let answer = eval(screen.value);
           screen.value = answer;    
        } catch (error) {
            console.log(error); 
        }
           
    }else{
           //
    }
})
fact.addEventListener('click', function(e){
    let x = screen.value
    if(x += "!"){
        let i = 1;
        let mul = 1
    while(i <= x){
        mul = mul * i
        console.log(mul)
        i = i + 1;
    }
    }   
 
    return mul
})



