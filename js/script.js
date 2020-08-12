/*Pre Loader*/

$(window).on('load', () => { // make sure that whole site is loaded.
    $('#status').fadeOut();
    $('#preloader').delay(500).fadeOut();
})