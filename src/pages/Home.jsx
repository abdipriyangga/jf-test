import React from 'react'
import { Link } from 'react-router-dom'
import { authLogout } from '../redux/actions/auth'
import { connect } from 'react-redux'
const Home = (props) => {
  return (
    <div>
      <h1>Ini Home</h1>
      <Link to="register">
        Register
      </Link>
      <button onClick={props.authLogout} className="focus:outline-none mt-3 text-white font-bold text-lg bg-yellow-900 px-28 py-4 rounded-lg lg:ml-9">Logout</button>
    </div>
  )
}
const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDisPatchToProps = { authLogout }
export default connect(mapStateToProps, mapDisPatchToProps)(Home)
