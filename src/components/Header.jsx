

import Cart from "./Cart";


function Header() {


    return (
        <div className="navbar bg-[#efeae6] w-full flex justify-between px-10 fixed z-10 shadow-xl">
            <a className="btn btn-ghost text-black text-xl">LOGO</a>
            <div>
                <Cart/>
            </div>
        </div>
    );
}

export default Header;
