// import productData from "../public/products.json";
import productImgPath from "../images/FEND_Coffee_Costa-Rica 1 (1).jpg";
import { fetchProducts } from "./productHelpers.js";

const buildProductHtml = async () => {
  const productData = await fetchProducts();
  console.log(productData);

  return productData
    .map(
      (product) => `
    <a href="/sub-page/product.html?id=${product.id}" class="product">
      <img src="${productImgPath}" alt="product image">
      <div class="product-name">
        ${product.productName}
      </div>
      <div class="product-price">
        ${product.price / 100}€
      </div>
    </a>
  `
    )
    .join("");
};

const shop = async () => {
  const productHtml = await buildProductHtml();
  console.log (productHtml);

  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = productHtml;
};

shop();

// // Alles Was ich bisher gemacht habe.

// // Extrahieren der Produkt-ID aus der URL-Parameter
// const urlParams = new URLSearchParams(window.location.search);
// let productId = urlParams.get("productId");

// // Setze eine Standard-Produkt-ID, falls keine ID in der URL vorhanden ist
// // Nützlich für Testzwecke, bevor die Übersichtsseite implementiert ist
// if (!productId) {
//   productId = "1"; // Standard-Produkt-ID, ändere dies zu einer gültigen ID aus deiner products.json
// }

// let productData = [];

// async function fetchProducts() {
//   try {
//     const productResponse = await fetch("../data/products.json");
//     productData = await productResponse.json();
//     console.log(productData);
//     displayCart();
//     // Suche das Produkt basierend auf der Produkt-ID
//     const product = productData.find((p) => p.id.toString() === productId);
//     // Wenn das Produkt gefunden wurde, zeige seine Details an
//     if (product) {
//       displayProduct(product);
//     } else {
//       // Fehlermeldung, falls kein Produkt mit der ID gefunden wurde
//       console.error("Product with ID " + productId + " not found.");
//     }
//   } catch (error) {
//     console.error("Error loading the products:", error);
//   }
// }

// fetchProducts();

// // // Lade Produktinformationen aus der products.json Datei
// // fetch("../data/products.json")
// //   .then((response) => response.json())
// //   .then((data) => {
// //     // Suche das Produkt basierend auf der Produkt-ID
// //     const product = data.find((p) => p.id.toString() === productId);
// //     // Wenn das Produkt gefunden wurde, zeige seine Details an
// //     if (product) {
// //       displayProduct(product);
// //     } else {
// //       // Fehlermeldung, falls kein Produkt mit der ID gefunden wurde
// //       console.error("Product with ID " + productId + " not found.");
// //     }
// //   })
// //   .catch((error) => {
// //     // Allgemeine Fehlerbehandlung für den Fall, dass das Laden der Produkte fehlschlägt
// //     console.error("Error loading the products:", error);
// //   });

// // Funktion zum Anzeigen der Produktdetails im HTML
// function displayProduct(product) {
//   const productsContainer = document.querySelector("#products-container");
//   productsContainer.innerHTML = ""; // Leere den Container vor dem Hinzufügen neuer Inhalte
//   const productElement = document.createElement("div");
//   productElement.innerHTML = `
//     <h2>${product.productName}</h2>
//     <img src="../images/FEND_Coffee_Costa-Rica 1 (1).jpg" alt="Bild von ${product.productName}">
//     <p>${product.description}</p>
//     <p>Price: ${product.price}</p>
//     <button onclick="addToCart(${product.id})">Add to shopping cart</button>
//   `;
//   productsContainer.appendChild(productElement);
// }

// // Funktion zum Hinzufügen eines Produkts zum Warenkorb
// function addToCart(productId) {
//   let cart = JSON.parse(localStorage.getItem("shoppingCart") || "[]");
//   const productIndex = cart.findIndex((item) => item.id === productId);

//   if (productIndex !== -1) {
//     cart[productIndex].quantity += 1;
//   } else {
//     cart.push({ id: productId, quantity: 1 });
//   }

//   localStorage.setItem("shoppingCart", JSON.stringify(cart));
//   alert("Produkt wurde zum Warenkorb hinzugefügt");
// }

// // Funktion zum Anzeigen des Warenkorbs
// function displayCart() {
//   const cart = JSON.parse(localStorage.getItem("shoppingCart") || "[]");
//   const cartContainer = document.querySelector("#cart-container");
//   if (!cartContainer) {
//     console.error("Cart container not found.");
//     return;
//   }

//   cartContainer.innerHTML = cart
//     .map(
//       (item) => `
//         ${console.log("TEEEEEEST")}
//         <div class="cart-item">
//             <div>Product Name: ${productData.find((product) => product.id === parseInt(item.id, 10)).productName}</div>
//             <p>Produkt-ID: ${item.id}</p>
//             <p>Menge: ${item.quantity}</p>
//         </div>
//     `
//     )
//     .join("");
// }

// // Machen addToCart und displayCart global verfügbar
// window.addToCart = addToCart;
// window.displayCart = displayCart;
