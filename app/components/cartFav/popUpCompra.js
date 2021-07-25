export const popUpCompra = () => {
    const $main = document.getElementById("main"),
        $divContainer = document.createElement("div");
        $divContainer.innerHTML = `
            <form class="finishPurchase">
                <i class="fas fa-times closePopUpCompra"></i>
                <label>Nombre y apellido</label>
                <input type="text" name="name" autocomplete="off">
                <h5 class="error-input input-nameSurname">Ingrese nombre y apellido válidos</h5>
                <label>Mail</label>
                <input type="text" name="mail" >
                <h5 class="error-input input-mail">Ingrese un mail válido</h5>
                <label>Teléfono</label>
                <input type="text" name="phone">
                <h5 class="error-input input-phone">Ingrese número telefónico válido</h5>
                <label>Número de tarjeta (Visa/Mastercard)</label>
                <input type="text" name="creditCard" placeholder="xxxx-yyyy-wwww-zzzz">
                <h5 class="error-input input-creditCard">Ingrese número de tarjeta válido</h5>
                <input type="submit" value="CONFIRMAR COMPRA" class="submit-payment">
            </form>
        `

        
        $divContainer.classList.add("finishPurchase--container");
        $main.insertAdjacentElement("afterbegin",$divContainer); //inserto en el main el card
        
        
        // cerrar popUpCompra
        const $closePopUpCompra = document.querySelector(".closePopUpCompra");
        $closePopUpCompra.addEventListener("click", ()=> $main.removeChild($divContainer));


        // evento blur que cuando se activa ejecuta una expresion regular
        const $form = document.querySelector(".finishPurchase"),  
            $nameSurname = document.querySelector(".input-nameSurname"),
            $mail = document.querySelector(".input-mail"),
            $phone = document.querySelector(".input-phone"),
            $creditCard = document.querySelector(".input-creditCard");
            
        $form.addEventListener("blur", (e)=>{
            
            if(e.target.name === "name"){ //validacion nombre y apellido
                let regExpNameSurname = new RegExp(/^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/,"ig");
                if(!regExpNameSurname.test(e.target.value)){
                    $nameSurname.classList.add("isActiveErrorInput");
                }else{
                    $nameSurname.classList.remove("isActiveErrorInput")
                }
            }
            if(e.target.name === "mail"){//validacion mail
                let regExpNameMail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"ig");
                if(!regExpNameMail.test(e.target.value)){
                    $mail.classList.add("isActiveErrorInput")
                }else{
                    $mail.classList.remove("isActiveErrorInput");
                }
            }
            if(e.target.name === "phone"){//validacion numero telefonico
                let regExpNamePhone = new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
                if(!regExpNamePhone.test(e.target.value)){
                    $phone.classList.add("isActiveErrorInput");
                }else{
                    $phone.classList.remove("isActiveErrorInput");
                }
            }
            if(e.target.name === "creditCard"){
                let regExpNameCreditCard = new RegExp(/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/); //SOLO VISA MASTERCARD
                let cardNumber = e.target.value.replace(/-/g,"");
                if(!regExpNameCreditCard.test(cardNumber)){
                    $creditCard.classList.add("isActiveErrorInput");
                }else{
                    $creditCard.classList.remove("isActiveErrorInput");
                }
            }
            
            

        },true)
        
        // confirmar compra
        const $submitPayment = document.querySelector(".submit-payment");
        $submitPayment.addEventListener("click", (e)=>{
            e.preventDefault();
           const containError = document.querySelectorAll(".error-input"),
                inputs = document.querySelectorAll("input");
            
            
           let validacionError; 
        //    si alguno contiene la clase activeError no se ejecuta compra o input viene vacio
           containError.forEach((el, index) => {
               if(el.classList.contains("isActiveErrorInput") || !inputs[index].value){
                   if(!inputs[index].value) el.classList.add("isActiveErrorInput");
                   validacionError = true;
               }
           })
           
           if(!validacionError){
               const $sectionCarrito = document.querySelector(".section-carrito"),
                    $badge = document.querySelector(".cart-badge"); 
            $divContainer.innerHTML = `
                <div class="finalMessage"><h3>Muchas gracias por su compra</h3></div>
            `;
            setTimeout(() => {
                // remuevo el mensaje y reseteo la pagina cart y borro carrito del storage
                $main.removeChild($divContainer);
                $sectionCarrito.classList.remove("section-carrito");
                $sectionCarrito.classList.add("without-products");
                $sectionCarrito.innerHTML = `<h2>NO HAY PRODUCTOS EN EL CARRITO.</h2> <a href="#/">VOLVER A HOME</a>`;
                $badge.textContent = 0;
                localStorage.removeItem("carrito");
            }, 1000);
           }
        })


        
}