export class Carrito {
    
    addProduct({ id, image, title, price }){
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        let datos = {
            id:id,
            image:image,
            title:title,
            price:price,
            quantity:"1"
        }
        
        //determinando si existe o no el producto en el carrito a traves de find
        let existProduct = carrito.find(item => item.id == datos.id);

        if(!existProduct){
            // si no existe se agrega al carrito y se lanza alerta
            carrito = [...carrito,datos];
            const $main = document.getElementById("main"),
                $divContainer = document.createElement("div"),
                $divAlert = document.createElement("div"),
                $title = document.createElement("h3"),
                $badge = document.querySelector(".cart-badge");

            $badge.textContent = carrito.length;
            $title.textContent = "Producto agregado al carrito";
            $divAlert.classList.add("alertAddCart");
            $divAlert.appendChild($title);
            $divContainer.classList.add("alertAddCart--container");
            $divContainer.appendChild($divAlert);
            
            $main.insertAdjacentElement("afterbegin",$divContainer);

            setTimeout(() => {
                $main.removeChild($divContainer);
            }, 1000);
        }else{
            // si existe, no se agregar y se lanza alerta de que ya esta agregado
            const $main = document.getElementById("main"),
                $divContainer = document.createElement("div"),
                $divAlert = document.createElement("div"),
                $title = document.createElement("h3");
            
            $title.textContent = "Producto ya existente en el carrito";
            $divAlert.classList.add("alertExistedItemCart");
            $divAlert.appendChild($title);
            $divContainer.classList.add("alertExistedItemCart--container");
            $divContainer.appendChild($divAlert);
            
            $main.insertAdjacentElement("afterbegin",$divContainer);

            setTimeout(() => {
                $main.removeChild($divContainer);
            }, 1000)
        }
        

        
        return localStorage.setItem("carrito",JSON.stringify(carrito));
    }

    getProducts(){
        let products = JSON.parse(localStorage.getItem("carrito"));
        return products;
    }
        
                    
}