<script lang="ts" context="module">
	declare const gtag: any;
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { env } from '$env/dynamic/public';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', env.PUBLIC_MEASUREMENT_ID, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src={'https://www.googletagmanager.com/gtag/js?id=' + env.PUBLIC_MEASUREMENT_ID}>
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', env.PUBLIC_MEASUREMENT_ID);
	</script>
</svelte:head>
