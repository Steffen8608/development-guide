import { authUser } from '$lib/stores/auth.store';
import { redirect } from '@sveltejs/kit';

export const routeGuard = authUser.subscribe((user) => {
	if (!user) {
		try {
			throw redirect(302, '/login');
		} catch (error) {
			console.log(error);
		}
	}
});
