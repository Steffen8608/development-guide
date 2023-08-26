<script lang="ts">
	import logoGitHub from '$lib/assets/logo-github.svg';
	import logoGoogle from '$lib/assets/logo-google.svg';
	import { loginWithGitHub } from '$lib/utils/auth/login-with-github';
	import { login } from '$lib/utils/auth/login-with-mail-pwd';

	let email: string;
	let password: string;
	let success: boolean | undefined = undefined;
	let customError = {
		type: '',
		message: ''
	};
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="container">
	<section class="section my-6">
		<div class="columns my-4">
			<div class="column card is-half is-offset-one-quarter">
				<h1 class="is-size-4 py-1 mb-1 card-header-title">Login</h1>
				<div class="card-content px-4 py-1">
					<p class="mb-3">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, magni.
					</p>
					<form
						class="flex flex-col gap-4 p-8 space-y-4 bg-white sm:w-10/12"
						on:submit|preventDefault={() => {
							login(email, password);
						}}
					>
						<div class="field">
							<label class="label" for="name">Email</label>
							<div class="control">
								<input
									name="email"
									class="input"
									required
									type="email"
									placeholder="Email"
									bind:value={email}
								/>
							</div>
						</div>
						<div class="field">
							<label class="label" for="password">Password</label>
							<div class="control">
								<input
									name="password"
									class="input"
									required
									type="password"
									placeholder="Password"
									bind:value={password}
								/>
							</div>
						</div>

						<button type="submit" class="mt-1 button is-right is-primary" style="width: 100%;"
							>Login</button
						>

						{#if !success && success !== undefined}
							<div class="p-8 text-red-500 bg-red-100">{customError.message}</div>
						{/if}
						<div>
							<div class="divider">or</div>
						</div>
						<div class="container mt-5 mb-2">
							<div class="columns is-centered">
								<div class="column is-narrow">
									<span
										class="is-centered auth-provider-button"
										role="button"
										tabindex="0"
										on:keypress={(e) => {
											if (e.key === 'Enter') {
												loginWithGitHub();
											}
										}}
										on:click={() => {
											loginWithGitHub();
										}}
									>
										<img src={logoGitHub} alt="GitHub" width="30" height="30" />
									</span>
								</div>
								<div class="column is-narrow">
									<span
										class="is-centered auth-provider-button"
										role="button"
										tabindex="0"
										title="Log in with Google"
										on:keypress={(e) => {
											if (e.key === 'Enter') {
												loginWithGitHub();
											}
										}}
										on:click={() => {
											loginWithGitHub();
										}}
									>
										<img src={logoGoogle} alt="Google" width="30" height="30" />
									</span>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	.auth-provider-button {
		border: 1px solid gray;
		border-radius: 10px;
		width: 50px;
		height: 50px;
		display: inline-flex;
		align-items: center;
		justify-content: center;

		&:hover {
			background-color: #f5f5f5;
			cursor: pointer;
		}
	}
</style>
