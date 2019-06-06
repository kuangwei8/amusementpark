$(document).ready(function() {
  $("button").click(function () {
    var Height = parseInt(prompt ("Enter your height in feet."));


    if (Height >=3 && Height<5){
      $(".kids").show();
      $(".adults").hide();
    }  else if (Height =>5 && Height<7) {
        $(".kids").hide();
        $(".adults").show();
    }

  });

});
