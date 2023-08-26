import { routeGuard } from "$lib/utils/auth/route-guard";

export async function load() {
  routeGuard();
  return {};
}