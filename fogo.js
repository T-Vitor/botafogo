let slideIndex = 0;
mostrarSlides();

function mostrarSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(mostrarSlides, 4000); // Troca a imagem a cada 4 segundos
}


