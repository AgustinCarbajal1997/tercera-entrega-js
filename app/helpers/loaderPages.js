export const LoaderPages = (page) => {
    const $sectionLoader = document.createElement("div"),
        $main = document.querySelector("#main");
    $sectionLoader.innerHTML = `
        <div class="loader-pages">
        <h2>${page}</h2>
        <img src="app/assets/tail-spin.svg" alt="circles">
        </div>
    `;
    sessionStorage.setItem(`loader${page}`,true);
    $sectionLoader.classList.add("loader-pages-container");
    $main.appendChild($sectionLoader);

    setTimeout(() => {
        $main.removeChild($sectionLoader);
    }, 2000);
}