<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $year = $_POST['year'];
    $branch = $_POST['branch'];

    $data = [
        'name' => $name,
        'email' => $email,
        'year' => $year,
        'branch' => $branch
    ];

    $file = 'credentials.json';
    if (file_exists($file)) {
        $current_data = json_decode(file_get_contents($file), true);
        if ($current_data === null) {
            $current_data = ['users' => []];
        }
        $current_data['users'][] = $data;
    } else {
        $current_data = ['users' => [$data]];
    }

    if (file_put_contents($file, json_encode($current_data, JSON_PRETTY_PRINT)) === false) {
        echo "Error saving data.";
    } else {
        echo "Registration successful!";
    }
} else {
    echo "Invalid request method.";
}
?>
