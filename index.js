function myFunction() {
    document.getElementById('myDropdown').classList.toggle("show")
}
window.onclick = function (event) {
    if (!event.target.matches('.btn')){
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for ( i = 0; i < dropdowns.length; i++){
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show')
    }
    }
    }
}

function myFunction1(){
    document.getElementById('myDropdown1').classList.toggle('show1')
}
window.onclick = function (event) {
    if (!event.target.matches ('.dropbtn1')){
    var dropdowns1 = document.getElementsByClassName('dropdown-content1')
    var i;
    for (i = 0; i <dropdowns1.length; i++) {
    if( openDropdown1.classList.contains('show1')){
        openDropdown1.classList.remove('show1');
    }
    }
    }
}
