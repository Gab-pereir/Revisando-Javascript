//Selecionando elemento através do seu ID
const cabecalho = document.getElementById('js-cabecalho')
console.log(cabecalho);

//Retornando o primeiro elemento que combina com o seu seletor CSS
const dropdown = document.querySelector('.js-dropdown');
console.log(dropdown);

//Retorna todos os elementos compativeis com o seletor CSS em uma lista
const listDropdown = document.querySelectorAll('.dropdown');
console.log(listDropdown);
console.log(listDropdown[1]);