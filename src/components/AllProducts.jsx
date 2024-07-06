import { Trash2Icon } from "lucide-react";
import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import { sampleProducts } from "../utils/productSampleData";
import ButtonStyle from "./ButtonStyle";

const AllProducts = () => {
  const { products, setProducts } = useProductStore();

  // Loading products from local storage if available
  useEffect(() => {
    let products = JSON.parse(localStorage.getItem("products"));
    if (!products) products = sampleProducts;
    setProducts([...products]);
  }, []);

  // Delete any single product
  const deleteProduct = (index) => {
    const data = products;
    data.splice(index, 1);
    setProducts([...data]);
    localStorage.setItem("products", JSON.stringify(data));
  };

  // Reset the state and load the sample data of products array
  const resetProductToSampleData = () => {
    setProducts([...sampleProducts]);
    localStorage.setItem("products", JSON.stringify(sampleProducts));
  };

  // Display all the products
  const loadProducts = () => {
    if (products.length === 0) {
      return (
        <div className="w-full rounded-md bg-gray-200 px-2 py-3 shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <p className="grow-0">No products found</p>
        </div>
      );
    } else {
      return products.map((product, index) => (
        <div
          // Setting index as key because some products might have same name
          key={index}
          className="w-full rounded-md bg-gray-200 px-2 py-3 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        >
          <div className="flex items-center justify-between">
            <p>{product.name}</p>
            <div className="flex w-6/12 justify-between">
              <p className="text-left">{product.price}</p>
              <button
                onClick={() => deleteProduct(index)}
                className="hover:text-gray-500"
              >
                <Trash2Icon />
              </button>
            </div>
          </div>
        </div>
      ));
    }
  };
  return (
    <div className="my-2 w-full space-y-5 px-2 py-5">
      <div className="flex justify-end">
        <div className="space-y-2">
          <button
            onClick={() => setProducts([])}
            className="w-full text-right text-gray-500 underline-offset-2 hover:underline"
          >
            Delete All
          </button>
          <ButtonStyle
            className="w-fit px-2 py-3 text-sm"
            onClick={resetProductToSampleData}
          >
            Reset to Sample Data
          </ButtonStyle>
        </div>
      </div>
      {loadProducts()}
    </div>
  );
};
export default AllProducts;
