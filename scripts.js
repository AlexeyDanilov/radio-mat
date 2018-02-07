$(document).ready(function() {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});


$(".callback__link").click(function() {
    //открыть модальное окно с id="myModal"
    $(".modal").modal('show');
});

$('.btn-primary').on('click', function(){
   $('.close').trigger('click');
});