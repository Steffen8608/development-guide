<script lang="ts">
	import { page } from '$app/stores';
	import { authUser } from '$lib/stores/auth.store';
	import { handleLogout } from '$lib/utils/auth/handle-logout';
	import logo from '$lib/assets/logo.png';
</script>

<header>
	<nav class="navbar container" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item mr-5 logo" href="/">
				<img src={logo} alt="development.guide" width="60" height="60" />
			</a>

			<a href="/features" class="mr-5 navbar-item"> Features </a>

			<a href="/pricing" class="mr-5 navbar-item"> Pricing </a>

			<a href="/faq" class="mr-5 navbar-item"> FAQ </a>

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
				<div class="navbar-item no-hover">
					<div class="buttons">
						{#if $authUser}
							<button class="button is-primary" on:click={handleLogout}>Logout</button>
						{:else}
							<a
								href="/register"
								class="button is-dark mr-3"
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
</header>

<style lang="postcss">
	nav a.active {
		@apply font-bold text-indigo-700;
	}

	.button {
		font-variation-settings: 'wght' 600;
		font-size: 16px;
	}

	.navbar-item {
		color: #fff;
		font-variation-settings: 'wght' 600;
	}

	.navbar-item:hover {
		text-decoration: underline;
	}

	.navbar-item.no-hover:hover {
		text-decoration: none;
	}

	.navbar-item .button:hover {
		text-decoration: none;
	}

	header {
		background: linear-gradient(180deg, #111a23, #050e19);
	}

	.navbar {
		background: linear-gradient(180deg, #111a23, #050e19);
		padding-left: 20px !important;
		border-top: 5px solid #111a23;
		border-bottom: 5px solid #050e19;
	}

	.navbar-item img {
		max-height: initial;
	}

	.navbar-item logo {
		padding: 0;
	}
</style>
