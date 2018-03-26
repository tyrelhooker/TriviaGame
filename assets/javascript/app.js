var correctAns = 0;
var wrongAns = 0;
var unanswered = 0;
var counter = answersCorrect;
var timer;
var intervalId;
var countDown = 30; // Need to set to 100 or 130
var answerKey = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"];
var playerAns = [];
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
  quizCheck();
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




function quizCheck() {
  var ans1 = $('input[name=q1]:checked').val();
  playerAns.push(ans1);
  console.log("the value of answer 1 is: "+ ans1);
  // console.log("player ans arr:" + playerAns);
  var ans2 = $('input[name=q2]:checked').val();
  playerAns.push(ans2);
  console.log("the value of answer 2 is: " + ans2);
  // console.log("player ans arr:" + playerAns);
  var ans3 = $('input[name=q3]:checked').val();
  playerAns.push(ans3);
  var ans4 = $('input[name=q4]:checked').val();
  playerAns.push(ans4);
  var ans5 = $('input[name=q5]:checked').val();
  playerAns.push(ans5);
  var ans6 = $('input[name=q6]:checked').val();
  playerAns.push(ans6);
  var ans7 = $('input[name=q7]:checked').val();
  playerAns.push(ans7);
  var ans8 = $('input[name=q8]:checked').val();
  playerAns.push(ans8);
  var ans9 = $('input[name=q9]:checked').val();
  playerAns.push(ans9);
  var ans10 = $('input[name=q10]:checked').val();
  playerAns.push(ans10);
  console.log("player ans arr:" + playerAns);
}

function ansCheck() {
  for (i = 0; i < answerKey.length; i++) {
    if (playerAns[i] === answerKey[i]) {
      correctAns++;
    } else {
      wrongAns++;
    }
  }
  console.log("correct answers: " + correctAns);
  console.log("wrong answers: " + wrongAns)
}
//   if (question1 === radio.value["c"]) {
//     answersCorrect++;
//     console.log(q1);
//   }
// console.log(q1);
// };


  