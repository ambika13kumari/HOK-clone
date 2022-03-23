let parent = document.getElementById("boxright")

let products = JSON.parse(localStorage.getItem("hokcart"));

let sum = 0;

function showhokproduct() {

    products.forEach(function (products) {

        let div = document.createElement("div")

        let img = document.createElement("img")
        img.setAttribute("class", "dekhoimg")
        img.src = products.img

        let name = document.createElement("p")
        name.setAttribute("class", "dekhoname")
        name.textContent = products.name


        let price = document.createElement("p")
        price.textContent = "₹" + products.price + ".00"
        price.setAttribute("class", "dekhoprice")

        sum = sum + Number(products.price)

        div.append(img, name, price)

        parent.append(div)


    })

}
showhokproduct()

let dekhototal = document.getElementsByClassName("dekhototal")[0]

dekhototal.textContent = "₹" + sum + ".00"


let tax = document.getElementById("tax")

tax.textContent = "including" + " " + "₹" + Math.round((sum * 0.12)) + " " + "in taxes"

let total = document.getElementsByClassName("dekhototal")[1]

total.textContent = "₹" + sum + ".00"

let input = document.getElementById("b2rcoupon")

let apply = document.getElementById("b2rbtn")
apply.addEventListener("click", dedo_discount)

function dedo_discount(event) {
    event.preventDefault();
    if (input.value == "masai30") {
        let add = sum - (sum * 0.3)
        dekhototal.innerHTML = null
        dekhototal.textContent = "₹" + add + ".00"
        total.textContent = "₹" + add + ".00"
        input.value = ""
    }
}






if (localStorage.getItem("hok_info") === null) {
    localStorage.setItem("hok_info", JSON.stringify([]))
}

let jaopay = document.getElementById("inpsub")
jaopay.addEventListener("click", jarahu)



function jarahu() {
    let info = JSON.parse(localStorage.getItem("hok_info"))

    let contact = document.getElementById("contactno.").value
    let address = document.getElementById("address").value
    let obj = {
        contact: contact,
        address: address
    }
    if (contact != "" && address != "") {

        info.push(obj)
    }
    localStorage.setItem("hok_info", JSON.stringify(info))
}


if (localStorage.getItem("AddPri") === null) {
    localStorage.setItem("AddPri", JSON.stringify([]))
}


function shifttoinfo() {

    let get = JSON.parse(localStorage.getItem("AddPri"))
    get.push(dekhototal.textContent)
    localStorage.setItem("AddPri", JSON.stringify(get))

    let form = document.querySelector("form")
    if (form.value !== "") {
        window.location.href = "shipping.html"
    }
}




