var timer = 60;
var count = 0;

$("#start-game").on("click", run);

$(".buttonHolder").on("click", stop);


function run() {

  count = setInterval(decrement, 1000);

}

function decrement() {

  timer = timer - 1;
  $("#show-timer").html("<h2>" + timer + "</h2>");

  if(timer === 0) {
    stop();
    alert("Time is Up!");

  }
}

function stop() {

  clearInterval(count);

}

run();
