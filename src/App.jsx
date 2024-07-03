import { useEffect, useState } from "react";
import Card from "./components/ProductCard";
import { CartProvider } from "./contexts/CardContext";


function App() {

  const [products, setProducts] = useState([]);

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


  return (
    <div className="w-full pb-10 pt-20 flex flex-col  items-center">
    <h2 className="text-3xl font-semibold pb-4">Our Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
      </div>
    </div>
  )
}

export default App
