import { authUser } from '$lib/stores/auth.store';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	const unsubscribe = authUser.subscribe((user) => {
		if (!user) {
			throw redirect(302, '/login');
		}
	});

	unsubscribe();

	return {};
};
