$(document).ready(function(){
    var $spinitem = $(".spin-box");
    var $spintitle = $(".spin-title");
    var $bgimage = ['url("../for_you_image/images/flex-about.jpg")',
                    'url("../for_you_image/images/flex-profile.jpg")',
                    'url("../for_you_image/images/flex-works.jpg")',
                    'url("../for_you_image/images/flex-contact.jpg")'];

    $spinitem.each(function(){
        $(this).hover(function(){
        $(this).css("flex","6")
               .find(".spin-title").css({"transform":"rotate(0deg)","top":"5%","opacity":"1"});
        },function(){
        $(this).css("flex","1")
               .find(".spin-title").css({"transform":"rotate(90deg)","top":"50%","opacity":"0.9"}); 
        })

    })

})