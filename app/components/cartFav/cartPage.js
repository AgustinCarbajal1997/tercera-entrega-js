import { Carrito } from "../../helpers/carrito.js";

export const CartPage = () => {
  // SE CARGAN LOS DATOS QUE VIENEN DEL CARRITO DE LOCALSTORAGE
  const $section = document.createElement("section"),
    $titleSection = document.createElement("h2"),
    $divData = document.createElement("div"),
    $divAddition = document.createElement("div"),
    $cardAddition = document.createElement("div"),
    $totalInformation = document.createElement("h3"),
    $total = document.createElement("h3"),
    $buttonBuy = document.createElement("button");

  let finalTotal = 0;

  let readCart = new Carrito();
  let cartProducts = readCart.getProducts(); //returna lista con productos del carrito

  if (cartProducts.length > 0) {
    // si el carrito tiene productos, los pinta en pantalla
    cartProducts.forEach((el) => {
      const $divProduct = document.createElement("div"),
        $img = document.createElement("img"),
        $divImg = document.createElement("div"),
        $title = document.createElement("h3"),
        $divQuantity = document.createElement("div"),
        $buttonAddition = document.createElement("div"),
        $buttonSubtract = document.createElement("div"),
        $buttonDelete = document.createElement("div"),
        $quantity = document.createElement("h4"),
        $price = document.createElement("h3");

      $img.src = el.image;
      $img.alt = el.title;
      $divImg.classList.add("carrito-producto__image");
      $divImg.appendChild($img);
      $title.textContent = el.title;
      $price.textContent = `$${el.price}`;
      $quantity.textContent = el.quantity;
      $buttonAddition.innerHTML = `<i class="fas fa-plus"></i>`;
      $buttonSubtract.innerHTML = `<i class="fas fa-minus"></i>`;
      $buttonDelete.classList.add("button-delete-cart");
      $buttonDelete.innerHTML = `<i class="fas fa-trash-alt"></i>`

        // evento click para sumar unidades al carrito
        $buttonAddition.addEventListener("click", () => {
            let newValue = parseInt($quantity.textContent) + 1;
            $quantity.textContent = newValue;
            el.quantity = newValue.toString();

            // presionado el click sumo al valor inicial una unidad y traigo los datos del carrito de storage para actualizar los valores

            let readCart = new Carrito();
            let cardProductsAddition = readCart.getProducts();

            // filtro los productos que no se actualizan
            let newArrayProducts = cardProductsAddition.filter(
            (newArray) => newArray.id !== el.id
            );

            // agrego el valor actualizado al nuevo array con spread operator
            newArrayProducts = [...newArrayProducts, el];

            // envio devuelta el nuevo arreglo como JSON a storage
            localStorage.setItem("carrito", JSON.stringify(newArrayProducts));
            
            // reinicio addition en 0 para volver a realizar la sumatoria
            finalTotal = 0;
            newArrayProducts.forEach(total => {
                // paso un bucle para multiplicar las cantidades de cada producto por su precio y sumarlo al total
                finalTotal += parseInt(total.quantity) * parseInt(total.price);
                $total.textContent = `$${finalTotal};`;
            })
                
            
        });


        // evento click para restar unidades al carrito
        $buttonSubtract.addEventListener("click", () => {
            // validacion minimo una unidad, sino se retorna 1 para evitar juegos del usuario.
            if (parseInt($quantity.textContent) === 1) return;
            // actualizo nuevo valor
            let newValue = parseInt($quantity.textContent) - 1;
            $quantity.textContent = newValue;
            el.quantity = newValue.toString();
    
            // traigo array de productos storage para actualizar
            let readCart = new Carrito();
            let cardProductsSubtract = readCart.getProducts();
    
            // filtro los datos que no se actualizan
            let newArrayProducts = cardProductsSubtract.filter(
                (newArray) => newArray.id !== el.id
            );
    
            // con spread uno datos que no se actualizaron con el que si;
            newArrayProducts = [...newArrayProducts, el];
    
            // mando el nuevo JSON a storage con datos actualizados
            localStorage.setItem("carrito", JSON.stringify(newArrayProducts));
            
            // reinicio addition en 0 para volver a realizar la sumatoria del total
            finalTotal = 0;
            newArrayProducts.forEach(total => {
                // paso un bucle para multiplicar las cantidades de cada producto por su precio y sumarlo al total
                finalTotal += parseInt(total.quantity) * parseInt(total.price);
                $total.textContent = `$${finalTotal};`;
            })
        });

        // evento click del boton eliminar
        $buttonDelete.addEventListener("click", ()=>{
            const $badge = document.querySelector(".cart-badge"); //para actualizar el badge
            // remuevo el child y dejo de mostrarlo en pantalla
            $divData.removeChild($divProduct);

          // presionado el boton, traigo el array con los productos de storage y filtro
          let readCart = new Carrito();
          let cartProductsDelete = readCart.getProducts();
          
          let newArrayProducts = cartProductsDelete.filter(newArray => newArray.id !== el.id);

          $badge.textContent = newArrayProducts.length;
          // reinicio addition en 0 para volver a realizar la sumatoria del total
          finalTotal = 0;

          if(!newArrayProducts.length) {
            //   si el array esta vacio, devuelve 0
            $section.classList.add("without-products");
            $section.innerHTML = `<h2>NO HAY PRODUCTOS EN EL CARRITO.</h2> <a href="#/">VOLVER A HOME</a>`;
          }else{
            //   si trae valores, se suman
              newArrayProducts.forEach(total => {
                  // paso un bucle para multiplicar las cantidades de cada producto por su precio y sumarlo al total
                  finalTotal += parseInt(total.quantity) * parseInt(total.price);
                  $total.textContent = `$${finalTotal};`;
              })
          }
        //   envio de datos actualizados al storage
          localStorage.setItem("carrito", JSON.stringify(newArrayProducts));
      })
        


      $divQuantity.appendChild($buttonAddition);
      $divQuantity.appendChild($quantity);
      $divQuantity.appendChild($buttonSubtract);
      $divQuantity.appendChild($buttonDelete);
    

      $divProduct.classList.add("carrito-producto");
      $divProduct.appendChild($divImg);
      $divProduct.appendChild($title);
      $divProduct.appendChild($price);
      $divQuantity.classList.add("carrito-quantity-container");
      $divProduct.appendChild($divQuantity);

      $divData.appendChild($divProduct);

      finalTotal += parseInt(el.quantity) * parseInt(el.price);
        
      

    });

    $divData.classList.add("carrito-productos");

    $titleSection.classList.add("carrito-title");
    $titleSection.textContent = "Mi carrito";
    $section.appendChild($titleSection);

    $section.classList.add("section-carrito");
    $section.appendChild($divData);

    $totalInformation.classList.add("total-information-cart");
    $totalInformation.textContent = "Total";
    $total.classList.add("final-total-cart");
    $total.textContent = `$${finalTotal};`;


    // alert compra
    $buttonBuy.classList.add("button-buy-cart");
    $buttonBuy.textContent = "FINALIZAR COMPRA";
    $buttonBuy.addEventListener("click", ()=>{
        const $main = document.getElementById("main"),
        $divContainer = document.createElement("div"),
        $divAlert = document.createElement("div"),
        $title = document.createElement("h3");
    
        $title.textContent = "Muchas gracias por tu compra";
        $divAlert.classList.add("alertAddCart");
        $divAlert.appendChild($title);
        $divContainer.classList.add("alertAddCart--container");
        $divContainer.appendChild($divAlert);
        
        $main.insertAdjacentElement("afterbegin",$divContainer);

        setTimeout(() => {
            $main.removeChild($divContainer);
        }, 1000);
    })



    $cardAddition.classList.add("card-addition-cart");
    $cardAddition.appendChild($totalInformation);
    $cardAddition.appendChild($total);
    $cardAddition.appendChild($buttonBuy);

    $divAddition.classList.add("sumatoria-total");
    $divAddition.appendChild($cardAddition);
    

    $section.appendChild($divAddition);
  } else {
    $section.classList.add("without-products");
    $section.innerHTML = `<h2>NO HAY PRODUCTOS EN EL CARRITO.</h2> <a href="#/">VOLVER A HOME</a>`;
  }

  return $section;
};
