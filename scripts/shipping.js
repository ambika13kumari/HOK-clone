let parent = document.getElementById("boxright")

let products = JSON.parse(localStorage.getItem("hokcart"));

//let sum = 0;

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

        // sum = sum + Number(products.price)

        div.append(img, name, price)

        parent.append(div)


    })

}
showhokproduct()

let getpri = JSON.parse(localStorage.getItem("AddPri"))

let geet = getpri[getpri.length - 1]

let dekhototal = document.getElementById("dekho1")

let dekh2 = document.getElementById("dekho2")

dekh2.textContent = geet

dekhototal.textContent = geet


let tax = document.getElementById("tax")

tax.textContent = "including" + " " + "₹" + Math.round((sum * 0.12)) + " " + "in taxes"



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


let data = JSON.parse(localStorage.getItem("hok_info"))

let connect = document.getElementById("connect")
let addres_ = document.getElementById("addres_")

connect.textContent = data[data.length - 1].contact
addres_.textContent = data[data.length - 1].address

localStorage.setItem("hok_info", JSON.stringify(data))





localStorage.setItem("AddPri", JSON.stringify(getpri))