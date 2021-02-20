function checkName(Name){ 
      var letters = /^[A-Za-z]+$/;
      if(Name.match(letters)&&Name!=null)
      {
      return true;
      }
      else
      {
      return false;
      }
    }

function isValidEmail(email){
    //var regEmail=/^\w+@[0-9]+?\.[a-zA-Z]{2,3}$/;
   // var regEmail =/^\w+@[a-zA-Z_]+?\.com$/;
    var regEmail =/^\S+@\w+?\.[a-zA-z]{2,3}$/;
    if(regEmail.test(email)&&email!=null)
    {
      return true;
    }
    else
    {
      return false;
    }
} 


function isValidPassword(password,repassword){
  var passwordString1 = password.toString();
  var passwordString2 = repassword.toString();
  if(passwordString1!=null&&passwordString2!=null){
      if(passwordString1===passwordString2&&passwordString1.length>=8){
          return true;
      }
      else{
          return false;
      }
  }
  else{
    return false;
  }
}




