import Link from "next/link";
import { Facebook, Instagram, Mail } from "@mui/icons-material/";

const Footer = () => {
  return (
    <div className="w-full h-60 bg-black text-white border-b border-gray-200 flex flex-col absolute m-0 ">
      <div className="mx-auto p-2 justify-center items-center text-center">
        <p>Brand Name</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center px-6">
        <div className="p-6 px-20">
          <p className="py-2 font-bold">Contact Us</p>
          <Facebook className="text-4xl mr-2" />
          <Instagram className="text-4xl mr-2" />
          <Mail className="text-4xl mr-2" />
        </div>

        <div className="p-6 px-20 flex flex-col">
          <p className="py-2 font-bold">Discover</p>
          <div className="text-gray-400">
            <Link href="/">
              <p className="mt-2 text-sm uppcase hover:border-b">Category</p>
            </Link>
            <Link href="/">
              <p className="mt-2 text-sm uppcase hover:border-b">Product</p>
            </Link>
          </div>
        </div>

        <div className="p-6 px-20">
          <p className="py-2 font-bold">Resource</p>
          <div className="text-gray-400">
            <Link href="/">
              <p className="mt-2 text-sm uppcase hover:border-b">About Us</p>
            </Link>
            <Link href="/">
              <p className="mt-2 text-sm uppcase hover:border-b">Contact Us</p>
            </Link>
            <Link href="/">
              <p className="mt-2 text-sm uppcase hover:border-b">
                Terms and Conditions
              </p>
            </Link>
            <Link href="/">
              <p className="text-sm uppcase hover:border-b">Our Policy</p>
            </Link>
          </div>
        </div>

        <div className="p-6 px-20 max-w-[30%] flex flex-col">
          <p className="py-2 font-bold">About</p>
          <p className="text-gray-400 tex-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
