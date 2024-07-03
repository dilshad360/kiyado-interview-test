import { useProducts } from "../contexts/ProductContext";

const options = ['all', "men's clothing", "women's clothing", "jewelery", "electronics"]


function CategoryFilter() {


    const { filterByCategory } = useProducts();

  return (
    <select className="select select-bordered w-full max-w-xs select-sm" 
    onChange={(e) => filterByCategory(e.target.value)}>
        {options.map(item => (
        <option key={item} value={item} >{item[0].toUpperCase() + item.slice(1)}</option>
      ))}
    </select>
  );
}

export default CategoryFilter;
