function goTo(someplace) {
  $(window).scrollLeft(someplace)
}

$(function() {
  // do the jquery stuff!

  $(window).on('scroll', function(event) {
    // console.log($(window).scrollLeft())


    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    let positionCenter = $(window).scrollLeft() + 388 //calculate the position of the scroll minus 1/2 the width of the milky way.

    //take that ^  and multiply by 300 for scale
    let distanceMult = positionCenter * 300

    //rounds number:
    let roundit = Math.round(distanceMult)

    //adds commas:
    let addCommas = numberWithCommas(roundit)

    //update the text in the counter
    $('.counter').text(addCommas) // inside () + "ly"

    if ($(window).scrollLeft() > 2020000) {

      let calc = $('.space').width() + 1

      $('.space').width(calc + 'px')

      console.log($('.space').width(), calc)

    }

  })

});






// trying to make the information about each galaxy come into view when the mouse moves over the gradient galaxy...

// inView('.mw-info').on('hover', function() {
//   $('.mw-info').css('opacity', '1')
// });

// also tried this method, which works okay but doesn't appear when hovering over the gradient, but over the p tag.
