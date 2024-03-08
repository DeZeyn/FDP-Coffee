export const fetchProducts = async () => {
    const productRequest = await fetch("../data/products.json");
    return productRequest.json();
  };

  export const getProductId = () => {
    const queryString = window.location.search;
    console.log (queryString)
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get("id");
  };

