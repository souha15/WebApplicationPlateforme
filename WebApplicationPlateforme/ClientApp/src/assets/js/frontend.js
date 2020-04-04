$(document).ready(function() {
    // Accordion Menu
    $('.side-menu div:first').css('display','block');
    $('.side-menu h5').click(function() {
        $(this).next().slideToggle(400);
        $('.side-menu div').not($(this).next()).slideUp(400);
    });
    $('.side-menu h5').click(function() {
        $('.side-menu h5 .arrow .fa').toggleClass('fa-chevron-left');
        $('.side-menu h5 .arrow .fa').toggleClass('fa-chevron-down');
    });
    
    
    // Show details button
    $('table .show-details').click(function() {
        $('.task-details-box').slideToggle(400);
    });
});