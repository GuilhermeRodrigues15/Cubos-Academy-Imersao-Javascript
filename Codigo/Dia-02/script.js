let nomeTimeA = prompt("Digite o nome do time A.");
let nomeTimeB = prompt("Digite o nome do time B.");

let pontoA = 5;
let pontoB = 10;

function computarPontoEAlertarAPontuacaoDoTimeA() {
    pontoA = pontoA + 1;
    alert(`O time ${nomeTimeA} fez ${pontoA} pontos`);
}

computarPontoEAlertarAPontuacaoDoTimeA();