const Morada = document.getElementById("moradia");
const DivPermissao = document.getElementById("DivPermissao");
const DivSeguranca = document.getElementById("DivSeguranca");
const QuintalSim = document.getElementById("QuintalSIm");
const QuintalNao = document.getElementById("QuintalNao");

function mostrarPermissao(){
    if(Morada.value === "apartamento"){
        DivPermissao.classList.remove("hidden");
    } else {
        DivPermissao.classList.add("hidden");
    }

    if(Morada.value === "casa" && QuintalSim.checked){
        DivSeguranca.classList.remove("hidden");
    } else {
        DivSeguranca.classList.add("hidden");
    }
}

Morada.addEventListener("change", mostrarPermissao);
QuintalSim.addEventListener("change", mostrarPermissao);
QuintalNao.addEventListener("change", mostrarPermissao);

document.getElementById("FormAdocaoCaes").addEventListener("submit", function (e){

    let idade = parseInt(document.getElementById("IdadeUsuario").value);
    let moradia = Morada.value;
    let cpf = document.getElementById("cpf").value;
    let horas = parseInt(document.getElementById("PetSozinho").value);
    let motivo = document.getElementById("MotivoAdocao").value.toLowerCase();

    let permite = document.querySelector('input[name="Permite"]:checked');
    let quintal = document.querySelector('input[name="Quintal"]:checked');
    let seguranca = document.querySelector('input[name="seguranca"]:checked');
    let tevePet = document.querySelector('input[name="tevePet"]:checked');

    let cpfs = ["12345678900"]; 


    if (idade < 18) {
        alert("Você precisa ter 18 anos ou mais");
        e.preventDefault();
        return false;
    }

    
    if (cpfs.includes(cpf)) {
        alert("CPF já cadastrado");
        e.preventDefault();
        return;
    }

    
    if (moradia === "apartamento") {
        if (!permite || permite.value === "nao") {
            alert("O apartamento precisa permitir animais.");
            e.preventDefault();
            return;
        }
    }

    if (moradia === "casa") {
        if (!quintal || quintal.value === "nao") {
            alert("A casa precisa que você tenha quintal.");
            e.preventDefault();
            return;
        }
    }

    if (quintal && quintal.value === "sim") {
        if (!seguranca || seguranca.value === "nao") {
            alert("O quintal precisa ser seguro");
            e.preventDefault();
            return;
        }
    }

    if (horas > 8) {
        alert("O animal não pode ficar mais de 8 horas sozinho.");
        e.preventDefault();
        return;
    }

    if (tevePet && tevePet.value === "nao") {
        alert("A ONG poderá realizar acompanhamento durante a adaptação do animal.");
    }

    return true;
});