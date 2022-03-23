
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

// for kit&combos pop


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


let products = [
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/trrg_dab87991-7380-411b-9b00-f19f08e2e7ee_270x270.jpg?v=1630136456",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/absolute-new-york-icon-eye-shadow-palette-smoked-1_e7f487b8-a5f3-4cc7-bbd3-352a089e9787_270x270.jpg?v=1630136485",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "750",
        price: "275"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/Pinky_Promise_270x270.jpg?v=1630136505",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/Combo1_2_270x270.jpg?v=1630136457",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "800",
        price: "375"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/editedimages_a4985847-a7be-458b-b664-2d51e765b7a7_270x270.jpg?v=1630136486",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/absolute-new-york-lip-mousse-pin-up_9241a5e4-65eb-4473-aefa-8733c08d2d18_270x270.jpg?v=1630136474",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "650",
        price: "200"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/Combo2_2_270x270.jpg?v=1630136471",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/absolute-new-york-lip-mousse-pin-up_9241a5e4-65eb-4473-aefa-8733c08d2d18_270x270.jpg?v=1630136474",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "750",
        price: "275"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/absolute-new-york-icon-eye-shadow-palette-smoked-1_a02914b4-46c1-4a31-8f90-6eeb4035d2b1_270x270.jpg?v=1630136473",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/Absolute-New-York-Eyeliner-Brown_9555f4bf-211b-458f-b6ac-12f1ca806221_270x270.jpg?v=1630136473",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "750",
        price: "275"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/absolute-new-york-icon-eye-shadow-palette-smoked-1_e7f487b8-a5f3-4cc7-bbd3-352a089e9787_270x270.jpg?v=1630136485",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/absolute-new-york-lip-mousse-lavish_0a4f6055-416e-455f-9917-7b92a3efac5d_270x270.jpg?v=1630136473",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "750",
        price: "275"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/trrg_dab87991-7380-411b-9b00-f19f08e2e7ee_270x270.jpg?v=1630136456",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/absolute-new-york-lip-mousse-pin-up_b4ab82f2-65f5-4cde-a016-25472a521c43_270x270.jpg?v=1630136485",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "750",
        price: "275"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/BeautyCreations3_1_3fb56160-e757-425a-8a22-8a0c6e1ef40e_270x270.jpg?v=1630136605",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/Pinky_Promise_270x270.jpg?v=1630136505",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "750",
        price: "275"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/Bae_270x270.jpg?v=1630136605",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/BeautyCreations2_1_2676f638-3ee4-4866-b6cd-b611fc0ac0f0_270x270.jpg?v=1630136607",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "750",
        price: "275"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/BeautyCreations1_1_0b8633db-de58-41da-ad8e-a40325250520_270x270.jpg?v=1630136628",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/BeautyCreations3_1_fcc65a11-0959-43e9-a505-e0fe47067bb7_270x270.jpg?v=1630136623",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "750",
        price: "275"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/BeautyCreations1_1_8f64da04-9f3a-4642-826b-d125434122ed_270x270.jpg?v=1630136620",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/beauty-creations-mini-pro-palette-vol-1_f38b196c-1614-4c6c-8bde-0c7408109496_270x270.jpg?v=1630138242",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "750",
        price: "275"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/trrg_dab87991-7380-411b-9b00-f19f08e2e7ee_270x270.jpg?v=1630136456",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/mini_pro_2_270x270.jpg?v=1630137817",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "750",
        price: "275"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/beauty-creations-mini-pro-palette-vol-1_ab1af620-e2ad-4589-b6a0-a685cb5afb7c_270x270.jpg?v=1630138241",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/mini_pro_1_270x270.jpg?v=1630136683",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "750",
        price: "275"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/E757A_df70512d-dafb-43d2-801f-d7f1a739bba6_270x270.jpg?v=1630136693",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/02_270x270.jpg?v=1630136686",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "550",
        price: "175"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/beauty-creations-splash-of-hues-vol-2-2_270x270.jpg?v=1630136693",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/Probrowkit-01_270x270.jpg?v=1630136687",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "750",
        price: "455"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/ESO904_270x270.jpg?v=1630136693",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/Probrowkit-01_270x270.jpg?v=1630136687",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "750",
        price: "678"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/absolute-new-york-icon-eye-shadow-palette-smoked-1_e7f487b8-a5f3-4cc7-bbd3-352a089e9787_270x270.jpg?v=1630136485",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/absolute-new-york-lip-mousse-lavish_0a4f6055-416e-455f-9917-7b92a3efac5d_270x270.jpg?v=1630136473",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "750",
        price: "275"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/BeautyCreations1_1_0b8633db-de58-41da-ad8e-a40325250520_270x270.jpg?v=1630136628",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/BeautyCreations3_1_fcc65a11-0959-43e9-a505-e0fe47067bb7_270x270.jpg?v=1630136623",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "750",
        price: "275"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/ESO904_270x270.jpg?v=1630136693",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/Probrowkit-01_270x270.jpg?v=1630136687",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "750",
        price: "678"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/BeautyCreations1_1_0b8633db-de58-41da-ad8e-a40325250520_270x270.jpg?v=1630136628",
        img2: "https://cdn.shopify.com/s/files/1/1743/7443/products/BeautyCreations3_1_fcc65a11-0959-43e9-a505-e0fe47067bb7_270x270.jpg?v=1630136623",
        brand: "Hok Makeup",
        name: "10 Color Eyeshadow Palette Cool(CLR)",
        margin: "750",
        price: "275"
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

        let wish = document.createElement("button")
        wish.innerText = "♡"
        wish.setAttribute("class", "mywish")

        wish.onclick = function () {

            addtowishlist(products)

        };


        let addtocart_btn = document.createElement("button")
        addtocart_btn.setAttribute("class", "cartbtn")
        addtocart_btn.innerText = "ADD TO CART"


        addtocart_btn.onclick = function () {

            addtocart(products)

        };

        div.append(img, brand, name, margin, price, wish, addtocart_btn)
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

if (localStorage.getItem("hokwish") === null) {
    localStorage.setItem("hokwish", JSON.stringify([]))
}

function addtowishlist(products) {
    let product_wish = JSON.parse(localStorage.getItem("hokwish"));
    product_wish.push(products)
    localStorage.setItem("hokwish", JSON.stringify(product_wish))
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