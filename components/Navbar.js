import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Search,
  AccountCircle,
  ShoppingBasket,
  ArrowDropDown,
  ArrowDropUp,
  Menu,
  Close,
} from "@mui/icons-material";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let handler = (e) => {
      if (e.target) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/category/");
        setCategories(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getCategories();
  }, []);

  return (
    <div className="fixed w-full h-20 z-[100] bg-sky-950 text-white backdrop-filter backdrop-blur-lg bg-opacity-80 border-b border-gray-200">
      {/** main nav bar */}
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16 ">
        <Link href="/">logo</Link>
        <div>
          <ul className="hidden md:flex items-center">
            <li>
              <div className="relative">
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  <span>Category</span>
                  {isOpen ? <ArrowDropDown /> : <ArrowDropUp />}
                </button>
                <div
                  className={
                    !isOpen
                      ? "hidden absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
                      : "absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
                  }
                >
                  <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800 text-gray-900">
                    {categories.map((category) => (
                      <Link key={category._id} href="/">
                        <div className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                          {category.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            <Link href="/product">
              <li className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Product
              </li>
            </Link>
            <Link href="/about">
              <li className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                About Us
              </li>
            </Link>
            <Link href="/contact">
              <li className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Contact
              </li>
            </Link>
            <Link href="/">
              <li className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Orders
              </li>
            </Link>
          </ul>
        </div>

        <div>
          <ul className="hidden md:flex items-center">
            <Link href="/account/login">
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
        <div
          onClick={() => {
            setNav(!nav);
          }}
          className="md:hidden"
        >
          <Menu />
        </div>
      </div>

      {/** hamburger menu */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w[45%] h-screen bg-slate-800 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <div>logo</div>
            <div
              onClick={() => {
                setNav(!nav);
              }}
              className="rounded-full shadow-lg shadown-gray-400 p-3 cursor-pointer"
            >
              <Close />
            </div>
          </div>

          <div>
            <ul>
              <li>
                <div className="relative">
                  <button
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  >
                    <span>Category</span>
                    {isOpen ? <ArrowDropDown /> : <ArrowDropUp />}
                  </button>
                  <div
                    className={
                      isOpen
                        ? "hidden absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
                        : "absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
                    }
                  >
                    <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800 text-gray-900">
                      {categories.map((category) => (
                        <Link key={category._id} href="/">
                          <div className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                            {category.title}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <Link href="/shop">
                <li className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                  Shop
                </li>
              </Link>
              <Link href="/about">
                <li className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                  About Us
                </li>
              </Link>
              <Link href="/contact">
                <li className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                  Contact
                </li>
              </Link>
              <Link href="/">
                <li className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                  Orders
                </li>
              </Link>
            </ul>
          </div>

          <div className="relative h-32 w-32 ">
            <div className="absolute inset-x-0 bottom-0 h-16">
              <Link href="/account/login">
                <AccountCircle />
              </Link>
              <Link href="/">
                <ShoppingBasket />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
