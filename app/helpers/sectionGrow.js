import { Carrito } from "./carrito.js";
export const SectionGrow = (listItems) => {
    const $sectionGrow = document.createElement("section"),
        $divGrowContainer = document.createElement("div");

        

        listItems.forEach((element) =>{
            const $divCard = document.createElement("div"),
                $img = document.createElement("img"),
                $buttonSeeMore = document.createElement("button");


            $img.src = element.image;
            $img.alt = element.title;
            
            $buttonSeeMore.textContent = "VER MAS";


            $divCard.classList.add("cardGrow");
            
            $divCard.appendChild($img);
            $divCard.appendChild($buttonSeeMore);

            $divCard.addEventListener("mouseover", ()=>{
                $divCard.style.flexShrink = 0;
                
                $buttonSeeMore.style.visibility = "visible";
                $buttonSeeMore.style.opacity = 1;
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
                        <img src=${element.image} alt=${element.title}>
                    `;
                    
                    $agregarCarrito.addEventListener("click", ()=>{
                        
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




            $divCard.addEventListener("mouseout",()=>{
                $divCard.style.flexShrink = 1;
                
                $buttonSeeMore.style.visibility = "hidden";
                $buttonSeeMore.style.opacity = 0;
            })



            $divGrowContainer.classList.add("containerGrow");
            $divGrowContainer.appendChild($divCard);

        })

        $sectionGrow.classList.add("sectionGrow");
        $sectionGrow.dataset.visibility = "";
        $sectionGrow.appendChild($divGrowContainer);

    return $sectionGrow; 
}