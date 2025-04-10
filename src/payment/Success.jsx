import React from 'react'
import { useSearchParams } from 'react-router-dom'



const Success = () => {
  const [searchParams]=useSearchParams()
  let val= searchParams.get("data")
  console.log(val)


  let info=atob(val)//decrypt garna
  console.log(info)

  info= JSON.parse(info)//js ma convert garna json lai
  console.log(info)
  return (
    <div className='pt-20'>
    <div className='space-y- shadow-2xl shadow-gray-700 w-96 m-auto mt-5 flex justify-center items-center flex-col p-6'>
      <img className='h-44' src="https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png" alt="" />

      <div>
        <h1>Status: <span className='underline  bg-blue-200'> {info?.status}</span> </h1>
        <h1>Total Amount: <span className='underline  bg-blue-200'> {info?.total_amount}</span></h1>
        <h1>Transaction Code: <span className='underline  bg-blue-200'> {info?.transaction_code}</span></h1>
      </div>
    </div>
    </div>
  )
}

export default Success
