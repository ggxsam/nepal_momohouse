import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Failure = () => {
  const [searchParams]=useSearchParams()
  let val= searchParams.get("data")
  console.log(val)


  let info=atob(val)
  console.log(info)

  info= JSON.parse(info)
  console.log(info)
  return (
    <div className='pt-20'>
    <div className='space-y- shadow-2xl shadow-gray-700 w-96 m-auto mt-5 flex justify-center items-center flex-col p-6'>
      <img className='h-44' src="https://cdn.printme.online/wp-content/uploads/2020/04/payment_fail_icon.png" alt="" />

      <div>
        <h1>Status: <span className='underline  bg-blue-200'> {info?.status}</span> </h1>
       
      </div>
    </div>
    </div>
  )
}

export default Failure
