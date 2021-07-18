export const NavBar = () => {
    const $navBar = document.createElement("div"),
        $socialMedia = document.createElement("div"),
        $facebook = document.createElement("div"),
        $ig = document.createElement("div"),
        $tw = document.createElement("div");



        
        $facebook.innerHTML = `<i class="fab fa-facebook-square"></i>`;
        $ig.innerHTML = `<i class="fab fa-instagram"></i>`;
        $tw.innerHTML = `<i class="fab fa-twitter"></i>`;

        $socialMedia.classList.add("navBar-socialMedia");
        $socialMedia.appendChild($facebook);
        $socialMedia.appendChild($ig);
        $socialMedia.appendChild($tw);

        $navBar.classList.add("navBar");
        $navBar.appendChild($socialMedia);  
        return $navBar;
}