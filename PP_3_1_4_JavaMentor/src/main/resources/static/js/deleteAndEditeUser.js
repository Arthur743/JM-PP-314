const editModal = new bootstrap.Modal(document.getElementById('editModal'))
const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'))

const editForm = document.querySelector('#editForm')
const deleteForm = document.querySelector('#deleteForm')

const userId = document.getElementById('userId')
const userFirstName = document.getElementById('userFirstName')
const userLastName = document.getElementById('userLastName')
const userEmail = document.getElementById('userEmail')
const userPassword = document.getElementById('userPassword')

const userIdDelete = document.getElementById('userIdDelete')
const userFirstNameDelete = document.getElementById('userFirstNameDelete')
const userLastNameDelete = document.getElementById('userLastNameDelete')
const userEmailDelete = document.getElementById('userEmailDelete')

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}

on(document, "click", ".btn-info", e => {

    const data = e.target.parentNode.parentNode
    const idForm = data.firstElementChild.innerHTML
    const firstNameForm = data.children[1].innerHTML
    const lastNameForm = data.children[2].innerHTML
    const emailForm = data.children[3].innerHTML
    const passwordForm = data.children[4].innerHTML
    userId.value = idForm
    userFirstName.value = firstNameForm
    userLastName.value = lastNameForm
    userEmail.value = emailForm
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
                name: userFirstName.value,
                surname: userLastName.value,
                username: userEmail.value,
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
    const firstNameForm = data.children[1].innerHTML
    const lastNameForm = data.children[2].innerHTML
    const emailForm = data.children[3].innerHTML
    userIdDelete.value = idForm
    userFirstNameDelete.value = firstNameForm
    userLastNameDelete.value = lastNameForm
    userEmailDelete.value = emailForm
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

