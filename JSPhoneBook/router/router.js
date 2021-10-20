import {remove_starting_and_ending_slash} from "../utils/removeStartingAndEndingSlash.js";
import {LoginController} from "../controllers/LoginController.js";
import {AboutController} from "../controllers/AboutController.js";
import {WelcomeController} from "../controllers/WelcomeController.js";
import {UserController} from "../controllers/UserController.js";

export class Router {
    /**
     * Get and run the route
     * @param path {string}
     * @param action {[]}
     */
    static get(path, action) {
        if(remove_starting_and_ending_slash(window.location.pathname) === remove_starting_and_ending_slash(path)) {
            new action[0]()[action[1]]();
        }
    }

    static initialize() {
        Router.get("/", [WelcomeController, "index"]);
        Router.get("/login", [LoginController, "index"]);
        Router.get("/users", [UserController, "index"]);
        Router.get("/about", [AboutController, "index"]);
    }
}