import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";

const Register = () => {
  const { userRegister, setUser } = useContext(AuthContext);
  // form submit
  const handleRegister = (event) => {
    // page not to be refresh
    event.preventDefault();

    // value collect in input filed
    const name = event.target.email.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    userRegister(email, password)
      .then((result) => {
        const loggedUser = result.user;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account created successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error.message));
    // reset form
    event.target.reset();
  };

  return (
    <div className="hero min-h-[80vh] bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/* form */}
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
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
              <p>
                <small>
                  Already have an account? please
                  <Link
                    to="/login"
                    className=" ml-1 label-text-alt link link-info"
                  >
                    Login
                  </Link>
                </small>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
