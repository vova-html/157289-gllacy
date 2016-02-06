var infoButton = document.querySelector(".map-info-btn");
infoButton.addEventListener("click", function() {
  var modal = document.querySelector(".modal");
  modal.classList.toggle("active")
}, false);

var closeFeed = document.querySelector(".feedback img");
closeFeed.addEventListener("click", function() {
  var modal = document.querySelector(".modal");
  modal.classList.toggle("active")
}, false);
