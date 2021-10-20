import {renderView} from "../utils/renderView.js";
import {userListTemplate} from "../views/userListTemplate.js";
import {User} from "../models/User.js";

export class UserController {
    index() {
        User.get().then((data) => {
            renderView(userListTemplate(data));
        });
    }
}