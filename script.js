
var user=document.getElementById("user");
var password=document.getElementById("password");
// var click=document.getElementById("click");
var para1=document.getElementById("para1");

function validate(){
   



// alert("button clicked");

function display1(){
    para1.innerHTML="field is empty";
    
    
}
function display2(){
    para1.innerHTML="Username and password is correct";
    window.open("main.html", "_self");
    
}
function display3(){
    para1.innerHTML="Username or password is incorrect";
    // return false;
    window.location.href="main.html";
    
}
function validation(a,b,callback1,callback2,callback3){

    let newuser = {
        username:"admin",
        password: 12345,
      };
if(a=='' || b==''){
    callback1();
}
else{
if (a==newuser.username && b==newuser.password) {
    callback2();
}
else{
    callback3();

}
}


}

validation(user.value,password.value,display1,display2,display3);
}