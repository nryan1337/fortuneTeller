$(document).ready(function() {
  $("form#fortune_survey").submit(function(event) {

    var unfortunateEvents = [];

    $("input:checkbox[name=fortuneQuestion]:checked").each(function() {
      unfortunateEvents.push($(this).val());
    });

    var fortuneResult = "";

    if (unfortunateEvents.length == 0) {
      fortuneResult = "you're ok";
    } else if (unfortunateEvents.length == 1){
      fortuneResult = "bit of bad luck";
    } else if (unfortunateEvents.length == 2){
      fortuneResult = "ok that's starting to suck";
    } else {
      fortuneResult = "your existance is cursed"
    }

    $("#output").append(fortuneResult + "\n");
    $("#output").show();

    event.preventDefault();
  });
});
