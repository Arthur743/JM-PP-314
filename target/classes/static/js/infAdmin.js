const meUrl = "http://localhost:8080/api/users/me";

fetch(meUrl).then( res => {
    res.json().then( data => {
        document.getElementById("showInformationAboutAdmin").innerHTML = `   
            <tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.surname}</td>
                <td>${data.username}</td>
                <td>${getRolesOfShowAllUsers(urlRoles + data.id)}</td>
            </tr>
        `;
    })
})

