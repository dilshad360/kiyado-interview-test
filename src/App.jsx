import { useEffect, useState } from "react";
import Card from "./components/Card/ProductCard";
import { CartProvider } from "./contexts/CardContext";
import { useProducts } from "./contexts/ProductContext";


function App() {

  const { setProducts, getFilteredProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="w-full pb-10 pt-20 flex flex-col  items-center">
    <div>
    <h2 className="text-3xl font-semibold pb-4 ">Our Products</h2>

    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {filteredProducts.map(product => (
        <Card key={product.id} product={product} />
      ))}
      </div>
    </div>
  )
}

export default App
