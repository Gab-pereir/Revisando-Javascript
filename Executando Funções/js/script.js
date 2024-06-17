function areaQuadrado(lado){
    return lado * lado;
}
console.log(areaQuadrado(20));


//Função simples para calcular IMC
function imc(peso, altura){
    const imc = peso / altura ** 2;
    return imc;
}

console.log(imc(60, 1.60));


//Função carro favorito
function carroFavorito(carro){
    if(carro == 'Fusca'){
        console.log('Seu carro favorito é um fusca!');
    } else if (carro == 'Celta'){
        console.log('Seu carro favorito é um celta');
    } else{
        console.log('Você não tem um carro favorito');
    }
}

carroFavorito('Celta');


