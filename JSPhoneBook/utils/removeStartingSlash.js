export function remove_starting_slash(string) {
    if (string.indexOf('/') === 0) {
        return string.replace('/', '');
    }

    return string;
}