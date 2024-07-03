/* eslint-disable react/prop-types */


import { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filterByCategory = (category) => {
        setSelectedCategory(category);
    };

    const updateSearchQuery = (query) => {
        setSearchQuery(query);
    };

    const getFilteredProducts = () => {
        return products
            .filter(product =>
                (selectedCategory === 'all' || product.category === selectedCategory) &&
                product.title?.toLowerCase().includes(searchQuery.toLowerCase())
            );
    };

    return (
        <ProductContext.Provider value={{
            products,
            setProducts,
            filterByCategory,
            updateSearchQuery,
            getFilteredProducts,
            selectedCategory,
            searchQuery
        }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProducts() {
    return useContext(ProductContext);
}