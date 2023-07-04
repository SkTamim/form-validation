document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var date = document.getElementById('date').value;
    var color = document.getElementById('color').value;


    if (name.length < 4 || name === '') {
        alert("Enter a valid name");
    }
    if (password.length < 9 || password === '') {
        alert("Enter a valid password, password should be al least 8 charecter");
    }
    if (!validateEmail(email)) {
        alert("Invalid email address");
    }
    if (!validateMobileNumber(phone)) {
        console.log("Invalid mobile number");
    }

    // Basic validation
    if (age === '' || gender === '' || date === '' || color === '') {
        alert('Please fill in all fields.');
    } else {
        // Form submission successful
        alert('Form submitted successfully!');
        // Reset form
        document.getElementById('myForm').reset();
    }


});

// Email validation function
function validateEmail(email) {
    // Regular expression pattern for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the pattern
    return emailPattern.test(email);
}

// Mobile number validation function
function validateMobileNumber(mobileNumber) {
    // Regular expression pattern for mobile number validation
    var mobilePattern = /^[0-9]{10}$/;

    // Test the mobile number against the pattern
    return mobilePattern.test(mobileNumber);
}



