import React from 'react'

function Card({username}) {
    console.log(username);
  return (
    
     <div className="flex flex-col rounded-xl  p-4"
     style={{
       border: '0.88px solid',

       backdropFilter: 'saturate(180%) blur(14px)',
       background: ' #ffffff0d',
     }}
   >
     <div>
       <img
         src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         alt="nft-gif"
         width="400"
         height="400"
         className="rounded-xl"
       />
     </div>
     <div className="flex flex-col  rounded-b-xl py-4 ">
       <div className="flex justify-between">
         <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
         <h1 className="font-bold font-RubikBold">Price</h1>
       </div>
       <div className="flex  justify-between font-mono">
         <p>#345</p>
         <p>0.01</p>
       </div>
     </div>
   </div>
  )
}

export default Card
