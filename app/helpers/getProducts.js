import { Carrito } from "./carrito.js";
import { Favoritos } from "./favoritos.js";
// GET PRODUCTS CON ASYNC AWAIT
export const getProducts = async (article) => {
    try {
        let url = "app/db/db.json";
        let response = await fetch(url);
        let data = await response.json();
        let productos = data.productos;

        let consulta = productos.filter(el => el.article === article);
        return consulta;

        

    } catch (error) {
        console.log(error)
    }

}

// get products con JQUERY AJAX
export const getProductsJquery = (article) => {
    let url = "app/db/db.json"
    $.getJSON(url, function(response, state){
        if(state==="success"){
            let data = response.productos;
            
            let consulta = data.filter(el => el.article === article);
            console.log(consulta);

            for (let  i= 0; i < consulta.length; i++) {
                $(".section-products").append(`
                    <div class="card-product">
                        <div class="image-product">
                            <img src=${consulta[i].smallImage} alt=${consulta[i].title}>
                            <div class="button-cart" id="button-cart${consulta[i].id}"><i class="fas fa-shopping-cart"></i></div>
                            <div class="button-favs" id="button-favs${consulta[i].id}"><i class="far fa-heart"></i></div>
                        </div>
                        <div class="content-product">
                            <h3>${consulta[i].title}</h3>
                            <h4>$${consulta[i].price}</h4>
                            <button id="button-seeMore${consulta[i].id}">VER MAS</button>
                        </div>
                    </div>
                `)

                // evento click para desplegar pop up
                    $(`#button-seeMore${consulta[i].id}`).on("click",()=>{
                        $(".popUpImg").html(`
                            <img src=${consulta[i].bigImage} alt=${consulta[i].title}>
                    
                        `)
                        $(".popUpContent").html(`
                        
                            <h2>${consulta[i].title}</h2>
                            <p>${consulta[i].description}</p>
                            <h3>$${consulta[i].price}</h3>
                            <button class="popUpCartAdd">Agregar al carrito</button>
                        
                        `)
                        $(".container-popUp").addClass("popUpIsActive");
                        
                        //button agregar al carrito 
                        $(`.popUpCartAdd`).on("click",()=>{
                            console.log(consulta[i].title);
                            let cartData = {
                                id:consulta[i].id,
                                image:consulta[i].smallImage,
                                title:consulta[i].title,
                                price:consulta[i].price
                            }
                            
                            let newProductCart = new Carrito()
                            
                            newProductCart.addProduct(cartData);
                        })

                    })

                    // button icono card agregar al carrito
                    $(`#button-cart${consulta[i].id}`).on("click",()=>{
                        
                        let cartData = {
                            id:consulta[i].id,
                            image:consulta[i].smallImage,
                            title:consulta[i].title,
                            price:consulta[i].price
                        }
                        
                        let newProductCart = new Carrito()
                        
                        newProductCart.addProduct(cartData);
                    })
                    
                    // button icono agregar a favs
                    $(`#button-favs${consulta[i].id}`).on("click",()=>{
                        
                        let dataFav = {
                            id:consulta[i].id,
                            image:consulta[i].smallImage,
                            title:consulta[i].title,
                            price:consulta[i].price
                        }

                        let newFav = new Favoritos()
                        newFav.addFavs(dataFav);
                    })

            }
        }
        
    })

}