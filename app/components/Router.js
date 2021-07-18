import { Calzados } from "./calzados/calzados.js";
import { CartPage } from "./cartFav/cartPage.js";
import { FavPage } from "./cartFav/favPage.js";
import { Deportes } from "./deportes/deportes.js";
import Home from "./home/home.js";
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
        $main.appendChild(Home());
    } else if (hash === "#/calzados"){
        $main.appendChild(Calzados());
    }else if(hash === "#/deportes"){
        $main.appendChild(Deportes());
    }else if(hash === "#/moda"){
        $main.appendChild(Moda());
    }else if(hash === "#/micarrito"){
        $main.appendChild(CartPage());
    }else if(hash === "#/favs"){
        $main.appendChild(FavPage());
    }

}