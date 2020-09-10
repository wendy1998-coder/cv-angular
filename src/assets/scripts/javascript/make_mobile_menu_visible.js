$(window).on("load", function () {
    // loading needed components
    const menu_button = document.getElementsByClassName("mobiel_menu")[0];
    const mobiel_menu = document.getElementById("mobiel_menu");
    let menu_button_style = getComputedStyle(menu_button);
    let menu_style = getComputedStyle(mobiel_menu);
    let mouse_is_over_button = false;
    let mouse_is_over_menu = false;

    window.onresize = function() {
        menu_button_style = getComputedStyle(menu_button);
    };

    /*check if mouse is over either the menu or the button*/
    let make_menu_visible = function () {
        mouse_is_over_button = true;
        if (mobiel_menu.style.display === "none" || menu_style.display === "none") {
            mobiel_menu.style.display = "block";
        }
    };

    const make_menu_invisible = function() {
        mouse_is_over_menu = false;
        if (mobiel_menu.style.display === "block") {
            mobiel_menu.style.display = "none";
        }
    };

    mobiel_menu.addEventListener("mouseover",function() {mouse_is_over_menu = true;});
    mobiel_menu.addEventListener("mouseleave",  make_menu_invisible);
    menu_button.addEventListener("mouseover", make_menu_visible);
    menu_button.addEventListener("mousedown", make_menu_visible);
    menu_button.addEventListener("mouseleave", function() {mouse_is_over_button = false;});

    window.setInterval( function() {
        if (!(mouse_is_over_menu || mouse_is_over_button)) {
            make_menu_invisible()
        }
    }, 500)
});
