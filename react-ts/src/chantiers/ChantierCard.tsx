import styles from './chantier.module.css'
import {useEffect, useRef} from "react";
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
    const chantierRef = useRef<Chantier | null>(null);
    const adressChantierRef = useRef("");

    // Fetch info of a chantier based on the Google document ID of the chantier.
    // The setup code will run only once when the component is mounted. It will also run when the dependencies change
    // But not necessarily on each re-render of the component. That's why we store the fetch result in ref: in case the component
    // re-render, useEffect setup code won't run again, and we lost the fetch result if we only store it in a variable.
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://firestore.googleapis.com/v1/projects/pfa-groupe8/databases/(default)/documents/chantieres/musee-du-louvre", requestOptions)
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
                chantierRef.current = {...objResult};
                if (chantierRef.current != null) {
                    adressChantierRef.current = `${chantierRef.current.numVoie} ${chantierRef.current.nameVoie}, ${chantierRef.current.postalCode} ${chantierRef.current.chantierCountry }`
                }

                console.log(chantierRef.current);
            })
            .catch((error) => console.error(error));
    });

    return <>
        <div className={styles.card}>
            <div className={styles.firstCardSection}>
                <div className={styles.titleAddressSection}>
                    <div className={styles.titleSection}>{chantierRef.current != null ? chantierRef.current.chantierName : "Vide"}</div>
                    <div className={styles.addressSection}>Adresse: {adressChantierRef.current != null ? adressChantierRef.current : "Vide"}</div>
                </div>
                <div>
                    <img src={InfoLogo} alt={"logo-info"} />
                </div>
            </div>
            <div className={styles.secondCardSection}>
            <div className={styles.date}>Date de début: {chantierRef.current != null ? chantierRef.current.dateDebut : "Vide"}</div>
            <div className={styles.date}>Date de fin: {chantierRef.current != null ? chantierRef.current.dateFin : "Vide"}</div>
            </div>
            <div className={styles.thirdCardSection}>
                <Button variant="contained">{chantierRef.current != null ? chantierRef.current.chantierStatus : "Statut unknown"}</Button>
            </div>
        </div>
    </>
}