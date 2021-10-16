/**
 * Render a template into the main container
 * @param template {string}
 */
export function renderView(template) {
    document.querySelector("#app").innerHTML = template;
}