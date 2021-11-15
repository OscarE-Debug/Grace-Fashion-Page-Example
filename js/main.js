document.addEventListener("DOMContentLoaded", ()=>{
  const elementosCarousel = document.querySelectorAll(".carousel");

  M.Carousel.init(elementosCarousel, {
      duration: 150,
      dist: -70,
      shift: 5,
      padding: 5,
      numVisible: 5,
      indicators: true,
      noWrap: false
  });

  var elems = document.querySelectorAll('.parallax');
  M.Parallax.init(elems, {
    responsiveTreshold: 10
  });
});