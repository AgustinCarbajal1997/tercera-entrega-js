export const IntersectionOberserverVisibility =  () => {
    // intersection observer para ir activando los fade in
    const $section = document.querySelectorAll("section[data-visibility]");

    const callback = (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.style.visibility = "visible";
                entry.target.style.opacity = "1";
            }
        });
    }
    
    const observer = new IntersectionObserver(callback,{
        threshold:0.10
    })

    $section.forEach(el => observer.observe(el));

}