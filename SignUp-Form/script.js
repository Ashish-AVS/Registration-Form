var objPeople = [
    {
        username: "ashish@enactus.com",
        password: "ashish123"
    },

    {
        username: "rusty@enactus.com",
        password: "rustyWoof"
    },

    {
        username: "avengers@enactus.com",
        password: "assemble"
    }
];


var username;
var password;

var loggedIn = false;
var nxtButton = document.getElementById("next-button-login");

document.querySelector(".email-check").style.display="none";
document.querySelector("#error-message").style.display="none";


nxtButton.addEventListener("click",function() {
     username = document.getElementById("email-input").value;
     password = document.getElementById("password-input").value;


    //email
        if( username == "" && !(emailCheck())){
            // alert("Enter valid Email!");
            document.querySelector(".email-check").style.display="block";

        }

    for(var i = 0; i<objPeople.length; i++){
        if(objPeople[i].username == username && objPeople[i].password == password ){
            loggedIn = true;
            alert("Logged IN!!");
            return;
        }   
    }


    document.querySelector("#error-message").style.display="block";

    
});


var emailCheck = function() {
    var count =0;
    for(var i =0; i<username.length;i++){
        for(var j=i; j<username.length; j++){
            if(username[i] == "@" && username[j] == ".")
            count++;
        }
        
    }
    if(count == 1){
       return true;
    }
};










   
