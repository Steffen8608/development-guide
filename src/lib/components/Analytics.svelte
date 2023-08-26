<script lang="ts" context="module">
	declare const gtag: unknown;
</script>

<script lang="ts">
	import { page } from '$app/stores';

	$: {
		if ('G-M88JMT8HF3' && typeof gtag === 'function') {
			gtag('config', 'G-M88JMT8HF3', {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-M88JMT8HF3">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-M88JMT8HF3');
	</script>
</svelte:head>
