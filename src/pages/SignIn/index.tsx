import React from 'react';

const SignIn: React.FC = () => {
  return (
    <div className='z-10 h-full w-full flex items-center justify-center'>
      <div className='rounded-md min-w-[450px] h-[400px] border border-slate-400 shadow-md'>
        <h1 className='text-black font-bold text-[60px] text-center mt-8'>
          Sign In
        </h1>
        <form>
          <div className='flex items-center justify-center flex-col'>
            <label className='font-bold text-xl text-black' htmlFor='email'>
              Email
            </label>
            <input
              className='border-double min-h-[2rem] bg-transparent focus:bg-black focus:text-white border-white border-2 rounded-sm px-2'
              id='email'
              name='email'
              type='email'
            />
          </div>
          <div className='flex items-center justify-center flex-col mt-6'>
            <label className='font-bold text-xl text-black' htmlFor='password'>
              Password
            </label>
            <input
              className='border-double min-h-[2rem] bg-transparent focus:bg-black focus:text-white border-white border-2 rounded-sm px-2'
              id='password'
              name='password'
              type='password'
            />
          </div>
          <div className='flex justify-center mt-6'>
            <button
              className='border-black hover:border-white inline-block rounded bg-transparent px-4 hover:bg-black hover:text-white text-xl py-2 text-black border font-bold transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500'
              type='submit'
            >
              Sign In
            </button>
          </div>
        </form>
        <div className='w-full flex justify-center mt-6'>
          <a className='hover:text-base' href='/signup'>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
