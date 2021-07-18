import { listBannerDeportes } from "./listBannerDeportes.js";
import { calzadoProductos } from "../calzados/calzadosProductos.js";
import { Banner, CarouselBanner } from "../../helpers/bannerCarousel.js";
import { sectionPromo } from "../../helpers/sectionPromo.js";
import { promoSectionDeportes } from "./promoSectionDeportes.js";
import { complementCards } from "../../helpers/complementCards.js";
import { complementCardsDeportes } from "./complementCardsDeportes.js";
import { SectionGrow } from "../../helpers/sectionGrow.js";
import { SectionGrowDeportes } from "./sectionGrowDeportes.js";
import { getProductsJquery } from "../../helpers/getProducts.js";

export const Deportes = () => {
    const $deportes = document.createElement("div"),
        $sectionProducts = document.createElement("section");


    const bannerHome = () => {
        return new Promise((resolve,reject) => {
            resolve($deportes.appendChild(Banner(listBannerDeportes,"Deportes")))
        })
    }
    const carouselBannerHome = async () => {
        await bannerHome();
        CarouselBanner("Deportes")
    }
    carouselBannerHome();


    
    $sectionProducts.classList.add("section-products");
    $deportes.appendChild($sectionProducts);
    getProductsJquery("futbol");
    $deportes.appendChild(sectionPromo(promoSectionDeportes,"deportes"));
    $deportes.appendChild(SectionGrow(SectionGrowDeportes));
    $deportes.appendChild(complementCards(complementCardsDeportes,"home"));

    return $deportes;
}