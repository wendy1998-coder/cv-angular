$(window).on("load", function() {
  const pics_div = document.getElementById("index_pics");
  const footer = document.getElementsByClassName("footer");
  const text = document.getElementsByClassName("text");

  const text_height = function() {
    let totalHeight = 0;

    for(let i = 0; i < 3; i++) {
      totalHeight += $(text[i]).outerHeight();
    }

    return totalHeight
  };

  const size_pictures = function(reference) {
    $(pics_div).height(reference);
  };

  if(window.innerWidth <= 1600) {
      size_pictures(text_height())
    } else {
      size_pictures(window.innerHeight - footer.outerHeight - 10)
    }

  $(window).on("resize", function() {
    if(window.innerWidth <= 1600) {
      size_pictures(text_height())
    } else {
      size_pictures(window.innerHeight - footer.outerHeight - 10)
    }
  })
});
