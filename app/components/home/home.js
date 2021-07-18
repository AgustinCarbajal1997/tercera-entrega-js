import { complementCardsHome } from "./complementCardsHome.js";
import { opciones } from "./opciones.js";
import { Banner, CarouselBanner } from "../../helpers/bannerCarousel.js";
import { listBannerHome } from "./listBannerHome.js";
import { sectionPromo } from "../../helpers/sectionPromo.js";
import { promoSectionHome } from "./promoSectionHome.js";
import { complementCards } from "../../helpers/complementCards.js";
import { SectionGrowHome } from "./sectionGrowHome.js";
import { SectionGrow } from "../../helpers/sectionGrow.js";
const Home = () => {
    // RENDERIZADO DE HOME
    const $home = document.createElement("div");

    
    const bannerHome = () => {
        return new Promise((resolve,reject) => {
            resolve($home.appendChild(Banner(listBannerHome,"Home")))
        })
    }
    const carouselBannerHome = async () => {
        await bannerHome();
        CarouselBanner("Home")
    }
    carouselBannerHome();

    $home.appendChild(opciones());
    $home.appendChild(sectionPromo(promoSectionHome,"home"));
    $home.appendChild(SectionGrow(SectionGrowHome));
    $home.appendChild(complementCards(complementCardsHome,"home"));


    return $home;
}

export default Home;