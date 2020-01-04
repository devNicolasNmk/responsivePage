var button_menu = document.getElementById('menu-button');
var header_ul = document.getElementById('header-ul');

button_menu.addEventListener('click', function () {
    if (header_ul.style.visibility == 'visible') {
        header_ul.style.visibility = 'hidden';
        //hide    
    } else {
        header_ul.style.visibility = 'visible';
    }
});

