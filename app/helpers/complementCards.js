import { Carrito } from "./carrito.js";
export const complementCards = (listCards,className) => {
    const $section = document.createElement("section");

    listCards.forEach(element => {
        const $card = document.createElement("div"),
        $img = document.createElement("img"),
        $title = document.createElement("h3"),
        $buttonSeeMore = document.createElement("button");

        $img.classList.add(`section-complement-${className}__cardImg`)
        $img.src = element.image;
        $img.loading="lazy";
        $img.alt = element.title;
        $title.classList.add(`section-complement-${className}__cardTitle`)
        $title.textContent = element.title;
        $buttonSeeMore.classList.add(`section-complement-${className}__button`);
        $buttonSeeMore.textContent = "VER MAS";

        $card.classList.add(`section-complement-${className}__card`)
        $card.appendChild($img);
        $card.appendChild($title);
        $card.appendChild($buttonSeeMore);
        $section.appendChild($card);


        $card.addEventListener("mouseover",()=>{
            $img.classList.add("isActiveComplementCardImg");
            $title.classList.add("isActiveComplementCardTitle");
            $buttonSeeMore.classList.add("isActiveComplementButton");
        })

        $buttonSeeMore.addEventListener("click",()=>{
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

        $card.addEventListener("mouseout",()=>{
            $img.classList.remove("isActiveComplementCardImg");
            $title.classList.remove("isActiveComplementCardTitle");
            $buttonSeeMore.classList.remove("isActiveComplementButton");
        })
    });

    $section.classList.add(`section-complement-${className}`);
    $section.dataset.visibility = ""; //data para intersection observer

    return $section;
}