import styles from './chantier.module.css'
import ChantierCard from "./ChantierCard.tsx";
import AddButton from "../assets/add-button.png"
import {Link} from "react-router-dom";
export default function ChantierList() {
    return <>
        <div className={styles.main}>
            <div>
                <div className={styles.bienvenue}>
                    Bienvenue
                </div>
                <div className={styles.searchBar}>
                    <input type="search" placeholder="     Recherche" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                        <path d="M23.6833 25.375L16.0708 17.7625C15.4667 18.2458 14.7719 18.6285 13.9865 18.9104C13.201 19.1924 12.3653 19.3333 11.4792 19.3333C9.28403 19.3333 7.42642 18.5729 5.90633 17.052C4.38625 15.5311 3.62581 13.6735 3.625 11.4792C3.625 9.28403 4.38544 7.42642 5.90633 5.90633C7.42722 4.38625 9.28483 3.62581 11.4792 3.625C13.6743 3.625 15.5319 4.38544 17.052 5.90633C18.5721 7.42722 19.3325 9.28483 19.3333 11.4792C19.3333 12.3653 19.1924 13.201 18.9104 13.9865C18.6285 14.7719 18.2458 15.4667 17.7625 16.0708L25.375 23.6833L23.6833 25.375ZM11.4792 16.9167C12.9896 16.9167 14.2736 16.3878 15.3313 15.3301C16.389 14.2724 16.9175 12.9888 16.9167 11.4792C16.9167 9.96875 16.3878 8.68469 15.3301 7.627C14.2724 6.56931 12.9888 6.04086 11.4792 6.04167C9.96875 6.04167 8.68469 6.57051 7.627 7.62821C6.56931 8.6859 6.04086 9.96956 6.04167 11.4792C6.04167 12.9896 6.57051 14.2736 7.62821 15.3313C8.6859 16.389 9.96956 16.9175 11.4792 16.9167Z"
                              fill="lightgray"/>
                    </svg>
                </div>
            </div>
            <div className={styles.chantierList}>
                <div className={styles.chantierCard}>
                    <ChantierCard />
                </div>
                <div className={styles.chantierCard}>
                    <ChantierCard />
                </div>
                <div className={styles.chantierCard}>
                    <ChantierCard />
                </div>
            </div>
            <div className={styles.moreOrAdd}>
                <Link to={"/nouveau-chantier"}>
                    <img src={AddButton} alt={"add-button"} />
                </Link>
            </div>
        </div>
    </>
}