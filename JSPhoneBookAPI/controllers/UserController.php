<?php

class UserController {
    public function index() {
        $users = User::get();
        response_json($users);
    }
}