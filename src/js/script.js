document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");

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
        /* falta 10 embaixo */
        "src/image/imgs-produtos/slide-nuven.webp", 
        "src/image/imgs-produtos/videogamer.webp", 
        "src/image/imgs-produtos/bike.jpg", 
        "src/image/imgs-produtos/geladeira.jpg", 
        "src/image/imgs-produtos/bola de vôlei.jpg", 
        "src/image/imgs-produtos/camiseta.jpg", 
        "src/image/imgs-produtos/relógio.jpg", 
        "src/image/imgs-produtos/bike.jpg", 
        "src/image/imgs-produtos/geladeira.jpg", 
        "src/image/imgs-produtos/bola de vôlei.jpg", 
        "src/image/imgs-produtos/camiseta.jpg", 
        "src/image/imgs-produtos/relógio.jpg", 
        // Adicione mais imagens conforme necessário
    ];

    const titulosProdutos = [
        "bike | moderna",
    ]

    const paragrafosProdutos = [
        "para usos de exercicios fisicos",
    ]

    // Gerar os 30 formulários com IDs diferentes
    for (let i = 1; i <= 30; i++) {
        const formDiv = document.createElement("div");

        // Se o número de imagens for menor que 30, as imagens vão se repetir
        const imagemProduto = imagensProdutos[(i - 1) % imagensProdutos.length];
        
        formDiv.innerHTML = `
            <form id="painelEndereco${i}" style="display: none;">
                <div class="conteiner-formulario">
                    <div class="titulo-formulario-border">
                        <div class="btn-voltar-e-titulo-formulario">
                            <button type="button" id="btnFecharPainel${i}" class="caixa-btn-voltar-formulario">
                                <img src="src/image/icons-navegações/img-voltar.png" alt="botão voltar" class="img-btn-voltar-formulario">
                            </button>
                            <h1 class="titulo-formulario">Preencha seu endereço:</h1>
                        </div>
                        <div class="inputs-do-formulario">
                            <p class="conteiner-inputs">
                                <input type="text" name="nomecompleto" id="nomecompleto${i}" placeholder="Nome Completo" class="caixa-de-inputs">
                            </p>
                            <p class="conteiner-inputs">
                                <input type="number" name="telefone" id="telefone${i}" placeholder="Telefone" class="caixa-de-inputs">
                            </p>
                            <p class="conteiner-inputs">
                                <input type="text" name="cidade" id="cidade${i}" placeholder="Cidade" class="caixa-de-inputs">
                            </p>
                            <p class="conteiner-inputs">
                                <input type="text" name="bairro" id="bairro${i}" placeholder="Bairro" class="caixa-de-inputs">
                            </p>
                            <div class="display-rua-numero-da-casa">
                                <p class="conteiner-inputs">
                                    <input type="text" name="rua" id="rua${i}" placeholder="Rua" class="caixa-de-inputs-rua">
                                </p>
                                <p class="conteiner-inputs">
                                    <input type="number" name="numerocasa" id="numerocasa${i}" placeholder="Número" class="caixa-de-inputs-numero-casa">
                                </p>
                            </div>
                            <p class="conteiner-inputs">
                                <input type="text" name="complemento" id="complemento${i}" placeholder="Complemento" class="caixa-de-inputs">
                            </p>
                            <p>
                                <div class="checkbox-formulario">
                                    <img src="src/image/img-forma-pagamento/pix-logo.png" alt="pix logo" class="pix-img">
                                    <h3 class="pix-titulo">Pix</h3>
                                    <input type="checkbox" name="formaPagamento" class="pix-checkbox" id="pixRadio${i}">
                                </div>
                            </p>
                            <div id="chavePixContainer${i}" style="display: none;">
                                <div class="chave-pix-formulario">
                                    <h3>Chave Pix: 58b785b2-5a18-467a-af52-ad20ed81a22a</h3>
                                </div>
                            </div>
                            <div class="valor-total-painel-endereço">
                                <h3>Valor total: 80,45</h3>
                            </div>
                            <p>
                                <input type="button" value="Finalizar Compra" class="btn-formulario" id="btnFinalizarCompra${i}">
                            </p>
                        </div>
                    </div>
                </div>
            </form>
            
            <div class="conteiner">
                <img src="${imagemProduto}" class="img-produtos" alt="Produto ${i}">
                <div class="text-conteiner">
                    <div class="area-favorito-e-compra">
                        <h3 class="titulo-tenis-air-force">${titulosProdutos}</h3>
                        <img src="src/image/icons-menu/carrinho.png" class="btn-carrinho" alt="Carrinho">
                    </div>
                    <p class="paragrafo-tenis-air-force">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="area-favorito-e-compra">
                        <h3 class="preço">R$ 80,35</h3>
                        <button class="btn-de-comprar" id="btnCompreAgora${i}">Compre Agora</button>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(formDiv);

        // Configuração Pix: checkbox
        const pixCheckbox = document.getElementById(`pixRadio${i}`);
        const chavePixContainer = document.getElementById(`chavePixContainer${i}`);
        pixCheckbox.addEventListener('change', () => {
            if (pixCheckbox.checked) {
                chavePixContainer.style.display = 'block';
            } else {
                chavePixContainer.style.display = 'none';
            }
        });

        // Referências para abrir e fechar o painel de endereço
        const btnCompreAgora = document.getElementById(`btnCompreAgora${i}`);
        const painelEndereco = document.getElementById(`painelEndereco${i}`);
        const btnFecharPainel = document.getElementById(`btnFecharPainel${i}`);
        btnCompreAgora.addEventListener('click', () => {
            painelEndereco.style.display = 'flex';
            document.body.classList.add('painel-ativo');
        });
        btnFecharPainel.addEventListener('click', () => {
            painelEndereco.style.display = 'none';
            document.body.classList.remove('painel-ativo');
        });
    }

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
