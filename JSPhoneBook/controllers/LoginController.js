import {renderView} from "../utils/renderView.js";
import {loginFormTemplate} from "../views/login.js";

export class LoginController {
    index() {
        renderView(loginFormTemplate);
    }
}