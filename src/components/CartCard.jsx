/* eslint-disable react/prop-types */

import { Minus, Plus, X } from "lucide-react";
import { useCart } from "../contexts/CardContext";

function CartCard({ product }) {
    const { removeFromCart, updateQuantity } = useCart();

    return (
        <div className="bg-white px-2 py-2 rounded-md flex">
            <figure className="w-20 h-20 bg-white ">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-auto h-full object-fit"
                />
            </figure>
            <div className="flex-1 flex flex-col px-2">
                <h2 className="font-semibold">{product.title}</h2>

                <div className="flex items-center justify-end">
                    <button
                        className="btn btn-xs btn-circle btn-ghost"
                        onClick={() => updateQuantity(product.id, product.quantity - 1)}
                    >
                        <Minus size={18} />
                    </button>
                    <p className="font-semibold px-2 ">{product.quantity}</p>
                    <button
                        className="btn btn-xs btn-circle btn-ghost"
                        onClick={() => updateQuantity(product.id, product.quantity + 1)}
                    >
                        <Plus size={18} />
                    </button>
                </div>
                <p className="text-green-700 font-semibold">${product.price}</p>
            </div>
            <X
                className="cursor-pointer"
                onClick={() => removeFromCart(product.id)}
            />
        </div>
    );
}

export default CartCard;
