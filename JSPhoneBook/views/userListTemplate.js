export const userListTemplate = (data) => {

    const user_list = data.map((user) => (`
        <tr>
            <th scope="col">${user.id}</th>
            <th scope="col">${user.name}</th>
            <th scope="col">${user.username}</th>
        </tr>
    `));

    return (`
        <div>
            <table class="table" style="width: 400px; border: 1px solid #a6a6a6;">
                <thead>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                </thead>
                <tbody>
                    ${user_list}
                </tbody>
            </table>
        </div>
    `);
};