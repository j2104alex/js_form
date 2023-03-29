function validarFormulario() {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let address = document.getElementById("address").value;
    let phoneNumber = document.getElementById("phone-number").value;
    let city = document.getElementById("city").value;
    let check = document.getElementById("terms-and-conditions").checked;

    if (validateInfo(firstName, lastName, email, password, confirmPassword, address, phoneNumber, check) == true) {
        window.location = "home.html"
    }
    welcome(firstName, lastName)
}

function validateInfo(firstName, lastName, email, password, confirmPassword, address, phoneNumber, check) {
    if (firstName == "") {
        alert("Ingrese su nombre")
        return false
    }
    if (lastName == "") {
        alert("Ingrese su apellido")
        return false
    }
    if (email == "") {
        alert("Es necesario que ingrese un correo")
        return false
    }
    if (password == "") {
        alert("Ingrese su contraseña")
        return false
    }
    if (confirmPassword == "") {
        alert("Confirme su contraseña")
        return false
    }
    if (password != confirmPassword) {
        alert("Su contraseñas no coindiden")
        return false
    }
    if (address == "") {
        alert("Ingrese su dirección")
        return false
    }
    if (phoneNumber == "") {
        alert("Ingrese su número de teléfono")
        return false
    }
    if (check == false) {
        alert("Acepte los terminos y condiciones")
        return false
    }
    return true;
}

function logout(){
    window.location="index.html"
}

