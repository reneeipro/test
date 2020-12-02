$(() => {
  // Toggles Dark Mode
  $('#darkToggle').on("change", function() {
    $("html").toggleClass('dark')
  })
})


var $autoplay = document.querySelector('#autoplay');
var autoPlay = new Vimeo.Player($autoplay);

function playVideo() {
  $('.play-overlay').removeClass("z-10");
  autoPlay.play();
}
