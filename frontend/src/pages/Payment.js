import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../redux/actions/cartActions';

const Payment = () => {
  const navigate = useNavigate();
  const shippingMethod = useSelector((state) => state.cart.shippingMethod);
  const shippingAddress = useSelector((state) => state.cart.shippingAddress);
  if (!shippingAddress) {
    navigate('/shipping');
  }
  const dispatch = useDispatch();
  const [payment, setPayment] = useState(
    shippingMethod === '' ? 'PayPal' : shippingMethod
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(payment));
    navigate('/placeorder');
  };
  return (
    <form
      className='md:w-1/5 mx-auto text-center  mt-5'
      onSubmit={(e) => handleSubmit(e)}
    >
      <h1 className='text-3xl'>Payment Method</h1>
      <table className='text-2xl text-left my-4 mx-auto'>
        <tbody>
          <tr>
            <td>
              <input
                type='radio'
                value='PayPal'
                checked
                onChange={(e) => setPayment(e.target.value)}
              />
            </td>
            <td>
              <label className='ml-4'>PayPal or Cridet Card</label>
            </td>
          </tr>
        </tbody>
      </table>
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

export default Payment;
