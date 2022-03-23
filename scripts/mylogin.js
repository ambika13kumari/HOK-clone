let flag = false;

function loggin(event) {
    event.preventDefault()



    let email = document.getElementById("email")
    let password = document.getElementById("password")

    let all_users = JSON.parse(localStorage.getItem("hok_users"))


    all_users.forEach(function (user) {

        if (email.value == user.email && password.value == user.password) {

            email.value = ""
            password.value = ""
            setTimeout(function () {

                window.location.href = "index.html"
            }, 2000)

        } else {
            flag = true
            return
        }

    })



}

if (flag == true) {
    alert("Invalid Credentials")
}

function back() {
    window.location.href = "index.html"
}