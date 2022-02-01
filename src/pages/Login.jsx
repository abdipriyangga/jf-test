/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toggleAuth, authLogin } from "../redux/actions/auth";
import { connect } from "react-redux";

const Login = (props) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token } = props.auth;
  console.log("TOKEN: ", token);
  const isLogin = () => {
    if (token !== null) {
      navigate("/");
    }
  };
  const onLogin = (e) => {
    e.preventDefault();
    props.authLogin(email, password);
  };

  useEffect(() => {
    props.toggleAuth();
    isLogin();
  }, [token]);
  return (
    <main>
      <div className="flex flex-row">
        <div className="mx-60">
          <div className="flex flex-row space-x-5 ml-82 p-10">
            <span className="mt-3">Dont have account?</span>
            <div className="bg-yellow-600 p-10 py-3 rounded-full font-bold text-white shadow-lg">
              <Link to="/register">
                Register
              </Link>
            </div>
          </div>
          <div>
            <p className="text-black font-bold text-2xl text-center">JF Login</p>
          </div>
          <div className="p-12 mx-8">
            <form onSubmit={onLogin} className="space-y-8">
              <div>
                <label className="text-gray-500 font-bold text-lg">Email Address :
                  <div className="h-16 border-2 border-gray-400 rounded-lg mt-3">
                    <input onChange={(e) => setEmail(e.target.value)} type="text" className="w-56 bg-white-300 text-gray-900 focus:outline-none font-bold text-sm mt-5 ml-4" placeholder="your email" />
                  </div>
                </label>
              </div>
              <div>
                <label className="text-gray-500 font-bold text-lg">Password :
                  <div className="h-16 border-2 border-gray-400 rounded-lg mt-3">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="w-56 bg-white-300 text-gray-900 focus:outline-none font-bold text-sm mt-5 ml-4" placeholder="password" />
                  </div>
                </label>
              </div>
              <div>
                <button className="focus:outline-none text-white font-bold text-lg bg-yellow-600 py-4 rounded-lg w-full" type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
const mapStateToProps = (state) => ({
  auth: state.auth
});
const mapDispatchToProps = { toggleAuth, authLogin };
export default connect(mapStateToProps, mapDispatchToProps)(Login)