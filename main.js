var lucas = {
    nome: "Lucas",
    vitoria: 0,
    derrota: 0,
    empate: 0,
    pontos: 0
  };
  var lena = {
    nome: "Lena",
    vitoria: 0,
    derrota: 0,
    empate: 0,
    pontos: 0
  };
  var sant = {
    nome: "Sant",
    vitoria: 0,
    derrota: 0,
    empate: 0,
    pontos: 0
  };
  
  var elementoTabela = document.getElementById("tabelaJogadores");
  
  exibirNaTela();
  
  function exibirNaTela() {
    elementoTabela.innerHTML = `
      <tr>
          <td>${lucas.nome}</td>
          <td>${lucas.vitoria}</td>
          <td>${lucas.empate}</td>
          <td>${lucas.derrota}</td>
          <td>${lucas.pontos}</td>
          <td><button onClick="adicionarVitoria(lucas)">Vitória</button></td>
          <td><button onClick="adicionarEmpate(lucas)">Empate</button></td>
          <td><button onClick="adicionarDerrota(lucas)">Derrota</button></td>
      </tr>      
        <tr>
          <td>${lena.nome}</td>
          <td>${lena.vitoria}</td>
          <td>${lena.empate}</td>
          <td>${lena.derrota}</td>
          <td>${lena.pontos}</td>
          <td><button onClick="adicionarVitoria(lena)">Vitória</button></td>
          <td><button onClick="adicionarEmpate(lena)">Empate</button></td>
          <td><button onClick="adicionarDerrota(lena)">Derrota</button></td>
      </tr>   
        <tr>
          <td>${sant.nome}</td>
          <td>${sant.vitoria}</td>
          <td>${sant.empate}</td>
          <td>${sant.derrota}</td>
          <td>${sant.pontos}</td>
          <td><button onClick="adicionarVitoria(sant)">Vitória</button></td>
          <td><button onClick="adicionarEmpate(sant)">Empate</button></td>
          <td><button onClick="adicionarDerrota(sant)">Derrota</button></td>
      </tr>   
  `;
  }
  
  function adicionarVitoria(jogador) {
    jogador.vitoria++;
    jogador.pontos = jogador.pontos + 3;
    exibirNaTela();
  }
  function adicionarEmpate(jogador) {
    jogador.empate++;
    jogador.pontos++;
    exibirNaTela();
  }
  function adicionarDerrota(jogador) {
    jogador.derrota++;
    exibirNaTela();
  }
  
