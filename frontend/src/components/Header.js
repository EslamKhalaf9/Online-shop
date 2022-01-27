import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

const Header = () => {
  const naveListTogggler = () => {
    const list = document.querySelector("#nav-list");
    if (list.classList.contains("hidden")) {
      list.classList.remove("hidden");
    } else {
      list.classList.add("hidden");
    }
  };
  return (
    <nav className='bg-gray-800 text-gray-100 py-4'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <h1 className='text-3xl flex justify-between items-center w-full md:w-max hover:text-gray-300 transition-c'>
          <NavLink to='/'>Online Shop</NavLink>
          <FaBars
            onClick={naveListTogggler}
            className='md:hidden cursor-pointer'
          />
        </h1>
        <div className='hidden md:block' id='nav-list'>
          <ul className='flex flex-col md:flex-row text-lg '>
            <li className='mx-2 my-2 md:my-0 hover:text-gray-300 transition-c'>
              <FaShoppingCart className='me-1 inline-block mr-1' />
              <NavLink to='/cart'>Cart</NavLink>
            </li>
            <li className='mx-2 my-2 md:my-0 hover:text-gray-300 transition-c'>
              <BsPersonFill className='me-1 inline-block mr-1' />
              <NavLink to='/'>login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
