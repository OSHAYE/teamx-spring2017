$(document).ready(function(){
  $(".f").hide();
  $(".u").hide();
  $(".t").hide();
  $(".u").hide();
  $(".r").hide();
  $(".e").hide();
  $(".s").hide();
  var answer=["f","u","t","u","r","e","s"]
  $("#foo").hide();
    $("#clickme").click(function(){
        
        var guess=$("#guess").val();
        // $("#f").html(guess);
        for(var count=0; count<answer.length; count=count+1){
            if(guess==answer[count]){
                $("."+answer[count]).show();
            }
        }
    });

});
