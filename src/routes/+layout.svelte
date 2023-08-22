<script lang="ts">
	import { page } from '$app/stores';
	import { authUser } from '$lib/stores/auth.store';
	import Analytics from '$lib/components/Analytics.svelte';
	import { handleLogout } from '$lib/utils/auth/handle-logout';
</script>

<Analytics />

<header class="space-y-4">
	<a href="/" class="font-bold hover:underline">Home</a>

	<nav class="flex gap-4">
		{#if $authUser}
			<a
				href="/protected"
				class="hover:underline"
				class:active={$page.url.pathname === '/protected'}>Protected</a
			>
			<button class="hover:underline" on:click={handleLogout}>Logout</button>
		{:else}
			<a href="/register" class="hover:underline" class:active={$page.url.pathname === '/register'}
				>Register</a
			>
			<a href="/login" class="hover:underline" class:active={$page.url.pathname === '/login'}
				>Login</a
			>
		{/if}
	</nav>
</header>
<slot />
