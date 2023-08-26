import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase";
import { goto } from "$app/navigation";
import { authUser } from "$lib/stores/auth.store";

const errorMessages = [
    {
        type: 'auth/user-not-found',
        message:
            'This email is not registered. Please register first or try again with a different email.'
    },
    {
        type: 'auth/wrong-password',
        message: 'The password you entered is incorrect. Please try again.'
    }
];

let customError = {
    type: '',
    message: ''
};

export const login = (email: string, password: string) => {
		signInWithEmailAndPassword(firebaseAuth, email, password)
			.then((userCredential) => {
				authUser.set({
					uid: userCredential.user.uid,
					email: userCredential.user.email || ''
				});

				goto('/protected');
			})
			.catch((error) => {
				const errorCode = error.code;

				const errorMatch = errorMessages.find((error) => error.type === errorCode);

				if (errorMatch) {
					customError = errorMatch;
				} else {
					customError = {
						type: 'unknown',
						message: 'There was an error logging in. Please try again.'
					};
				}

				return [false, customError];
			});
	};