import React from 'react';
import "./Card.css";

function Card({data}) {
  return (
    <div className='card'>
        <h3>{data.title}</h3>
        <p>{data.content}</p>
    </div>
  )
}

function VisionCard({data}){
  return(
    <div className='vision-card'>
      <img src={data.logo} alt="Error in loading" />
      <h3>{data.title}</h3>
      <p>{data.content}</p>
    </div>
  )
}

export {VisionCard};
export default Card;