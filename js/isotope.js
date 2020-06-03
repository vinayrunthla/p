$(document).ready(function () {

// init Isotope
var $grid = $('.taste-projects').isotope({
    // options
  });
  // filter items on button click
  $('.taste-btn-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ 
        filter: filterValue 
    });
  });
// layout Isotope after each image loads
$grid.load().progress( function() {
    $grid.isotope('layout');
});

 });

 