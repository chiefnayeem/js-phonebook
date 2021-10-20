<?php

class Model
{
    protected static $table = "";

    private static function connectDatabase()
    {
        $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD);
        $mysqli->select_db(DB_NAME);
        return $mysqli;
    }

    public static function get() {
        $mysqli = self::connectDatabase();

        $table = static::$table;
        $query = $mysqli->query("SELECT * FROM $table");
        $data = [];

        while($row = mysqli_fetch_object($query)) {
            array_push($data, $row);
        }

        return $data;
    }
}