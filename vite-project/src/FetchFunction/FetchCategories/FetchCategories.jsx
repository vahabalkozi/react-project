const FetchCategories = async () => {
  try {
    const response = await fetch(
      "https://kaaryar-ecom.liara.run/v1/categories"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
export default FetchCategories;
