
var infoButton = document.querySelector(".map-info-btn");
infoButton.addEventListener("click", function() {
  var modal = document.querySelector(".modal");
  modal.classList.add("active");
}, false);

function closeFeed() {
  var modal = document.querySelector(".modal");
  modal.classList.remove("active");
}

var closeSelector = document.querySelector(".feedback img");
closeSelector.addEventListener("click", closeFeed, true);

var closeSelector = document.querySelector(".modal");
closeSelector.addEventListener("click", closeFeed, false);

var feedBlock = document.querySelector(".feedback");
feedBlock.addEventListener("click", function(e) {
  e.stopPropagation();
}, false);

document.addEventListener('keydown', function(e) {
	if (e.which == 27) {
    closeFeed();
	}
});
