
export const cartFavs = () => {
    const $div = document.createElement("div"),
        $cart = document.createElement("a"),
        $favs = document.createElement("a");

        // cuando se carga la pagina me detecta el numero de items en carrito para el badge
        let products = JSON.parse(localStorage.getItem("carrito")) || [];



        $cart.href = "#/micarrito";
        $cart.innerHTML = `<div class="cart-badge">${products.length}</div><span class="iconify" data-icon="grommet-icons:cart" data-inline="false" data-width="30" data-height="30"></span>`;
        $favs.href = "#/favs";
        $favs.innerHTML = `<span class="iconify" data-icon="akar-icons:heart" data-inline="false" data-width="30" data-height="30"></span>`;

        $div.classList.add("cart-favs");
        $div.appendChild($cart);
        $div.appendChild($favs);

        return $div;
}