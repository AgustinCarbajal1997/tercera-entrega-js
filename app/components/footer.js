export const Footer = () => {
    const $footer = document.createElement("footer");
    
    $footer.innerHTML = `
        <div class="footer">
            <div class="footer-data">
                <h5>Quiénes somos</h5>
                <h5>Políticas de privacidad</h5>
                <h5>Protocolos COVID-19</h5>
                <h5>Atención al cliente</h5>
                <h5>Preguntas frecuentes</h5>
            </div>
            <div class="footer-contactme">
                <a href="https://wa.me/543875411213" target="_blank" rel="noopener"><h6>Web desarrollada por Agustín Carbajal © 2021  <i class="fab fa-whatsapp"></i> +54-(387)5411213</a></h6>
            </div>
        </div>
        
    `;

    return $footer;
}