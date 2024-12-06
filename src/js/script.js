/* Configuração pix: checkbox */

// Referência ao botão de checkbox e à chave Pix
const pixCheckbox = document.getElementById('pixRadio');
const chavePixContainer = document.getElementById('chavePixContainer');

// Adiciona um evento ao checkbox
pixCheckbox.addEventListener('change', () => {
    if (pixCheckbox.checked) {
        chavePixContainer.style.display = 'block'; // Exibe a chave Pix
    } else {
        chavePixContainer.style.display = 'none'; // Oculta a chave Pix
    }
});

// Referências aos elementos abrir e fechar painel endereço
const btnCompreAgora = document.getElementById('btnCompreAgora');
const painelEndereco = document.getElementById('painelEndereco');
const btnFecharPainel = document.getElementById('btnFecharPainel');

// Exibe o painel de endereço ao clicar em "Compre Agora"
btnCompreAgora.addEventListener('click', () => {
    painelEndereco.style.display = 'flex'; // Exibe o painel de endereço
    document.body.classList.add('painel-ativo'); // Aplica o desfoque ao fundo
});

// Fecha o painel de endereço ao clicar no botão de fechar
btnFecharPainel.addEventListener('click', () => {
    painelEndereco.style.display = 'none'; // Esconde o painel de endereço
    document.body.classList.remove('painel-ativo'); // Remove o desfoque do fundo
});

// Configuração do carrossel
let currentIndex = 0;
const images = document.querySelectorAll('.carrossel-image');
const totalImages = images.length;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carrosselContainer = document.querySelector('.naver-carrossel');
const carrossel = document.querySelector('.carrossel');

// Função para mudar a imagem
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
