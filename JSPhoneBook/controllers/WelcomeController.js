import {renderView} from "../utils/renderView.js";
import {welcomeTemplate} from "../views/welcome.js";

export class WelcomeController {
    index() {
        renderView(welcomeTemplate);
    }
}