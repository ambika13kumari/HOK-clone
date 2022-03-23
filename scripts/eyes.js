
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
let count = 0;
if (count == 0) {
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




let products = [
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/1479929-RELOVE-POWER-LASH-WATERPROOF_01-1080x1080-bc5bdc6e-2387-4457-a020-3c483ff25ac5_110x110@2x.jpg?v=1632836953",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/1479929-RELOVE-POWER-LASH-WATERPROOF_02-1080x1080-9fdedbfd-3c88-43df-bdc3-fcbb11da3738_110x110@2x.jpg?v=1632836953",
        brand: "Hok Makeup",
        name: "Revolution Relove Power Lash",
        margin: "750",
        price: "305"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/1511216-Revlove-SuperHighlight-Blushed-1-1000x1000-67fd8457-9cb4-42a5-8f42-52ec41478aec_110x110@2x.jpg?v=1627472927",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/20210428_213045-1000x1000-997b3488-83e4-402d-a053-98d017ecc094_110x110@2x.jpg?v=1627473080",
        brand: "Hok Makeup",
        name: "Revolution Relove Super Highlighter",
        margin: "800",
        price: "419"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/1479608-Revlove-ColourPlay-ContourTrioPalette-Sugar-1-1000x1000-b2f8f954-bb9e-461d-9ea9-0759ce36f186_110x110@2x.jpg?v=1627472001",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/202105059165986912154172305-1000x1000-63e7f3d7-fc20-4b12-9b76-c40d28bea2f2_75ac3bae-48e7-44c9-a6e1-f23645daf09e_110x110@2x.jpg?v=1627472049",
        brand: "Hok Makeup",
        name: "Revolution Relove Colour",
        margin: "650",
        price: "350"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/812b_2_110x110@2x.jpg?v=1615206349",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/812b_3_110x110@2x.jpg?v=1615206349",
        brand: "Hok Makeup",
        name: "LA Colors Pearl Metallic Eye Liner",
        margin: "750",
        price: "275"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/1479790-Revlove-Blade-BrowPencil-DarkBrown-2-1000x1000-a89b4905-4f71-4403-9f3a-64157a4d6893_110x110@2x.jpg?v=1626328075",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/202105021989092252055866164-1000x1000-9e891614-1660-4fff-8a0d-769ccceaef24_1024x1024.jpg?v=1626328084",
        brand: "Hok Makeup",
        name: "Milani Supreme Kohl Kajal Eyeliner",
        margin: "750",
        price: "475"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/1511179-Revlove-ColourPlay-Manifest-ShadowPalette-1-1000x1000-37959298-518b-44d3-8139-0ec24ce27581_110x110@2x.jpg?v=1627391144",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/RELOVE-crops6_3_23010bf0-37cb-4458-bfd2-a87e9c410a25_110x110@2x.jpg?v=1627391164",
        brand: "Hok Makeup",
        name: "Revolution Pro Regeneration Palette",
        margin: "750",
        price: "405"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/KH116_RevLove_033_1_58894db7-d5dc-4daa-a6ed-b06d8d51d899_110x110@2x.jpg?v=1627460805",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/1479745-Revlove-GlamBalm-CocoNutty-Coconut-1-1000x1000-ecc912e9-bac5-487c-ab57-7f28997bc267_110x110@2x.jpg?v=1627459319",
        brand: "Hok Makeup",
        name: "Revolution Relove Colour",
        margin: "750",
        price: "375"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/1479905-Revlove-DipEyeliner-Black-1-1000x1000-8e74d6f7-7423-4d0a-95cf-c2dcf8ab0c4d_110x110@2x.jpg?v=1627457487",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/202105025467737153531173393-1000x1000-91a58811-51c1-47b9-a7a1-dfe6341a2ba0_110x110@2x.jpg?v=1627457528",
        brand: "Hok Makeup",
        name: "LA Colors ThinEye Liner",
        margin: "750",
        price: "306"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/0005934e-a667-47e7-8d8c-61218340043f_110x110@2x.jpg?v=1630138828",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/27cd2af2-da12-4959-9309-a5da622c0303_110x110@2x.jpg?v=1630138833",
        brand: "Hok Makeup",
        name: "I Heart makeup I HeartChocolate",
        margin: "750",
        price: "455"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/C42924-Nude_110x110@2x.jpg?v=1613365717",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/C42924_nude_110x110@2x.jpg?v=1613022923",
        brand: "Hok Makeup",
        name: "REVOLUTION fundamental",
        margin: "750",
        price: "275"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/C42945_amazed_110x110@2x.jpg?v=1613023746",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/C42945_amazed_open_110x110@2x.png?v=1613213572",
        brand: "Hok Makeup",
        name: "Revolution Pro Regeneration",
        margin: "750",
        price: "299"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/NICKA1_110x110@2x.jpg?v=1615314725",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/concept6_720x_7471d50a-5498-4582-a5f4-aab0685bbed8_1024x1024.jpg?v=1612607596",
        brand: "Hok Makeup",
        name: "XX Revolution Eyeshadow",
        margin: "750",
        price: "399"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/l-a-colors-liquid-eyeliner-black_110x110@2x.png?v=1569111873",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/l-a-colors-liquid-eyeliner-black-2_110x110@2x.png?v=1569111873",
        brand: "Hok Makeup",
        name: "LA Colors Liquid Eye Liner",
        margin: "750",
        price: "449"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/5_257dbe32-3298-4497-abe7-df442f532b7d_110x110@2x.jpg?v=1625912497",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/e880darkbrown_110x110@2x.jpg?v=1625911919",
        brand: "Hok Makeup",
        name: "Wet N Wild H2O Proof Liquid EyeLiner",
        margin: "550",
        price: "355"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/1377058_2_43269b49-4e4c-46e2-8797-a382d4dc4742_110x110@2x.jpg?v=1615314773",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/ForeverFlawlessDynamicTranquilEyeshadowPalette_5598492a-d486-49e8-8ce1-546d45346061_110x110@2x.jpg?v=1630659461",
        brand: "Hok Makeup",
        name: "Makeup Revolution Forever Flawless",
        margin: "750",
        price: "498"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/1168526-Revolution-ColourBook-ShadowPalette-CB03_2-1000x1000-e8aac591-d2c2-45ca-a2aa-14c23de278c7_110x110@2x.jpg?v=1630138830",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/Adjustments-1000x1000-8f9dc8ce-a130-4445-b327-ee8b47499cb6_110x110@2x.jpg?v=1630138838",
        brand: "Hok Makeup",
        name: "Makeup Revolution Eyeshadow",
        margin: "750",
        price: "359"
    }
]




