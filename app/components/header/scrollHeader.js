export const ScrollHeader = () => {
    window.addEventListener("scroll", () =>{
        
        const header = document.querySelector(".header");
        if(window.scrollY > 0){
            
            header.classList.add("isActiveHeader");
        }else{
            header.classList.remove("isActiveHeader");
        }
    })
}
            