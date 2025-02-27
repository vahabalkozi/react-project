const FetchProduct = async (
  categoryId,
  page = 1,
  itemsPerPage = 10,
  searchText
) => {
  try {
    let url = `https://kaaryar-ecom.liara.run/v1/products?page=${page}&limit=${itemsPerPage}`;

    if (searchText && categoryId) {
      url = `https://kaaryar-ecom.liara.run/v1/products?search=${searchText}&category=${categoryId}&page=${page}&limit=${itemsPerPage}`;
    } else if (searchText) {
      url = `https://kaaryar-ecom.liara.run/v1/products?search=${searchText}&page=${page}&limit=${itemsPerPage}`;
    } else if (categoryId) {
      url = `https://kaaryar-ecom.liara.run/v1/products?category=${categoryId}&page=${page}&limit=${itemsPerPage}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
export default FetchProduct;
