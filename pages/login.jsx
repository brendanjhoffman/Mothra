import Link from 'next/link';
import { makePublicRouterInstance } from 'next/router';
import { signIn } from 'next-auth/react';

import Button from '../components/Button/Button';
import TextField from '../components/TextField/TextField';

const handleSignIn = (provider) => (e) => {
  e.preventDefault();
  signIn(provider, { redirect: true, callbackUrl: '/' });
};

const LogIn = () => {
  return (
    <main className="lg:flex justify-center gap-8 py-16">
      <form
        className="lg:m-0 lg:w-68 flex flex-col gap-4 max-w-xs mx-auto p-6 border border-gray-200 rounded-xl mb-8"
        onSubmit={console.log}
      >
        <h1 className="text-xl font-bold text-gray-700">Log In</h1>

        <TextField
          required
          label="Name"
          placeholder="John Doe"
          helperText="Required"
        />
        <TextField
          required
          label="Password"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          type="password"
          helperText="8 characters at least, 1 number, 1 capital"
        />
        <Button type="submit" color="primary">
          Log In
        </Button>
      </form>

      <div className="lg:m-0 lg:w-64 flex flex-col gap-4 max-w-xs mx-auto border border-gray-200 p-6 rounded-xl">
        <h1 className="text-gray-700 text-xl font-semibold mb-2">
          Sign in with
        </h1>
        <Button
          onClick={handleSignIn('github')}
          variant="outlined"
          color="secondary"
        >
          GitHub
        </Button>
      </div>
    </main>
  );
};

export default LogIn;
