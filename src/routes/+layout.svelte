<script lang="ts">
	import "../app.scss";
    import Analytics from '$lib/components/Analytics.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
</script>

<Analytics></Analytics>
<Header></Header>
<slot></slot>
<Footer></Footer>
