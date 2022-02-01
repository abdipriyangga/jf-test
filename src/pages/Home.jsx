import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authLogout } from '../redux/actions/auth'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import Swal from "sweetalert2";
const Home = (props) => {
  let navigate = useNavigate();
  const onLogout = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to logout!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#b8a503',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Logout!',
          'Your session has been expired.',
          'success'
        )
        props.authLogout();
        navigate("/login");
      }
    })

  };
  return (
    <div>
      <header className="px-32 sticky top-0 bg-white shadow-lg">
        <Navbar
          home="text-yellow-900 font-bold"
          product="text-gray-500"
          cart="text-gray-500"
          history="text-gray-500"
        />
      </header>
      <h1 className='font-bold text-xl underline p-10'>Ini Home</h1>
      <button onClick={onLogout} className="focus:outline-none mt-10 text-white font-bold text-lg bg-indigo-500 px-28 py-4 rounded-lg lg:ml-9">Logout</button>
    </div>
  )
}
const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDisPatchToProps = { authLogout }
export default connect(mapStateToProps, mapDisPatchToProps)(Home)
