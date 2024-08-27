function submitForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(username === ""){
        alert("User Name Required")
    }
       else if(email === ""){
            alert("Email Address Required")
        }
            else if(password === ""){
            alert("Password Required")
    }
    if (username !== "" && email !== "" && password !== "") {
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        alert("Registration Successful")
    }
    document.getElementById('registrationForm').reset();
}