export const Banner = (listaBanner, className) => {
    const $sectionBanner = document.createElement("section"),
    $leftArrow = document.createElement("button"),
    $rightArrow = document.createElement("button"),
    $fragment = document.createDocumentFragment();

    listaBanner.forEach((el,index) => {
        const $divItem = document.createElement("div"),
            $img = document.createElement("img"),
            $title = document.createElement("h2"),
            $divSmallPicture = document.createElement("div"),
            $imgSmallPicture = document.createElement("img");

            $img.dataset.bannerimg = "";
            index === 0 && $img.classList.add(`banner${className}--image${index}`);
            $img.src = el.image;
            $img.alt = el.title;
            $title.dataset.bannertitle = "";
            index === 0 && $title.classList.add(`banner${className}--title${index}`);
            $title.textContent = el.title;
            $divItem.dataset.banner = "";
            $divItem.classList.add(`banner${className}--item`);

            index === 0 && $divItem.classList.add("isActive");
            
            $imgSmallPicture.src = el.smallPicture;
            $imgSmallPicture.alt = el.title;
            $divSmallPicture.appendChild($imgSmallPicture);
            $divSmallPicture.classList.add("banner-divSmallPicture");


            $divItem.appendChild($divSmallPicture);
            $divItem.appendChild($img);
            $divItem.appendChild($title);

            $fragment.appendChild($divItem);
    });

    
    $leftArrow.classList.add("leftArrow");
    $leftArrow.innerHTML = `<i class="fas fa-arrow-left"></i>`;
    $rightArrow.classList.add("rightArrow");
    $rightArrow.innerHTML = `<i class="fas fa-arrow-right"></i>`;


    $fragment.appendChild($leftArrow);
    $fragment.appendChild($rightArrow);

    $sectionBanner.classList.add(`banner${className}`);
    $sectionBanner.appendChild($fragment);
    return $sectionBanner;
}





export const CarouselBanner = (className) => {
  // CAROUSEL DE IMAGENES DEL BANNER

  const $dataBanner = document.querySelectorAll("[data-banner]"),
    $dataBannerImg = document.querySelectorAll("[data-bannerimg]"),
    $dataBannerTitle = document.querySelectorAll("[data-bannertitle]"),
    $rightArrow = document.querySelector(".rightArrow i"),
    $leftArrow = document.querySelector(".leftArrow i");

    // funcion carousel hacia la derecha
    const carouselNext = () =>{
      let current;
      for (let i = 0; i < $dataBanner.length; i++) {
        if ($dataBanner[i].classList.contains("isActive")) {
          current = i;
          break;
        }
      }

      $dataBanner[current].classList.remove("isActive");
      setTimeout(() => {
        $dataBannerImg[current].classList.remove(`banner${className}--image${current}`);
        $dataBannerTitle[current].classList.remove(
          `banner${className}--title${current}`
        );
        current === $dataBanner.length - 1 ? (current = 0) : (current += 1);

        $dataBannerImg[current].classList.add(`banner${className}--image${current}`);
        $dataBannerTitle[current].classList.add(`banner${className}--title${current}`);
        $dataBanner[current].classList.add("isActive");
      }, 200);
    }


    // funcion carousel hacia la izquierda
    const carouselPrev = () => {
      let current;
      for (let i = 0; i < $dataBanner.length; i++) {
        if ($dataBanner[i].classList.contains("isActive")) {
          current = i;
          break;
        }
      }

      $dataBanner[current].classList.remove("isActive");
      setTimeout(() => {
        $dataBannerImg[current].classList.remove(`banner${className}--image${current}`);
        $dataBannerTitle[current].classList.remove(
          `banner${className}--title${current}`
        );
        current === 0 ? (current = $dataBanner.length - 1) : (current -= 1);
        $dataBannerImg[current].classList.add(`banner${className}--image${current}`);
        $dataBannerTitle[current].classList.add(`banner${className}--title${current}`);
        $dataBanner[current].classList.add("isActive");
      }, 200);
    }
  

  // dependiendo de que flecha active el evento, se ira hacia izquierda o derecha llamando a la funcion correspondiente
  document.addEventListener("click", (e) => {
    // CAROUSEL HACIA LA DERECHA
    if (e.target === $rightArrow) {
      carouselNext();
    }
    // CAROUSEL HACIA LA IZQUIERDA
    if (e.target === $leftArrow) {
      carouselPrev();
    }
  });

  // con un intervalo de 6 segundos, se van pasando los slides
  setInterval(() => {
    carouselNext()
  }, 6000);

};



