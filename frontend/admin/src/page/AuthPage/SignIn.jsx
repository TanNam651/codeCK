import React, { useEffect, useRef, useState } from 'react';
import FormInput from '../../components/FormInput/FormInput'
import FormCheckBox from '../../components/FormInput/FormCheckBox';
import FormButton from '../../components/FormInput/FormButton';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../features/auth/authApiSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../features/auth/authSlice';
import { useGlobalContext } from '../../context/context';

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setLogin } = useGlobalContext();
  
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  

  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password }).unwrap();

      console.log(data);
      dispatch(setCredentials({ ...data, email }));
      setEmail('');
      setPassword('');
      navigate('/');
      localStorage.setItem('loginStatus', true);
      setLogin(true);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='w-full flex justify-center items-center h-screen bg-blue-200'>
      <div className='relative flex flex-col w-1/4 pb-8 justify-start items-center bg-gray-50 min-w-[400px]'>
        <h2 className='w-full text-3xl font-medium font-montserrat mt-4 pl-4'>Sign In</h2>
        <div className='w-full relative'>
          <form action="">
            <FormInput label={'Email Address'}
              type={'email'}
              placeholder={'admin@gmail.com'}
              name={'email'}
              bg={'bg-blue-50'}
              mt={'mt-0'}
              mb={'mb-1'}
              py={'py-3'}
              value={email}
              onChange={handleEmailInput}
              
            />
            <FormInput label={'Password'}
              type={'password'}
              placeholder={'12345'}
              name={'pwd'}
              bg={'bg-blue-50'}
              mt={'mt-0'}
              mb={'mb-1'}
              py={'py-3'}
              value={password}
              onChange={handlePwdInput}
            />
            <FormCheckBox label={'Remember me'}
              type={'checkbox'}
              name={'remember'}
              ml={'ml-6'}
              mt={'mt-6'}
              mr={'mr-2'}
            />
            <FormButton
              text={'Submit'}
              type={'button'}
              bg={'bg-blue-500'}
              mt={'mt-2'}
              py={'py-3'}
              textSize={'lg'}
              textColor={'text-slate-50'}
              handleClick={handleLogin}
            />
            <div className='relative flex flex-row items-start justify-end space-x-1 mr-4 mt-5 text-[15px]  font-palanquin'>
              <p>Forgot</p>
              <p className='underline text-blue-400 hover:text-gray-500 cursor-pointer'>password?</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
