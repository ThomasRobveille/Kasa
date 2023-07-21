import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Card.css';

export default function Card(props){
  const navigate = useNavigate();

  function goDetail(item) {
    navigate(`/detail/${item}`);
  }
  return (
    <div className='card' onClick={() => goDetail(props.data.id)}>
      <p>{props.data.title}</p>
    </div>
  )
}