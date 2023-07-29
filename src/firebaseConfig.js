import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const npcDataCollection = collection(db, "npcData");

export const getDataFromField = async (documentId, fieldName) => {
	const docRef = doc(db, "npcData", documentId);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		const data = docSnap.data();
		return data[fieldName];
	} else {
		console.log("No such document!");
	}
};

// const addDataToField = async (documentId, fieldName, data) => {
// 	const docRef = doc(db, "npcData", documentId);
// 	await updateDoc(docRef, {
// 		[fieldName]: data,
// 	});
// };
