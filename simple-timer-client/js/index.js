

var Timer=function(pmiliseconds){
  var myVue;

  var miliseconds;
  var remainingMiliseconds;
  var minutes=0;
  var seconds=0;
  var pausedMinutes=0;
  var pausedSeconds=0;
  var pausedTimeLimit=0;
  var timeLimit;

  var intervalHandler;
  var timeoutHandler;
  var timerPaused=false;
  var timerAlreadyStarted=false;
  var TimerObject=this;

  this.setMiliseconds=function(passedMiliseconds){
    alert(passedMiliseconds);
    if(timerAlreadyStarted===false)
    {
      miliseconds=passedMiliseconds;
      remainingMiliseconds=miliseconds;

      //La mwen fomate affichage time limit la
      var k=1000*60;
      var milisecondsToMinutes=miliseconds/k;
      var milisecondsToSeconds=miliseconds/1000;

      if(milisecondsToMinutes<1){
        timeLimit=milisecondsToSeconds<10?"00:"+"0"+milisecondsToSeconds:"00:"+milisecondsToSeconds;
      }
      else{
        milisecondsToMinutes=milisecondsToMinutes<10?"0"+milisecondsToMinutes:milisecondsToMinutes;
        timeLimit=milisecondsToMinutes+":00";
      }
    }

  }
  if(isNaN(parseInt(pmiliseconds)))
  {
    TimerObject.setMiliseconds(0);
  }
  else{
    pmiliseconds=parseInt(pmiliseconds);
    TimerObject.setMiliseconds(pmiliseconds);
  }



  this.setVue=function(vue)
  {
    myVue=vue;
  };

  this.stop=function(){
    if(timerAlreadyStarted)
    {
      timerAlreadyStarted=false;
      minutes=0;
      seconds=0;
      clearInterval(intervalHandler);
      clearInterval(timeoutHandler);
      console.log("timer stopped!");
    }
    else{
      if(timerPaused)
         console.log("Timer already paused");
      else
         console.log("Timer not yet started. So It cannot be stopped :)");
    }
  }

  function outputTime(){
    remainingMiliseconds-=1000;
    console.log("MILISECONDS REMAINING:"+remainingMiliseconds);
    var minutesAAfficher="00";
    seconds++;
    if(seconds>=60 && seconds%60===0)
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

    var output=minutesAAfficher+":"+seconds+" / "+timeLimit;
    if(myVue)myVue.innerHTML=output;

    console.log(output);
  }

  this.start=function(){
    if(timerAlreadyStarted===false)
    {
      if(timerPaused===true)
      {
        miliseconds=remainingMiliseconds;
        minutes=pausedMinutes;
        seconds=pausedSeconds;
        timeLimit=pausedTimeLimit;
      }
      intervalHandler=setInterval(outputTime,1000);
      timeoutHandler=setTimeout(TimerObject.stop,miliseconds);
      timerPaused=false;
      timerAlreadyStarted=true;
    }
    else{
      console.log("Timer already started. Wait for timer to finish or stop timer");
    }

  };


  this.pause=function(){
    if(timerAlreadyStarted)
    {
      pausedSeconds=eval(seconds);
      pausedMinutes=eval(minutes);
      pausedTimeLimit=timeLimit;
      timerPaused=true;
      console.log("Timer paused at:"+pausedSeconds+" seconds");
      console.log("Timer paused at:"+pausedMinutes+" minutes");
      console.log("Time Limit of paused timer:"+timeLimit);
      this.stop();
    }
    {
      console.log("Timer is not yet started. Can't pause.");
    }

  };

};
