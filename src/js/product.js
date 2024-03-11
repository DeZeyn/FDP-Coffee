import { fetchProducts, getProductId } from "./productHelpers";
import productImgPath from "../images/FEND_Coffee_Costa-Rica 1 (1).jpg";

const product = async () => {
  const productData = await fetchProducts();
  console.log (productData);
  const productId = getProductId();
  console.log (productId);

  const product = productData.find(
    (singleProduct) => singleProduct.id === parseInt(productId, 10)
  );
  console.log (product)

  const productHtml = `
    <div class="product">
      <img src="${productImgPath}" alt="product image">
      <div class="product-name">
        ${product.productName}
      </div>
      <div class="product-price">
        ${product.price / 100}€
      </div>
      <div class="product-description">
        ${product.description}
      </div>
    </div>
  `;

  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = productHtml;
};

product();
