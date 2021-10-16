import {remove_starting_slash} from "./removeStartingSlash.js";
import {remove_ending_slash} from "./removeEndingSlash.js";

export function remove_starting_and_ending_slash(string) {
    return remove_starting_slash(remove_ending_slash(string));
}