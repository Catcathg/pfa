import App from "./App";
import SignIn from "./authentication/SignIn.tsx";
import ChantierList from "./chantiers/ChantierList.tsx";
import AddNewChantier from "./chantiers/AddNewChantier.tsx";
import Recap from '../Pages/Recap'
import Etage from '../Pages/Etage'
import Layout from '../Layout/Layout'
import Outils from '../Pages/Explication/Outils'
import Scan from '../Pages/Explication/Scan'
import Plan from '../Pages/Explication/Plan'
import Plaque from '../Pages/Explication/Plaque'
import Isolant from '../Pages/Explication/Isolant'


export default [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {path: "recap", element: <Recap/>},
            {path: "etage", element: <Etage/>},
            {path: "menu", element: <App/>},
            {path: "sign-in", element: <SignIn/>},
            {path: "home", element: <ChantierList/>},
            {path: "chantier", element: <AddNewChantier/>},
        ]
    },
    {path: "outils", element: <Outils/>},
    {path: "scan", element: <Scan/>},
    {path: "plan", element: <Plan/>},
    {path: "plaque", element: <Plaque/>},
    {path: "isolant", element: <Isolant/>},
];