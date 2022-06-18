const adminRoleUrl = "http://localhost:8080/api/roles/all";
const userRoleUrl = "http://localhost:8080/api/roles/2"

const userFirstNameAdd = document.getElementById('userFirstNameAdd')
const userLastNameAdd = document.getElementById('userLastNameAdd')
const userUsernameAdd = document.getElementById('userEmailAdd')
const userPasswordAdd = document.getElementById('userPasswordAdd')

function Get(rolesUrl){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",rolesUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

var adminRole = JSON.parse(Get(adminRoleUrl));
var userRole = [ JSON.parse(Get(userRoleUrl)) ] ;

const addForm = document.querySelector('#addForm')
addForm.addEventListener('submit', (e) => {
        e.preventDefault()

        var selectedRole = addForm.roleToAdd.options.selectedIndex
        if (selectedRole == 0) {
            role = adminRole
        } else role = userRole;

        fetch(url, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name: userFirstNameAdd.value,
                surname: userLastNameAdd.value,
                username: userUsernameAdd.value,
                password: userPasswordAdd.value,
                roles: role
            })
        }).then(response => response.json()).then(response => location.reload())
    }
)
