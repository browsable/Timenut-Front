var $container = $(".col-md-3");
$container.imagesLoaded(function() {
    $container.masonry({
        itemSelector: '.card-view',
        columnWidth: 302
    });
});

$.fn.stars = function() {
    return $(this).each(function() {
        var num = $(this).data("star");
        $(this).html($("<span />").width(Math.max(0, Math.min(5, num)) * 12));
    })
};

$(function() {

    $('.Switch').click(function() {
        $(this).toggleClass('list').toggleClass('card');
        // check current view mode: 'list' or 'card'
        if($(this).hasClass('list')) {
            console.log('List view');
            $(".card-view").attr("class", "list-view");
            $(".list-view").removeAttr("style");
        } else {
            console.log('Card view');
            $(".list-view").attr("class", "card-view");
            var container = document.querySelector('.col-md-3');
            // Reload masonry again
            var msnry = new Masonry( container, {
                itemSelector: '.card-view',
                columnWidth: 302
            });
        }
    });

    // $("#list").click(function() {
    //   $("#list").addClass("active");
    //   $("#card").removeClass("active");
    //   $(".card-view").attr("class", "list-view");
    //   $(".list-view").removeAttr("style");
    // });

    // $('#card').click(function() {
    //   $("#card").removeClass("active");
    //   $("#list").removeClass("active");
    //   $("#card").addClass("active");
    //   $(".list-view").attr("class", "card-view");
    //   var container = document.querySelector('.col-md-3');
    //   var msnry = new Masonry( container, {
    //     itemSelector: '.card-view',
    //     columnWidth: 302
    //   });
    // });

    $("span#c_stars").stars();
});

//screen split
$(function() {
    var resizable = $("#resizable");
    resizable.resizable({
        maxWidth: resizable.width()
    });
});

/* When the user clicks on the button,
 toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}