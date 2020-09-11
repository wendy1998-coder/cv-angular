const text = document.getElementsByClassName('text');
const calculate_index_height = function() {
  let totalHeight = 0;
  totalHeight += $(document.getElementsByClassName('header')[0]).outerHeight();
  totalHeight += $(document.getElementById('cssmenu')).outerHeight();
  $(text).toArray().forEach(function(item) {
    totalHeight += $(item).outerHeight();
  });

  return totalHeight;
};

const footer = document.getElementsByClassName('footer')[0];

const position_footer = function() {
  let reference;

  if (text.length > 0) {
    reference = calculate_index_height();
  } else {
    reference = document.body.scrollHeight;
  }

  const windowHeight = window.innerHeight;

  if (reference < (windowHeight - $(footer).outerHeight() - 10)) {
    $(footer).addClass('adjusted');
  } else {
    $(footer).removeClass('adjusted');
  }
};

// when a nav tab is clicked, height should be re-evaluated
const buttons = $('.nav-tabs li a').toArray();
// add an onClick event for all the buttons on the page
buttons.forEach(function(item) {
  $(item).on('click', function() {
    setTimeout(function() {
      position_footer();
    }, 200);
  });
});

position_footer();
$(window).on('resize', position_footer);
