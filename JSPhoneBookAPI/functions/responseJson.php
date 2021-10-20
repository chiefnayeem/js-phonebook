<?php

function response_json($array) {
    $data = json_encode($array);

    header('Content-Type: application/json; charset=utf-8');
    echo $data;
}