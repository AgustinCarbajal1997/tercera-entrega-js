const Header = () => {
    const $header = document.createElement("header"),
        $logo = document.createElement("div"),
        $logoImg = document.createElement("h2"),
        $nav = document.createElement("nav"),
        $ul = document.createElement("ul"),
        $fragment = document.createDocumentFragment();

        $logoImg.textContent = "THE CROWN"
        $logo.classList.add("logo");
        $logo.appendChild($logoImg);
        
        const menu = [
            {
                item: "HOME",
                href: "#/"
            },
            {
                item: "DEPORTES",
                href: "#/deportes"
            },
            {
                item: "MODA",
                href: "#/moda"
            },
            {
                item: "RUNNING",
                href: "#/calzados"
            }
        ]


        menu.forEach(el => {
            const $li = document.createElement("li"),
                $a = document.createElement("a");
            
            $a.textContent = el.item;
            $a.href = el.href;
            $li.appendChild($a);
            $fragment.appendChild($li);

        })

        $ul.classList.add("menu-header");
        $ul.appendChild($fragment);
        $nav.classList.add("nav-header");
        $nav.appendChild($ul);
        

        
        

        
        

        $header.classList.add("header");
        $header.appendChild($logo)
        $header.appendChild($nav);

        return $header;
}

export default Header;