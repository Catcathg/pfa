import React from 'react'
import Plaque_explication from '../../src/assets/plaque.png'
import { Link } from 'react-router-dom';

function Plaque() {
  return (
    <div className="container">
      <Link to="/isolant">
        <img src={Plaque_explication} alt="plaque" />
      </Link>
    </div>
  )
}

export default Plaque