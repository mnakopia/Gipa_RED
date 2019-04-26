$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});

$('input[id=mce-EMAIL]').on("click focus",function(){
    $(this).attr("placeholder"," Enter Your Email");
}).on("blur",function(){
    $(this).attr("placeholder"," Brighten Up Your Inbox");
});


$( document ).ready(function() {

    
    $(".blog_menu" ).hide();
    $( ".blog_menu" ).click(function() {
    $( ".blogs").slideToggle( "slow", function() {
    });
    });
});

                       