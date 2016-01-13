function advance(whichLobster){
var current = $("#"+whichLobster+"_strip td.active");
var next = current.next();
current.toggleClass("active");
next.toggleClass("active");
};


advance('redLobster');