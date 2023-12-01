/* when the schedule image button clicked, show the schedule modal. */
$('#schedule-button').click(function(){
    console.log('clicked');
    /* show the schedule modal with CSS class. */
    $('#schedule-modal').removeClass('hidden');
});

$('#close-modal-button-A, #close-modal-button-B').click(function(){
    console.log('clicked x');
    /* show the schedule modal with CSS class. */
    $('#schedule-modal').addClass('hidden');
});

