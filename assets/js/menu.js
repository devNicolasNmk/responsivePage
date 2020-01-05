
// --------- show and hide search-nav --------- //
//target elements
var search = document.getElementById('search');
var search_nav = document.getElementById('search-nav');

//set a listener on click on search
search.addEventListener('click', function(){

    //show
    if (search_nav.style.visibility == 'visible'){
        search_nav.style.visibility='hidden';
     //hide    
    }else{
        search_nav.style.visibility = 'visible'
    }
})