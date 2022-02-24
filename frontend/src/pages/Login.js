import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/actions/userActions';
import Message from '../components/Message';
import Spinner from '../components/Spinner';

const Login = () => {
  const [email, setEmail] = useState('admin@admin.com');
  const [password, setPassword] = useState('123456');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    // console.log(userInfo);
    if (userInfo) {
      navigate('/', { replace: true });
    }
  }, [navigate, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted...', loading);
    dispatch(userLogin(email, password));
  };
  return (
    <form
      className='md:w-1/2 mx-auto text-center mt-5'
      onSubmit={(e) => handleSubmit(e)}
    >
      {error && <Message message={error} bg='bg-red-500' />}
      {loading && <Spinner />}
      <h1 className='text-4xl'>Login</h1>
      <div className='form-groub'>
        <input
          type='email'
          placeholder='email'
          className='border p-2 m-2 w-full'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='form-groub'>
        <input
          type='password'
          placeholder='password'
          className='border p-2 m-2 w-full'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='form-groub'>
        <button
          type='submit'
          className=' bg-slate-800 text-gray-200 border p-2 m-2 w-full'
        >
          Login
        </button>
      </div>
      <div className='form-groub'>
        <p>
          New Customer ?{' '}
          <Link className='text-blue-500' to='/register'>
            Register
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
