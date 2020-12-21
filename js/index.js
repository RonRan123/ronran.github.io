$(document).ready(function(){
  $(".navbar-toggle").click(function(){

      /* this if else to change the text in the button */
      if($(".navbar-toggle").text() == "☰"){
       $(".navbar-toggle").text("X");
      }else{
        $(".navbar-toggle").text("☰");
      }

    /* this function toggle the visibility of our "li" elements */
    $("li").toggle("slow");
  });
});
