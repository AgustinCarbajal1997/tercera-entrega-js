export const BannerHome = () => {

    // RENDERIZADO DE IMAGENES Y TITULOS DEL BANNER
    const $sectionBanner = document.createElement("section"),
        $divItem = document.createElement("div"),
        $img = document.createElement("img"),
        $title = document.createElement("h2"),
        $divItem1 = document.createElement("div"),
        $img1 = document.createElement("img"),
        $title1 = document.createElement("h2"),
        $divItem2 = document.createElement("div"),
        $img2 = document.createElement("img"),
        $title2 = document.createElement("h2"),
        $divItem3 = document.createElement("div"),
        $img3 = document.createElement("img"),
        $title3 = document.createElement("h2"),
        
        $leftArrow = document.createElement("button"),
        $rightArrow = document.createElement("button"),
        $fragment = document.createDocumentFragment();

        $img.dataset.bannerimg = "";
        $img.classList.add("bannerHome--image0");
        $img.src = "app/assets/fotoeditar/bnner111.png";
        $img.alt = "JUST DO IT";
        $title.dataset.bannertitle = "";
        $title.classList.add("bannerHome--title0");
        $title.textContent = "JUST DO IT";
        $divItem.dataset.banner = "";
        $divItem.classList.add("bannerHome--item");
        $divItem.classList.add("isActive");
        $divItem.appendChild($img);
        $divItem.appendChild($title);
        

        $img1.dataset.bannerimg = "";
        $img1.src = "app/assets/fotoeditar/banner444.png";
        $img1.alt = "WORK HARD EVERYDAY";
        $title1.dataset.bannertitle = "";
        $title1.textContent = "WORK HARD EVERYDAY";
        $divItem1.classList.add("bannerHome--item");
        $divItem1.dataset.banner = "";
        $divItem1.appendChild($img1);
        $divItem1.appendChild($title1);
        

        $img2.dataset.bannerimg = "";
        $img2.src = "app/assets/fotoeditar/banner1010.png";
        $img2.alt = "WORK HARD EVERYDAY";
        $title2.dataset.bannertitle = "";
        $title2.textContent = "KEEP MOVING";
        $divItem2.classList.add("bannerHome--item");
        $divItem2.dataset.banner = "";
        $divItem2.appendChild($img2);
        $divItem2.appendChild($title2);
        

        $img3.dataset.bannerimg = "";
        $img3.src = "app/assets/fotoeditar/banner999.png";
        $img3.alt = "WORK HARD EVERYDAY";
        $title3.dataset.bannertitle = "";
        $title3.textContent = "CHALLENGE YOUR LIMITS";
        $divItem3.classList.add("bannerHome--item");
        $divItem3.dataset.banner = "";
        $divItem3.appendChild($img3);
        $divItem3.appendChild($title3);
        

        $leftArrow.classList.add("leftArrow");
        $leftArrow.innerHTML = `<i class="fas fa-angle-double-left"></i>`;
        $rightArrow.classList.add("rightArrow");
        $rightArrow.innerHTML = `<i class="fas fa-angle-double-right"></i>`;
        


        
        
        $fragment.appendChild($divItem);
        $fragment.appendChild($divItem1);
        $fragment.appendChild($divItem2);
        $fragment.appendChild($divItem3);
        $fragment.appendChild($leftArrow);
        $fragment.appendChild($rightArrow);

        $sectionBanner.classList.add("bannerHome");
        $sectionBanner.appendChild($fragment);

        return $sectionBanner;
}

export const carousel = () => {
    
    // CAROUSEL DE IMAGENES DEL BANNER

    const $dataBanner = document.querySelectorAll("[data-banner]"),
        $dataBannerImg = document.querySelectorAll("[data-bannerimg]"),
        $dataBannerTitle = document.querySelectorAll("[data-bannertitle]"),
        $rightArrow = document.querySelector(".rightArrow i"),
        $leftArrow = document.querySelector(".leftArrow i");
    
    document.addEventListener("click", e=> {
        // CAROUSEL HACIA LA DERECHA
        if(e.target === $rightArrow){
            let current;
            for (let i = 0; i < $dataBanner.length; i++) {
                if($dataBanner[i].classList.contains("isActive")){
                    current = i;
                    break;
                }
            }
                
                $dataBanner[current].classList.remove("isActive");
                setTimeout(() => {
                    $dataBannerImg[current].classList.remove(`bannerHome--image${current}`);
                    $dataBannerTitle[current].classList.remove(`bannerHome--title${current}`);
                    current === $dataBanner.length - 1 ? current = 0 : current += 1;
                    
                    $dataBannerImg[current].classList.add(`bannerHome--image${current}`)
                    $dataBannerTitle[current].classList.add(`bannerHome--title${current}`)
                    $dataBanner[current].classList.add("isActive");
                }, 200);
                
        }
        // CAROUSEL HACIA LA IZQUIERDA
        if(e.target === $leftArrow){
            let current;
            for (let i = 0; i < $dataBanner.length; i++) {
                if($dataBanner[i].classList.contains("isActive")){
                    current = i;
                    break;
                }
            }
                
                $dataBanner[current].classList.remove("isActive");
                setTimeout(() => {
                    $dataBannerImg[current].classList.remove(`bannerHome--image${current}`);
                    $dataBannerTitle[current].classList.remove(`bannerHome--title${current}`);
                    current === 0 ? current = $dataBanner.length - 1 : current -= 1;
                    console.log(current)
                    $dataBannerImg[current].classList.add(`bannerHome--image${current}`)
                    $dataBannerTitle[current].classList.add(`bannerHome--title${current}`)
                    $dataBanner[current].classList.add("isActive");
                }, 200);
        }
    })

    
    

}




 