import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../redux/actions/cartActions';

const Shipping = () => {
  const shippingAddress = useSelector((state) => state.cart.shippingAddress);
  const [address, setAdress] = useState(
    shippingAddress ? shippingAddress.address : ''
  );
  const [city, setCity] = useState(shippingAddress ? shippingAddress.city : '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress ? shippingAddress.postalCode : ''
  );
  const [country, setCountry] = useState(
    shippingAddress ? shippingAddress.country : ''
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, country, postalCode }));
    navigate('/payment');
  };
  return (
    <form
      className='md:w-1/2 mx-auto text-center mt-5'
      onSubmit={(e) => handleSubmit(e)}
    >
      <h1 className='text-4xl'>Enter Your Address</h1>
      <div className='form-groub'>
        <input
          type='text'
          placeholder='address'
          className='border p-2 m-2 w-full'
          value={address}
          onChange={(e) => setAdress(e.target.value)}
        />
      </div>
      <div className='form-groub'>
        <input
          type='text'
          placeholder='city'
          className='border p-2 m-2 w-full'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className='form-groub'>
        <input
          type='text'
          placeholder='postalCode'
          className='border p-2 m-2 w-full'
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </div>
      <div className='form-groub'>
        <input
          type='text'
          placeholder='country'
          className='border p-2 m-2 w-full'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className='form-groub'>
        <button
          type='submit'
          className=' bg-slate-800 text-gray-200 border p-2 m-2 w-full'
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default Shipping;
