export const cartFavs = () => {
    const $div = document.createElement("div"),
        $cart = document.createElement("a"),
        $favs = document.createElement("a");

        $cart.href = "#/micarrito";
        $cart.innerHTML = `<i class="fas fa-shopping-cart"></i>`;
        $favs.href = "#/favs";
        $favs.innerHTML = `<i class="far fa-heart"></i>`;

        $div.classList.add("cart-favs");
        $div.appendChild($cart);
        $div.appendChild($favs);

        return $div;
}