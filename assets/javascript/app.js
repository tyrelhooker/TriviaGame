var answersCorrect = 0;
var answersWrong = 0;
var unanswered = 0;
var counter = answersCorrect;
var timer;
var intervalId;
var countDown = 5; // Need to set to 100 or 130
// var q1 = $('input[name=q1]:checked', '#quiz').val();
// var q2 = $('input[name=q2]:checked', '#quiz').val();

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  countDown--;
  $("#timer").html("<p>" + countDown + "</p>");
  if (countDown === 0) {
    stop();
  }
}

function stop() {
  clearInterval(intervalId);
  $(".quizBox").hide();
  $(".resultsBox").show();
}

// Hides quiz box and results box on load of page
$(".quizBox").hide();
$(".resultsBox").hide();

// Start on click
$("#startBtn").on("click", function(){
  run();
  decrement();

  // Hide the beginning game screen and show the quiz
  $("#startBtn").hide()
  $(".quizBox").show();
});

$("#submitBtn").on("click", function() {
  stop();
});




// function quizCheck() {
//   var q1 = $('input[name=q1]:checked').val();
//   var q2 = $('input[name=q2]:checked').val();
//   var q3 = $('input[name=q1]:checked').val();
//   var q4 = $('input[name=q1]:checked').val();
//   var q5 = $('input[name=q1]:checked').val();
//   var q6 = $('input[name=q1]:checked').val();
//   var q7 = $('input[name=q1]:checked').val();
//   var q8 = $('input[name=q1]:checked').val();
//   var q9 = $('input[name=q1]:checked').val();
//   var q10 = $('input[name=q1]:checked').val();

//   if (question1 === radio.value["c"]) {
//     answersCorrect++;
//     console.log(q1);
//   }
// console.log(q1);
// };


  