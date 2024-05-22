import React from 'react'
import './Recap.css'
import Map from '../Components/Map'

function Recap() {
    return (
        <> <div className="container_recap">
            <div className="info">
                <p className="name">Campus Didot</p>
                <p>Établissement Scolaire</p>
                <p>278 m2</p>
            </div>
            <div className="date">
                <p>Date de début : 12/03/2024</p>
                <p>Date de fin : 29/01/2026</p>
            </div>
            <div className="eclipse"></div>
        </div>
            <div className="address">Adresse : 96 Rue Didot, 75014 Paris</div>
            <div className="map"><Map /></div>
            <div className="button">
                <p className="button_info">Ajouter à ma liste</p>
                <a href="#"></a>
            </div>
        </>
    )
}

export default Recap