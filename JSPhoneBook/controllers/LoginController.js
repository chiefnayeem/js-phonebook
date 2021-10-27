import {renderView} from "../utils/renderView.js";
import {loginFormTemplate} from "../views/login.js";
import {Controller} from "../libraries/Controller.js";
import {ApiConfig} from "../config/ApiConfig.js";
import {AuthProvider} from "../services/AuthProvider.js";

export class LoginController extends Controller {
    constructor() {
        super();

        if(new AuthProvider().checkLogin()) {
            window.location.replace("/");
        }
    }

    index() {
        renderView(loginFormTemplate);
    }

    tryLogin() {
        alert("I will login!");
    }

    handleLoginFormSubmit() {
        const form = document.forms['LoginForm'];
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = form['username'].value,
                password = form['password'].value;

            const formData = new FormData();
            formData.append('username', username);
            formData.append('password', password);

            fetch(ApiConfig.root + "/login", {
                method: "POST",
                body: formData,
            }).then(res => res.json())
                .then(res => {
                    alert(res.message);
                    if(res.success) {
                        new AuthProvider().setLogin(JSON.stringify(res.user));
                        window.location = "/";
                    }
                })
                .catch(error => {
                    alert(error);
                })
        });
    }

    mounted() {
        this.handleLoginFormSubmit();
    }
}