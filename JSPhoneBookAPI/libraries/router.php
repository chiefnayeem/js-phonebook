<?php

class Router
{
    public static function get($path, $action)
    {
        if (remove_starting_and_ending_slash(get_current_location_path()) == remove_starting_and_ending_slash($path)) {
            (new $action[0]())->{$action[1]}();
        }
    }

    public static function post($path, $action)
    {
        if (remove_starting_and_ending_slash(get_current_location_path()) == remove_starting_and_ending_slash($path)) {
            (new $action[0]())->{$action[1]}();
        }
    }
}