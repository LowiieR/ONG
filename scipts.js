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
        return false;
    }

    
    if (cpfs.includes(cpf)) {
        alert("CPF já cadastrado");
        e.preventDefault();
        return;
    }

    
      if (moradia === "apartamento") {
    const permiteAnimais = document.getElementById("permiteAnimais").checked;
    if (!permiteAnimais) {
      alert("O apartamento precisa permitir animais.");
      return false;
    }
  }

  if (moradia === "casa") {
    const seguranca = document.getElementById("seguranca").checked;
    if (!seguranca) {
      alert("A casa precisa ter quintal seguro.");
      return false;
    }
  }

        if (!seguranca || seguranca.value === "nao") {
            alert("O quintal precisa ser seguro");
            e.preventDefault();
            return;
        }
    }

    
     if (PetSozinho > 8) {
    const justificativa = document.getElementById("justificativa").value;

    if (!justificativa || justificativa.length < 10) {
      alert("Explique melhor por que o animal ficará mais de 8 horas sozinho.");
      return false;
    }
  }

    
    if (jaTevePet === "nao") {
    alert("A ONG poderá realizar acompanhamento durante a adaptação do animal.");
  }

return true;
);