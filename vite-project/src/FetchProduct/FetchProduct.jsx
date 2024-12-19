const FetchProduct = async () => {
  try {
    const response = await fetch("https://kaaryar-ecom.liara.run/v1/products");
    const data = await response.json();
    const productList = data.products;
    return productList;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
export default FetchProduct;
