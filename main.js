
$(window).scroll(function(){
  if($(window).scrollTop() >= 18830){
      $(window).scrollTop(201);
  }
  else if( $(window).scrollTop() == 0){
      $(window).scrollTop(18629);
  }

  if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $(window).scrollTop(2000);
   }

});

