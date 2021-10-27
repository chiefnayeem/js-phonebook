import {renderView} from "../utils/renderView.js";
import {welcomeTemplate} from "../views/welcome.js";
import {AuthProvider} from "../services/AuthProvider.js";
import {dashboardTemplate} from "../views/dashboard.js";
import {Controller} from "../libraries/Controller.js";

export class WelcomeController extends Controller {
    constructor() {
        super();
    }

    index() {
        if (new AuthProvider().checkLogin()) {
            renderView(dashboardTemplate());
            return;
        }

        renderView(welcomeTemplate);
    }

    mounted() {
        const logout = document.getElementById("logout");
        if (typeof logout !== "undefined" && logout !== null) {
            logout.addEventListener('click', function (e) {
                e.preventDefault();
                new AuthProvider().logout();
                window.location.replace('/')
            });
        }
    }
}