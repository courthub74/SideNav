

// funtion for OnClick
function logged() {
    // Query the Name input
    let user_email = document.getElementById('user_email');
    console.log(user_email.value)

    // Query the Password
    let user_password = document.getElementById('user_password');
    console.log(user_password.value);

     // Query the 'logged user'
    let logged_user = document.getElementById('logged_user');
    console.log(`Logged User is: ${logged_user.value}`);

    // change innerText of logged_user to user_email
    logged_user.innerHTML = user_email.value;
}

logged();



