/* eslint-disable react/prop-types */
import { useCart } from "../../contexts/CardContext";



function Card({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="card bg-base-100 w-full sm:w-96 h-96 shadow-xl border">
            <figure className="w-auto h-48 bg-white py-2">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-auto h-full object-fit"
                />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <div>
                    <h2 className="card-title">{product.title}</h2>
                    <p className="truncate">{product.description}</p>
                </div>
                <div className="card-actions justify-end items-center">
                    <p className="text-2xl text-green-700 font-semibold">${product.price}</p>
                    <button className="btn btn-primary"  onClick={() => addToCart(product)} >Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
