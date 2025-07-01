'use strict'; //reduz erros silenciosos, melhora o desempenho, fornece mais avisos e menos recursos não seguros.

const trocarTema = document.querySelector('.btn');

trocarTema.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');


var className = document.body.className; //pega a string com o nomes das classes que o <body> tem

if (className == 'light-theme'){
    this.textContent = 'Tema Claro' //'this' aponta para o elemento que disparou o evento.(no botao)
}
else {
    this.textContent = 'Tema Escuro'  // muda a frase do botao se o tema for dark
}

console.log('Nome atual da classe: ' + className );

});