//let count = 0;

let parent = document.getElementById("box")

function showhokproduct(products) {
    parent.innerHTML = null
    products.forEach(function (products) {


        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = products.img

        img.addEventListener("mouseover", setnewimg)
        img.addEventListener("mouseleave", setoldimg)

        function setnewimg() {
            img.src = products.img2
        }
        function setoldimg() {
            img.src = products.img
        }

        let brand = document.createElement("p")
        brand.setAttribute("class", "brand")
        brand.textContent = products.brand

        let name = document.createElement("p")
        name.setAttribute("class", "name")
        name.textContent = products.name

        let margin = document.createElement("del")
        margin.textContent = "₹" + " " + products.margin
        margin.setAttribute("class", "margin")

        let price = document.createElement("p")
        price.setAttribute("class", "price")
        price.textContent = "₹" + " " + products.price


        let addtocart_btn = document.createElement("button")
        addtocart_btn.setAttribute("class", "cartbtn")
        addtocart_btn.innerText = "ADD TO CART"


        addtocart_btn.onclick = function () {
            for (let i = 0; i < 10; i++) {
                count++
            }
            addtocart(products)

        };

        div.append(img, brand, name, margin, price, addtocart_btn)
        parent.append(div)
    })
}
showhokproduct(products)

if (localStorage.getItem("hokcart") === null) {
    localStorage.setItem("hokcart", JSON.stringify([]))
}

function addtocart(products) {

    let products_cart = JSON.parse(localStorage.getItem("hokcart"));

    products_cart.push(products)

    localStorage.setItem("hokcart", JSON.stringify(products_cart))
}








let box = document.getElementById("box")

function onecol() {
    box.setAttribute("id", "box1")
}

function threecol() {
    box.setAttribute("id", "box2")

}
function fourcol() {
    box.setAttribute("id", "box")
}

function showfeature() {
    let showdown = document.getElementsByClassName("showfeat")[0]
    showdown.style.display = "flex"
}
let showfeat = document.getElementsByClassName("showfeat")[0]
let shut = showfeat.querySelectorAll("button")
showfeat.addEventListener("mouseleave", shutup)

function shutup() {
    showfeat.style.display = "none"
}


function sortLH() {

    let arr = products.sort(function (a, b) {

        return a.price - b.price
    })
    showhokproduct(arr)
};


function sortHL() {

    let arr = products.sort(function (a, b) {

        return b.price - a.price
    })
    showhokproduct(arr)
};


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