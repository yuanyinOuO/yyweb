var live2dtalk = document.getElementById("live2d-talk"),
    headimg = document.getElementById("headimg"),
    home = document.getElementById("home"),
    note = document.getElementById("note")

headimg.addEventListener("mouseover" , function(){
    live2dtalk.innerText = "可愛的miku頭像OuO";
})
headimg.addEventListener("mouseout" , function(){
    live2dtalk.innerText = "welcome my web!";
})
home.addEventListener("mouseover" , function(){
    live2dtalk.innerText = "回到主頁面，雖然好像很沒用QQ";
})
home.addEventListener("mouseout" , function(){
    live2dtalk.innerText = "welcome my web!";
})
note.addEventListener("mouseover" , function(){
    live2dtalk.innerText = "可以前往我做的筆記，不過有些還沒整理好";
})
note.addEventListener("mouseout" , function(){
    live2dtalk.innerText = "welcome my web!";
})
