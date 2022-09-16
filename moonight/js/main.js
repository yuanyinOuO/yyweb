
var mo=function(e){e.preventDefault();};
function stop(){
        document.body.style.overflow='hidden';       
        document.addEventListener("touchmove",mo,{passive:false});//禁止页面滑动
}
//直接默认不让滑动
stop();
 
 
//取消滑动限制
function move(){
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,{passive:false});       
}
