import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const navigate = useNavigate()

  const {signInUser, signInGoogle} = useContext(AuthContext)

    const handleLogin=(e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        e.target.reset(); // clean the input
        navigate('/');

        signInUser(email,password)
        .then(result => {
          console.log(result.user)
        })
        .catch(error => {
          console.log('ERROR', error)
        })
    }

    const handleGoogle = ()=> {
      signInGoogle()
      .then(result => {
        console.log(result.user)
        navigate('/')
      })
      .catch(error => {
        console.log(error.message)
      })
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      <p>new here? please <Link to={'/register'} className='text-blue-500'>Register</Link> first</p>
      </form>
      <a onClick={handleGoogle} className='btn'>Google</a>
    </div>
  </div>
</div>
  )
}

export default Login