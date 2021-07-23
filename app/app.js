import { cartFavs } from "./components/header/cartFavs.js";
import { hamburgerIsActive, hamburgerMenu } from "./components/header/hambuger-menu.js";
import Header from "./components/header/header.js";
import { Menu } from "./components/header/menu.js";
import { NavBar } from "./components/header/navBar.js";
import { Main } from "./components/Main.js";
import { PopUp } from "./components/popUp.js";
import { Router } from "./components/Router.js";

const $root = document.getElementById("root");
export default function App(){
    
    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Menu());
    $root.appendChild(hamburgerMenu());
    $root.appendChild(NavBar());
    hamburgerIsActive();
    
    $root.appendChild(PopUp());
    $root.appendChild(cartFavs());
    $root.appendChild(Main());

    Router()


}