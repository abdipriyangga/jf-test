/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DefaultUser, Message, ProfileNav } from "../assets";
import { getUserDetail } from "../redux/actions/users";

function Navbar({ home, product, cart, history, auth, users, img }) {
  const dispatch = useDispatch();
  const user = users.users;
  useEffect(() => {
    getUserDetail(auth.token);
  });
  console.log('====================================');
  console.log("USERS: ", users.users);
  console.log('====================================');
  return (
    <>
      <nav className="flex flex-row py-10 justify-between items-center">
        <Link to="/">
          <div className="flex space-x-2">
            <span className="text-lg font-bold">Knowledge Test</span>
          </div>
        </Link>
        <div>
          <ul className="flex space-x-7 text-md">
            <li>
              <Link className={home} to="/">Home</Link>
            </li>
            <li>
              <Link className={product} to="/addProduct">Add Product</Link>
            </li>
            <li>
              <Link className={cart} to="/products">My Product</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center space-x-5">
          {auth.token !== null ? (
            <>
              <div>
                <Link to="/chats">
                  <img src={Message} alt="Massege " />
                </Link>
              </div>
              <div >
                <Link to="/profile">
                  <img key={user.id} src={user.images === null || undefined ? DefaultUser : user.images} className="rounded-full w-12 h-12" alt="Profile Nav" />
                </Link>
              </div>

            </>
          ) : (
            <>
              <div>
                <Link className="font-medium" to="/login">
                  Login
                </Link>
              </div>
              <div>
                <Link className="bg-yellow-400 px-8 py-3 rounded-full font-medium text-yellow-900"
                  to="/signup">
                  SignUp
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users
});

const mapDispatchToProps = {
  getUserDetail
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);