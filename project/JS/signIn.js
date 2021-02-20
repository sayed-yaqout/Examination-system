var regEmail = /^\S+@\w+?\.[a-zA-z]{2,3}$/;
var regpwd = /^\S{8,}$/;
$("#eml").mouseenter(function(){
    $("#eml").css("background-color", "yellow");
  })
$("#eml").focusout(function(){
if($("#eml").val().match(regEmail))
$("#emform").css("display", "none");
else $("#emform").css("display", "block");
});

$("#pwd").mouseenter(function(){
    $("#pwd").css("background-color", "yellow");
  })
$("#pwd").focusout(function(){
if($("#pwd").val().match(regpwd))
$("#pwdform").css("display", "none");
else $("#pwdform").css("display", "block");
});

var email =getCookies("email");
var password =getCookies("password");


$("#btn").click(function(){//to compare it with database info
    if(email==$("#eml").val()&&password==$("#pwd").val())
    {
        window.location.replace("question.html");
    }
    else if(email!=$("#eml").val()){
        $("#invalidem").css("display", "block");
    }
    else{
        $("#pwdform").css("display", "block");
    }
    

})
