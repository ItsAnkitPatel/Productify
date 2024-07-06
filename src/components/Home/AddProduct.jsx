import { useState } from "react";
import { useProductStore } from "../../store/useProductStore";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { products, setAddProductVisibility } = useProductStore();
  const [productField, setProductField] = useState("");
  const [priceField, setPriceField] = useState("");

  const handleCancel = (e) => {
    e.preventDefault();
    setAddProductVisibility(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = new FormData(e.target);
    const newProduct = form.get("product");
    const price = form.get("price");
    const productExists = products.find(
      (product) => product.name.toLowerCase() === newProduct.toLowerCase(),
    );
    if (productExists) {
      toast.warning("Product already exists");
      console.log("Product already exists");
    } else {
      products.unshift({ name: newProduct, price: `$${price}` });
      localStorage.setItem("products", JSON.stringify(products));
      console.log("New Product");
      setAddProductVisibility(false)
    }
    console.log("submit");
  };

  return (
    <div className="absolute z-30 h-full w-full backdrop-blur-sm ">
      {/* Positing the container in center of the page */}
      <div className="flex min-h-96 w-9/12 flex-col items-center justify-center transition-all duration-700">
        <div className="w-full drop-shadow-lg">
          <div className="mx-auto w-full overflow-hidden rounded-md bg-transparent p-2 px-5 shadow-lg transition-all duration-700 sm:w-96">
            <h1 className="mb-2 mt-5 text-3xl drop-shadow-none">Add Product</h1>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5">
                <input
                  type="text"
                  name="product"
                  placeholder="Product Name"
                  required
                  className="mt-2 h-12 rounded-md p-2 outline-none ring-gray-200 focus:ring-2"
                  value={productField}
                  onChange={(e) => {
                    setProductField(e.target.value);
                  }}
                />
                <input
                  type="number"
                  name="price"
                  required
                  placeholder="Product Price in $"
                  className="h-12 rounded-md p-2 outline-none ring-gray-200 focus:ring-2"
                  value={priceField}
                  onChange={(e) => {
                    setPriceField(e.target.value);
                  }}
                />

                <div className="mb-3 flex w-full justify-between">
                  <div className="flex w-full items-center justify-between px-px text-lg">
                    <button
                      className="rounded-md bg-white p-2 transition-transform duration-300 active:translate-y-2"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="text-nowrap rounded-md bg-black p-2 text-white transition-transform duration-300 active:translate-y-2"
                    >
                      Add Product
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;