const inputs = document.querySelectorAll('.rates');

const result = document.querySelector('#num');

const thank = document.querySelector('.thank-container')

const main = document.querySelector('.rating-container')

const submit = document.querySelector('.btn')

let isClicked = false;

inputs.forEach(input =>{
    input.addEventListener('click',(e)=>{
        const value = input.innerHTML;
        result.innerHTML = value;
        isClicked = true;        
    })
})

submit.addEventListener('click',()=>{
    if(isClicked != false){
        main.style.display = 'none'
        thank.style.display = 'block';
    }
    else{
        submit.innerHTML = 'Please Enter rating';
    }
})



