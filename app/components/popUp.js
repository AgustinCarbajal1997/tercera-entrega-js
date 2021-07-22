export const PopUp = () => {

    const $sectionPopUp = document.createElement("div"), 
        $popUp = document.createElement("div"),
        $popUpClose = document.createElement("div"),
        $popUpImg = document.createElement("div"),
        $popUpContent = document.createElement("div");

        $popUpContent.classList.add("popUpContent");
        $popUpImg.classList.add("popUpImg");
        $popUpClose.classList.add("popUpClose");
        $popUp.classList.add("popUp");
        $sectionPopUp.classList.add("container-popUp");


        $popUpClose.innerHTML = `<i class="fas fa-times"></i>`;
        $popUp.appendChild($popUpClose);

        $popUpClose.addEventListener("click", ()=>{
            $sectionPopUp.classList.remove("popUpIsActive");
        })


        $popUp.appendChild($popUpImg);
        $popUp.appendChild($popUpContent);

        
        $sectionPopUp.appendChild($popUp);

    return $sectionPopUp;


}