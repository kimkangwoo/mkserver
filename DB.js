var id = document.getElementById(id);
var pw = document.getElementById(pw);
var name = document.getElementById(name);
var email = document.getElementById(email);
var phone  = document.getElementById(phone);
var message = document.getElementById(message);
var file = document.getElementById(file);

FormData.addEventListener("submit", function(e){
    console.log(id, pw, name, email, phone, message, file);
});