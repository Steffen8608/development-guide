import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../firebase';
import { goto } from '$app/navigation';
import { authUser } from '$lib/stores/auth.store';

export const handleLogout = () => {
	signOut(firebaseAuth)
		.then(() => {
			authUser.set(undefined);
			goto('/login');
		})
		.catch((error) => {
			console.log(error);
		});
};
