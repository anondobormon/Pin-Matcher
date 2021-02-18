
let pinInput = document.getElementById('pin-input');
let generatePin = document.getElementById('generate-pin');

let pinMatchInput = document.getElementById('match-pin-input');
let inputBtn = document.querySelectorAll('.button');


generatePin.addEventListener('click', function(){
    const random = Math.random();
    const pinCode =Math.floor(random * 1000000).toString()
    if(pinCode.length == 6){
        pinInput.value = pinCode;
        // console.log(pinInput.value); 
    }
})

inputBtn.forEach(function(button){
    button.addEventListener('click', function(e){
        let value = e.target.innerText;
        let inputPin = document.getElementById('match-pin-input');
        inputPin.value = inputPin.value + value;
        console.log((inputPin.value));
    })
})

document.getElementById('clear-btn').addEventListener('click', function(){
    let clear = null;
    pinMatchInput.value = clear;
})
let noMatch = document.getElementById('no-match');
let match = document.getElementById('match');
document.getElementById('submit-btn').addEventListener('click', function(){
    if(pinInput.value == pinMatchInput.value){
        match.style.display = 'block';
        noMatch.style.display = 'none';
        pinMatchInput.value = null;
    }
    else{
        noMatch.style.display = 'block';
        match.style.display = 'none';
        pinMatchInput.value = null;
    }
})