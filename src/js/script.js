document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const inputBusca = document.getElementById("input-de-buscar");

    // Definindo um array com as imagens dos produtos
    const imagensProdutos = [
        "src/image/imgs-produtos/bike.jpg", 
        "src/image/imgs-produtos/geladeira.jpg", 
        "src/image/imgs-produtos/bola de vôlei.jpg", 
        "src/image/imgs-produtos/camera-de-seguranca.webp", 
        "src/image/imgs-produtos/tenis air force.jpg", 
        "src/image/imgs-produtos/12-par-de-meias.webp", 
        "src/image/imgs-produtos/camisa-black.webp", 
        "src/image/imgs-produtos/camisa-blue.webp", 
        "src/image/imgs-produtos/fita-led.webp", 
        "src/image/imgs-produtos/fone-sem-fio.webp", 
        "src/image/imgs-produtos/joelheira.webp", 
        "src/image/imgs-produtos/maquininha-de-barba.webp", 
        "src/image/imgs-produtos/meias-longas.webp", 
        "src/image/imgs-produtos/parafusadeira.webp", 
        "src/image/imgs-produtos/piscina-inflavel.webp", 
        "src/image/imgs-produtos/relogio-analogico.webp", 
        "src/image/imgs-produtos/relogio-smartwaltch.webp", 
        "src/image/imgs-produtos/retro-gamer.webp", 
        "src/image/imgs-produtos/slide-nuven.webp", 
        "src/image/imgs-produtos/videogamer.webp",
        "src/image/imgs-produtos/oculos-sol.webp",
        "src/image/imgs-produtos/kit-masc.webp",
        "src/image/imgs-produtos/headset.webp",
        "src/image/imgs-produtos/kit-facas.webp",
        "src/image/imgs-produtos/carteira-ultrafina.webp",
        "src/image/imgs-produtos/cintolargo.webp",
        "src/image/imgs-produtos/Lanternaportatil.webp",
        "src/image/imgs-produtos/cinta-de-correçao.webp",
        "src/image/imgs-produtos/minimassageador.webp",
        "src/image/imgs-produtos/braco-articulado.webp"
    ];

    const titulosProdutos = [
        "Bike | Moderna",
        "Geladeira",
        "Bola de Vôlei",
        "Câmera de Segurança",
        "Tênis Air Force",
        "Par de Meias",
        "Camisa Preta",
        "Camisa Azul",
        "Fita de LED",
        "Fone Sem Fio",
        "Joelheira",
        "Maquininha de Barba",
        "Meias Longas",
        "Parafusadeira",
        "Piscina Inflável",
        "Relógio Analógico",
        "Smartwatch",
        "Retro Gamer",
        "Slide Nuvem",
        "Videogame",
        "Oculos de Sol",
        "Kit Masculino",
        "Headset Clásssico",
        "Kit de Facas",
        "Carteira Ultrafina",
        "Cinto Largo",
        "Lanterna Portátil",
        "Cinta de Correção",
        "Mini Massagiador",
        "Braço Articulado",
    ];

    const paragrafosProdutos = [
        "Para usos de exercícios físicos",
        "Armazenamento eficiente para sua casa",
        "Perfeita para suas partidas",
        "Segurança em primeiro lugar",
        "Conforto e estilo garantidos",
        "Pacote com 12 pares",
        "Design elegante e confortável",
        "Versátil e moderna",
        "Ilumine seu ambiente",
        "Som de alta qualidade",
        "Proteção para seus joelhos",
        "Raspe com precisão",
        "Estilo e conforto",
        "Facilite suas tarefas",
        "Diversão garantida",
        "Clássico e funcional",
        "Tecnologia no seu pulso",
        "Jogos retrô incríveis",
        "Conforto para seus pés",
        "Experiência de alta performance",
        "Proteja seus olhos da luz solar",
        "Estilo de melhor forma 3 em 1",
        "Alta qualidade para seus ouvidos",
        "Corte rápido para sua sua vida ",
        "Leve seu dinheiro para qualquer lugar com nossa carteira",
        "Segure suas calças para não passar vergonha",
        "Deixe seu mundo mais claro",
        "Saia do formato C, para letra I",
        "Vibre sua Vida",
        "Controle seu Ângulo"
    ];

    const precoProdutos = [
        "2.667,99",
        "3.199,99",
        "89,90",
        "299,99",
        "459,90",
        "79,99",
        "59,90",
        "69,90",
        "129,99",
        "199,99",
        "49,90",
        "149,90",
        "39,90",
        "399,99",
        "199,90",
        "99,99",
        "599,99",
        "349,99",
        "99,90",
        "4.499,99",
        "39,99",
        "79,65",
        "64,99",
        "29,99",
        "19,99",
        "49,99",
        "67,90",
        "24,90",
        "34,99",
        "89,90"
    ];

    const produtos = titulosProdutos.map((titulo, index) => ({ 
        titulo,
        imagem: imagensProdutos[index],
        descricao: paragrafosProdutos[index],
        preco: precoProdutos[index],
        id: index // Adicionando um id único para cada produto
    }));
    
    const renderProdutos = (produtosFiltrados) => {
        container.innerHTML = ""; // Limpa os produtos existentes
    
        produtosFiltrados.forEach((produto, index) => {
            const divProduto = document.createElement("div");
            divProduto.classList.add("conteiner");
    
            // Renderiza o produto
            divProduto.innerHTML = `
        
                   <div class="produto">
                    <img src="${produto.imagem}" class="img-produtos" alt="${produto.titulo}">
                    <div class="text-conteiner">
                        <div class="area-favorito-e-compra">
                            <h3 class="titulo-tenis-air-force">${produto.titulo}</h3>
                            <img src="src/image/icons-menu/carrinho.png" 
                                 class="btn-carrinho" 
                                 alt="Carrinho" 
                                 data-id="${produto.id}" 
                                 data-titulo="${produto.titulo}" 
                                 data-descricao="${produto.descricao}" 
                                 data-imagem="${produto.imagem}"
                                 data-preco="${produto.preco}">
                        </div>
                        <p class="paragrafo-tenis-air-force">${produto.descricao}</p>
                        <div class="area-favorito-e-compra">
                            <h3 class="preço">R$ ${produto.preco}</h3>
                            <button class="btn-de-comprar" id="btnCompreAgora${produto.id}">Compre Agora</button>
                        </div>
                    </div>
                </div>

 
            `;

            document.querySelectorAll('.btn-carrinho').forEach(btn => {
                btn.addEventListener('click', function () {
                    // Obtem os dados do produto
                    const produto = {
                        id: this.getAttribute('data-id'),
                        titulo: this.getAttribute('data-titulo'),
                        descricao: this.getAttribute('data-descricao'),
                        imagem: this.getAttribute('data-imagem'),
                        preco: this.getAttribute('data-preco')
                    };
            
                    // Recupera o carrinho do localStorage ou cria um novo carrinho vazio
                    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
            
                    // Verifica se o produto já está no carrinho
                    const produtoExistente = carrinho.some(item => item.id === produto.id);
            
                    if (produtoExistente) {
                        // Se o produto já existe no carrinho, exibe uma mensagem
                        const msgErro = document.getElementById('msg-erro');
                        msgErro.textContent = "Este produto já está no carrinho.";
                        msgErro.style.display = 'block'; // Torna a mensagem visível
            
                        // Opcionalmente, você pode esconder a mensagem após 3 segundos
                        setTimeout(() => {
                            msgErro.style.display = 'none';
                        }, 3000);
                    } else {
                        // Caso contrário, adiciona o produto ao carrinho
                        carrinho.push(produto);
            
                        // Atualiza o carrinho no localStorage
                        localStorage.setItem('carrinho', JSON.stringify(carrinho));
            
                        // Redireciona para a página do carrinho
                        window.location.href = 'carrinho.html';
                    }
                });
            });
            
    
            container.appendChild(divProduto);
    
            // Criar e renderizar o formulário de endereço
            const formDiv = document.createElement("div");
            formDiv.innerHTML = `
                <form id="painelEndereco${index}" style="display: none;">
                    <div class="conteiner-formulario">
                        <div class="titulo-formulario-border">
                            <div class="btn-voltar-e-titulo-formulario">
                                <button type="button" id="btnFecharPainel${index}" class="caixa-btn-voltar-formulario">
                                    <img src="src/image/icons-navegações/img-voltar.png" alt="botão voltar" class="img-btn-voltar-formulario">
                                </button>
                                <h1 class="titulo-formulario">Preencha seu endereço:</h1>
                            </div>
                            <div class="inputs-do-formulario">
                                <p class="conteiner-inputs">
                                    <input type="text" name="nomecompleto" id="nomecompleto${index}" placeholder="Nome Completo" class="caixa-de-inputs">
                                </p>
                                <p class="conteiner-inputs">
                                    <input type="number" name="telefone" id="telefone${index}" placeholder="Telefone" class="caixa-de-inputs">
                                </p>
                                <p class="conteiner-inputs">
                                    <input type="text" name="cidade" id="cidade${index}" placeholder="Cidade" class="caixa-de-inputs">
                                </p>
                                <p class="conteiner-inputs">
                                    <input type="text" name="bairro" id="bairro${index}" placeholder="Bairro" class="caixa-de-inputs">
                                </p>
                                <div class="display-rua-numero-da-casa">
                                    <p class="conteiner-inputs">
                                        <input type="text" name="rua" id="rua${index}" placeholder="Rua" class="caixa-de-inputs-rua">
                                    </p>
                                    <p class="conteiner-inputs">
                                        <input type="number" name="numerocasa" id="numerocasa${index}" placeholder="Número" class="caixa-de-inputs-numero-casa">
                                    </p>
                                </div>
                                <p class="conteiner-inputs">
                                    <input type="text" name="complemento" id="complemento${index}" placeholder="Complemento" class="caixa-de-inputs">
                                </p>
                                <p>
                                    <div class="checkbox-formulario">
                                        <img src="src/image/img-forma-pagamento/pix-logo.png" alt="pix logo" class="pix-img">
                                        <h3 class="pix-titulo">Pix</h3>
                                        <input type="checkbox" name="formaPagamento" class="pix-checkbox" id="pixRadio${index}">
                                    </div>
                                </p>
                                <div id="chavePixContainer${index}" style="display: none;">
                                    <div class="chave-pix-formulario">
                                        <h3>Chave Pix: 58b785b2-5a18-467a-af52-ad20ed81a22a</h3>
                                    </div>
                                </div>
                                <div class="valor-total-painel-endereço">
                                    <h3>Valor total: R$ ${produto.preco}</h3>
                                </div>
                                <p>
                                    <input type="button" value="Finalizar Compra" class="btn-formulario" id="btnFinalizarCompra${index}">
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            `;
    
            container.appendChild(formDiv);
    
            // Configuração Pix: checkbox
            const pixCheckbox = document.getElementById(`pixRadio${index}`);
            const chavePixContainer = document.getElementById(`chavePixContainer${index}`);
            pixCheckbox.addEventListener('change', () => {
                chavePixContainer.style.display = pixCheckbox.checked ? 'block' : 'none';
            });
    
            // Referências para abrir e fechar o painel de endereço
            const btnCompreAgora = document.getElementById(`btnCompreAgora${index}`);
            const painelEndereco = document.getElementById(`painelEndereco${index}`);
            const btnFecharPainel = document.getElementById(`btnFecharPainel${index}`);
            btnCompreAgora.addEventListener('click', () => {
                painelEndereco.style.display = 'flex';
                document.body.classList.add('painel-ativo');
            });
            btnFecharPainel.addEventListener('click', () => {
                painelEndereco.style.display = 'none';
                document.body.classList.remove('painel-ativo');
            });
        });
    };
    
    renderProdutos(produtos);
    
    // Lógica de busca
    inputBusca.addEventListener("input", () => {
        const termoBusca = inputBusca.value.trim().toLowerCase();
        const produtosFiltrados = produtos.filter(produto =>
            produto.titulo.toLowerCase().includes(termoBusca) ||
            produto.descricao.toLowerCase().includes(termoBusca)
        );
        renderProdutos(produtosFiltrados);
    });
    

    // Carrossel
    let currentIndex = 0;
    const images = document.querySelectorAll('.carrossel-image');
    const totalImages = images.length;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carrosselContainer = document.querySelector('.naver-carrossel');
    const carrossel = document.querySelector('.carrossel');

    // Função para mudar a imagem do carrossel
    function changeImage() {
        const newTransform = -currentIndex * 100; 
        document.querySelector('.carrossel-images').style.transform = `translateX(${newTransform}%)`;
    }

    // Função para mover para a próxima imagem
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volta para a primeira imagem
        }
        changeImage();
    });

    // Função para mover para a imagem anterior
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalImages - 1; // Vai para a última imagem
        }
        changeImage();
    });

    // Exibir o carrossel ao clicar na imagem do produto
    const productImages = document.querySelectorAll('.img-produtos'); // Imagens dos produtos
    productImages.forEach((image) => {
        image.addEventListener('click', () => {
            carrosselContainer.style.display = 'flex'; // Exibe o carrossel
        });
    });

    // Fechar o carrossel ao clicar fora
    document.addEventListener('click', (event) => {
        if (!carrossel.contains(event.target) && !event.target.classList.contains('img-produtos')) {
            carrosselContainer.style.display = 'none'; // Oculta o carrossel
        }
    });
});


