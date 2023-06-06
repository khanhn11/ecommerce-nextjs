import Image from "next/image";
import { Phone, Email, Home } from "@mui/icons-material/";

const contact = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
          <h1 className="font-bold text-[3rem] py-4">Contact Us</h1>
          <p className="py-4 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            laborum sunt minima, corrupti ipsum laboriosam dolores tempore harum
            ducimus deserunt, dolore quos voluptatum rerum voluptatem, dicta
            enim commodi ratione eos!
          </p>
          <div className="grid md:grid-cols-3 gap-8 p-6">
            <div className="relative flex items-center justify-center h-auto w-auto border-solid border border-slate-300 hover:border-dotted rounded-lg py-20">
              <div className="px-10">
                <Phone className="text-[2rem] mb-4" />
                <p className="text-2xl tracking-wider text-center my-4">
                  Phone
                </p>
                <span className="pb-4 pt-2 text-center my-4">000-000-0000</span>
              </div>
            </div>
            <div className="relative flex items-center justify-center h-auto w-auto border-solid border border-slate-300 hover:border-dotted rounded-md py-20">
              <div className="px-10">
                <Email className="text-[2rem] mb-4" />
                <p className="text-2xl tracking-wider text-center my-4">
                  Email
                </p>
                <span className="pb-4 pt-2 text-center my-4">000-000-0000</span>
              </div>
            </div>
            <div className="relative flex items-center justify-center h-auto w-auto border-solid border border-slate-300 hover:border-dotted rounded-md py-20">
              <div className="px-10">
                <Home className="text-[2rem] mb-4" />
                <p className="text-2xl tracking-wider text-center my-4">
                  Address
                </p>
                <span className="text-center my-4">
                  95 Hampshire Close NW Calgary, AB T3A 4X9
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
