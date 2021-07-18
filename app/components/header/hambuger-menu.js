export const hamburgerMenu = () => {
    const $hamburger = document.createElement("div");

    $hamburger.innerHTML = `
        <button class="hamburger hamburger--emphatic" type="button">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    `
    $hamburger.classList.add("menu-hamburger");

    return $hamburger;
}

export const hamburgerIsActive = () => {
    const $activehamburger = document.querySelector(".hamburger--emphatic"),   
        $hambugerBox = document.querySelector(".hamburger-box"),
        $hamburgerinner = document.querySelector(".hamburger-inner"),
        $menu = document.querySelector(".menuFloat");
    
    document.addEventListener("click", (e) => {
        if(e.target === $activehamburger || e.target === $hamburgerinner || e.target === $hambugerBox){
            
            if (!$activehamburger.classList.contains("is-active")){
                
                $activehamburger.classList.add("is-active");
                $menu.classList.add("isActiveMenu");
                
            }else{
                $activehamburger.classList.remove("is-active");
                $menu.classList.remove("isActiveMenu");
                
            }
        }
    })
}