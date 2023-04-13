import React from 'react'

function Child({chanel}) {
    console.log("child rrenderd");
  return (
    <div>{chanel}</div>
  )
}

export default Child
//change child to child memo 
export const Childmemo =React.memo(Child)