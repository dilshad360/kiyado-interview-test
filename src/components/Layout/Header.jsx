import { useProducts } from "../../contexts/ProductContext";
import Cart from "../Cart";

function Header() {
    const { searchQuery, updateSearchQuery } = useProducts();

    return (
        <div className="navbar bg-[#efeae6] w-full flex justify-between px-10 fixed z-10 shadow-xl">
            <a className="btn btn-ghost text-black text-xl">LOGO</a>
            <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => updateSearchQuery(e.target.value)}
                className="input input-bordered w-full md:w-1/4 input-sm "
            />
            <div>
                <Cart />
            </div>
        </div>
    );
}

export default Header;
