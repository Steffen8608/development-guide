import { routeGuard } from '$lib/utils/auth/route-guard';

export const load = async () => {
	routeGuard();

	return {};
};
