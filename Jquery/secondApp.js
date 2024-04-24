$(document).ready(function() {
    $(".btn").click(function() {
        $(".container").toggleClass("bg-danger");
    });

    $('#carouselExampleAutoplaying').carousel({
        interval: 4000
    });
    $('#carouselExampleAutoplaying').on('slid.bs.carousel', function () {
        $('.hide').hide(); 
    });
    
})