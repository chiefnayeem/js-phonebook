import {renderView} from "../utils/renderView.js";
import {aboutTemplate} from "../views/about.js";

export class AboutController {
    index() {
        renderView(aboutTemplate);
    }
}