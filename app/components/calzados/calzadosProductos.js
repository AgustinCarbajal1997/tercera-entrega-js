import { Carrito } from "../../helpers/carrito.js";
import { Favoritos } from "../../helpers/favoritos.js";
import { getProducts } from "../../helpers/getProducts.js"

export const calzadoProductos = (category) => {
    const $section = document.createElement("section"),
        $fragment = document.createDocumentFragment();

    // PRIMERO TRAIGO DE DB.JSON LOS DATOS USANDO UNA PROMESA
    const calzadoPromise = () => {
        return new Promise((resolve,reject) =>{
            resolve(getProducts(category))
        })
    }

    calzadoPromise()
    // CUMPLIDA LA PROMESA, RECORRO EL ARRAY QUE ME DEVUELVE LA FUNCION Y PINTO LOS RESULTADOS EN EL DOM
        .then((calzados) => {
            calzados.forEach(element => {
                const $divCard = document.createElement("div"),
                    $divImg = document.createElement("div"),
                    $img = document.createElement("img"),
                    $divContent = document.createElement("div"),
                    $title = document.createElement("h3"),
                    $price = document.createElement("h4"),
                    $buttonCart = document.createElement("div"),
                    $buttonFavs = document.createElement("div"),
                    $buttonInfo = document.createElement("button");

                $img.src = element.smallImage;
                $img.alt = element.title;
                $divImg.classList.add("image-product");

                $divImg.appendChild($img);

                $title.textContent = element.title;
                $price.textContent = `$${element.price}`;
                
                $buttonCart.innerHTML = `<i class="fas fa-shopping-cart"></i>`;
                $buttonCart.classList.add("button-cart");
                $buttonCart.dataset.id = element.id;
                $buttonCart.dataset.imageCart = element.smallImage;
                $buttonCart.dataset.titleCart = element.title;
                $buttonCart.dataset.priceCart = element.price;

                $buttonFavs.innerHTML = `<i class="far fa-heart"></i>`;
                $buttonFavs.classList.add("button-favs")
                $buttonFavs.dataset.id = element.id;
                $buttonFavs.dataset.imageFavs = element.smallImage;
                $buttonFavs.dataset.titleFavs = element.title;
                $buttonFavs.dataset.priceFavs = element.price;

                $buttonInfo.textContent = "VER MAS";
                $buttonInfo.dataset.id = element.id;
                
                $buttonInfo.addEventListener("click", () => {
                    const $popUpContainer = document.querySelector(".container-popUp"),
                        $popUpImg = document.querySelector(".popUpImg"),
                        $agregarCarrito = document.createElement("button"),
                        $popUpContent = document.querySelector(".popUpContent");
                        
                    $agregarCarrito.classList.add("popUpCartAdd");
                    $agregarCarrito.textContent = "Agregar al carrito";
                    $popUpContent.innerHTML = `
                        <h2>${element.title}</h2>
                        <p>${element.description}</p>
                        <h3>$${element.price}</h3>
                    `;
                    $popUpContent.insertAdjacentElement("beforeend",$agregarCarrito);
                    $popUpImg.innerHTML = `
                        <img src=${element.bigImage} alt=${element.title}>
                    `;
                    
                    $agregarCarrito.addEventListener("click", ()=>{
                        console.log("Agregar Carrito", element.title)
                        let cartData = {
                            id:element.id,
                            image:element.smallImage,
                            title:element.title,
                            price:element.price
                        }
                        let newProductCart = new Carrito()
                        
                        newProductCart.addProduct(cartData);
                        
                    })




                    $popUpContainer.classList.add("popUpIsActive");
                })
                
                $divContent.classList.add("content-product");
                $divContent.appendChild($title);
                $divContent.appendChild($price);
                $divImg.appendChild($buttonCart);
                $divImg.appendChild($buttonFavs);
                $divContent.appendChild($buttonInfo);

                $divCard.classList.add("card-product");
                $divCard.appendChild($divImg);
                $divCard.appendChild($divContent);

                $fragment.appendChild($divCard);
            });
            
            $section.classList.add("section-products")
            $section.appendChild($fragment);

        })
        // CUMPLIDO LO ANTERIOR Y SE CUMPLE EL EVENTO CLICK SOBRE LOS ICONOS CART O FAV, SE TRAE LO QUE HAY EN LOCALSTORAGE Y A TRAVES DEL SPREAD OPERATOR DE LA FUNCION DE LA CLASE CARRITO O FAVORITOS, SE AGREGA EL PRODUCTO A LOCAL
        .then(()=>{
            const productos = document.querySelectorAll(".button-cart"),
                $buttonCart = document.querySelectorAll(".button-cart i"),
                fav = document.querySelectorAll(".button-favs"),
                $buttonFavs = document.querySelectorAll(".button-favs i");
            
            
            document.addEventListener("click", e => {
                for (let i = 0; i < $buttonCart.length; i++) {
                    if(e.target === $buttonCart[i]){
                        
                        
                        let cartData = {
                            id:productos[i].dataset.id,
                            image:productos[i].dataset.imageCart,
                            title:productos[i].dataset.titleCart,
                            price:productos[i].dataset.priceCart
                        }
                        


                        let newProduct = new Carrito()
                        
                        newProduct.addProduct(cartData);
                        
                    }


                    if(e.target === $buttonFavs[i]){
                        

                        let dataFav = {
                            id:productos[i].dataset.id,
                            image:productos[i].dataset.imageCart,
                            title:productos[i].dataset.titleCart,
                            price:productos[i].dataset.priceCart
                        }

                        let newFav = new Favoritos()
                        newFav.addFavs(dataFav);
                        

                    }

                }

            })

            
            


        })

        return $section;
}