import React from "react";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-around mt-2">
      <h1 className=" text-3xl">Movies</h1>
      <div>
        <input className=" border py-1 rounded-md" placeholder=" search" />
      </div>
    </div>
  );
};

export default Navbar;
