
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
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/Iresistible_110x110@2x.jpg?v=1630136614",
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/BeautyCreations1_1_29332f1b-8e0b-4cca-be98-0247d5f8e467_110x110@2x.jpg?v=1630136617",
        brand: "Beauty Creations",
        name: "Beauty Creations Long Wear Matte Lip Gloss - Irresistible",
        margin: "1200",
        price: "799"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/0744109494161-1_110x110@2x.jpg?v=1631877963",
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/0744109494161-2_110x110@2x.jpg?v=1631877963",
        brand: "Beauty Creations",
        name: "Rosy Gold Naughty & Nice Lipstick Kit",
        margin: "1000",
        price: "617"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/1_300cbe62-e753-4206-b120-a33ce6fdaf07_110x110@2x.jpg?v=1622801476",
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/Glorified106_110x110@2x.jpg?v=1622800640",
        brand: "Beauty Creations",
        name: "Make it Matte Liquid Lipstick Trio Kit - Destiny + Glorified + Excess",
        margin: "1500",
        price: "999"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/milanicomboimage_110x110@2x.jpg?v=1624694348",
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/Lipstick_Swatch_110x110@2x.jpg?v=1625560590",
        brand: "Beauty Creations",
        name: "Milani Matte Lipstick Trio",
        margin: "1090",
        price: "899"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/40285_-_RevolutionPro_-Supreme_Matte_Lip_Pigment__-__Charade_110x110@2x.jpg?v=1621506953",
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/40285_-_1_-_RevolutionPro_-Supreme_Matte_Lip_Pigment__-__Charade_110x110@2x.jpg?v=1621506953",
        brand: "Beauty Creations",
        name: "Revolution Pro Supreme Matte Lip Pigment",
        margin: "1405",
        price: "780"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/7_3c962b07-491b-44e7-bfa6-06ce007e765c_110x110@2x.jpg?v=1620678553",
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/7.1_110x110@2x.jpg?v=1620679017",
        brand: "Beauty Creations",
        name: "L.A. Color Combo - 7",
        margin: "1001",
        price: "799"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/GP734_prod_img_2_1024x1024_77627cae-294f-41f8-a149-afa5cd668dee_110x110@2x.jpg?v=1630137098",
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/blackout_grande_4b791c67-c344-471b-967d-ba0364361d1a_110x110@2x.jpg?v=1630137100",
        brand: "Beauty Creations",
        name: "L.A. Girl Shockwave Neon Lip Liner",
        margin: "1302",
        price: "665"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/40345_2_110x110@2x.jpg?v=1569239311",
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/40345_1_110x110@2x.jpg?v=1569239307",
        brand: "Beauty Creations",
        name: "Revolution Pro Lip Prime And Perfect",
        margin: "1000",
        price: "600"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/0728228565558-3_110x110@2x.jpg?v=1631879036",
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/0728228565558-4_110x110@2x.jpg?v=1631879036",
        brand: "Beauty Creations",
        name: "Rosy Gold Matte Lipstick",
        margin: "1300",
        price: "999"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/MURCOMBO33_45a8132c-1a2f-49ab-9865-837c6ce9acf7_110x110@2x.jpg?v=1612171195",
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/LipBoutiqueColourPops_MatteLipstick_02_70a53418-5907-4d16-b5f9-fa25d82329b4_110x110@2x.jpg?v=1614075735",
        brand: "Beauty Creations",
        name: "Revolution Matte Lipstick Combo 2",
        margin: "1050",
        price: "775"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/1194846-RevolutionPro-NewNeutrals-BlushedSatinMattLipstick-Rumba_2-720x720-747df331-c6d3-4b02-b475-0a3e15_110x110@2x.jpg?v=1615207665",
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/1194846-RevolutionPro-NewNeutrals-BlushedSatinMattLipstick-Rumba_4-720x720-93f15c6f-6331-4f42-9209-8f9058_110x110@2x.jpg?v=1615207665",
        brand: "Beauty Creations",
        name: "Revolution Pro New Neutrals Blushed Satin Matte Lipstick",
        margin: "1050",
        price: "899"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/Undressed_cdda07aa-6905-4c4a-a67d-cfd58c874d4d_110x110@2x.jpg?v=1630136648",
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/undressed_110x110@2x.jpg?v=1630136669",
        brand: "Beauty Creations",
        name: "Wet N Wild Silk Finish Lipstick",
        margin: "1290",
        price: "879"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/lip-smacker-coca-cola-tin-box-6pcs_110x110@2x.jpg?v=1569202700",
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/lip-smacker-coca-cola-tin-box-6pcs-1_110x110@2x.jpg?v=1569202700",
        brand: "Beauty Creations",
        name: "Lip Smacker Coca Cola Lip Balm Tin Box 6pcs",
        margin: "1090",
        price: "449"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/1_299d5094-15f9-4fec-a90a-d60226326c3c_110x110@2x.jpg?v=1630138332",
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/2_97cd8809-b4f5-4805-963a-68f4c7f8b310_110x110@2x.jpg?v=1630138335",
        brand: "Beauty Creations",
        name: "Milani Rose Transforming Lip Balm",
        margin: "1250",
        price: "799"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/Combo_706cdab5-6138-4d14-bcef-2aec5c5fa462_110x110@2x.jpg?v=1622744412",
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/HeartRace113_110x110@2x.jpg?v=1622743549",
        brand: "Beauty Creations",
        name: "Make it Matte Liquid Lipstick Trio Kit - Cupcake + Rouge +åÊHeart Race",
        margin: "1080",
        price: "798"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/milanicomboimage_110x110@2x.jpg?v=1624694348",
        img: "https://cdn.shopify.com/s/files/1/1743/7443/products/Lipstick_Swatch_110x110@2x.jpg?v=1625560590",
        brand: "Beauty Creations",
        name: "Milani Matte Lipstick Trio",
        margin: "1290",
        price: "650"
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
