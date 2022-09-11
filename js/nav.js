$(function(){
    $(".dropdown-btn").click(function(){
        $(".dropdown-btn").toggleClass("active");
        var dropdownContent = $(".dropdown-btn").next();
        if (dropdownContent.css("display" , "block")) {
            dropdownContent.css("display" , "none");
        } 
        else {
            dropdownContent.css("display" , "block");
        }
    })
});




/*
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
*/