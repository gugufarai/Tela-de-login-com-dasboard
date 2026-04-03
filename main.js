// ===== EFEITOS NOS INPUTS =====
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
  // Foco
  input.addEventListener("focus", () => {
    input.style.background = "#e8f5e9";
  });
  
  // Sair do input
  input.addEventListener("blur", () => {
    input.style.background = "#fff";
    
    // Se estiver vazio → animação de erro
    if (input.value === "") {
      input.classList.add("erro");
      
      setTimeout(() => {
        input.classList.remove("erro");
      }, 300);
    }
  });
  
  // Digitando
  input.addEventListener("input", () => {
    input.style.borderColor = "#00c853";
  });
});


// ===== CADASTRO =====
const formCadastro = document.getElementById("formCadastro");

if (formCadastro) {
  formCadastro.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (nome !== "" && email !== "" && password !== "") {
      window.location.href = "mensagem/mensagem.html";
    } else {
      alert("Preencha todos os campos!");
    }
  });
}


// ===== LOGIN =====
const formLogin = document.getElementById("formLogin");

if (formLogin) {
  formLogin.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email !== "" && password !== "") {
      window.location.href = "mensagem/mensagem2.html";
    } else {
      alert("Preencha todos os campos!");
    }
  });
}