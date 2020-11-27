// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
    document.getElementById("fixed").style.top = "0";
  } else {
    document.getElementById("fixed").style.top = "-70px";
  }
}
$('#recipeCarousel').carousel({
  interval: 10000
})

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}

        next.children(':first-child').clone().appendTo($(this));
      }
});
