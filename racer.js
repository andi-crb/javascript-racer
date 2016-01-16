//checks the document is loaded before running the script

$('document').ready(function() {

//define lobster object and raceOver variable

var allTheLobsters = {redLobster : "Red Space Lobster", blueLobster : "Blue Space Lobster"};
var raceOver = false;


//victory function

function victoryToTheLobsterGods(whichLobster){
  alert("Congratulations "+allTheLobsters[whichLobster]);
  raceOver = true;


};


//function to move the lobster forward one cell  

function advance(whichLobster){
var current = $("#"+whichLobster+"_strip td.active");
var next = current.next();
current.toggleClass("active");
if (!next.length && raceOver == false) {
  victoryToTheLobsterGods(whichLobster);
} else {
next.toggleClass("active");
};
};

//bind key presses to lobsters moving forwards, and determine which lobster moves on which key press
// value for q is 81
// value for p is 80


$(document).on('keyup', 
  function( event ) {
    if ( event.which == 81 ) {
      advance('redLobster');
    }
    else if ( event.which == 80 ) {
      advance('blueLobster')
    }
  }
);

//determines when a lobster wins and displays the appropriate message


});





