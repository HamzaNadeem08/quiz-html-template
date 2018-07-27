
 var $ = jQuery;
$(document).ready(function(){
 
  setTimeout(function () {
   
     var  win = $(window).height(); 
    //  console.log("win " + win);
    //  console.log("h1-t" + $(".h1-t" ).outerHeight());
   
     win -= $(".h1-t" ).outerHeight(); 
     win -= $(".page-footer" ).outerHeight(); 
      
     $(".content-area").height(win); 
     win -= 2;
     $(".evolution-scroll").height(win);
    // console.log('evolution:' + win);

    $(window).resize(function(){
      var  win = $(window).height(); 
      // console.log("win " + win);
      // console.log("h1-t" + $(".h1-t" ).outerHeight());
    
      win -= $(".h1-t" ).outerHeight();  
       
      $(".content-area").height(win); 
      win -= 2;
      $(".evolution-scroll").height(win);
     console.log('evolution:' + win);
       
     });
    
  
  }, 100);});