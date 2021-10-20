<?php

require_once './bootloader/configs.php';
require_once './bootloader/functions.php';
require_once './bootloader/libraries.php';
require_once './bootloader/models.php';
require_once './bootloader/controllers.php';
require_once './router/routes.php';


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, PATCH, DELETE');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Authorization, Content-Type, x-xsrf-token, x_csrftoken, Cache-Control, X-Requested-With');