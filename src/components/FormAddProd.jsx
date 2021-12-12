import React from 'react'

const FormAddProd = ({ onSubmit, productName, imgRef, price, images, description, setProductName, setPrice, setImages, setDescription }) => {
  return (
    <div>
      <div className="p-12 mx-8">
        <form onSubmit={onSubmit} className="space-y-8">
          <div>
            <label className="text-gray-500 font-bold text-lg">Product Name :
              <div className="h-16 border-2 border-gray-400 rounded-lg mt-3">
                <input defaultValue={productName} onChange={setProductName} type="text" className="w-44 bg-white-300 text-gray-900 focus:outline-none font-bold text-sm mt-5 ml-4" placeholder="product name" />
              </div>
            </label>
          </div>
          <div>
            <label className="text-gray-500 font-bold text-lg">Price :
              <div className="h-16 border-2 border-gray-400 rounded-lg mt-3">
                <input defaultValue={price} onChange={setPrice} type="text" className="w-44 bg-white-300 text-gray-900 focus:outline-none font-bold text-sm mt-5 ml-4" placeholder="price" />
              </div>
            </label>
          </div>
          <div>
            <label className="text-gray-500 font-bold text-lg">Add Images :
              <div className="h-16 border-2 border-gray-400 rounded-lg mt-3">
                <input ref={imgRef} defaultValue={images} onChange={setImages} type="file" className="w-44 bg-white-300 text-gray-900 focus:outline-none font-bold text-sm mt-5 ml-4" placeholder="images" />
              </div>
            </label>
          </div>
          <div>
            <label className="text-gray-500 font-bold text-lg">Description :
              <div className="">
                <textarea defaultValue={description} onChange={setDescription} className="h-16 p-3 border-2 rounded-lg mt-3 w-full bg-white-300 border-2 border-gray-400 text-gray-900 focus:outline-none font-bold text-sm mt-5" placeholder="description" />
              </div>
            </label>
          </div>
          <div>
            <button className="focus:outline-none text-white font-bold text-lg bg-indigo-300 py-4 rounded-lg w-full" type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormAddProd