import { firebase } from "./firebase.config";
import { getFirestore } from 'firebase/firestore'

export const firestore = getFirestore(firebase)

