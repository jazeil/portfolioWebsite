function validate(){
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const reg_email = /^([a-zA-Z0-9\._]+)@([a-zA-Z0])+.([a-z]+)(.[a-z]+)?$/;
    let valid_mail = reg_email.test(email);
    // const reg_name = /\d/.test(name);
    let isValid = true;

    const emailError = document.getElementById('email-error');
    const nameError = document.getElementById('name-error');
    const messageError = document.getElementById('message-error');



    if(valid_mail===false){
        emailError.textContent = "Invalid Email Address !";
        emailError.style.color="red";
        isValid = false;
    }else{
        emailError.textContent = "";
    }

    if(/\d/.test(name) || name.trim()===""){
        nameError.textContent = "Please Enter Your Name Properly !";
        nameError.style.color="red";
        isValid = false;
    }else{
        nameError.textContent = "";
    }

    if(message.trim()===""){
        messageError.textContent = "Message can not be blank ! ";
        messageError.style.color = "red";
        isValid = false;
    }else{
        messageError.textContent = "";
    }

    if(isValid) {
        // Send the email using EmailJS
        emailjs.send("service_qekt66p", "template_wr2vcoh", {
            from_name: name,
            email_id: email,
            message: message
        }).then(function(response) {
            alert("Email sent successfully!");
        }, function(error) {
            alert("Failed to send email. Please try again later.");
            console.error(error);
        });
    }
    
}
const submit_button = document.getElementById("submit-button");
submit_button.addEventListener('click', function(e){
    e.preventDefault();
    validate();
});


