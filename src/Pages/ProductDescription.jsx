import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../Context/CartProvider";

function ProductDescription() {
  const { id } = useParams();

  const [count, setCount] = useState(1);

  const Navigate = useNavigate()

  const {state,dispatch}=useContext(CartContext)
  console.log(state);



  const [product, setProduct] = useState({ ingredients: [], instructions: [] });

  const getProduct = async () => {
    let response = await fetch(`https://dummyjson.com/recipes/${id}`);
    response = await response.json();
    console.log(response);
    setProduct(response);
  };

  useEffect(() => {
    getProduct();
  }, []);


  let totalPrice=product?.caloriesPerServing*count
  return (
    <div>
      <div className="pt-16">
        <div>
          <div className="flex shadow-xl ml-32 gap-x-2 ">
            <div className="">
              <img className="h-80" src={product?.image} alt="image" />
            </div>
            <div className="space-y-3 py-3 w-[500px]">
              <div>
                <h1 className="text-3xl">{product?.name}</h1>
              </div>
              <div>
                <p className="text-orange-500">Rating {product?.rating}</p>
              </div>
              <div>
                <p className="text-3xl text-amber-600">
                  Rs.{product?.caloriesPerServing}
                </p>
              </div>

              <div>
                <div className="flex">
                  <p className="text-gray-500 ">Quantity</p>

                  <div className="ml-7">
                    <button
                      onClick={() => {
                        if(count>1){

                          setCount(count - 1);
                        }
                      }}
                      className="bg-gray-300 h-7 w-7 hover:text-white"
                    >
                      -
                    </button>
                    <span className="inline-block h-7 w-7 text-center ">
                      {count}
                    </span>
                    <button
                      onClick={() => {
                        setCount(count + 1);
                      }}
                      className="bg-gray-300 h-7 w-7 hover:text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <button 
                onClick={()=>{
                  Navigate('/payment',{
                    state:{
                      totalPrice:totalPrice,
                    }
                  })
                }}
                className="bg-blue-500 text-white p-3 w-52">
                  Buy Now
                </button>
                <button
               

                onClick={()=>{
                  dispatch({type:"AddToCart",payload:product})
                }}
                className="bg-red-500 text-white p-3 ml-2 w-52 ">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-5 p-8 ml-25 ">
            <div className="shadow">
              <h1 className="text-2xl font-bold ml-30 p-3">
                Product details of {product.name}
              </h1>
            </div>
            <div className="flex justify-around shadow-2xl ">
              <div className="">
                <h2 className="text-xl font-semibold mt-4 mb-4">
                  Ingredients:
                </h2>
                <ul className="list-disc pl-6 mb-5">
                  {product.ingredients?.map((item, index) => (
                    <li className=" text-[17px]" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h2 className="text-xl font-semibold mt-4 mb-4">
                  Instructions:
                </h2>
                <ul className="list-disc pl-6 mb-5">
                  {product.instructions?.map((item, index) => (
                    <li key={index} className="mb-2 text-[17px]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="shadow p-3">
                <h1 className="text-2xl font-bold ml-30">Specification</h1>
              </div>
              <div className="shadow-2xl p-3 text-[17px] font-semibold">
                <p className="ml-33">Cooking Time: {product.cookTimeMinutes}</p>
                <p className="ml-33">Difficulty level: {product.difficulty}</p>
                <p className="ml-33">
                  Meal Type: {product.mealType?.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;