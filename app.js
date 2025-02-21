let amigos = []; 
let sorteados = []; 

function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value.trim(); 

  if (amigo !== "" && !amigos.includes(amigo)) {
   
    amigos.push(amigo); 

    let lista = document.getElementById("listaAmigos");
    let novoItem = document.createElement("li");
    novoItem.textContent = amigo;
    lista.appendChild(novoItem); 

    document.getElementById("amigo").value = ""; 
  } else {
    alert("Por favor, insira um nome válido e não repetido.");
  }
}
z
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo antes de sortear!");
    return;
  }

  if (sorteados.length === amigos.length) {
    alert("Todos os amigos já foram sorteados!");
    return;
  }

  let nomeEscolhido;
  do {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    nomeEscolhido = amigos[indiceAleatorio];
  } while (sorteados.includes(nomeEscolhido)); 

  sorteados.push(nomeEscolhido); 

  let resultado = document.getElementById("resultado");
  let novoItem = document.createElement("li");
  novoItem.textContent = nomeEscolhido;
  resultado.appendChild(novoItem);

  console.log(`Nome sorteado: ${nomeEscolhido}`);
}


