function AdicionarUser() {
  var nome = window.prompt("Qual é seu nome?");

  var nome = {
    nome: nome,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  };
  
  jogadores.push(nome)
  console.log(jogadores)
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
      elemento += "<tr><td>" + jogadores[i].nome + "</td>";
      elemento += "<td>" + jogadores[i].vitorias + "</td>";
      elemento += "<td>" + jogadores[i].empates + "</td>";
      elemento += "<td>" + jogadores[i].derrotas + "</td>";
      elemento += "<td>" + jogadores[i].pontos + "</td>";
      elemento +=
      "<td class='td-max'><button class='botao-table' style=''onClick='adicionarVitoria(" +
      i +
      ")'>Vitória</button></td>";
    elemento +=
      "<td class='td-min'><button class='botao-table-min' onClick='adicionarVitoria(" +
      i +
      ")'>V</button></td>";

    elemento +=
      "<td class='td-max'><button class='botao-table' onClick='adicionarEmpate(" +
      i +
      ")'>Empate</button></td>";
    elemento +=
      "<td class='td-min'><button class='botao-table-min' onClick='adicionarEmpate(" +
      i +
      ")'>E</button></td>";

    elemento +=
      "<td class='td-max'><button class='botao-table' onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td>";
    elemento +=
      "<td class='td-min'><button class='botao-table-min' onClick='adicionarDerrota(" +
      i +
      ")'>D</button></td>";

    elemento += "</tr>";
    }
  
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
  
}

var jogadores = [];

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
    "<td><button class='botao-table' style=''onClick='adicionarVitoria(" +
    i +
    ")'>Vitória</button></td>";
  elemento +=
    "<td><button class='botao-table-min' onClick='adicionarVitoria(" +
    i +
    ")'>V</button></td>";

  elemento +=
    "<td><button class='botao-table' onClick='adicionarEmpate(" +
    i +
    ")'>Empate</button></td>";
  elemento +=
    "<td><button class='botao-table-min' onClick='adicionarEmpate(" +
    i +
    ")'>E</button></td>";

  elemento +=
    "<td><button class='botao-table' onClick='adicionarDerrota(" +
    i +
    ")'>Derrota</button></td>";
  elemento +=
    "<td><button class='botao-table-min' onClick='adicionarDerrota(" +
    i +
    ")'>D</button></td>";

  elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}
