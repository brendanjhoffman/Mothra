import Button from '../components/Button/Button';
import TextField from '../components/TextField/TextField';

const Register = () => {
  return (
    <form
      className="flex flex-col gap-4 max-w-xs mx-auto my-16 p-6 border border-gray-200 rounded-xl"
      onSubmit={console.log}
    >
      <h1 className="text-xl font-bold text-gray-700">Create an account</h1>

      <TextField
        required
        label="Name"
        placeholder="John Doe"
        helperText="Required"
      />
      <TextField
        required
        label="Email"
        placeholder="john@example.com"
        type="email"
        helperText="Valid email required"
      />
      <TextField
        required
        label="Password"
        placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
        type="password"
        helperText="8 characters at least, 1 number, 1 capital"
      />
      <TextField
        required
        label="Repeat password"
        placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
        type="password"
        helperText="Passwords mismatch"
      />
      <Button type="submit" color="primary">
        Sign Up
      </Button>
    </form>
  );
};

export default Register;
