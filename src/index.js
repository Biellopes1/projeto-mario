console.log('mostrar o document',document)

console.log(document.querySelector(".botao-traler"));

const botaoTraler = document.querySelector(".botao-traler");
botaoTraler.addEventListener("click",()=>{
    console.log("clicou no botão veja o traler");
    modal.classList.add("aberto")
});

const modal = document.querySelector(".modal");

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click",() => {
    modal.classList.remove("aberto");
    video.setAttribute("src","")
});


const linkDoVideo =video.src;
const video = document.getElementById("video");
video.setAttribute("src",linkDoVideo);
const