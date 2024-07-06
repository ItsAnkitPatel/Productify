import { useEffect, useRef, useState } from "react";
import { useProductStore } from "../../store/useProductStore";
import { cn } from "../../utils/cn";
import AllProducts from "./AllProducts";
import { debounce } from "lodash";
import { Loader2Icon } from "lucide-react";

const Home = () => {
  const [enableOverlay, setEnableOverlay] = useState(false);
  const { products } = useProductStore();
  // This is for handling the overlay when clicking outside the search bar
  const searchBarRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setEnableOverlay(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [enableOverlay]);

  const [showSearchedProducts, setShowSearchedProducts] = useState([]);

  // This will used for the loader when searching for products in the search bar
  const [loader, setLoader] = useState(false);

  // This will set "No Products Found" message
  const [showNotFound, setShowNotFound] = useState(false);

  // Used debounce to avoid multiple searching
  const handleSearch = debounce((e) => {
    if (e.target.value.trim() === "") {
      // when the search bar is empty then reset all states
      setShowNotFound(false);
      setLoader(false);
      setShowSearchedProducts([]);
      return;
    }
    const searchValue = e.target.value;

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase()),
    );

    setLoader(false);
    // When no result is found enable "not found" message and show it to the user
    setShowNotFound(filteredProducts.length === 0);

    setShowSearchedProducts(filteredProducts);
  }, 700);
  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "invisible absolute left-0 z-10 h-full w-full backdrop-blur-sm transition-all duration-300",
          { visible: enableOverlay },
        )}
      />
      <div
        className="relative flex items-center justify-center"
        ref={searchBarRef}
      >
        <div className="mt-10 flex w-9/12 flex-col items-center">
          {/* Search bar */}
          <div className="sticky top-0 z-20 w-full shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="relative flex items-center">
              <input
                type="text"
                name="search"
                id="search"
                className="h-12 w-full rounded-md px-3 py-2 outline-none ring-gray-200 focus:ring"
                placeholder="Search Your Product Here..."
                onClick={() => setEnableOverlay(true)}
                onChange={(e) => {
                  setLoader(true);
                  handleSearch(e);
                }}
              />
              {loader && (
                <Loader2Icon className="absolute right-2 size-5 animate-spin bg-transparent" />
              )}
            </div>
          </div>

          {/* Here we will show search results */}
          {showSearchedProducts.length > 0 ? (
            <div
              className={cn(
                "invisible absolute top-20 z-20 mt-5 flex w-full flex-col items-center space-y-2",
                {
                  visible: enableOverlay,
                },
              )}
            >
              {showSearchedProducts.map((product, index) => (
                <div
                  // Setting index as key because some products might have same name
                  key={index}
                  className="w-5/12 rounded-md bg-white px-2 py-3 shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <p>{product.name}</p>
                    <div className="flex justify-between">
                      <p className="text-left">{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // When no products are found show this
            showNotFound && (
              <div
                className={cn(
                  "invisible absolute top-20 z-20 mt-5 flex w-11/12 flex-col items-center space-y-2",
                  { visible: enableOverlay },
                )}
              >
                No Products Found
              </div>
            )
          )}

          <AllProducts />
        </div>
      </div>
    </>
  );
};
export default Home;
