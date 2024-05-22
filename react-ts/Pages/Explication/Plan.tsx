import React from 'react'
import Plan_explication from "../../src/assets/plan.png"
import { Link } from 'react-router-dom';

function Plan() {
  return (
    <div className="container">
      <Link to="/plaque">
        <img src={Plan_explication} alt="plan" />
      </Link>
    </div>
  )
}

export default Plan