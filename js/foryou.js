$(document).ready(function(){

  var $window = $(window);
  var $doc = $(document);
  var $para = $(".para");
  var $btn = $("#fy-scroll a");

  $btn.click(function(){
    
      
    })
  
  $window.on("load scroll resize",function(){
    $para.each(function(){
      var quoteTop = $(this).offset().top;
      var setH = 100;
      var $windowH = $window.height();
    
      if($window.scrollTop() >= ( quoteTop + setH)-$windowH){
        $(this).animate({opacity:"1"},700);
      };
  
    })
  }
  
  )})
  
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


  var quote = document.querySelectorAll(".quote");
  console.log(quote);
  console.log(quote[0].offsetTop);
  console.log(quote[1].offsetTop);
  console.log(quote[2].offsetTop);
  console.log(quote[3].offsetTop);

  