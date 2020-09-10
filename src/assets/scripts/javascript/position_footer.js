$(window).on("load", function() {
    const calculate_index_height = function() {
        let totalHeight = 0;
        totalHeight += $(document.getElementsByClassName("header")).outerHeight();
        totalHeight += $(document.getElementById("cssmenu")).outerHeight();
        const texts = $(document.getElementsByClassName("text")).toArray();
        texts.forEach(function (item) {
            totalHeight += $(item).outerHeight();
        });

        return totalHeight;
    };

    const footer = document.getElementsByClassName("footer");

    const position_footer = function() {
        let reference;

        if (document.title === "index") {
            reference = calculate_index_height()
        } else {
            reference = document.body.scrollHeight;
        }

        const windowHeight = window.innerHeight;

        if(reference < (windowHeight - $(footer).outerHeight() - 10)) {
            $(footer).addClass("adjusted");
        } else {
            $(footer).removeClass("adjusted");
        }
    };

    // when a nav tab is clicked, height should be re-evaluated
    const buttons = $(".nav-tabs li a").toArray();
    // add an onClick event for all the buttons on the page
    buttons.forEach(function (item) {
        $(item).on("click", function () {
            setTimeout(function () {
                position_footer()
            }, 200);
        })
    });

    position_footer();
    $(window).on("resize", position_footer);
});
