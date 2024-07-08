const button = document.getElementById("js-btn");


function handleClick(event) {
    let botao = event.currentTarget
    console.log();
}

button.addEventListener('click', handleClick);

// O event é um parâmetro que você pode passar na função de callback para ter acessso a todas as propiedades daquele evento que você executou no elemento

