<script lang="ts">
	import { goto } from '$app/navigation';
	import { authUser } from '$lib/stores/auth.store';
	import { onMount } from 'svelte';
	import { getAuth } from 'firebase/auth';

	onMount(() => {
		const auth = getAuth();
		const user = auth.currentUser;
		if (user !== null) {
			// The user object has basic properties such as display name, email, etc.
			const displayName = user.displayName;
			const email = user.email;
			const photoURL = user.photoURL;
			const emailVerified = user.emailVerified;

			// The user's ID, unique to the Firebase project. Do NOT use
			// this value to authenticate with your backend server, if
			// you have one. Use User.getToken() instead.
			const uid = user.uid;
		}
	});
</script>

<h1 class="text-4xl font-bold">Protected route</h1>
{$authUser?.email}
