function comedia(){
  
  var imgComedia = ["https://m.media-amazon.com/images/M/MV5BMTk3NTM4NDg3OF5BMl5BanBnXkFtZTcwNDk3MzEwNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYzRmOTYyZDgtZWJmMy00OTI1LWExMjgtZjRmYTJiNzgwMGIwXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UY268_CR16,0,182,268_AL_.jpg"];
  var linkComedia = ["https://www.imdb.com/title/tt1488555/?ref_=nv_sr_srsg_0", "https://www.imdb.com/title/tt14111726/?ref_=fn_al_tt_1"];
  var nomeComedia = ["Eu Queria Ter a Sua Vida", "Cabras da Peste"];
  
  
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = ("");
  
  for (var i = 0; i < imgComedia.length; i++) {
    var categoria = document.getElementById("categoria");
    categoria.innerHTML = ("<h2>Filmes de Comédia</h2>");
    resultado.innerHTML += ('<div class="conteudo"><div class="imagem"><a href=' + linkComedia[i] + ' target="_blank"><img src=' + imgComedia[i] + ' class="cartaz"></a></div> <h3>' + nomeComedia[i] + '</h3></div>');
    
  }
  }

function romance(){
  
  var imgRomance = ["https://m.media-amazon.com/images/M/MV5BMjQ3NjM5MTAzN15BMl5BanBnXkFtZTgwODQzMDAwNjM@._V1_UX182_CR0,0,182,268_AL_.jpg"];
  var linkRomance = ["https://www.imdb.com/title/tt3846674/?ref_=nv_sr_srsg_0"];
  var nomeRomance = ["Para Todos os Garotos que já Amei"];
  
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = ("");
  
  for (var i = 0; i < imgRomance.length; i++) {
    var categoria = document.getElementById("categoria");
    categoria.innerHTML = ("<h2>Filmes de Romance</h2>");
    resultado.innerHTML += ('<div class="conteudo"><div class="imagem"><a href=' + linkRomance[i] + ' target="_blank"><img src=' + imgRomance[i] + ' class="cartaz"></a></div> <h3>' + nomeRomance[i] + '</h3></div>');
  }
  }

function acao(){
  
  var imgAcao = ["https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"];
  var linkAcao = ["https://www.imdb.com/title/tt0232500/?ref_=fn_al_tt_1"];
  var nomeAcao = ["Velozes e Furiosos"];

  var resultado = document.getElementById("resultado");
  resultado.innerHTML = ("");
  
  for (var i = 0; i < imgAcao.length; i++) {
    var categoria = document.getElementById("categoria");
    categoria.innerHTML = ("<h2>Filmes de Ação</h2>");
    resultado.innerHTML += ('<div class="conteudo"><div class="imagem"><a href=' + linkAcao[i] + ' target="_blank"><img src=' + imgAcao[i] + ' class="cartaz"></a></div> <h3>' + nomeAcao[i] + '</h3></div>');
  }
  }

function ficcaoCientifica(){
  
  var imgFiccaoCientifica = ["https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"];
  var linkFiccaoCientifica = ["https://www.imdb.com/title/tt0088763/?ref_=fn_al_tt_1"];
  var nomeFiccaoCientifica = ["De Volta Para o Futuro"];

  var resultado = document.getElementById("resultado");
  resultado.innerHTML = ("");
  
  for (var i = 0; i < imgFiccaoCientifica.length; i++) {
    var categoria = document.getElementById("categoria");
    categoria.innerHTML = ("<h2>Filmes de Ficção Científica</h2>");
    resultado.innerHTML += ('<div class="conteudo"><div class="imagem"><a href=' + linkFiccaoCientifica[i] + ' target="_blank"><img src=' + imgFiccaoCientifica[i] + ' class="cartaz"></a></div> <h3>' + nomeFiccaoCientifica[i] + '</h3></div>');
  }
  }

function documentario(){
  
  var imgDocumentario = ["https://m.media-amazon.com/images/M/MV5BNDVhMGNhYjEtMDkwZi00NmQ5LWFkODktYzhiYjY2NTZmYTNhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR3,0,182,268_AL_.jpg"];
  var linkDocumentario = ["https://www.imdb.com/title/tt11464826/?ref_=fn_al_tt_1"];
  var nomeDocumentario = ["O Dilema das Redes"];
  
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = ("");
  
  for (var i = 0; i < imgDocumentario.length; i++) {
    var categoria = document.getElementById("categoria");
    categoria.innerHTML = ("<h2>Documentários</h2>");
    resultado.innerHTML += ('<div class="conteudo"><div class="imagem"><a href=' + linkDocumentario[i] + ' target="_blank"><img src=' + imgDocumentario[i] + ' class="cartaz"></a></div> <h3>' + nomeDocumentario[i] + '</h3></div>');
  }
  }

function serie(){
  
  var imgSerie = ["https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg"];
  var linkSerie = ["https://www.imdb.com/title/tt0108778/?ref_=nv_sr_srsg_0"];
  var nomeSerie = ["Friends"];

  var resultado = document.getElementById("resultado");
  resultado.innerHTML = ("");
  
  for (var i = 0; i < imgSerie.length; i++) {
    var categoria = document.getElementById("categoria");
    categoria.innerHTML = ("<h2>Séries</h2>");
    resultado.innerHTML += ('<div class="conteudo"><div class="imagem"><a href=' + linkSerie[i] + ' target="_blank"><img src=' + imgSerie[i] + ' class="cartaz"></a></div> <h3>' + nomeSerie[i] + '</h3></div>');
  }
  }

function semCategoria(){
  
  var imgSemCategoria = ["https://m.media-amazon.com/images/M/MV5BZGI5OTU4MWQtMDE4ZS00ZWViLTk2OTItMmU5ZmRlNzg1N2Y5XkEyXkFqcGdeQXVyMzc3MTE2Mzg@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"];
  var linkSemCategoria = ["https://www.imdb.com/title/tt11768948/?ref_=fn_al_tt_1", "https://www.imdb.com/title/tt0114709/?ref_=fn_al_tt_1"];
  var nomeSemCategoria = ["Se Algo Acontecer... Te Amo", "Toy Story"]

  var resultado = document.getElementById("resultado");
  resultado.innerHTML = (""); 
  
  for (var i = 0; i < imgSemCategoria.length; i++) {
    var categoria = document.getElementById("categoria");
    categoria.innerHTML = ("<h2>Sem Categoria</h2>");
    resultado.innerHTML += ('<div class="conteudo"><div class="imagem"><a href=' + linkSemCategoria[i] + ' target="_blank"><img src=' + imgSemCategoria[i] + ' class="cartaz"></a></div> <h3>' + nomeSemCategoria[i] + '</h3></div>');
  }
  }