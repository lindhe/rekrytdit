$("#ittab").click(function(){
    $("#nav-header").addClass("it").removeClass("data vs");
});

$("#datatab").click(function(){
    $("#nav-header").addClass("data").removeClass("it vs");
});

$("#vstab").click(function(){
    $("#nav-header").addClass("vs").removeClass("it data");
});

