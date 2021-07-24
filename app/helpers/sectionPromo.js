import { Carrito } from "./carrito.js";
export const sectionPromo = (product,className) => {
    const $section = document.createElement("section"),
    $divImg = document.createElement("div"),
    $img = document.createElement("img"),
    $divContent = document.createElement("div"),
    $title = document.createElement("h3"),
    $description = document.createElement("p"),
    $buttonSeeMore = document.createElement("button"),
    $fragment = document.createDocumentFragment();

    
    $img.loading = "lazy";
    $img.src = product.image;
    $img.alt = product.title;
    $divImg.classList.add(`promo-section-${className}__image`)
    $divImg.appendChild($img);

    $title.textContent = product.title;
    $description.textContent = product.description;
    $buttonSeeMore.textContent = "VER MAS";
    $divContent.classList.add(`promo-section-${className}__content`);
    $divContent.appendChild($title);
    $divContent.appendChild($description);
    $divContent.appendChild($buttonSeeMore);

    $fragment.appendChild($divContent);
    $fragment.appendChild($divImg);

    $section.classList.add(`promo-section-${className}`);
    $section.dataset.visibility = ""; //data para el intersection observer
    $section.appendChild($fragment);

    $buttonSeeMore.addEventListener("click", ()=>{
        const $popUpContainer = document.querySelector(".container-popUp"),
                $popUpImg = document.querySelector(".popUpImg"),
                $agregarCarrito = document.createElement("button"),
                $popUpContent = document.querySelector(".popUpContent");

                $agregarCarrito.classList.add("popUpCartAdd");
                $agregarCarrito.textContent = "Agregar al carrito";


                $popUpContent.innerHTML = `
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <h3>$${product.price}</h3>
                `;
                $popUpContent.insertAdjacentElement("beforeend",$agregarCarrito);
                $popUpImg.innerHTML = `
                    <img src=${product.bigImage} alt=${product.title}>
                `;
                
                $agregarCarrito.addEventListener("click", ()=>{
                    
                    let cartData = {
                        id:product.id,
                        image:product.smallImage,
                        title:product.title,
                        price:product.price
                    }
                    let newProductCart = new Carrito()
                    
                    newProductCart.addProduct(cartData);
                    
                })




                $popUpContainer.classList.add("popUpIsActive");

    })



    return $section;

}