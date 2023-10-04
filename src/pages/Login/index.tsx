import React, { useState } from 'react';

const Login: React.FC = () => {
  const [isLogging, setIsLogging] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    const passwordConfirm = (!isLogging && form.get('passwordConfirm')) || '';

    console.log({ email, password, passwordConfirm });
  };

  return (
    <div className='h-full w-full flex items-center justify-center'>
      <div className='rounded-md min-w-[400px] min-h-[400px] border border-slate-400 shadow-md p-4'>
        <h1 className='text-black font-bold text-[60px] text-center font-mono'>
          {isLogging ? 'Login' : 'Register'}
        </h1>
        <form onSubmit={handleSubmit}>
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
          {!isLogging && (
            <>
              <div className='flex items-center justify-center flex-col mt-6'>
                <label
                  className='font-bold text-xl text-black'
                  htmlFor='passwordConfirm'
                >
                  Password Confirm
                </label>
                <input
                  className='border-double min-h-[2rem] bg-transparent focus:bg-black focus:text-white border-white border-2 rounded-sm px-2'
                  id='passwordConfirm'
                  name='passwordConfirm'
                  type='password'
                />
              </div>
              <div className='flex items-center justify-center flex-col mt-6'>
                <label className='font-bold text-xl text-black' htmlFor='name'>
                  Password Confirm
                </label>
                <input
                  className='border-double min-h-[2rem] bg-transparent focus:bg-black focus:text-white border-white border-2 rounded-sm px-2'
                  id='name'
                  name='name'
                  type='text'
                />
              </div>
            </>
          )}
          <div className='flex justify-center mt-6'>
            <button
              className='border-black hover:border-white inline-block rounded bg-transparent px-4 hover:bg-black hover:text-white text-xl py-2 text-black border font-bold transition hover:scale-110 hover:shadow-xl'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
        <div className='w-full flex justify-center mt-6'>
          <span
            onClick={() => setIsLogging(!isLogging)}
            className='cursor-pointer text-xl text-slate-700 hover:text-black hover:font-bold hover:underline transition'
          >
            {!isLogging ? 'Login' : 'Register'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
