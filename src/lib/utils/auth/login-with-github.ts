import { goto } from '$app/navigation';
import { authUser } from '$lib/stores/auth.store';
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';

export const loginWithGitHub = () => {
	const provider = new GithubAuthProvider();
	const auth = getAuth();

	signInWithPopup(auth, provider)
		.then((result) => {
			const userCredential = GithubAuthProvider.credentialFromResult(result);
			if (userCredential === null) return;

			authUser.set({
				uid: result.user.uid,
				email: result.user.email || ''
			});

			goto('/protected');
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.customData.email;
			// The AuthCredential type that was used.
			const credential = GithubAuthProvider.credentialFromError(error);
			console.log(errorCode, errorMessage, email, credential);
		});
};
