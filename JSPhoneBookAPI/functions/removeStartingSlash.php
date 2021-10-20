<?php

function remove_starting_slash($string) {
    return ltrim($string, '/');
}