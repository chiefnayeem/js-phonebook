<?php

class AuthController {
    public function login() {
        $username = $_POST['username'];
        $password = $_POST['password'];

        $mysqli = Model::connectDatabase();
        $sql = "SELECT * FROM users WHERE username = '{$username}' AND password = '{$password}'";
        $user = $mysqli->query($sql);

        if(mysqli_num_rows($user)) {
            $user = mysqli_fetch_object($user);

            response_json([
                'success' => true,
                'user' => $user,
                'message' => 'Login successful!',
            ]);
        } else {
            response_json([
                'success' => false,
                'message' => 'Your email or password was incorrect!',
            ]);
        }
    }
}