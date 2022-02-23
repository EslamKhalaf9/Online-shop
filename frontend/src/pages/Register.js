import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../redux/actions/userActions';
import Message from '../components/Message';
import Spinner from '../components/Spinner';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPssword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector(
    (state) => state.userRegister
  );

  useEffect(() => {
    console.log(userInfo);
    if (userInfo) {
      navigate('/', { replace: true });
    }
  }, [navigate, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords arn't match");
    } else {
      setMessage('');
      console.log('submitted...', loading);
      dispatch(userRegister(name, email, password));
    }
  };
  return (
    <form
      className='md:w-1/2 mx-auto text-center mt-5'
      onSubmit={(e) => handleSubmit(e)}
    >
      {message && <Message message={message} bg='bg-red-500' />}
      {error && <Message message={error} bg='bg-red-500' />}
      {loading && <Spinner />}
      <h1 className='text-4xl'>Create New Acount</h1>
      <div className='form-groub'>
        <input
          type='text'
          placeholder='name'
          className='border p-2 m-2 w-full'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
        <input
          type='password'
          placeholder='Confirm Password'
          className='border p-2 m-2 w-full'
          value={confirmPassword}
          onChange={(e) => setConfirmPssword(e.target.value)}
        />
      </div>
      <div className='form-groub'>
        <button
          type='submit'
          className=' bg-slate-800 text-gray-200 border p-2 m-2 w-full'
        >
          Register
        </button>
      </div>
      <div className='form-groub'>
        <p>
          Already have acount ?{' '}
          <Link className='text-blue-500' to='/login'>
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Register;
