/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import { DefaultUser } from '../assets';
import { Link, useNavigate } from 'react-router-dom';

const CardListProduct = ({ onClick, toEdit, toDelete, name, price, desc, stock, img }) => {
  return (
    <div className="shadow-xl rounded-md bg-white w-full h-60 flex flex-col justify-center py-5">
      <div className="flex flex-col ml-20 lg:flex-row space-x-5 divide-x-4 divide-gray-900">
        {/* <div className="flex flex-col mx-10">
          <img
            className="w-36 h-36 rounded-md object-cover"
            src={img ? img : DefaultUser}
            alt="food"
          />
        </div> */}
        <div className="flex flex-col px-10">
          <h4 className="text-center font-bold w-48 flex  text-xl leading-tight">
            {name}
          </h4>
          <h4 className="text-center font-bold w-32 flex mt-3 text-md leading-tight">
            IDR {price}
          </h4>
          <h5 className="text-gray-600 font-normal text-sm w-100 text-justify mt-4"> {desc}</h5>
          <h5 className="text-gray-600 font-normal text-sm w-100 text-justify mt-4"> Stock Product: {stock}</h5>
          <div className="flex flex-row space-x-5">
            <Link to={toEdit} className="bg-red-700 hover:bg-red-900 text-white text-sm text-center w-40 mt-3 rounded-md font-semibold">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardListProduct;