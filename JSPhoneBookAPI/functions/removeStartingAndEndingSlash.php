<?php

function remove_starting_and_ending_slash($string) {
    return remove_starting_slash(remove_ending_slash($string));
}