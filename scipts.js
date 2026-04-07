const Morada = document.getElementById("Morada");
const DivPermissao = document.getElementById("DivPermissao");
const DivSeguranca = document.getElementById("DivSeguranca");
const QuintalSim = document.getElementById("QuintalSIm");
const QuintalNao = document.getElementById("QuintalNao");

function mostrarPermissao(){
    if(Morada.value === "Ap"){
        DivPermissao.classList.remove("hidden");
    } else {
        DivPermissao.classList.add("hidden");
    }
    if(Morada.value === "Casa" && QuintalSim.checked){
        DivSeguranca.classList.remove("hidden");
    } else {
        DivSeguranca.classList.add("hidden");
    }
}
Morada.addEventListener("change", mostrarPermissao);
QuintalSim.addEventListener("change", mostrarPermissao);
QuintalNao.addEventListener("change", mostrarPermissao);


document.getElementById("FormAdocaoCaes").addEventListener("submit", function (e){
e.preventDefault();
let Idade = document.getElementById("Idade").value;
});