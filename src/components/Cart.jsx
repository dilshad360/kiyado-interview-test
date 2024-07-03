import { ShoppingCart } from "lucide-react"
import { useCart } from "../contexts/CardContext";
import CartCard from "./CartCard";


function Cart() {

    const { cart } = useCart();

    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="drawer drawer-end z-20">
            {console.log(cart)}
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary  btn-ghost btn-circle">
                    <div className="indicator">
                        <ShoppingCart />
                        {itemCount > 0 &&
                            <span className="badge badge-sm bg-red-400 indicator-item z-0">{itemCount}</span>
                        }
                    </div>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-base-200 text-base-content min-h-full w-96 p-6">
                <p className=" text-center text-2xl font-semibold pb-4">Your Cart</p>
                {cart.length > 0 && <>
                <div className="space-y-3">
                    {cart.map(product => (
                        <CartCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="flex justify-between px-2 py-2">
                <h3 className="text-2xl  font-semibold">Total</h3>
                <p className="text-2xl text-green-700 font-semibold">${totalPrice.toFixed(2)}</p>
                </div>
                    <button className="btn btn-primary" onClick={() => alert("Order Placed")}>Checkout</button>
                    </>}
                </div>
            </div>
        </div>
    )
}

export default Cart