const calcular = document.getElementById('calcular');

function imc () {
    // usa o .value para pegar apenas o valor do id
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //se todos os campos forem preenchidos é calculado o IMC
    if(nome != '' && altura != '' && peso != ''){

        //.toFixed(2) = mostra apenas dois numeros depois na virgula
        const valorImc = (peso / (altura * altura)).toFixed(2);

        let classificação = '';

        //classificação de acordo com o valor do IMC
        if(valorImc < 18.5){
            classificação = 'abaixo do peso.';
        }else if (valorImc < 25){
            classificação = 'com o peso ideal. Parabéns!!';
        }else if(valorImc < 30){
            classificação = 'levemente acima do peso';
        }else if(valorImc < 35){
            classificação = 'com obesidade grau I.';
        }else if(valorImc < 40){
            classificação = 'com obesidade grau II.'
        }else{
            classificação = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificação}`;

    }else{
        resultado.textContent = 'Preencha todos os campos!!';
    }
}

calcular.addEventListener('click', imc);

// limpar dados
function limpar(){
    document.getElementById('resultado').textContent = '';
    document.getElementById('nome').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('nome').focus();
}

let clean = document.getElementById('limpar');
clean.addEventListener('click', limpar);
