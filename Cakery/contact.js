document.getElementById('emailbutt');
document.getElementById('emailtext').value = '';

const fs = require('fs');
fs.readFile('emailtest.txt', 'utf-8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});
const content = "SOMETHING";

function validateForm() {
    document.getElementById("email").value;
    document.getElementById("emailtext").value;
    if (email.value.length < 1 || emailtext.value.length < 1)
    {
        alert("Both an email and text must be provided.");
        return;
    }
    
    //Send
    SendTheEmail();
}

function SendTheEmail() {
    //document.write()
    alert('Your email has been sent!');
}