//your JS code here. If required.<!DOCTYPE html>

    function showAlert(){
    let firsname = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let phone = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email"); 
    if(!firsname || !lastname || !phone || !email){
        alert("all fields are required")
        return ;
    } 
    let message = `First Name:${firsname} Last Name : ${lastname} Phone Number: ${phone} Email Id:${email}`;
    alert(message);
    }

  
    

