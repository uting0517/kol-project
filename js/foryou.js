$(document).ready(function(){

var $window = $(window);
var $doc = $(document);
var $quote = $(".quote");
var $btn = $("#fy-scroll a");

console.log($quote.offset().top);

$btn.click(function(){
   $("html").animate({scrollTop: 200},1000,"swing");
 })

})

var cursor = "<span>|</span>";
var count = 0;
var words =document.querySelector("#title-box");
var content = "#preparing";


function typing(){
if(count<=content.length){
       words.removeAttribute("hidden");
       words.innerHTML = content.substring(0,count) +  "<span>|</span>";
       count++;
       setTimeout("typing()",300);
}else{
    count = 0;
       setTimeout("typing()",5500);
}
}

   
typing();
