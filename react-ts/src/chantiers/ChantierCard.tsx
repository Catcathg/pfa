import styles from './chantier.module.css'
import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import InfoLogo from "../assets/info-logo-i.png"

export default function ChantierCard() {
    // Type of the final object that holds information about a chantier
    interface Chantier {
        "numVoie": string,
        "dateFin": string,
        "chantierID": string,
        "chantierCountry": string,
        "chantierStatus": string,
        "chantierName": string,
        "postalCode": string,
        "nameVoie": string,
        "dateDebut": string
    }

    // A Chantier instance is saved in a ref because it doesn't change on page re-render
    const [chantier, setChantier] = useState<Chantier | null>(null);
    const [adressChantier, setAdressChantier] = useState("");

    // Fetch info of a chantier based on the Google document ID of the chantier.
    // The setup code will run only once when the component is mounted. It will also run when the dependencies change
    // But not necessarily on each re-render of the component. That's why we store the fetch result in ref: in case the component
    // re-render, useEffect setup code won't run again, and we lost the fetch result if we only store it in a variable.
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://firestore.googleapis.com/v1/projects/pfa-groupe8/databases/(default)/documents/chantiers/musee-du-louvre", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                const objResult = new Proxy(
                    result["fields"],
                    {
                        get(obj, prop) {
                            const value = obj[prop];
                            if (value && typeof value === 'object' && 'stringValue' in value) {
                                return value["stringValue"];
                            } else if (value && typeof value === 'object' && 'integerValue' in value) {
                                return value['integerValue'];
                            }
                            return value;
                        },
                    },
                );

                const resultChantier = {...objResult}
                setChantier(resultChantier);
                setAdressChantier(`${resultChantier.numVoie} ${resultChantier.nameVoie}, ${resultChantier.postalCode} ${resultChantier.chantierCountry}`);


            })
            .catch((error) => console.error(error));
    }, []);

    return <>
        <div className={styles.card}>
            <div className={styles.firstCardSection}>
                <div className={styles.titleAddressSection}>
                    <div className={styles.titleSection}>{chantier != null ? chantier.chantierName : "Vide"}</div>
                    <div
                        className={styles.addressSection}>Adresse: {adressChantier != null ? adressChantier : "Vide"}</div>
                </div>
                <div>
                    <img src={InfoLogo} alt={"logo-info"}/>
                </div>
            </div>
            <div className={styles.secondCardSection}>
                <div className={styles.date}>Date de début de diagnostic: {chantier != null ? chantier.dateDebut : "Vide"}</div>
                <div className={styles.date}>Date de l'offre: {chantier != null ? chantier.dateFin : "Vide"}</div>
                {/*<div className={styles.date}>Date de fin de démontage: {chantier != null ? chantier.dateFin : "Vide"}</div>*/}
            </div>
            <div className={styles.thirdCardSection}>
                <Button variant="contained"
                        color="success">{chantier != null ? chantier.chantierStatus : "Statut unknown"}</Button>
            </div>
        </div>
    </>
}