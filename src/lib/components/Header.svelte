<script lang="ts">
	import { page } from '$app/stores';
	import { authUser } from '$lib/stores/auth.store';
	import { handleLogout } from '$lib/utils/auth/handle-logout';
</script>

<header />
<nav class="navbar" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="/">
			<img src="https://placehold.co/480x84" alt="development.guide" width="160" height="28" />
		</a>

		<span
			role="button"
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarBasicExample"
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</span>
	</div>

	<div id="navbarBasicExample" class="navbar-menu">
		<div class="navbar-end">
			<div class="navbar-item">
				<div class="buttons">
					{#if $authUser}
						<button class="button is-primary" on:click={handleLogout}>Logout</button>
					{:else}
						<a
							href="/register"
							class="button is-dark"
							class:active={$page.url.pathname === '/register'}>Sign up</a
						>
						<a
							href="/login"
							class="button is-primary"
							class:active={$page.url.pathname === '/login'}>Log in</a
						>
					{/if}
				</div>
			</div>
		</div>
	</div>
</nav>

<style lang="postcss">
	nav a.active {
		@apply font-bold text-indigo-700;
	}
</style>
