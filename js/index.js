console.log("Your index.js file is loaded correctly!");
$('nav li').click(function() {
    if ( $("a").first().is(":hidden")) {
        $("ul li a").show("slow"); 
    } else {
        $("ul li a").slideUp();
    }
    });