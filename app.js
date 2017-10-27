var Timer=function(pmiliseconds){

   if(typeof pmiliseconds==="undefined")
      pmiliseconds=0;
miliseconds=pmiliseconds;
 };

 var myVue;

 var miliseconds;

 var minutes=0;

 var seconds=0;

 var intervalHandler;
 var timeoutHandler;

 var timerAlreadyStarted=false;
Timer.setMiliseconds=function(passedMiliseconds){
     if(timerAlreadyStarted===false)
        miliseconds=passedMiliseconds;


 }

 Timer.setVue=function(vue)
  {
    myVue=vue;
  };

 function stopTimer(){
  timerAlreadyStarted=false;
  minutes=0;
  seconds=0;
  clearInterval(intervalHandler);
  clearInterval(timeoutHandler);
 };



  function outputTime(){
    var minutesAAfficher="00";
    seconds++;
    if(seconds>0 && seconds%60===0)
      {
        seconds=0;
        minutes++;
      }

    if(seconds<10)
      seconds="0"+seconds;

   if(minutes<10)
   {
      minutesAAfficher="0"+minutes;
    }
    else{
      minutesAAfficher=minutes;
    }
    var k=1000*60;
    var milisecondsToMinutes=miliseconds/k;
    var milisecondsToSeconds=miliseconds/1000;
    var timeLimit;
    if(milisecondsToMinutes<1){
      timeLimit=milisecondsToSeconds<10?"00:"+"0"+milisecondsToSeconds:"00:"+milisecondsToSeconds;
    }
  else{
      milisecondsToMinutes=milisecondsToMinutes<10?"0"+milisecondsToMinutes:milisecondsToMinutes;
      timeLimit=milisecondsToMinutes+":00";
  }
    var output=minutesAAfficher+":"+seconds+" / "+timeLimit;
    if(myVue)myVue.update(output);

    console.log(output);
  }


 Timer.startTimer=function(){

 if(timerAlreadyStarted===false)
  {
      timerAlreadyStarted=true;
      this.timerEnds=false;
      intervalHandler=setInterval(outputTime,1000);
      timeoutHandler=setTimeout(stopTimer,miliseconds);
  }
  else
  {

    console.log("Timer already started");
  }

 };

 Timer.forcedStop=function(){
  timerAlreadyStarted=false;
  minutes=0;
  seconds=0;
  clearInterval(intervalHandler);
  clearInterval(timeoutHandler);
 };



 Timer.resetTimer=function(){
  this.forcedStop();
  this.startTimer();
 };

 module.exports=Timer;
