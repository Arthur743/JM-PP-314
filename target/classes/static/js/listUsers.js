const url = "http://localhost:8080/api/users/";
const urlRoles = "http://localhost:8080/api/roles/ofUser/";

function getRolesOfShowAllUsers(rolesUrlOfUser){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",rolesUrlOfUser,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
fetch(url).then(
    res => {
        res.json().then(
            data => {
                if (data.length > 0) {
                    let temp = "";
                    data.forEach((user) => { temp += `   
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.surname}</td>
                            <td>${user.username}</td>
                            <td style="display: none">${user.password}</td>
                            <td>${getRolesOfShowAllUsers(urlRoles + user.id)}</td>
                            <td><button class="btn btn-info" id="editButton" 
                            style="border-radius: 10px 10px 10px 10px;">Edit</button></td>
                            <td><button class="btn btn-danger" id="deleteButton" 
                            style="border-radius: 10px 10px 10px 10px;">Delete</button></td>                 
                        </tr>
                    `})
                    document.getElementById("data").innerHTML = temp;
                }
            }
        )
    }
)













