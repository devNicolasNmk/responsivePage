var button_menu = document.getElementById('menu-button');
var header_ul = document.getElementById('header-ul');
var global_wrapper = document.getElementById('global-wrapper');
let size = 800;
button_menu.addEventListener('click', function (e) {
    if (header_ul.style.visibility == 'visible') {
        header_ul.style.visibility = 'hidden';
        //hide    
    } else {
        header_ul.style.visibility = 'visible';
    }
});

//show ul when resizing window (> 800px) after closing menu with menu button (<800px)
function show_ul(evnt) {
    if (global_wrapper.clientWidth > 800){
        header_ul.style.visibility = 'visible'
    } else if (global_wrapper.clientWidth < 800){
        header_ul.style.visibility = 'hidden'
    }   
}
window.onresize = show_ul;
