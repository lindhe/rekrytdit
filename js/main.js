$(document).ready(function () {
	if (window.location.hash == "#IT" || window.location.hash == "#it") {
		$('#myTab a#ittab').tab('show');
	} else if (window.location.hash == "#Data-VS-IT" || window.location.hash == "#data-vs-it") {
		$('#myTab a#vstab').tab('show')
	}
});


$("#ittab").click(function(){
    $("#nav-header").addClass("it").removeClass("data vs");
});

$("#datatab").click(function(){
    $("#nav-header").addClass("data").removeClass("it vs");
});

$("#vstab").click(function(){
    $("#nav-header").addClass("vs").removeClass("it data");
});

