import React from 'react'
import Scan_explication from '../../src/assets/scan.png'
import { Link } from 'react-router-dom';

function Scan() {
  return (
    <div className="container">
      <Link to="/plan">
        <img src={Scan_explication} alt="scan" />
      </Link>
    </div>

  )
}

export default Scan