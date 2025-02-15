import React, { createContext, useState, useContext } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [checkedId, setCheckedId] = useState(null);

  const handleCheckboxChange = (id) => {
    setCheckedId((prev) => {
      const newCheckedId = prev === id ? null : id;
      return newCheckedId;
    });
  };

  return (
    <CategoryContext.Provider value={{ checkedId, handleCheckboxChange }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};
