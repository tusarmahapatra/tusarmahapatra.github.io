function toggleLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "light-mode";
}

function toggleDark() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "light-mode" ? "dark-mode" : "dark-mode";
}

$(".btn-group > .btn").click(function() {
    $(".btn-group > .btn").removeClass("active");
    $(this).addClass("active");
});

// Set the date we're counting down to
var countDownDate = new Date("May 28, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("dtg").innerHTML = days + "d ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("dtg").innerHTML = "D-DAY!!!";
  }
}, 1000);
