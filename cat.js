
const catImage = document.getElementById('cat-image');
const getCatButton = document.getElementById('get-cat-button');

function getCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const imageUrl = data[0].url;
            catImage.src = imageUrl;
        })
        .catch(error => console.error('Erro ao obter a imagem do gato:', error));
}

getCatButton.addEventListener('click', getCatImage);
getCatImage(); // Carrega uma imagem de gato aleatória quando a página é carregada
