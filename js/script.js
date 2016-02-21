
var modal = document.querySelector(".modal");

if (modal) {
  var infoButton = document.querySelector(".map-info-btn");
  var feedBlock = modal.querySelector(".feedback");
  var btnClose = feedBlock.querySelector("img");

  function openFeed(e) {
    e.preventDefault();
    modal.classList.add("active");

    modal.addEventListener("click", closeFeed);
    btnClose.addEventListener("click", closeFeed);
    document.addEventListener('keydown', closeKeydown);
  }

  function closeFeed(e) {
    e.preventDefault();
    modal.classList.remove("active");

    modal.removeEventListener("click", closeFeed);
    btnClose.removeEventListener("click", closeFeed);
    document.removeEventListener('keydown', closeKeydown);
  }

  function closeKeydown(e) {
    if (e.which == 27) {
      closeFeed(e);
  	}
  }

  infoButton.addEventListener("click", openFeed);

  feedBlock.addEventListener("click", function(e) {
    e.stopPropagation();
  }, false);

  if (window.localStorage) {
    var array = document.querySelectorAll("input[name='slider']");
    for (var i = 0; i < array.length; i++) {
      array[i].addEventListener("change", function() {
        localStorage.setItem("gllacyBackground", this.value);
      }, false);
      if (array[i].checked) {
        localStorage.setItem("gllacyBackground", array[i].value);
      }
    }
  }

}

if (window.localStorage) {
  elemPW = document.querySelector(".page-wrapper.inner");
  if (elemPW) {
    className = localStorage.getItem("gllacyBackground");
    if (className) {
      elemPW.classList.add(className);
    }
  }
}

// карта
var google;

function initMap() {
	var mapOption = {
  	zoom: 15,
    scrollwheel: false,
    center: new google.maps.LatLng(59.938605,30.33400000)
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOption);
  var image = "img/pin2.png";
  var myLatLng = new google.maps.LatLng(59.938605,30.32299000);
  var beachMarker = new google.maps.Marker({
  	position: myLatLng,
    map: map,
    icon: image
  });
}

if (google) {
  google.maps.event.addDomListener(window, "load", initMap);
}
