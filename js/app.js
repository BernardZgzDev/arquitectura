

$(document).ready(function() {

      const spanYear = document.querySelector('span#year-copyright');
      const now  = new Date();
      const year = now.getFullYear();
      spanYear.innerText = year;

      
      $('.gallery-masonry').imagesLoaded( function() {
            $('.gallery-masonry').masonry({
                  itemSelector: '.card',
                  isAnimated: true,
                  isFitWidth: false
            });
      });
});