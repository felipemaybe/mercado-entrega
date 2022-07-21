const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },
  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },
  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },
  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },
  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

const createFruit = document.querySelector(".fruits")
const createDrink = document.querySelector(".drinks")
const createHygiene = document.querySelector(".hygiene")
const principal = document.querySelector(".products-content")


function createTags(tag){
  let ul = document.createElement("ul")
  for(let i = 0; i < tag.length; i++){

    let li = document.createElement("li")
    let img = document.createElement("img")
    let main = document.createElement("main")
    let titleMain = document.createElement("h1")
    let caseH = document.createElement("h5")
    let strongCase = document.createElement("strong")

    li.classList.add("product")
    img.classList.add("image-prod")
    main.classList.add("main-pro")
    titleMain.classList.add("main-pro")
    caseH.classList.add("caseH")
    strongCase.classList.add("product-price")

    products[i].image = (products[i].image == undefined)? "./img/products/no-img.svg": products[i].image
    img.src = `${products[i].image}`
    titleMain.innerText = `${products[i].title}`
    caseH.innerText = `${products[i].category}`
    strongCase.innerHTML = `${products[i].price}`

    li.appendChild(img)

    li.appendChild(main)
    main.appendChild(titleMain)
    main.appendChild(caseH)
    main.appendChild(strongCase)
    ul.appendChild(li)

    if(products[i].category == "createHygiene"){
      createHygiene.appendChild(li)

    }
    if(products[i].category == "createDrink"){
      createDrink.appendChild(li)
    }
    if(products[i].appendChild == "Frutas"){
      createFruit.appendChild(li)
    }
  }
  principal.appendChild(ul)
  console.log(ul)
}
createTags(products)