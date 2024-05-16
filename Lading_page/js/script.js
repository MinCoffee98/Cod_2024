function adicionarAoCarrinho(id) {
    var produto = {
        id: id,
        nome: "",
        preco: 0
    };

    // Adicionar o produto ao carrinho (simulação)
    switch (id) {
        case 1:
            produto.nome = "Produto 1";
            produto.preco = 20.00;
            break;
        case 2:
            produto.nome = "Produto 2";
            produto.preco = 30.00;
            break;
        case 3:
            produto.nome = "Produto 3";
            produto.preco = 50.00;
            break;
    }

    // Adicionar o produto à lista do carrinho
    var listaCarrinho = document.getElementById("lista-carrinho");
    var itemCarrinho = document.createElement("li");
    itemCarrinho.textContent = produto.nome + " - R$" + produto.preco.toFixed(2);
    listaCarrinho.appendChild(itemCarrinho);
}