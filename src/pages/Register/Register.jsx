function Register() {
  return (
    <div className="container py-5">
      <h1>Register</h1>

      <form className="mt-4">
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Full Name"
        />

        <input
          className="form-control mb-3"
          type="email"
          placeholder="Email"
        />

        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
        />

        <button className="btn btn-primary">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Register;