document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const fotoId = urlParams.get('id');

    const fotos = [
        {
            id: 1,
            src: "foto1.jpeg",
            descricao: "Neste dia, fomos ao VillaFood comer nosso salgadinho e conversar besta kkkk."
        },
        {
            id: 2,
            src: "foto2.jpeg",
            descricao: "Essa aqui foi quando a gente passou o ano novo juntos na casa da sua tia, foi algo muito prazeroso e único, foi nosso segundo ano novo juntos, e virão muitos outros pela frente."
        },
        {
            id: 3,
            src: "foto3.jpeg",
            descricao: "Nesse aqui a gente foi ao Arraiá do IFMA, foi muito bom, comemos, vimos as apresentações e rimos bastante. É muito gostoso viver esses momentos com você."
        }
    ];

    const fotoSelecionada = fotos.find(foto => foto.id == fotoId);

    if (fotoSelecionada) {
        document.getElementById("foto").src = fotoSelecionada.src;
        document.getElementById("descricao").textContent = fotoSelecionada.descricao;
    } else {
        document.getElementById("foto").src = "erro.jpg";
        document.getElementById("descricao").textContent = "Foto não encontrada.";
    }

    // Criando um iframe invisível para manter a música tocando
    if (!document.getElementById("musicFrame")) {
        const musicFrame = document.createElement("iframe");
        musicFrame.id = "musicFrame";
        musicFrame.src = "music.html";
        musicFrame.style.display = "none";
        document.body.appendChild(musicFrame);
    }
});