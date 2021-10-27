<?php

Router::get("/api/users", [UserController::class, "index"]);
Router::get("/api/contacts", [ContactController::class, "index"]);
Router::post("/api/login", [AuthController::class, "login"]);