import { create } from "zustand";

export const useProductStore = create((set) => ({
  // These two will be used for the AllProducts and Home component
  products: [],
  setProducts: (products) => set({ products }),
}));
