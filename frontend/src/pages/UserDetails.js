import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userDetails, userRegister } from '../redux/actions/userActions';
import Message from '../components/Message';
import Spinner from '../components/Spinner';

const UserDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPssword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    loading,
    error,
    userInfo: authorizedUser,
  } = useSelector((state) => state.userLogin);

  const { user } = useSelector((state) => state.userDetails);

  useEffect(() => {
    console.log(authorizedUser);
    if (!authorizedUser) {
      navigate('/', { replace: true });
    }
    if (!user.email) dispatch(userDetails());
    setEmail(user.email);
    setName(user.name);
  }, [navigate, authorizedUser, dispatch, user]);

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
      <h1 className='text-4xl'>Profile</h1>
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
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default UserDetails;
