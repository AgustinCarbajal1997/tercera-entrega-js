import { Carrito } from "../../helpers/carrito.js";
import { Favoritos } from "../../helpers/favoritos.js";

export const FavPage = () =>{
    // SE CARGAN LOS DATOS QUE VIENEN DEL FAVORITOS DE LOCALSTORAGE
    const $section = document.createElement("section"),
        $title = document.createElement("h2"),
        $divData = document.createElement("div");

    $title.classList.add("favoritos-title");
    $title.textContent = "Mis favoritos";
    

    let readFavs = new Favoritos()
    let favProducts = readFavs.getFavs();
    
    if(favProducts){
        // si tiene productos, se pintan
        favProducts.forEach(el => {
            const $divProduct = document.createElement("div"),
                $img = document.createElement("img"),
                $divImg = document.createElement("div"),
                $title = document.createElement("h3"),
                $price = document.createElement("h3"),
                $divButton = document.createElement("button");
    
                $img.src = el.image;
                $img.alt = el.title;
                $divImg.classList.add("favs-producto__image");
                $divImg.appendChild($img);
    
                $title.textContent = el.title;
    
                $price.textContent = `$${el.price}`;

                $divButton.classList.add("favs-addToCart");
                $divButton.textContent = "AGREGAR AL CARRITO";



                $divProduct.classList.add("favs-producto");
                $divProduct.appendChild($divImg);
                $divProduct.appendChild($title);
                $divProduct.appendChild($price);
                $divProduct.appendChild($divButton);
                $divData.appendChild($divProduct);


                // boton agregar al carrito que se activa con el evento click
                $divButton.addEventListener("click", ()=>{
                    let cartData = {
                        id:el.id,
                        image:el.image,
                        title:el.title,
                        price:el.price
                    }
                    const newCart = new Carrito();
                    newCart.addProduct(cartData)
                })
            });
            
            $divData.classList.add("favs-productos")
        
        $section.appendChild($title);
        $section.classList.add("section-fav");
        $section.appendChild($divData);
    }else{
        // si no viene nada, se muestra este mensaje
        $section.appendChild($title);
        $section.classList.add("without-products");
        $section.innerHTML = `<h2>NO HAY PRODUCTOS EN FAVORITOS.</h2> <a href="#/">VOLVER A HOME</a>`;
    }

    

    
    



    return $section;

}