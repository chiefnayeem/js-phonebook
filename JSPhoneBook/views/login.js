export const loginFormTemplate = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <a href="/">Go Home</a>
            <form name="LoginForm">
                <h3>Login</h3>
                <div>
                    <b>Username</b><br/>
                    <input placeholder="username" name="username"/>
                </div>
                
                <div>
                    <b>Password</b><br/>
                    <input placeholder="password" name="password"/>
                </div>
                
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    </div>
`;