import React from 'react'
import './Etage.css'

function Etage() {
    return (
        <>
            <p className="etage_categorie">Etages</p>
            <div className="info_etage">
                <p>Vous n’avez pas encore</p>
                <div className="info_etage2">
                    <p>ajouté de plan.</p>
                </div>
            </div>
            <div className="button_etage">
                <p>Ajouter un étage</p>
            </div>
        </>
    )
}

export default Etage