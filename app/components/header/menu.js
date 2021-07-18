export const Menu = () => {
    const $divMenu = document.createElement("div"),
        $nav = document.createElement("nav"),
        $ul = document.createElement("ul"),
        $fragment = document.createDocumentFragment();

        const menu = [
            {
                item: "HOME",
                href: "#/"
            },
            {
                item: "RUNNING",
                href: "#/calzados"
            },
            {
                item: "DEPORTES",
                href: "#/deportes"
            },
            {
                item: "MODA",
                href: "#/moda"
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

        $ul.appendChild($fragment);
        $nav.appendChild($ul);
        $divMenu.classList.add("menuFloat");
        $divMenu.appendChild($nav);

        return $divMenu;



}