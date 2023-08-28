import { authUser } from '$lib/stores/auth.store';
import { redirect } from '@sveltejs/kit';

export const routeGuard = () => {
	authUser.subscribe((user) => {
		if (!user) {
			throw redirect(302, '/login');
		}
	});
};
