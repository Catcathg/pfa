import React from 'react';
import Outils_explication from '../../src/assets/outils.png';
import { Link } from 'react-router-dom';

function Outils() {
  return (
    <div className="container">
      <Link to="/scan">
        <img src={Outils_explication} alt="outils" />
      </Link>
    </div>
  );
}

export default Outils;
