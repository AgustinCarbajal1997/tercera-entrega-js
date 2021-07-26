export const LoaderHome = () => {
    const $sectionLoader = document.createElement("div"),
        $main = document.querySelector("#main");
        $sectionLoader.innerHTML = `
        <div class="loader-home">
            <img src="app/assets/crownlogo.jpg" alt="crown">
            <h2>THE CROWN</h2>
            <h3>SHOWROOM</h3>
            <img src="app/assets/tail-spin.svg" alt="circles">
        </div>
        `;
    
    sessionStorage.setItem("loaderHome",true);//para evitar que cada vez que cambia de vista, se vuelva a mostrar el loader innecesariamente
    
    $sectionLoader.classList.add("loader-home-container");
    $main.appendChild($sectionLoader);

    setTimeout(() => {
        $main.removeChild($sectionLoader);
    }, 4000);

}