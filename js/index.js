console.log("Your index.js file is loaded correctly!");
$('nav li').click(function() {
    $('ul',this).stop().toggle(200);
});

