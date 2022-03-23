let wish = JSON.parse(localStorage.getItem("hokwish"))

let parent = document.getElementById("mytable")

function showhokwishproduct() {

    wish.forEach(function (products) {
        let tr = document.createElement("tr")
        tr.style.textAlign = "center"


        let imgwish = document.createElement("img")
        imgwish.setAttribute("class", "imgwish")
        imgwish.src = products.img

        let td1 = document.createElement("td")
        td1.append(imgwish)

        let p1 = document.createElement("p")
        p1.textContent = products.brand
        p1.style.color = "grey"
        p1.style.fontSize = "14px"



        let p2 = document.createElement("p")
        p2.style.fontWeight = "bold"
        p2.style.fontSize = "12px"
        p2.textContent = products.name

        let td2 = document.createElement("td")
        td2.style.textAlign = "left"
        td2.append(p1, p2)


        let td3 = document.createElement("td")
        td3.style.fontWeight = "bold"
        td3.textContent = "₹" + " " + products.price

        let rmbtn = document.createElement("button")
        rmbtn.setAttribute("class", "rmbtn")
        rmbtn.innerText = "x REMOVE"

        rmbtn.onclick = function () {
            removeproduct(products)
        };

        let td4 = document.createElement("td")
        td4.append(rmbtn)
        td4.addEventListener("click", markdelete)



        let cartbtnn = document.createElement("button")
        cartbtnn.setAttribute("class", "wishtocart")
        cartbtnn.innerHTML = "ADD TO CART"


        cartbtnn.onclick = function () {

            addtocart(products)

        };

        let td5 = document.createElement("td")
        td5.append(cartbtnn)

        tr.append(td1, td2, td3, td4, td5)
        parent.append(tr)

    })
}
showhokwishproduct()

function addtocart(products) {

    let products_cart = JSON.parse(localStorage.getItem("hokcart"));

    products_cart.push(products)

    localStorage.setItem("hokcart", JSON.stringify(products_cart))
}


function markdelete(e) {
    e.target.parentNode.parentNode.remove()
}


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



