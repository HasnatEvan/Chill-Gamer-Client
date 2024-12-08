import { Link, useNavigate } from 'react-router-dom';
import signup from '../../src/assets/signup.jpg';
import 'animate.css';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser={name,photo,email,password}
    console.log(newUser)

    signUp(email, password)
      .then(result => {
        const user = result.user;

        // Update user profile
        updateUserProfile(user, { displayName: name, photoURL: photo })
          .then(() => {
            console.log('User profile updated successfully');
            form.reset();

            // Show success alert
            Swal.fire({
              icon: 'success',
              title: 'Account Created Successfully!',
              text: 'Welcome to Chill Gamer!',
              confirmButtonText: 'Done',
            }).then(() => {
              navigate('/'); // Redirect to homepage
            });
          })
          .catch(error => {
            console.error('Error updating profile:', error.message);
            Swal.fire({
              icon: 'error',
              title: 'Profile Update Failed',
              text: error.message,
              confirmButtonText: 'Try Again',
            });
          });
      })
      .catch(error => {
        console.error('Sign Up Error:', error.message);

        // Show error alert
        Swal.fire({
          icon: 'error',
          title: 'Sign Up Failed',
          text: error.message,
          confirmButtonText: 'Try Again',
        });
      });
  };

  return (
    <div
      className="hero min-h-screen bg-base-200 animate__animated animate__fadeIn"
      style={{
        backgroundImage: `url(${signup})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-opacity-70 bg-black"></div>
      <div className="hero-content flex-col lg:flex-row-reverse text-white">
        {/* Text Section */}
        <div className="text-center lg:text-left animate__animated animate__fadeIn animate__delay-1s">
          <h1 className="text-5xl font-bold text-primary">Create Your Account</h1>
          <p className="py-6">
            Join <span className="font-bold text-primary">Chill Gamer</span> today! 
            Unlock exclusive gaming reviews, track your favorite games, 
            and connect with a passionate gaming community.
          </p>
        </div>

        {/* Form Section */}
        <div className="card bg-blue-900 bg-opacity-80 w-full max-w-sm shrink-0 shadow-2xl p-6 rounded-xl animate__animated animate__bounceInUp animate__delay-2s">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered bg-gray-200 text-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* Photo URL Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">Photo URL</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Enter a photo URL"
                className="input input-bordered bg-gray-200 text-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered bg-gray-200 text-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered text-black bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* Sign Up Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary text-white hover:bg-primary-focus">
                Sign Up
              </button>
            </div>
          </form>

          {/* Redirect to Login */}
          <p className="text-center mt-4 text-sm text-gray-400">
            Already have an account?{" "}
            <Link to={'/login'} className="link link-primary">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
