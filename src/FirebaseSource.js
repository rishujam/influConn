import { db } from "./Firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

const saveUserData = async ({ email, userType }) => {
    try {
      await setDoc(doc(db, "users", email), {
        email: email,
        userType: userType,
        createdAt: Date.now() // This will store timestamp in milliseconds
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  export { saveUserData };