// Transversing: Usado para navegar pelo nosso DOM através de propiedades e métodos

const titulo = document.querySelector('h1');
console.log(titulo.parentElement);
console.log(titulo.parentElement.parentElement);
console.log(titulo.previousElementSibling);
console.log(titulo.nextElementSibling);


//Manipulando os elementos

const item01 = document.querySelector('.item-01');
const item02 = document.querySelector('.item-02');
const tituloItem = document.querySelector('.titulo-item');

item01.appendChild(item02);
item02.removeChild(tituloItem);

