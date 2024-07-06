import { create } from "zustand";

export const useProductStore = create((set) => ({
  // These two will be used for the AllProducts and Home component
  products: [],
  setProducts: (products) => set({ products }),
  
  //These two will be used for AddProduct component to show and hide the form
  addProductVisibility: false,
  setAddProductVisibility: (addProductVisibility) =>
    set({ addProductVisibility }),
}));
