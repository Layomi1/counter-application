let count=0;
const countEl= document.getElementById('count-el')
console.log(countEl);
 

 function decrease() {
        let decreaseEl = document.querySelector('#decrease-el');
        count --;
        countEl.innerHTML = count;
        countEl.style.color= "red"
         
        console.log(count);
        
    }
  decrease();

function reset(){
    let resetEl = document.getElementById('reset-el')
    countEl.innerHTML =0;
    countEl.style.color= "#222"
    count=0;
     console.log(countEl);
}

function increase(){
    let increaseEl = document.getElementById('increase-el')
    count += 1
    countEl.innerHTML =count;
    countEl.style.color= "green"
    console.log(count);
}

  


