import {AuthProvider} from "../services/AuthProvider.js";

export const dashboardTemplate = () => `
    <div>
        <h1>Welcome ${new AuthProvider().getUser().name}</h1>
        <a href="#" id="logout">Logout</a>
    </div>
`;