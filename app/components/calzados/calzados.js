import { listBannerRunning } from "./listBannerRunning.js";
import { complementCardsRunning } from "./complementCardsRunning.js";
import { Banner, CarouselBanner } from "../../helpers/bannerCarousel.js";
import { sectionPromo } from "../../helpers/sectionPromo.js";
import { promoSectionRunning } from "./promoSectionRunning.js";
import { complementCards } from "../../helpers/complementCards.js";
import { SectionGrow } from "../../helpers/sectionGrow.js";
import { SectionGrowRunning } from "./sectionGrowRunning.js";
import { getProductsJquery } from "../../helpers/getProducts.js";

export const Calzados = () => {
    const $calzados = document.createElement("div"),
        $sectionProducts = document.createElement("section");
    

    const bannerHome = () => {
        return new Promise((resolve,reject) => {
            resolve($calzados.appendChild(Banner(listBannerRunning,"Running")))
        })
    }
    const carouselBannerHome = async () => {
        await bannerHome();
        CarouselBanner("Running")
    }
    carouselBannerHome();



    $sectionProducts.classList.add("section-products");
    $calzados.appendChild($sectionProducts);
    getProductsJquery("running");
    $calzados.appendChild(sectionPromo(promoSectionRunning,"running"));
    $calzados.appendChild(SectionGrow(SectionGrowRunning));
    $calzados.appendChild(complementCards(complementCardsRunning,"home"));

    
    
    



    return $calzados;
}