<?php

function remove_ending_slash($string) {
    return rtrim($string, '/\\');
}