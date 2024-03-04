// Extrahieren der Produkt-ID aus der URL-Parameter
const urlParams = new URLSearchParams(window.location.search);
let productId = urlParams.get('productId');

// Setze eine Standard-Produkt-ID, falls keine ID in der URL vorhanden ist
// Nützlich für Testzwecke, bevor die Übersichtsseite implementiert ist
if (!productId) {
  productId = '1'; // Standard-Produkt-ID, ändere dies zu einer gültigen ID aus deiner products.json
}

// Lade Produktinformationen aus der products.json Datei
fetch('../data/products.json')
  .then(response => response.json())
  .then(data => {
    // Suche das Produkt basierend auf der Produkt-ID
    const product = data.find(p => p.id.toString() === productId);
    // Wenn das Produkt gefunden wurde, zeige seine Details an
    if (product) {
      displayProduct(product);
    } else {
      // Fehlermeldung, falls kein Produkt mit der ID gefunden wurde
      console.error('Product with ID ' + productId + ' not found.');
    }
  })
  .catch(error => {
    // Allgemeine Fehlerbehandlung für den Fall, dass das Laden der Produkte fehlschlägt
    console.error('Error loading the products:', error);
  });

// Funktion zum Anzeigen der Produktdetails im HTML
function displayProduct(product) {
  const productsContainer = document.querySelector('#products-container');
  productsContainer.innerHTML = ''; // Leere den Container vor dem Hinzufügen neuer Inhalte
  const productElement = document.createElement('div');
  productElement.innerHTML = `
    <h2>${product.productName}</h2>
    <img src="../images/FEND_Coffee_Costa-Rica 1 (1).jpg" alt="Bild von ${product.productName}">
    <p>${product.description}</p>
    <p>Price: ${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to shopping cart</button>
  `;
  productsContainer.appendChild(productElement);
}

// Funktion zum Hinzufügen des Produkts zum Warenkorb
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
  const productIndex = cart.findIndex(item => item.id === productId);

  if (productIndex !== -1) {
    // Erhöhe die Produktmenge, falls es bereits im Warenkorb ist
    cart[productIndex].quantity += 1;
  } else {
    // Füge das Produkt zum Warenkorb hinzu, falls es noch nicht vorhanden ist
    cart.push({ id: productId, quantity: 1 });
  }

  // Speichere den aktualisierten Warenkorb im localStorage
  localStorage.setItem('shoppingCart', JSON.stringify(cart));
  alert('Produkt wurde zum Warenkorb hinzugefügt');
}

// Machen addToCart global verfügbar, um es in HTML onclick-Attributen verwenden zu können
window.addToCart = addToCart;

  


  
