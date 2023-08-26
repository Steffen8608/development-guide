<script lang="ts">
	import { register } from '$lib/utils/auth/register-with-main-pwd';

	let email: string;
	let password: string;

	let success: boolean | void = undefined;
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<h1 class="text-4xl font-bold">Register</h1>

<form
	class="flex flex-col gap-4 p-8 space-y-4 bg-white sm:w-10/12"
	on:submit|preventDefault={() => {success = register(email,password)}}
>
	<input
		type="email"
		placeholder="Email"
		class="px-4 py-2 border border-gray-300 rounded-md"
		required
		bind:value={email}
	/>
	<input
		type="password"
		placeholder="Password"
		class="px-4 py-2 border border-gray-300 rounded-md"
		required
		bind:value={password}
	/>

	<button type="submit" class="default-action">Register</button>

	{#if !success && success !== undefined}
		<div class="p-8 text-red-500 bg-red-100">There was an error registering. Please try again.</div>
	{/if}
</form>
