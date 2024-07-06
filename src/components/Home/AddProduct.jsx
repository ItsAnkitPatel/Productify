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
      toast.success("Product added successfully");
      setAddProductVisibility(false);
    }
  };

  return (
    <div className="absolute z-30 h-full w-full backdrop-blur-sm">
      {/* Positing the container in center of the page */}
      <div className="flex min-h-96 flex-col items-center justify-center transition-all duration-700 max-sm:mx-auto max-sm:w-9/12 md:w-10/12 lg:w-9/12">
        <div className="w-full drop-shadow-lg">
          <div className="mx-auto w-full overflow-hidden rounded-md bg-transparent p-2 px-5 shadow-xl shadow-gray-500/80 transition-all duration-700 sm:w-96 lg:mt-28">
            <h1 className="mb-2 mt-5 text-xl drop-shadow-none sm:text-3xl">
              Add Your Product
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5">
                <input
                  type="text"
                  name="product"
                  placeholder="Product Name"
                  required
                  className="mt-2 h-10 rounded-md p-2 outline-none ring-gray-200 focus:ring-2 sm:h-12"
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
                  className="h-10 rounded-md p-2 outline-none ring-gray-200 focus:ring-2 sm:h-12"
                  value={priceField}
                  onChange={(e) => {
                    setPriceField(e.target.value);
                  }}
                />

                <div className="mb-3 mt-2 flex w-full justify-between">
                  <div className="flex w-full items-center justify-between px-px text-sm max-sm:gap-2 sm:text-lg">
                    <button
                      className="rounded-md bg-white px-3 py-2 text-black transition-all duration-300 hover:shadow-lg active:translate-y-2"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="text-nowrap rounded-md bg-black px-3 py-2 text-white transition-all duration-300 hover:shadow-lg hover:brightness-110 active:translate-y-2"
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
