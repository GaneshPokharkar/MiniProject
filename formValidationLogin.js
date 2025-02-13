$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        var username = $('#username').val().trim();
        var password = $('#password').val().trim();

        $.getJSON('htdocs/credentials.json', function(data) {
            var isValid = false;
            $.each(data.users, function(index, user) {
                if (user.username === username && user.password === password) {
                    isValid = true;
                    return false; 
                }
            });

            if (isValid) {
                alert('Login successful');
               
            } else {
                alert('Invalid username or password');
            }
        });
    });
});
