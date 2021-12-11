/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toggleAuth, authRegister } from "../redux/actions/auth";
import { connect } from "react-redux";

const Register = (props) => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male")
  const { isRegister } = props.auth;
  // const { token } = props.auth;
  useEffect(() => {
    props.toggleAuth();
    console.log("is register", isRegister);

  }, []);
  const onRegister = (e) => {
    e.preventDefault();
    props.authRegister(name, email, password, gender);
    if (!isRegister) {
      navigate("/login");
      // console.log("is register", isRegister);
    }
  };
  return (
    <main>
      <div className="flex flex-row">
        <div className="bg-indigo-700 w-99 h-105"></div>
        <div>
          <div className="flex flex-row space-x-5 ml-82 p-10">
            <span className="mt-3">Already a member?</span>
            <div className="bg-indigo-300 p-10 py-3 rounded-full font-bold text-white shadow-lg">
              <Link to="/login">
                Login
              </Link>
            </div>
          </div>
          <div>
            <p className="text-black font-bold text-xl text-center">Register</p>
          </div>
          <div className="p-12 mx-8">
            <form onSubmit={onRegister} className="space-y-8">
              <div>
                <label className="text-gray-500 font-bold text-lg">Name :
                  <div className="h-16 border-2 border-gray-400 rounded-lg mt-3">
                    <input onChange={(e) => setName(e.target.value)} type="text" className="w-44 bg-white-300 text-gray-900 focus:outline-none font-bold text-sm mt-5 ml-4" placeholder="your name" />
                  </div>
                </label>
              </div>
              <div>
                <label className="text-gray-500 font-bold text-lg">Email Address :
                  <div className="h-16 border-2 border-gray-400 rounded-lg mt-3">
                    <input onChange={(e) => setEmail(e.target.value)} type="text" className="w-44 bg-white-300 text-gray-900 focus:outline-none font-bold text-sm mt-5 ml-4" placeholder="your email" />
                  </div>
                </label>
              </div>
              <div>
                <label className="text-gray-500 font-bold text-lg">Password :
                  <div className="h-16 border-2 border-gray-400 rounded-lg mt-3">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="w-44 bg-white-300 text-gray-900 focus:outline-none font-bold text-sm mt-5 ml-4" placeholder="password" />
                  </div>
                </label>
              </div>
              <div className="mt-6">
                <label className="text-gray-500 font-bold text-lg mr-4">Jenis Kelamin:</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} className="h-10 w-32 border-2 border-gray-400 rounded-lg mt-3">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <button className="focus:outline-none text-white font-bold text-lg bg-indigo-300 py-4 rounded-lg w-full" type="submit">Register</button>
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
const mapDispatchToProps = { toggleAuth, authRegister };

export default connect(mapStateToProps, mapDispatchToProps)(Register);
