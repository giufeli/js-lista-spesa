spesa = [
    'pane',
    'acqua',
    'pesce',
    'verdure',
    'carne',
];

const listSpesa = document.querySelector('.lista-spesa')
const buttonList = document.querySelector('#button')

let i = 0

buttonList.addEventListener('click', function(){
    
    while (i <= 4) {
        listSpesa.innerHTML += `<li>${spesa[i]}</li>`;
        i++;
    }
})
