import { Link, useNavigate } from 'react-router-dom';
import login from '../../src/assets/signup.jpg';
import { FcGoogle } from "react-icons/fc";
import 'animate.css'; 
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const { logIn, signInWithGoogle } = useContext(AuthContext);

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    

    logIn(email, password)
      .then(result => {
        console.log(result.user);
        event.target.reset();

        // Show success alert
        Swal.fire({
          icon: 'success',
          title: 'Logged in successfully!',
          text: 'Welcome back to Chill Gamer!',
          confirmButtonText: 'Okay',
        }).then(() => {
          navigate('/');
        });
      })
      .catch(error => {
        console.error('ERROR', error.message);

        // Show error alert
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message,
          confirmButtonText: 'Try Again',
        });
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user);
        Swal.fire({
          icon: 'success',
          title: 'Google Login Successful!',
          text: 'Welcome back to Chill Gamer!',
          confirmButtonText: 'Okay',
        }).then(() => {
          navigate('/');
        });
      })
      .catch(error => {
        console.error(error.message);
        Swal.fire({
          icon: 'error',
          title: 'Google Login Failed',
          text: error.message,
          confirmButtonText: 'Try Again',
        });
      });
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${login})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay bg-opacity-70 bg-black"></div>
      <div className="hero-content flex-col lg:flex-row text-white">
        {/* Text Section */}
        <div className="text-center lg:text-left animate__animated animate__fadeIn animate__delay-1s">
          <h1 className="text-5xl font-bold text-primary">Login to Your Account</h1>
          <p className="py-6">
            Access your personalized dashboard, connect with the gaming community, 
            and enjoy exclusive features on <span className="font-bold text-primary">Chill Gamer</span>.
          </p>
        </div>

        {/* Form Section */}
        <div className="card bg-white bg-opacity-90 w-full max-w-sm shadow-2xl p-6 text-gray-800 animate__animated animate__slideInUp animate__delay-2s">
          <form onSubmit={handleLogIn} className="space-y-4">
            {/* Form Title */}
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              Log In Now
            </h2>

            {/* Email Field */}
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text text-gray-700">Email</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text text-gray-700">Password</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
            </div>

            {/* Login Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary text-white hover:bg-primary-focus animate__animated animate__bounce animate__delay-3s"
                aria-label="Login">
                Login
              </button>
            </div>
          </form>

          {/* Google Login Button */}
          <div className="mt-6">
            <button onClick={handleGoogle} className="btn btn-outline btn-secondary flex items-center justify-center w-full animate__animated animate__fadeIn animate__delay-4s">
              <FcGoogle className="text-2xl mr-2" />
              Login with Google
            </button>
          </div>

          {/* Redirect to Sign Up */}
          <p className="text-center mt-4 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to={'/signIn'} className="link link-primary">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
