import React, { use, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()


  // const [data, setData] = useState({})
  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then((res) => res.json())
  //   .then((data) => setData(data));
  // }, [])

  return (
    <>
      <div className='text-center m-4 bg-gray-500 text-white text-3xl'>Github Followers: {data.followers}</div>
      <div className="flex justify-center ">
        <img src={data.avatar_url} alt="Avatar" width={300} />
      </div>
    </>
    
  )
}


export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  console.log("HI");
  
  return response.json()
}