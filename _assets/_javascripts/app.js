$(function(){
  $(".links i.fa,.links .dropdown").hover(function() {
    $(".links .dropdown").css("display","block")
  }, function() {
    $(".links .dropdown").css("display","none")
  });
  $(".links i.fa").click(function(event) {
    /* Act on the event */  $(".links .dropdown").css("display","block")
  });
  $(".links ul li").click(function(){
     $(".links .dropdown").css("display","none")
  })
})
