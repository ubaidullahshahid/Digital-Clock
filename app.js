setInterval(digitalClock, 1000);
function digitalClock() {
  var newDate = new Date();
  var year = newDate.getFullYear();
  var month = newDate.getMonth() + 1;
  var day = newDate.getDate();
  var hour = newDate.getHours();
  var min = newDate.getMinutes();
  var sec = newDate.getSeconds();
  var am_pm = "AM";
  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = "PM";
  } else if (hour == 0) {
    hour = 12;
    AM = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  var currentDate = day + "/" + month + "/" + year;
  var currentTime = hour + ":" + min + ":" + sec + am_pm;

  document.getElementById("clock").innerHTML = currentTime;
  document.getElementById("date").innerHTML = currentDate;
}

digitalClock();
var random = Math.random(20);
var round = Math.round(random);

console.log(random, round)
