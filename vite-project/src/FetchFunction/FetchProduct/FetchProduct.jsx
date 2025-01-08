const FetchProduct = async (categoryId) => {
  try {
    const url = categoryId
      ? `https://kaaryar-ecom.liara.run/v1/products?category=${categoryId}`
      : `https://kaaryar-ecom.liara.run/v1/products`;
    const response = await fetch(url);
    const data = await response.json();
    const productList = data.products;
    return productList;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
export default FetchProduct;
