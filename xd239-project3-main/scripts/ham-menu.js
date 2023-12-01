$(document).ready(function() {
    if ($(document).width() < 800) {
        $('#nav-menu').addClass('hidden');
        $('#close-ham-button').addClass('hidden');
        $('#ham-button').removeClass('hidden');
    } else {
        $('#nav-menu').removeClass('hidden');
        $('#close-ham-button').addClass('hidden');
        $('#ham-button').addClass('hidden');
    }
});

$(window).resize(function() {
    if ($(document).width() < 800) {
        $('#nav-menu').addClass('hidden');
        $('#close-ham-button').addClass('hidden');
        $('#ham-button').removeClass('hidden');
    } else {
        $('#nav-menu').removeClass('hidden');
        $('#close-ham-button').addClass('hidden');
        $('#ham-button').addClass('hidden');
    }
  });


$('#ham-button').click(function(){
    if($(document).width() < 800) {
        console.log('clicked');
        $('#close-ham-button').removeClass('hidden');
        $('#nav-menu').removeClass('hidden');
        $('#ham-button').addClass('hidden');
    }
});

$('#close-ham-button').click(function(){
    if($(document).width() < 800) {
        $('#ham-button').removeClass('hidden');
        $('#nav-menu').addClass('hidden');
        $('#close-ham-button').addClass('hidden');
    }
});