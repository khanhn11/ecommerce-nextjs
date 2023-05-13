import React from "react";

const about = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest">
            About Us
          </p>
          <h1 className="py-4">
            Hello, We're <span className="text-[#00ba7cc4]">Name Here</span>
          </h1>
          <h1 className="py-4">Full Stack Web Developer</h1>
          <p className="py-4 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            illum at voluptas nam optio aut repudiandae maiores, facere
            quisquam. Tenetur velit similique amet quaerat repellendus.
            Assumenda ad quia exercitationem explicabo.
          </p>
          <p className="py-4 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
