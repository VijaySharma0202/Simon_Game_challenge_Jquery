let buttonColors = ['red','blue','green','yellow'];
let gamePattern = [];
let userClickedPattern=[];
var l=0;
var started=false;
function newSequence(){
    userClickedPattern=[];
    var a= Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[a];
    gamePattern.push(randomChosenColor);
    animatePress(randomChosenColor);
    $('#'+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    l+=1;
    $('h1').html('Level '+l);
    // console.log(gamePattern+'game');
    
}
$('.btn').click(function handler(){
    var userChosenColor=this.id;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    // console.log(userClickedPattern+'user');
    var a=userClickedPattern.length-1;
    checkAnswer(a);
});
function playSound(name){
    let aud=new Audio("sounds/" +name+ ".mp3");
    aud.play();
}
function animatePress(currentColor){
    $('#'+currentColor).addClass("pressed");
    setTimeout(function(){
        $('#'+currentColor).removeClass("pressed")
    },100);
}


$(document).keypress(function (){if(!started){
    newSequence();
    started=true;
    $('h1').html('Level '+l);
}});
function checkAnswer(i){
    if(userClickedPattern[i]===gamePattern[i]){
        console.log('Success');
    if(userClickedPattern.length===gamePattern.length){
        setTimeout(function (){newSequence()},1000);
    }}
    else{
        console.log('wrong');
        playSound('wrong');
        $('body').addClass('game-over');
        setTimeout(function (){$('body').removeClass('game-over')},200);
        $('h1').html('Game Over, Press Any Key to Restart');
        startover();
}   
}
function startover(){
    l=0;
    gamePattern=[];
    started=false;
}