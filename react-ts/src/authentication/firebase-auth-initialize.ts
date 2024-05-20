import { app } from "./firebase-app-initialize.ts"
import {getAuth} from "firebase/auth";

const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth }
