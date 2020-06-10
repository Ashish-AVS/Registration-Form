var email = document.getElementById("email-input").value;
var emailConfirm = document.getElementById("email-verification-input").value;

var password = document.getElementById("password-input").value;
var passwordConfirm = document.getElementById("password-verification-input").value;

var nextButton = document.getElementById("next-button");


document.querySelector(".email-requirements").style.display="none";
document.querySelector(".password-match").style.display="none";
document.querySelector(".password-requirements").style.display="none";
document.querySelector(".valid-email").style.display="none";

nextButton.addEventListener("click",function(){
    
    //Define variables
    email = document.getElementById("email-input").value;
    emailConfirm = document.getElementById("email-verification-input").value;

    password = document.getElementById("password-input").value;
    passwordConfirm = document.getElementById("password-verification-input").value;


     //email
    if(!(emailCheck()) ){
        document.querySelector(".valid-email").style.display="block";
        return;
    }


    if(email !== emailConfirm){
        
        // alert("Emails do not match");
        document.querySelector(".email-requirements").style.display="block";
        return;
    }

   


    if(password !== passwordConfirm){
        // alert("Passwords do not match");
        document.querySelector(".password-match").style.display="block";
        return;
    }

    if(password.length< 8){
        // alert("Password must be atleast 8 characters.");
        document.querySelector(".password-requirements").style.display="block";
        return;
    }

    alert("REGISTERED!!");
    
    
});


var emailCheck = function() {
    var count =0;
    for(var i =0; i<email.length;i++){
        for(var j=i; j<email.length; j++){
            if(email[i] == "@" && email[j] == ".")
            count++;
        }
        
    }
    if(count == 1){
       return true;
    }
};

