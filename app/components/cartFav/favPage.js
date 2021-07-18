import { Favoritos } from "../../helpers/favoritos.js";

export const FavPage = () =>{
    // SE CARGAN LOS DATOS QUE VIENEN DEL FAVORITOS DE LOCALSTORAGE
    const $section = document.createElement("section"),
        $divData = document.createElement("div");

    

    let readFavs = new Favoritos()
    let favProducts = readFavs.getFavs();
    
    if(favProducts){

        favProducts.forEach(el => {
            const $divProduct = document.createElement("div"),
                $img = document.createElement("img"),
                $divImg = document.createElement("div"),
                $title = document.createElement("h3"),
                $price = document.createElement("h3");
    
                $img.src = el.image;
                $img.alt = el.title;
                $divImg.classList.add("favs-producto__image");
                $divImg.appendChild($img);
    
                $title.textContent = el.title;
    
                $price.textContent = `$${el.price}`;
    
    
                $divProduct.classList.add("favs-producto");
                $divProduct.appendChild($divImg);
                $divProduct.appendChild($title);
                $divProduct.appendChild($price);
    
                $divData.appendChild($divProduct);
            });
            
            $divData.classList.add("favs-productos")
        
        $section.classList.add("section-fav");
        $section.appendChild($divData);
    }else{
        $section.classList.add("without-products");
        $section.innerHTML = `<h2>NO HAY PRODUCTOS EN FAVORITOS.</h2> <a href="#/">VOLVER A HOME</a>`;
    }

    

    
    



    return $section;

}