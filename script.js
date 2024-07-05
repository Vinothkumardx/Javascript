
document.getElementById("form").addEventListener("submit", Registerfunction)

function Registerfunction(event) {
    event.preventDefault();
    
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lstname").value;
    var email = document.getElementById("email").value;
    var skills = document.getElementsByName("skill");
    var country = document.getElementById("coun").value;
    var Passwords = document.getElementById("pass").value;
    var Confirmpasswords = document.getElementById("confirmpass").value;
    let isvalid = true;

    if (firstname === '') {
        document.querySelector("#fnameerror").innerHTML = "Firstname required";
        
        isvalid = false;
    } 
    else if (!/^[a-zA-Z\s.]+$/.test(firstname)) {
        document.querySelector("#fnameerror").innerHTML = "Firstname must contain only letters";
        isvalid = false;
    }
    else {
        document.querySelector("#fnameerror").innerHTML = "";
    }
    if (lastname === '') {
        document.querySelector("#lsterror").innerHTML = "Lastname required";
        isvalid = false;
    } else {
        document.querySelector("#lsterror").innerHTML = "";
    }
    if (email === '') {
        document.querySelector("#emailerror").innerHTML = "Email required";
        isvalid = false;
    } else if (!isvalidate(email)) {
        document.querySelector("#emailerror").innerHTML = "Invalid Email";
        isvalid = false;
    } else {
        document.querySelector("#emailerror").innerHTML = "";
    }
    var skillselected = false;
    var selectskill = [];
    for (var i = 0; i < skills.length; i++) {
        if (skills[i].checked) {
            skillselected = true;
            selectskill.push(skills[i].value);
        }
    }
    if (!skillselected) {
        document.querySelector("#skillerror").innerHTML = "At least one checkbox checked";
        isvalid = false;
    } else {
        document.querySelector("#skillerror").innerHTML = "";
    }

    if (country === '') {
        document.querySelector("#countryerror").innerHTML = "Select any one country";
        isvalid = false;
    } else {
        document.querySelector("#countryerror").innerHTML = "";
    }
    if (Passwords === '') {
        document.querySelector("#passerror").innerHTML = "Password required";
        isvalid = false;
    } else {
        document.querySelector("#passerror").innerHTML = "";
    }
    if (Confirmpasswords === '') {
        document.querySelector("#confirmpasserror").innerHTML = "Confirm Password required";
        isvalid = false;
    } 
    else if (Confirmpasswords !== Passwords) {
        document.querySelector("#confirmpasserror").innerHTML = "Password and Confirm Password must match";
        isvalid = false;
    } 
    else {
        document.querySelector("#confirmpasserror").innerHTML = "";
    }
    
    if (isvalid) {
        var table = document.getElementById("tab").getElementsByTagName("tbody")[0];
        var newrow = table.insertRow();

        newrow.insertCell(0).innerHTML = firstname;
        newrow.insertCell(1).innerHTML = lastname;
        newrow.insertCell(2).innerHTML = email;
        newrow.insertCell(3).innerHTML = selectskill.join(',');
        newrow.insertCell(4).innerHTML = country;
        newrow.insertCell(5).innerHTML = Passwords;
        newrow.insertCell(6).innerHTML = Confirmpasswords;

        document.getElementById("form").reset();
    }
}

function isvalidate(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}