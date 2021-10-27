export class AuthProvider {
    constructor() {
        this.key = "__user";
    }

    checkLogin() {
        const user = window.localStorage.getItem(this.key);
        return !(typeof user === "undefined" || user === null || user === "");
    }

    setLogin(user) {
        window.localStorage[this.key] = user;
    }

    getUser() {
        if(this.checkLogin()) {
            const user = window.localStorage[this.key];
            return JSON.parse(user);
        }

        return null;
    }

    logout() {
        window.localStorage.removeItem(this.key);
    }
}