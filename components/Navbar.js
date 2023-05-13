import Image from "next/image";
import Link from "next/link";
import { Search, AccountCircle, ShoppingBasket } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 z-[100] bg-sky-950 text-white backdrop-filter backdrop-blur-lg bg-opacity-80 border-b border-gray-200">
      {/** main nav bar */}
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16 ">
        <Link href="/">logo</Link>
        <div>
          <ul className="hidden md:flex items-center">
            <Link href="/">
              <li className="flex items-center ml-10 text-sm uppcase hover:border-b bg-white rounded-lg border-1 border-black">
                <input
                  className="px-5 py-1 outline-none"
                  type="text"
                  placeholder="search here..."
                />
                <Search className="text-black pe-1" />
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppcase hover:border-b">Category</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppcase hover:border-b">Shop</li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm uppcase hover:border-b">About Us</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text-sm uppcase hover:border-b">Contact</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppcase hover:border-b">Orders</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="hidden md:flex items-center">
            <Link href="/">
              <li className="ml-10 text-sm uppcase hover:border-b">
                <AccountCircle />
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppcase hover:border-b">
                <ShoppingBasket />
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/** hamburger menu */}
      <div></div>
    </div>
  );
};

export default Navbar;
