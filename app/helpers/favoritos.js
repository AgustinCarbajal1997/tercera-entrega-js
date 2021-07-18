export class Favoritos {
    
    addFavs({ id, image, title, price }){
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

        let datos = {
            id:id,
            image:image,
            title:title,
            price:price
        }
        //determinando si existe o no el producto en el carrito a traves de find
        let existProduct = favoritos.find(item => item.id == datos.id);

        if(!existProduct){
            favoritos = [...favoritos,datos]
            const $main = document.getElementById("main"),
                $divContainer = document.createElement("div"),
                $divAlert = document.createElement("div"),
                $title = document.createElement("h3");
            
            $title.textContent = "Producto agregado a favoritos";
            $divAlert.classList.add("alertAddCart");
            $divAlert.appendChild($title);
            $divContainer.classList.add("alertAddCart--container");
            $divContainer.appendChild($divAlert);
            
            $main.insertAdjacentElement("afterbegin",$divContainer);

            setTimeout(() => {
                $main.removeChild($divContainer);
            }, 1000);
            
            

        }else{
            const $main = document.getElementById("main"),
                $divContainer = document.createElement("div"),
                $divAlert = document.createElement("div"),
                $title = document.createElement("h3");
            
            $title.textContent = "Producto ya existente en favoritos";
            $divAlert.classList.add("alertExistedItemCart");
            $divAlert.appendChild($title);
            $divContainer.classList.add("alertExistedItemCart--container");
            $divContainer.appendChild($divAlert);
            
            $main.insertAdjacentElement("afterbegin",$divContainer);

            setTimeout(() => {
                $main.removeChild($divContainer);
            }, 1000)
        }
        
        return localStorage.setItem("favoritos",JSON.stringify(favoritos));
    }

    getFavs(){
        let products = JSON.parse(localStorage.getItem("favoritos"));
        return products;
    }
        
                    
}