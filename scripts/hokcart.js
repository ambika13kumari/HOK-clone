let sum = 0;
let cart = JSON.parse(localStorage.getItem("hokcart"))
let parent = document.getElementById("cart_product")
function showhokproduct() {

    cart.forEach(function (products) {

        let maindiv = document.createElement("div")
        maindiv.setAttribute("id", "show_cart")

        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        div3.setAttribute("class", "div3")

        let img = document.createElement("img")
        img.src = products.img
        img.setAttribute("class", "image")

        let brand = document.createElement("p")
        brand.setAttribute("class", "brand")
        brand.textContent = products.brand

        let name = document.createElement("p")
        name.setAttribute("class", "name")
        name.textContent = products.name



        let price = document.createElement("p")
        price.setAttribute("class", "price")
        price.textContent = "₹" + " " + products.price

        sum = sum + Number(products.price)

        let quantity = document.createElement("p")
        quantity.setAttribute("class", "qty")
        quantity.textContent = "Quantity : "

        let inpt = document.createElement("input")
        inpt.type = "number"
        inpt.setAttribute("class", "inpt")

        let update = document.createElement("button")
        update.setAttribute("class", "update_btn")
        update.innerText = "UPDATE"

        let remov = document.createElement("button")
        remov.setAttribute("class", "remove_btn")
        remov.innerText = "REMOVE"
        remov.addEventListener("click", markdelete)

        // remov.onclick = function() {
        //     markdelete()
        //     sum = sum - Number(products.price)
        // }

        div1.append(img)
        div2.append(name, brand, price, quantity)
        div3.append(inpt, update, remov)


        maindiv.append(div1, div2, div3)
        parent.append(maindiv)
    })
}
showhokproduct()

let total = document.createElement("p")
total.textContent = "₹" + " " + sum + ".00"

let total_price = document.getElementById("total_price")
total_price.append(total)


function showship(event) {
    event.preventDefault();
    let pt = document.getElementById("mycalcu")
    pt.innerText = "There is one shipping rate available for 490020, Chhattisgarh, India.\nFree Shipping at ₹ 0.00"

}

function markdelete(e) {
    e.target.parentNode.parentNode.remove()

}




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