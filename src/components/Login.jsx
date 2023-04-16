import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // form submit
  const handleLogin = (event) => {
    // page not to be refresh
    event.preventDefault();

    // value collect in input filed
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
    // reset form
    event.target.reset();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/* form */}
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-info">
                  Forgot password?
                </a>
              </label>
              <p>
                <small>
                  New in auth master? please{" "}
                  <Link
                    to="/register"
                    className=" ml-1 label-text-alt link link-info"
                  >
                    Register
                  </Link>
                </small>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
