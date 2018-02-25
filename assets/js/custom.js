$(document).ready(function(){

    $(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if(scroll>=150){
		    $('#fixed').addClass('js-scroll');
		}else{
			$('#fixed').removeClass('js-scroll');
		}
    });

});

// Functions

function openPDF(url){
    var w=window.open(url, '_blank');
    w.focus();
}