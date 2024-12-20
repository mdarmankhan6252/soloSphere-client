import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Link, NavLink } from "react-router-dom"


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  return (
    <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
      <div className='flex-1'>
        <div className='flex gap-2 items-center'>
          <img className='w-auto h-7' src='' alt='' />
          <Link to='/' className='font-bold'>SoloSphere</Link>
        </div>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 space-x-6'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          {user && <li>
            <NavLink to='/allJobs'>All Jobs</NavLink>
          </li>}

          {!user &&
            <>
              <li>
                <NavLink to='/login'>Login</NavLink>
              </li>
              <li>
                <NavLink to='/register'>Register</NavLink>
              </li></>
          }
        </ul>

        {user && <div className='dropdown dropdown-end z-50'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full' title=''>
              <img
                referrerPolicy='no-referrer'
                alt='User Profile Photo'
                src={user?.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <NavLink to='/addJob'>Add Job</NavLink>
            </li>
            <li>
              <NavLink to='/myPostedJobs'>My Posted Jobs</NavLink>
            </li>
            <li>
              <NavLink to='/myBids'>My Bids</NavLink>
            </li>
            <li>
            <NavLink to='/myBidsRequest'>My Bids Request</NavLink>
            </li>
            <li className='mt-2'>
              <button onClick={() => logOut()} className='bg-gray-200 block text-center'>Logout</button>
            </li>
          </ul>
        </div>}
      </div>
    </div>
  )
}

export default Navbar