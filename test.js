var timer=require("./app.js");
if(process.argv[2]==="" || typeof process.argv[2]==="undefined" || typeof process.argv[2]===null)
  console.log("You should pass miliseconds to test the project");
else {
  timer.setMiliseconds(process.argv[2]);
  timer.startTimer();
}
