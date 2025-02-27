const FetchProductInfo = async (id) => {
  try {
    const response = await fetch(
      `https://kaaryar-ecom.liara.run/v1/products/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching productinformation:", error);
  }
};
export default FetchProductInfo;
