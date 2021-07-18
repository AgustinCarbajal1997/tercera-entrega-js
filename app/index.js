import App from "./app.js";

document.addEventListener("DOMContentLoaded", (e)=>{
    App()
})

window.addEventListener("hashchange", e => {
    App()
})