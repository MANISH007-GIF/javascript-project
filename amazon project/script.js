const title = document.getElementById('title');
const namefield =document.getElementById('namefield');
const signinbtn =document.getElementById('signinbtn');
const signupbtn =document.getElementById('signupbtn');

signupbtn.onclick = function(){
    title.innerHTML = "signup";
    namefield.style.display = "block";
}
Loginbtn.onclick = function(){
    title.innerHTML = "Loginbtn";
    namefield.style.display = "block";
}