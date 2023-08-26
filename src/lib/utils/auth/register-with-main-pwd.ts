import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase";
import { goto } from "$app/navigation";

export const register = (email: string, password: string): boolean | void => {
		createUserWithEmailAndPassword(firebaseAuth, email, password)
			.then(() => {
				goto('/login');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);

				return false;
			});
	};