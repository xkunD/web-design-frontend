$("#lightbox").click(function() {
  $("#myModal").removeClass("hidden");
  $("#img").addClass("backgroundcolor");
});

$(".close").click(function() {
  $("#myModal").addClass("hidden");
});

$("#lightbox").hover(function() {
  $("#lightbox").addClass("boxshadow");
},
  function() {$("#lightbox").removeClass("boxshadow");
});


// function closeModal() {$("#myModal").addClass("hidden");
// }
// I thought I might need another function but idk...
