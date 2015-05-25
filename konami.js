var secret = "38384040373937396665"; 
var input = "";
var timer; 
var mode = false;

$(document).keyup(function(e) {
  //alert(e.which);
  input += e.which;

  clearTimeout(timer);
  timer = setTimeout(function(){ input = "";}, 1000);
  check_input();
});

function check_input(){
  if(input == secret){
    //el codigo secreto
    alert('Metiste el codigo konami');
    window.location = 'http://ponkbrown.com/foto';
  }
}

$(document).ready(function(){
  setInterval(function(){
    $('#info').html('Keystroke: ' + input); },
    100);
});



