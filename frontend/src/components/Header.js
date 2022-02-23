import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaSignOutAlt } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../redux/actions/userActions';

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  console.log(userInfo);
  const naveListTogggler = () => {
    const list = document.querySelector('#nav-list');
    if (list.classList.contains('hidden')) {
      list.classList.remove('hidden');
    } else {
      list.classList.add('hidden');
    }
  };

  const handleLogout = () => {
    console.log('logging out...');
    dispatch(userLogout());
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
            {userInfo ? (
              <>
                <li className='mx-2 my-2 md:my-0 hover:text-gray-300 transition-c'>
                  <BsPersonFill className='me-1 inline-block mr-1' />
                  <NavLink to='/profile'>{userInfo.name}</NavLink>
                </li>
                <li className='mx-2 my-2 md:my-0 hover:text-gray-300 transition-c'>
                  <FaSignOutAlt className='me-1 inline-block mr-1' />
                  <button onClick={handleLogout}>logout</button>
                </li>
              </>
            ) : (
              <li className='mx-2 my-2 md:my-0 hover:text-gray-300 transition-c'>
                <BsPersonFill className='me-1 inline-block mr-1' />
                <NavLink to='/login'>login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
