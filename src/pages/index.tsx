import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <form>
            <div className='mb-4'>
              <label
                className='text-md mb-2 block font-light'
                htmlFor='username'
              >
                Username
              </label>
              <input
                className='bg-drabya-gray focus:shadow-outline w-full appearance-none border border-gray-500 p-4 font-light leading-tight focus:outline-none'
                type='text'
                name='username'
                id=''
                placeholder='Username'
              />
            </div>
            <div className='mb-4'>
              <label
                className='text-md mb-2 block font-light'
                htmlFor='password'
              >
                Password
              </label>
              <input
                className='bg-drabya-gray focus:shadow-outline w-full appearance-none border border-gray-500 p-4 font-light leading-tight focus:outline-none'
                type='password'
                name='password'
                id=''
                placeholder='Password'
              />
            </div>

            <div className='mb-5 flex items-center justify-between'>
              <button
                className='focus:shadow-outline rounded bg-indigo-600 py-2 px-6 font-light text-white hover:bg-blue-700 focus:outline-none'
                type='button'
              >
                LOGIN
              </button>
              <a
                className='inline-block align-baseline text-sm font-light text-indigo-600 hover:text-indigo-500'
                href='#'
              >
                Forgot Password?
              </a>
            </div>
            <p className='text-md text-center font-light'>
              <a className='text-md font-light text-indigo-600'>Create</a>
            </p>
          </form>
        </section>
      </main>
    </Layout>
  );
}
