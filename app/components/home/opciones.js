export const opciones = () => {
    // SECCION OPCIONES DE HOME
    const $section = document.createElement("section"),
        $cards = document.createElement("div"),
        $fragment = document.createDocumentFragment();

    const optionList = [
        {
            id:1,
            img:"app/assets/accesorios/futbol5_big.png",
            title:"DEPORTES",
            href:"#/deportes"
        },
        {
            id:2,
            img:"app/assets/accesorios/running6.png",
            title:"RUNNING",
            href:"#/calzados"
        },
        {
            id:3,
            img:"app/assets/accesorios/bannermoda4.png",
            title:"MODA",
            href:"#/moda"
        }
    ]


    optionList.forEach(el => {
        const $card = document.createElement("div"),
            $img = document.createElement("img"),
            $title = document.createElement("a"),
            $buttonSeeMore = document.createElement("button");
        
        $img.classList.add("option-card__itemImg");
        $img.src = el.img;
        $img.alt = el.title;
        $title.classList.add("option-card__itemTitle");
        $title.href = el.href;
        $title.textContent = el.title;
        $buttonSeeMore.classList.add("option-card__buttonseemore");
        $buttonSeeMore.textContent = "VER PRODUCTOS";

        $card.classList.add("option-card__item");
        $card.appendChild($img);
        $card.appendChild($title);

        $fragment.appendChild($card);
        $card.addEventListener("mouseover", ()=>{
            $title.style.filter = "opacity(.8)";
            $img.style.filter = "opacity(.8)";
        })
        $card.addEventListener("mouseout", ()=>{
            $title.style.filter = "opacity(1)";
            $img.style.filter = "opacity(1)";
        })
        $card.addEventListener("click", ()=>{
            
            location.hash = el.href;
            
        })
    })

    $cards.classList.add("options-card");


    $cards.appendChild($fragment);
    
    $section.classList.add("options");
    $section.dataset.visibility = "";
    $section.appendChild($cards);

    return $section;


}

