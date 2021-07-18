export const BannerModa = () => {
    // BANNER DEPORTES
    const $section = document.createElement("section"),
        $imgBanner = document.createElement("img"),
        $title = document.createElement("h3");

    $imgBanner.classList.add("banner-deportes__img");
    $imgBanner.src = "app/assets/bannerModa/bannermoda3.png";
    $imgBanner.alt = "banner";

    $title.classList.add("banner-deportes__title")
    $title.textContent = "GAZELLE";

    $section.classList.add("banner-deportes");
    $section.appendChild($title);
    $section.appendChild($imgBanner);

    return $section;

}