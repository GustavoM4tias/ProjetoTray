document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('.card');

  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      cards.forEach(function (c) {
        c.classList.remove('selected');
      });
      card.classList.add('selected');
    });
  });

  var categoriasInput = document.getElementById('categorias');
  var adicionarProdutoInput = document.getElementById('adicionarProdutoInput');
  var btnAdicionarProduto = document.getElementById('btnAdicionarProduto');
  var btnSalvarProduto = document.getElementById('btnSalvarProduto');
  var btnAdicionarCategoria = document.getElementById('btnAdicionarCategoria');
  var categoriasAdicionadas = document.getElementById('categoriasAdicionadas');
  var produtosAdicionados = document.getElementById('produtosAdicionados');
  var selectCategoriaProduto = document.getElementById('categoriaProdutoAdicionar');

  btnAdicionarProduto.addEventListener('click', function () {
    adicionarProdutoInput.style.display = 'block';
  });

  btnSalvarProduto.addEventListener('click', function () {
    var nomeProduto = document.getElementById('nomeProduto').value;
    var precoProduto = document.getElementById('precoProduto').value;
    var descricaoProduto = document.getElementById('descricaoProduto').value;
    var categoriaProduto = selectCategoriaProduto.value;

    var produtoDiv = document.createElement('div');
    produtoDiv.classList.add('produto');
    produtoDiv.innerHTML = '<strong>Nome:</strong> ' + nomeProduto + '<br>' +
                           '<strong>Preço:</strong> R$ ' + precoProduto + '<br>' +
                           '<strong>Descrição:</strong> ' + descricaoProduto + '<br>' +
                           '<strong>Categoria:</strong> ' + categoriaProduto + '<br>' +
                           '<button type="button" class="btn btn-danger btn-excluir">Excluir</button>';
    produtosAdicionados.appendChild(produtoDiv);

    document.getElementById('nomeProduto').value = '';
    document.getElementById('precoProduto').value = '';
    document.getElementById('descricaoProduto').value = '';

    adicionarProdutoInput.style.display = 'none';

    var btnExcluir = produtoDiv.querySelector('.btn-excluir');
    btnExcluir.addEventListener('click', function () {
      produtoDiv.remove();
    });
  });

  btnAdicionarCategoria.addEventListener('click', function () {
    var categorias = categoriasInput.value.trim();
    if (categorias !== '') {
      categorias.split(',').forEach(function (categoria) {
        categoria = categoria.trim();
        if (categoria !== '') {
          var categoriaDiv = document.createElement('div');
          categoriaDiv.classList.add('categoria');
          categoriaDiv.innerHTML = categoria + '<i class="fas fa-trash-alt"></i>';
          categoriasAdicionadas.appendChild(categoriaDiv);

          var option = document.createElement('option');
          option.text = categoria;
          option.value = categoria;
          selectCategoriaProduto.appendChild(option);
        }
      });
      categoriasInput.value = ''; 
    }
  });

  var selectCategoriaProduto = document.getElementById('categoriaProdutoAdicionar');
  categoriasAdicionadas.querySelectorAll('.categoria').forEach(function (categoriaDiv) {
      var option = document.createElement('option');
      option.text = categoriaDiv.textContent.trim();
      option.value = categoriaDiv.textContent.trim();
      selectCategoriaProduto.appendChild(option);
  });

  categoriasAdicionadas.addEventListener('click', function (event) {
    if (event.target.classList.contains('fa-trash-alt')) {
      event.target.parentNode.remove();
    }
  });
});

