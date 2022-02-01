import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/userActions";

const Login = () => {
  const [email, setUsername] = useState("");
  const [password, setPAssword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted...");
    dispatch(userLogin(email, password));
  };
  return (
    <form
      className='md:w-1/2 mx-auto text-center mt-5'
      onSubmit={(e) => handleSubmit(e)}
    >
      <h1 className='text-4xl'>login form</h1>
      <div className='form-groub'>
        <input
          type='text'
          placeholder='email'
          className='border p-2 m-2'
          value={email}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='form-groub'>
        <input
          type='password'
          placeholder='password'
          className='border p-2 m-2'
          value={password}
          onChange={(e) => setPAssword(e.target.value)}
        />
      </div>
      <div className='form-groub'>
        <button
          type='submit'
          className=' bg-slate-800 text-gray-200 border p-2 mx-4 my-2'
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
