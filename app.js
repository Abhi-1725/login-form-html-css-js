const btnLogin = document.getElementById("login");
const btnSignUp = document.getElementById("signup");

const signIn = document.querySelector(".signin");
const signUp = document.querySelector(".signup");

var form = document.getElementById("form");

const userName = document.getElementById("uname");
const emailId = document.getElementById("email-id");
const password = document.getElementById("pwd");
const message1 = document.getElementById("msg1");
const message2 = document.getElementById("msg2");
const message3 = document.getElementById("msg3");

btnLogin.onclick = function()
{
    signIn.classList.add("active");
    signUp.classList.add("inActive");
}

btnSignUp.onclick = function()
{  
   signIn.classList.remove("active");
   signUp.classList.remove("inActive");
}

const validateUserName = function() {
    
    if((userName.value.trim() != "") && (userName.value.trim().length > 8)) 
    {   
        userName.style.border = "solid 1px green"; 
        return true;
    }
    else 
    {
        message1.innerHTML = "Invalid username";
        userName.style.border = "solid 1px red";
        message1.style.visibility = "visible";
        return false;
    }
}


const validateEmail = function() 
{
    let email = emailId.value.trim();
    let emailFilter = /^([a-zA-Z0-9\.!#$%&'*+/=?^_`{|}~-]+)@([a-zA-Z0-9]+)(.[a-z]+)(.[a-z]+)?$/;
    let re = emailFilter.test(email);

    if ((email != "") && (re)) 
    {
        emailId.style.border = "solid 1px green";
        return true;
    }
    else
    {
        emailId.style.border = "solid 1px red";
        message2.innerHTML = "Blank / invalid email not allowed";
        message2.style.visibility = "visible";
        return false;
    }
    // else {
    //     message.innerHTML = "";
    //     emailId.style.border = "solid 1px red";
    //     // document.getElementById("name").style.visibility = "visible";
    //     return false;
    // }
}

const validatePassword = function() {
    let pwd = password.value.trim();

    if ((pwd != "") && (pwd.length > 10))
    {
        password.style.border = "solid 1px green";
        return true;
    }
    else
    {
        message3.innerHTML = "blank space / pwd length < 10";
        password.style.border = "solid 1px red";
        message3.style.visibility = "visible";
        return false;
    }
    // else 
    // {
    //     password.style.border = "solid 1px green";
    //     return true;
    // }
}

// login section
function validateLogin() {
    let user2 = validateEmail(),
        user3 = validatePassword();
    
    let login = user2 && user3;

    if(login) {
        return true;
    }
    else
    {
        return false;
    }
}

// sign-up section
function validate() {

    let user1 = validateUserName(),
    user2 = validateEmail(),
    user3 = validatePassword();

    let submit = user1 && user2 && user3;

    if(submit) {
        form.style.border = "solid 1px green";
        return true;
    }
    else
    {
        form.style.border = "solid 1px red";
        return false;
    }
}
