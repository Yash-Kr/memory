// alert("Hello");

var  buttonColours=["red", "blue", "green", "yellow" ];
var level=1;
var gamePattern=[];
var userClickedPattern=[];
var started=true;


// =================================================================================================================
$(document).keypress(function()
{
if(started)
{
    setTimeout(function()
         {
           nextSequence();
         },500);
    started=false;
}
})
// =================================================================================================================



// =================================================================================================================
function nextSequence()
{
userClickedPattern=[];

$("h1").text("LeveL "+level);
var randomNumber = Math.floor(Math.random() * 4);

var randomChosenColor = buttonColours[randomNumber];

gamePattern.push(randomChosenColor);

$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColor);
  $("h3").text("0 Inputs Done ");
level=level+1;
}

// =================================================================================================================

$(".btn").click(function()
{
      if(started)
      {
        setTimeout(function()
             {
               nextSequence();
             },500);
        started=false;
       }

      else
      {
      var  userChosenColour =this.id;
      userClickedPattern.push(userChosenColour);
      playSound(userChosenColour);
      animatePress(userChosenColour);
      $("h3").text(" " +userClickedPattern.length + " Inputs Done ");

      checkAnswer(userClickedPattern.length - 1);
      }
})

// =================================================================================================================
function playSound(name)
{
var audio = new Audio("sounds/"+name+".mp3");
audio.play();
}

// =================================================================================================================

function animatePress(currentColor)
{
$("."+currentColor).addClass("pressed");

setTimeout(function()
{
$("."+currentColor).removeClass("pressed");
},100);

}
// =================================================================================================================

function checkAnswer(currentLevel)
{
if(gamePattern[currentLevel] === userClickedPattern[currentLevel] )
{
   if(gamePattern.length===userClickedPattern.length)
      setTimeout(function()
      {
      nextSequence();
      },1000);

}
else
{
playSound("wrong");
$("body").addClass("game-over");
setTimeout(function()
{
$("body").removeClass("game-over");
},200);

$("h1").text("Game Over, Press Any Key to Restart");
startOver();
}

}

// ===============================================================================================================


function startOver()
{
level=1;
started=true;
gamePattern=[];

}
