<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $rollNumber = $_POST['roll-number'];
    $class = $_POST['class'];
    $branch = $_POST['branch'];
    $email = $_POST['email'];
    $domain = $_POST['domain'];
    $mobileNumber = $_POST['mobile-number'];
    $campus = $_POST['campus'];
    $message = $_POST['message'];

    // Validate data (optional)
    // You can add validation logic here

    // Save data to a database or file
    // Example: Save to a text file
    $data = "Name: $name\nRoll Number: $rollNumber\nClass: $class\nBranch: $branch\nEmail: $email\nDomain: $domain\nMobile Number: $mobileNumber\nCampus: $campus\nMessage: $message\n\n";
    file_put_contents('form_submissions.txt', $data, FILE_APPEND);

    // Redirect or display a success message
    echo "Form submitted successfully!";
}
?>