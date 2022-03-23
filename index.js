//for search portion

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
make_up.addEventListener("click", hidemakeup)
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
for_skin.addEventListener("click", hideskin)
function disply2() {
    skin.style.display = "flex"
}
function hideskin() {
    skin.style.display = "none"
}
//end skin pop

//for kit&combos pop


// let kitsandcombos = document.getElementById("Kits&combos")

// let kits = document.getElementById("kits_combos")

// kitsandcombos.addEventListener("mouseover" , showkit)
// kitsandcombos.addEventListener("mouseleave" , hidkit)


// function showkit() {
//     kits.style.display = "block"
// }
// function hidkit() {
//     kits.style.display = "none"
// }








setTimeout(function () {
    alert("Never miss a sale \nSubscribe to get updates on our new products and exclusive promotions")
}, 4000)

let images = [
    "https://cdn.shopify.com/s/files/1/1743/7443/files/xx-revolution.gif?v=1631268320",
    "https://th.bing.com/th/id/OIP.17n6cng1dsY2Yxw6eMUIaQHaEo?w=248&h=180&c=7&r=0&o=5&pid=1.7",
    "https://cdn.shopify.com/s/files/1/1743/7443/files/pigment_play_5d691369-2c59-461b-bc62-c5d8fcca275c.jpg?v=1631268697",
    "https://cdn.shopify.com/s/files/1/1743/7443/files/KITS.jpg?v=1631268360",
    "https://cdn.shopify.com/s/files/1/1743/7443/files/1170_X_302_7d4de0a5-4279-4dcd-8099-e6e1bc580766.jpg?v=1612012507"
]




let container = document.getElementById("slide")

let img1 = document.createElement("img")
img1.setAttribute("class", "image")
img1.src = images[images.length - 1]
container.append(img1)

let interval;

function startslideshow() {

    let count = 0;

    interval = setInterval(function () {

        container.innerHTML = null;

        if (count == images.length) {
            count = 0;
        }

        let img = document.createElement("img")
        img.setAttribute("class", "image")
        img.src = images[count]

        container.append(img)
        count++

    }, 2000)

}

startslideshow()


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

//chat box start 

let selectchatbtn = document.getElementById("chatshowbtn")
selectchatbtn.addEventListener("click", chat_dikhao)

let dikhana = document.getElementById("chatwith_ankit")


function chat_dikhao() {
    dikhana.style.display = "block"
}

function htta() {
    dikhana.style.display = "none"
}


function dikhaobar() {
    let sidebar = document.getElementById("side-bar")
    sidebar.style.display = "block"
}

function htaobar() {
    let sidebar = document.getElementById("side-bar")
    sidebar.style.display = "none"
}