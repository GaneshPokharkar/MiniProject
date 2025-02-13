// formValidation.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        let isValid = true;

        // Validate Name
        const name = document.getElementById("name").value;
        const namePattern = /^[A-Za-z\s]+$/;
        if (!namePattern.test(name)) {
            alert("Please enter a valid name (letters and spaces only).");
            isValid = false;
        }

        // Validate Roll Number
        const rollNumber = document.getElementById("roll-number").value;
        const rollNumberPattern = /^\d{2}$/;
        if (!rollNumberPattern.test(rollNumber)) {
            alert("Please enter a valid roll number (2 digits).");
            isValid = false;
        }

        // Validate Class
        const classValue = document.getElementById("class").value;
        if (classValue.trim() === "") {
            alert("Class is required.");
            isValid = false;
        }

        // Validate Branch
        const branchValue = document.getElementById("branch").value;
        if (branchValue.trim() === "") {
            alert("Branch is required.");
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById("email").value;
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // Validate Domain
        const domainValue = document.getElementById("domain").value;
        if (domainValue.trim() === "") {
            alert("Domain is required.");
            isValid = false;
        }

        // Validate Mobile Number
        const mobileNumber = document.getElementById("mobile-number").value;
        const mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(mobileNumber)) {
            alert("Please enter a valid 10-digit mobile number.");
            isValid = false;
        }

        // Validate Campus
        const campusValue = document.getElementById("campus").value;
        if (campusValue.trim() === "") {
            alert("Campus is required.");
            isValid = false;
        }

        // Validate Message
        const message = document.getElementById("message").value;
        if (message.trim() === "") {
            alert("Message is required.");
            isValid = false;
        }

        // Validate Password
        const password = form.querySelector('input[type="password"]');
        if (password.value.length < 6) {
            isValid = false;
            alert('Password must be at least 6 characters long.');
        }

        // If any validation fails, prevent form submission
        if (!isValid) {
            event.preventDefault();
        } else {
            form.submit(); // Submit the form if valid
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});