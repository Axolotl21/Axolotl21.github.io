function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("date").innerText = time;
    document.getElementById("date").textContent = time;
}

setInterval(showTime, 1000);


//JQuery animation
$(document).ready(function() {
    let boxes = $(".file-explorer");
    $("#button-menu").click(function() {
        $("#menu").slideToggle("fast");
    });
    $("#menu ul li").click(function() {
        $("#menu").slideUp("fast");
    });
    $("#about-me").click(function() {
        $(this).addClass("background-transparent");
        $("#about-me-explorer").fadeIn("fast");
    });
    $(".exit").click(function() {
        $("#about-me").removeClass("background-transparent");
        $(this).parents("#about-me-explorer").fadeOut("fast");
    });
    $("#project").click(function() {
        $(this).addClass("background-transparent");
        $("#project-explorer").fadeIn("fast");
    });
    $(".exit").click(function() {
        $("#project").removeClass("background-transparent");
        $(this).parents("#project-explorer").fadeOut("fast");
    });
    $("#email-button").click(function() {
        $("#email-form").fadeIn("fast");
    });
    $(".exit").click(function() {
        $(this).parents("#email-form").fadeOut("fast");
    });
    $("#calculator-button").click(function() {
        $("#calculator").fadeIn("fast");
    });
    $(".exit").click(function() {
        $(this).parents("#calculator").fadeOut("fast");
    });
    $("#game-button").click(function() {
        $("#game").fadeIn("fast");
    });
    $(".exit").click(function() {
        $(this).parents("#game").fadeOut("fast");
    });
    $("#music-button").click(function() {
        $("#music").fadeIn("fast");
    });
    $(".exit").click(function() {
        $(this).parents("#music").fadeOut("fast");
    });
    $(".navbar-icon").mousedown(function() {
        $(this).parent().draggable();
    });
    boxes.click(function() {
        var el = $(this), // The box that was clicked
            max = 0;
        // Find the highest z-index
        boxes.each(function() {
            // Find the current z-index value
            var z = parseInt( $( this ).css( "z-index" ), 10 );
            // Keep either the current max, or the current z-index, whichever is higher
            max = Math.max( max, z );
        });
        // Set the box that was clicked to the highest z-index plus one
        el.css("z-index", max + 1 );
    });
});