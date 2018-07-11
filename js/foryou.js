$(document).ready(function(){

  var $window = $(window);
  var $para = $(".para");
  var top = $("#title-box");
  
  top.click(function(){
  $("html, body").animate({scrollTop : 0 },800);
  });
 
  
  $window.on("load scroll resize",function(){
    $para.each(function(){
      var quoteTop = $(this).offset().top;
      var setH = 100;
      var $windowH = $window.height();
    
      if($window.scrollTop() >= ( quoteTop + setH)-$windowH){
        $(this).stop().animate({opacity:"1"},800);
      }else{
        $(this).stop().animate({opacity:"0"},600);
      }
      
  
    })
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

 var $scrollbtn = $("#fy-scroll a");

 $scrollbtn.each(function(){
   $(this).click(function(){ 
    
    $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top - 100},600);
   
   })
 })
