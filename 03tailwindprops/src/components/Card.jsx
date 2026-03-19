import React from "react"

function Card ({username ="no Username", hashText}) {  
  return (
    <>
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
      <img className="w-full h-40 object-cover object-[center_70%] rounded-2xl " src="https://images.unsplash.com/photo-1674912613187-f6204de32ada?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjR8fHxlbnwwfHx8fHw%3D" alt="Sunset in the mountains"/>
      <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{username}</div>
      <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hashText[0]}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hashText[1]}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hashText[2] || "noText"}</span>
    </div>
</div>
    </>
  )
}

export default Card