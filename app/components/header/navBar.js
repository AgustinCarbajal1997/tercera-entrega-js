export const NavBar = () => {
    const $navBar = document.createElement("div"),
        $socialMedia = document.createElement("div"),
        $facebook = document.createElement("div"),
        $ig = document.createElement("div"),
        $tw = document.createElement("div");



        
        $facebook.innerHTML = `<span class="iconify" data-icon="cib:facebook-f" data-inline="false"></span>`;
        $ig.innerHTML = `<span class="iconify" data-icon="akar-icons:instagram-fill" data-inline="false"></span>`;
        $tw.innerHTML = `<span class="iconify" data-icon="bytesize:twitter" data-inline="false"></span>`;

        $socialMedia.classList.add("navBar-socialMedia");
        $socialMedia.appendChild($facebook);
        $socialMedia.appendChild($ig);
        $socialMedia.appendChild($tw);

        $navBar.classList.add("navBar");
        $navBar.appendChild($socialMedia);  
        return $navBar;
}