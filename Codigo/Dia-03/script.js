let nomeTimeA = prompt("Digite o nome do time A.");
let nomeTimeB = prompt("Digite o nome do time B.");
let pontoA = 0;
let pontoB = 0;
let setA = 0;
let setB = 0;

const nomeA_HTML = document.getElementById("nomeTimeA");
const nomeB_HTML = document.getElementById("nomeTimeB");
const pontoA_HTML = document.getElementById("pontuacaoA");
const pontoB_HTML = document.getElementById("pontuacaoB");
const setA_HTML = document.getElementById("setA");
const setB_HTML = document.getElementById("setB");

nomeA_HTML.innerText = nomeTimeA;
nomeB_HTML.innerText = nomeTimeB;
pontoA_HTML.innerText = pontoA;
pontoB_HTML.innerText = pontoB;

function aoClicarEmPontoA() {

    pontoA = pontoA + 1;
    pontoA_HTML.innerText = pontoA;

    if(setA == 2){
        alert(`${nomeTimeA} Venceu a partida!`);
        document.location.reload(true);    
    }

    if(setA >= 2 && setA > setB + 1){
        if(pontoA >= 15 && pontoA >= pontoB + 1){
            pontoA = 0;
            pontoA_HTML.innerText = pontoA;

            setA += 1;
            setA_HTML.innerText = setA;

            alert(`${nomeTimeA} Venceu a partida!`);
            document.location.reload(true);
        }
    }
    
    if(pontoA >= 25 && pontoA > pontoB + 1){
        pontoA = 0;
        pontoA_HTML.innerText = pontoA;

        setA += 1;
        setA_HTML.innerText = setA;
    }
}

/////////////////////////////////////////////////////////////

function aoClicarEmPontoB() {

    pontoB = pontoB + 1;
    pontoB_HTML.innerText = pontoB;

    if(setB == 2){
        alert(`${nomeTimeB} Venceu a partida!`);
        document.location.reload(true);
    }
    
    if(setB >= 2 && setB > setA + 1){
        if(pontoB >= 15 && pontoB >= + 1){
            pontoB = 0;
            pontoB_HTML.innerText = pontoB;

            setB += 1;
            setB_HTML.innerText = setB;

            alert(`${nomeTimeB} Venceu a partida!`);
            document.location.reload(true);
        }
    }
    
    if(pontoB >= 25 && pontoB > pontoA + 1){
        pontoB = 0;
        pontoB_HTML.innerText = pontoB;

        setB += 1;
        setB_HTML.innerText = setB;
    }
}

pontoA_HTML.addEventListener("click", aoClicarEmPontoA);
pontoB_HTML.addEventListener("click", aoClicarEmPontoB);


// pontoB_HTML.addEventListener("click", function() {
//     pontoB = pontoB + 1;
//     pontoB_HTML.innerText = pontoB;
// });




