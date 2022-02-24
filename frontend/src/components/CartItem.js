import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartItem = ({ item, changeItemQty, itemDeleteHandeler }) => {
  return (
    <div className='text-center sm:flex items-center justify-between text-gray-600 bg-gray-100 shadow-2xl mx-4 my-8 rounded-xl overflow-hidden'>
      <div className='mx-auto sm:col w-48'>
        <img
          className='mx-auto w-full h-full'
          src={item.image}
          alt={item.name}
        />
      </div>
      <div className=' mx-auto sm:col p-4 w-60 text-lg font-semibold'>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
      </div>
      <div className='sm:col p-4 text-xl font-semibold'>${item.price}</div>
      <div className='sm:col p-4'>
        <select
          value={item.qty}
          // onChange={(e) =>
          //   dispatch(addToCart(item.product, Number(e.target.value)))
          // }
          onChange={(e) => changeItemQty(e, item)}
          className=' w-full sm:w-12  py-2 px-1 '
        >
          {item.countInStock > 0
            ? [...Array(item.countInStock).keys()].map((i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))
            : null}
        </select>
        {/* end Col */}
      </div>
      <div className='col p-4 text-red-400 text-2xl'>
        <button onClick={() => itemDeleteHandeler(item.product)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
