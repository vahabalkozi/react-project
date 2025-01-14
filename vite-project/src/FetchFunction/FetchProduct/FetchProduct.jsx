const FetchProduct = async (categoryId, page = 1, itemsPerPage = 10) => {
  try {
    const url = categoryId
      ? `https://kaaryar-ecom.liara.run/v1/products?category=${categoryId}&page=${page}&limit=${itemsPerPage}`
      : `https://kaaryar-ecom.liara.run/v1/products?page=${page}&limit=${itemsPerPage}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
export default FetchProduct;
