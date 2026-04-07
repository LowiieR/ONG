const Morada = document.getElementById("Moradia"); // FIX
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

    let idade = document.getElementById("IdadeUsuario").value; // FIX
    let moradia = Morada.value;
    let cpf = document.getElementById("cpf").value;
    let horas = document.getElementById("PetSozinho").value;
    let motivo = document.getElementById("MotivoAdocao").value.toLowerCase();

    let permite = document.querySelector('input[name="Permite"]:checked');
    let quintal = document.querySelector('input[name="Quintal"]:checked');
    let seguranca = document.querySelector('input[name="Seguranca"]:checked');
    let tevePet = document.querySelector('input[name="TevePet"]:checked');

    let cpfs = ["12345678900"]; 


    if (idade < 18) {
        alert("Você precisa ter 18 anos ou mais");
        e.preventDefault();
        return;
    }

    
    if (cpfs.includes(cpf)) {
        alert("CPF já cadastrado");
        e.preventDefault();
        return;
    }

    
    if (moradia === "Ap") {
        if (!permite || permite.value === "nao") {
            alert("Apartamento precisa permitir pets");
            e.preventDefault();
            return;
        }
    }

    
    if (moradia === "Casa") {
        if (!quintal || quintal.value === "nao") {
            alert("Casa precisa ter quintal");
            e.preventDefault();
            return;
        }

        if (!seguranca || seguranca.value === "nao") {
            alert("O quintal precisa ser seguro");
            e.preventDefault();
            return;
        }
    }

    
    if (horas > 8) {
        let justificativa = prompt("Justifique deixar o animal sozinho:");
        if (!justificativa || justificativa.length < 5) {
            alert("Justificativa obrigatória");
            e.preventDefault();
            return;
        }
    }

    
    if (tevePet && tevePet.value === "nao") {
        alert("A ONG poderá acompanhar sua adaptação");
    }


});