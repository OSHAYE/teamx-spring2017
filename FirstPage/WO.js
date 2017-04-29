
$(document).ready(function(){
    //Write all your jQuery code here
    $("#clickme").click(function() {
        var name = $("#text").val();
         $(".button").show();
        name= name.toUpperCase();
        var greeting = "<p id= 'greeting'>" + "Hello "+ name + "</p>";
      $("#box").html(greeting);
    });
    
    $(".button").hide();
    
    $("#two").click(function() {
        $("body").append('<img src = "https://goo.gl/images/oiWybF">');
    });
});
// $("#button").click(function(){
//     $("#text").html(hello,$('input:textbox').val() )
    
// });

// if

// var stuff =["test"];
// var random = Math.floor(Math.random()*stuff.length);  
// console.log(stuff[random]);
 
//  $("button").click(function(){
// $("p").append(" Correct! :D " + stuff[random]);
//     });