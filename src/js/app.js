const menu = () => {
    let btn_menu = document.getElementById('button-menu');

    if (!btn_menu.classList.contains('menu-visible')){
        btn_menu.classList.add('menu-visible');
    } else {
        btn_menu.classList.remove('menu-visible');
    }
}