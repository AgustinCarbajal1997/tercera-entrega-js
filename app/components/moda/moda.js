import { listBannerModa } from "./listBannerModa.js";
import { Banner, CarouselBanner } from "../../helpers/bannerCarousel.js";
import { sectionPromo } from "../../helpers/sectionPromo.js";
import { promoSectionModa } from "./promoSectionModa.js";
import { complementCards } from "../../helpers/complementCards.js";
import { complementCardsModa } from "./complementCardsModa.js";
import { SectionGrow } from "../../helpers/sectionGrow.js";
import { SectionGrowModa } from "./sectionGrowModa.js";
import { getProductsJquery } from "../../helpers/getProducts.js";

export const Moda = () => {
    const $moda = document.createElement("div"),
    $sectionProducts = document.createElement("section");

    // traigo el banner de moda
    const bannerHome = () => {
        return new Promise((resolve,reject) => {
            resolve($moda.appendChild(Banner(listBannerModa,"Moda")))
        })
    }
    const carouselBannerHome = async () => {
        await bannerHome();
        CarouselBanner("Moda")
    }
    carouselBannerHome();



    $sectionProducts.dataset.visibility = ""; //data que permite el obersever del fade
    $sectionProducts.classList.add("section-products");
    $moda.appendChild($sectionProducts);
    getProductsJquery("moda");
    $moda.appendChild(sectionPromo(promoSectionModa,"moda"))
    $moda.appendChild(SectionGrow(SectionGrowModa));
    $moda.appendChild(complementCards(complementCardsModa,"home"));
    return $moda;
}