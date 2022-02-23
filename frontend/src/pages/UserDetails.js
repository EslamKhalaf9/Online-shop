import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userDetails, userUpdate } from '../redux/actions/userActions';
import Message from '../components/Message';
import Spinner from '../components/Spinner';

const UserDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPssword] = useState('');
  const [message, setMessage] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  const { user } = useSelector((state) => state.userDetails);

  const { success, user: updatedUser } = useSelector(
    (state) => state.userUpdate
  );

  useEffect(() => {
    // dispatch(userDetails());
    if (!user.name) dispatch(userDetails());

    if (updatedUser) {
      setEmail(updatedUser.email);
      setName(updatedUser.name);
      //todo reset updated user
      //bug when you log out and login again the previous updated user data show in the form
      setTimeout(() => {
        setSuccessMsg(false);
      }, 5000);
    } else {
      setEmail(user.email);
      setName(user.name);
      setSuccessMsg(false);
    }
  }, [navigate, userInfo, dispatch, user, updatedUser, success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords arn't match");
    } else {
      setMessage('');
      dispatch(userUpdate({ name, email, password }));
      setSuccessMsg(success);
    }
  };
  return (
    <form
      className='md:w-1/2 mx-auto text-center mt-5'
      onSubmit={(e) => handleSubmit(e)}
    >
      {message && <Message message={message} bg='bg-red-500' />}
      {successMsg && (
        <Message message={'Updated Successfully'} bg='bg-green-500' />
      )}
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
