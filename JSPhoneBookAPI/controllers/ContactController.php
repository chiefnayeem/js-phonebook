<?php

class ContactController {
    public function index() {
        response_json(Contact::get());
    }
}