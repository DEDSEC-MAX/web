const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf(".");
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.lenght - 1) return false;
    return true;
}

const isphone = (phoneVal) => {
    if (phoneVal.toString().length != '10') {
        return true;
    }else {
        return false;
    }
}

const sendData = (usernameVal,count , sRate) => {
    if(count === sRate){
        alert('Registration Success')
        swal("Good job! " + usernameVal, "You clicked the button!", "success");
        setTimeout(function(){window.location="login.html";}, 2000)
    }else{
        console.log("Somthing Went Wrong")
    }
}

const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length -1;
    for(var i = 0 ; i<formCon.toString().length; i++){
        if(formCon[i].className === "form-control success"){
            var sRate = 0 + i;
            sendData(usernameVal,count , sRate);
        }else{
            return false
        }
    }
}

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if (usernameVal === "") {
        setErrorMsg(username, 'username cannot be blank');
    } else if (usernameVal.toString().length <= 5) {
        setErrorMsg(username, 'Username Must Be Greater Than 5 Character');
    } else if (usernameVal.toString().length >= 15) {
        setErrorMsg(username, 'Username Must Be Less Than 15 Character. !Dont Try To Buffer Our Server');
    }else {
        setSuccessMsg(username);
    }
    if (emailVal === "") {
        setErrorMsg(email, 'email cannot be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Not A Valid Email');
    } else {
        setSuccessMsg(email);
    }
    if (phoneVal === ""){
        setErrorMsg(phone,'Phone Number Cannot Be Blank')
    }else if(isphone(phoneVal)) {
        setErrorMsg(phone, 'Not A Valid Phone Number');
    } else {
        setSuccessMsg(phone);
    }

    if (passwordVal === ""){
        setErrorMsg(password,'Password Cannot Be Blank')
    }else if(passwordVal.toString().length <= 7) {
        setErrorMsg(password, 'Minimum 8 Character Password');
    } else {
        setSuccessMsg(password);
    }    

    if (cpasswordVal === ""){
        setErrorMsg(cpassword,'Conform Password Cannot Be Blank')
    }else if(passwordVal !== cpasswordVal) {
        setErrorMsg(cpassword, 'Password Not Match');
    } else {
        setSuccessMsg(cpassword);
    } 
    successMsg(usernameVal);
}

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}