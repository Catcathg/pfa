import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputAdornment, MenuItem,
    OutlinedInput,
    Radio,
    RadioGroup, TextField
} from '@mui/material';
import styles from './chantier.module.css'
import {ChangeEvent, useState} from "react";
import ArticleIcon from '@mui/icons-material/Article';
import Logo1 from '../assets/logo1.png'
import {blue} from '@mui/material/colors';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

export default function AddNewChantier() {
    const [conditionsAccepted, setConditionsAccepted] = useState(false);
    const [continued, setContinued] = useState(false);
    const [inputs, setInputs] = useState({});
    const [addDossier, setAddDossier] = useState('Oui');
    const typesBat = [
        {
            value: 'Entrepôt',
            label: 'Entrepôt',
        },
        {
            value: 'Logements',
            label: 'Logements',
        },
        {
            value: 'Bureaux et Adminstration',
            label: 'Bureaux et Adminstration',
        },
        {
            value: 'Hôtel',
            label: 'Hôtel',
        },
        {
            value: 'Commerce',
            label: 'Commerce',
        },
        {
            value: 'Bâtiement industriel',
            label: 'Bâtiement industriel',
        },
        {
            value: 'Enseignement',
            label: 'Enseignement',
        },
        {
            value: 'Culturel',
            label: 'Culturel',
        },
        {
            value: 'Complexe sportif',
            label: 'Complexe sportif',
        },
        {
            value: 'Secteur santé',
            label: 'Secteur santé',
        },
        {
            value: 'Autre',
            label: 'Autre',
        },
    ];

    const handleChangeAddDossier = (event: ChangeEvent<HTMLInputElement>) => {
        setAddDossier((event.target as HTMLInputElement).value);
    };

    function handleAcceptChecked(event) {
        setConditionsAccepted(event.target.checked);
    }

    function handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({...inputs, [name]: value});
    }


    return <div className={styles.mainAddNewChantier}>

        <div className={styles.titleNewChantier}>
            <div className={styles.titleNewChantier1}>Nouveau chantier</div>
            <div className={styles.titleNewChantier2}>
                Merci de remplir les informations ci dessous
            </div>
        </div>
        <div className={styles.formulaireNewChantier}>
                <FormControl variant={"standard"} fullWidth={true}>
                    <label htmlFor="chantierName">Nom du chantier</label>
                    <OutlinedInput
                        id="chantierName"
                        startAdornment={<InputAdornment position="start" className={styles.parentIcons}>
                            <img src={Logo1} alt={"Logo1"} className={styles.icon1}/>
                            <ArticleIcon className={styles.icon2} sx={{color: blue[50]}}/>
                        </InputAdornment>}
                        label="chantierName"
                    />
                </FormControl>
                <FormControl variant={"standard"} fullWidth={true}>
                    <label htmlFor="typeBatiment">Type de bâtiment</label>
                    <TextField
                        id="outlined-select-currency"
                        select
                        defaultValue="Entrepôt"
                        InputProps={{
                            startAdornment: <InputAdornment position="start" className={styles.parentIcons}>
                                <img src={Logo1} alt={"Logo1"} className={styles.icon1}/>
                                <ApartmentOutlinedIcon className={styles.icon2} sx={{color: blue[50]}}/>
                            </InputAdornment>,
                        }}
                    >
                        {typesBat.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
                <FormControl variant={"standard"} fullWidth={true}>
                    <label htmlFor="chantierSuperificie">Nombre de m2</label>
                    <OutlinedInput
                        id="chantierSuperificie"
                        startAdornment={<InputAdornment position="start" className={styles.parentIcons}>
                            <img src={Logo1} alt={"Logo1"} className={styles.icon1}/>
                            <AspectRatioOutlinedIcon className={styles.icon2} sx={{color: blue[50]}}/>
                        </InputAdornment>}
                        label="chantierSuperificie"
                    />
                </FormControl>
                <FormControl variant={"standard"} fullWidth={true}>
                    <label htmlFor="numVoie">Numéro et nom de voie</label>
                    <OutlinedInput
                        id="numVoie"
                        startAdornment={<InputAdornment position="start" className={styles.parentIcons}>
                            <img src={Logo1} alt={"Logo1"} className={styles.icon1}/>
                            <MapsHomeWorkOutlinedIcon className={styles.icon2} sx={{color: blue[50]}}/>
                        </InputAdornment>}
                        label="numVoie"
                    />
                </FormControl>
                    <FormControl variant={"standard"} fullWidth={true}>
                    <label htmlFor="nameVoie">Code postal</label>
                    <OutlinedInput
                        id="nameVoie"
                        startAdornment={<InputAdornment position="start" className={styles.parentIcons}>
                            <img src={Logo1} alt={"Logo1"} className={styles.icon1}/>
                            <MapsHomeWorkOutlinedIcon className={styles.icon2} sx={{color: blue[50]}}/>
                        </InputAdornment>}
                        label="nameVoie"
                    />
                    </FormControl>
                <FormControl variant={"standard"} fullWidth={true}>
                    <label htmlFor="chantierCity">Ville</label>
                    <OutlinedInput
                        id="nameVoie"
                        startAdornment={<InputAdornment position="start" className={styles.parentIcons}>
                            <img src={Logo1} alt={"Logo1"} className={styles.icon1}/>
                            <LocationCityOutlinedIcon className={styles.icon2} sx={{color: blue[50]}}/>
                        </InputAdornment>}
                        label="nameVoie"
                    />
                </FormControl>
                <FormControl variant={"standard"} fullWidth={true}>
                    <label htmlFor="chantierCountry">Pays</label>
                    <OutlinedInput
                        id="nameVoie"
                        startAdornment={<InputAdornment position="start" className={styles.parentIcons}>
                            <img src={Logo1} alt={"Logo1"} className={styles.icon1}/>
                            <LanguageOutlinedIcon className={styles.icon2} sx={{color: blue[50]}}/>
                        </InputAdornment>}
                        label="nameVoie"
                    />
                </FormControl>
                <FormControl variant={"standard"} fullWidth={true}>
                    {/*Ajouter un fichier Oui Non*/}
                    <FormLabel id="demo-controlled-radio-buttons-group">Ajouter un fichier au dossier (diagnostic PEMD,
                        plan d’architecte, etc)</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={addDossier}
                        onChange={handleChangeAddDossier}
                    >
                        <FormControlLabel value="Oui" control={<Radio/>} label="Oui"/>
                        <FormControlLabel value="Non" control={<Radio/>} label="Non"/>
                    </RadioGroup>
                </FormControl>
        </div>
        <div className={styles.buttonAddNewChantier}>
            <Button variant="contained">Valider</Button>
        </div>
    </div>
}