<?php

Router::get("/api/users", [UserController::class, "index"]);
Router::get("/api/contacts", [ContactController::class, "index"]);