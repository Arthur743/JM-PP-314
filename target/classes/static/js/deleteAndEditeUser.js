const editModal = new bootstrap.Modal(document.getElementById('editModal'))
const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'))

const editForm = document.querySelector('#editForm')
const deleteForm = document.querySelector('#deleteForm')

const userId = document.getElementById('idEdite')
const userName = document.getElementById('nameEdite')
const userSurname = document.getElementById('surnameEdite')
const userUsername = document.getElementById('usernameEdite')
const userPassword = document.getElementById('passwordEdite')

const userIdDelete = document.getElementById('idDelete')
const userNameDelete = document.getElementById('nameDelete')
const userSurnameDelete = document.getElementById('surnameDelete')
const userUsernameDelete = document.getElementById('usernameDelete')

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}

on(document, "click", ".btn-info", e => {

    const data = e.target.parentNode.parentNode
    const idFormEdite = data.firstElementChild.innerHTML
    const nameFormEdite = data.children[1].innerHTML
    const surnameFormEdite = data.children[2].innerHTML
    const usernameFormEdite = data.children[3].innerHTML
    const passwordForm = data.children[4].innerHTML
    userId.value = idFormEdite
    userName.value = nameFormEdite
    userSurname.value = surnameFormEdite
    userUsername.value = usernameFormEdite
    userPassword.value = passwordForm;
    editModal.show()
})

editForm.addEventListener('submit', (e) => {

        e.preventDefault()
        var selectedRole = editForm.roleAdmin.options.selectedIndex
        if (selectedRole == 0) { role = adminRole } else role= userRole
        fetch(url, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                id: userId.value,
                name: userName.value,
                surname: userSurname.value,
                username: userUsername.value,
                password: userPassword.value,
                roles: role
            })
        }).then(response => response.json()).then(response => location.reload())
        editModal.hide()
    }
)

on(document, "click", ".btn-danger", e => {

    const data = e.target.parentNode.parentNode
    const idForm = data.firstElementChild.innerHTML
    const nameForm = data.children[1].innerHTML
    const surnameForm = data.children[2].innerHTML
    const usernameForm = data.children[3].innerHTML
    userIdDelete.value = idForm
    userNameDelete.value = nameForm
    userSurnameDelete.value = surnameForm
    userUsernameDelete.value = usernameForm
    deleteModal.show()
})

deleteForm.addEventListener('submit', (e) => {

        e.preventDefault()
        const idToDelete = userIdDelete.value

        fetch(url+idToDelete, {
            method: 'DELETE',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({})
        }).then(response => response.json()).then(response => location.reload())
        deleteModal.hide()
        document.location.reload();
    }
)
