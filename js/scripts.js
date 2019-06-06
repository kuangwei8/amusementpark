$(document).ready(function() {

  $("button").click(function () {

    $("li").removeClass("green");
    $("li").removeClass("yellow");

    var Height = parseInt(prompt ("Enter your height in feet."));

      if (Height >=3 && Height<5){
          $(".kids").addClass ("green")
        } else if (Height =>5 && Height<7) {
          $(".adults").addClass ("yellow")
        };
  });
});
