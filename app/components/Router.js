import { IntersectionOberserverVisibility } from "../helpers/intersectionOberserverVisibility.js";
import { LoaderPages } from "../helpers/loaderPages.js";
import { Calzados } from "./calzados/calzados.js";
import { CartPage } from "./cartFav/cartPage.js";
import { FavPage } from "./cartFav/favPage.js";
import { Deportes } from "./deportes/deportes.js";
import Home from "./home/home.js";
import { LoaderHome } from "./home/loaderHome.js";
import { Moda } from "./moda/moda.js";

export const Router = () => {
    // ROUTER QUE MODIFICA EL MAIN CADA VEZ QUE CAMBIA EL HASH
    
    let { hash } = location;
    let $main = document.getElementById("main");

    window.scroll({
        top:0,
        behavior:"auto"
    });
    $main.innerHTML = null;

    if(!hash || hash === "#/"){
        // si es la primera vez que se carga la pagina, que me cargue el loader
        if(!sessionStorage.getItem("loaderHome")) LoaderHome();
        
        $main.appendChild(Home());
        IntersectionOberserverVisibility();//renderizo los componentes, paso el observer para hacer el fade in
    } else if (hash === "#/calzados"){
        // si es la primera vez que se carga la pagina, que me cargue el loader
        if(!sessionStorage.getItem("loaderRUNNING")) LoaderPages("RUNNING");
        $main.appendChild(Calzados());
        IntersectionOberserverVisibility();
    }else if(hash === "#/deportes"){
        // si es la primera vez que se carga la pagina, que me cargue el loader
        if(!sessionStorage.getItem("loaderDEPORTES")) LoaderPages("DEPORTES");
        $main.appendChild(Deportes());
        IntersectionOberserverVisibility();
    }else if(hash === "#/moda"){
        // si es la primera vez que se carga la pagina, que me cargue el loader
        if(!sessionStorage.getItem("loaderMODA")) LoaderPages("MODA");
        $main.appendChild(Moda());
        IntersectionOberserverVisibility();
    }else if(hash === "#/micarrito"){
        $main.appendChild(CartPage());
    }else if(hash === "#/favs"){
        $main.appendChild(FavPage());
    }

}