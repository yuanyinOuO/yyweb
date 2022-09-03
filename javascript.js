

/*
function toggleMenu(number){
    var menu=document.getElementById("menu-"+number);
    menu.classList.toggle("hide");
}



var home = document.getElementById("home"),
    note = document.getElementById("note"),
    live2dtalk = document.getElementById("live2dtalk")

home.addEventListener("mouseover" , function(){
    live2dtalk.innerText = "回到主頁面"
})
home.addEventListener("mouseout" , function(){
    live2dtalk.innerText = "welcome!"
})
note.addEventListener("mouseover" , function(){
    live2dtalk.innerText = "這個是筆記連結!!"
})
note.addEventListener("mouseout" , function(){
    live2dtalk.innerText = "welcome!"
})
*/
/* 選單開合 */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } 
    else {
        dropdownContent.style.display = "block";
    }
    });
}
/* live2d talk */
var live2dtalk = document.getElementById("live2d-talk"),
    headimg = document.getElementById("headimg")
    home = document.getElementById("home"),
    note = document.getElementById("note")

headimg.addEventListener("mouseover" , function(){
    live2dtalk.innerText = "可愛的miku頭像OuO"
})
headimg.addEventListener("mouseout" , function(){
    live2dtalk.innerText = "welcome my web!"
})
home.addEventListener("mouseover" , function(){
    live2dtalk.innerText = "回到主頁面，雖然好像很沒用QQ"
})
home.addEventListener("mouseout" , function(){
    live2dtalk.innerText = "welcome my web!"
})
note.addEventListener("mouseover" , function(){
    live2dtalk.innerText = "可以前往我做的筆記，不過有些還沒整理好"
})
note.addEventListener("mouseout" , function(){
    live2dtalk.innerText = "welcome my web!"
})




    