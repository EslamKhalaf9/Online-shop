import { Link, useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import CartItem from "../components/CartItem";
const Cart = () => {
  const { id } = useParams();
  const [search] = useSearchParams();
  const qty = search.get("qty");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  useEffect(() => {
    id && dispatch(addToCart(id, qty));
  }, [dispatch, id, qty]);

  const changeItemQty = (e, item) => {
    dispatch(addToCart(item.product, Number(e.target.value)));
  };

  const itemDeleteHandeler = (product) => {
    dispatch(removeFromCart(product));
  };

  const addToCartHandeller = () => {
    console.log("ah shit here we go again");
  };

  return (
    <>
      <Link
        className=' bg-slate-500 text-gray-200 m-4 inline-block p-2 rounded'
        to='/'
      >
        Go Back
      </Link>
      <div className='wrapper grid grid-cols-2 gap-3'>
        <div className='items'>
          {/* items goes here */}
          {cartItems.products.length &&
            cartItems.products.map((item) => (
              <CartItem
                changeItemQty={changeItemQty}
                key={item.product}
                item={item}
                itemDeleteHandeler={itemDeleteHandeler}
              />
            ))}
        </div>
        <div className='checkout mt-5'>
          {/* your cart details like total items and price proceed to checkout */}
          <div className='controls bg-gray-100 text-gray-600 text-3xl text-center p-4 m-4 rounded-lg shadow-xl'>
            <div className='row mb-4'>
              <span>
                total Items:{" "}
                {cartItems.products.reduce((prev, curr) => prev + curr.qty, 0)}
              </span>
            </div>
            <div className='row my-4'>
              <span className='price'>
                Price: $
                {cartItems.products.reduce(
                  (prev, curr) => prev + curr.qty * curr.price,
                  0
                )}
              </span>
            </div>
            <div className='row'>
              <button
                onClick={addToCartHandeller}
                className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
              >
                {" "}
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
