let Top_search = document.getElementById("Top_search")

let search = document.getElementById("Top_search")

let text = search.querySelectorAll("a")

let search_input = document.getElementById("search_input")

search_input.addEventListener("click", show)

Top_search.addEventListener("mouseleave", hide)

function show(e) {
    search_input.textContent = text.textContent
    search.style.display = "flex"
}
function hide() {
    search.style.display = "none"
}
//end of search portion

// for cart icon portion

let cart_pop = document.getElementById("cart")
let cart_icon = document.getElementById("cart_icon")
cart_icon.addEventListener("click", pop)
cart_pop.addEventListener("mouseleave", hiden)

function pop() {
    cart_pop.style.display = "block"
}
function hiden() {
    cart_pop.style.display = "none"
}
// end of cart icon

//for makeup pop 

let makup = document.getElementsByClassName("makeup")[0]

let make_up = document.getElementById("make_up")

make_up.addEventListener("mouseover", disply)
make_up.addEventListener("mouseleave", hidemakeup)
function disply() {
    makup.style.display = "flex"
}
function hidemakeup() {
    makup.style.display = "none"
}

// end of makeup

// for skin pop 

let skin = document.getElementsByClassName("makeup")[1]

let for_skin = document.getElementById("for_skin")

for_skin.addEventListener("mouseover", disply2)
for_skin.addEventListener("mouseleave", hideskin)
function disply2() {
    skin.style.display = "flex"
}
function hideskin() {
    skin.style.display = "none"
}
//end skin pop





//login start

let loginn = document.getElementById("loginn")
let clicklog = document.getElementById("clicklog")
let cut = document.getElementById("cut")

clicklog.addEventListener("click", showlogin)
function showlogin() {
    loginn.style.display = "block"
}

cut.addEventListener("click", hiddlogin)

function hiddlogin() {
    loginn.style.display = "none"
}


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



    //login end