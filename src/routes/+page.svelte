<script lang="ts">
	import content1 from '$lib/assets/content_1.png';
	import content2 from '$lib/assets/content_2.png';
	import content3 from '$lib/assets/content_3.png';
</script>

<div class="container">
	<div class="section pb-4">
		<div class="columns">
			<div class="column">
				<h1 class="title" style="text-align: center; color: black">
					Your way to share best pratices in projects
				</h1>
				<p style="width: 75%; margin: 0 auto; text-align: center; color: black">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eligendi est iure ut
					praesentium quae voluptatum! Facere modi incidunt libero.
				</p>
			</div>
		</div>
	</div>
	<div class="section">
		<div class="columns">
			<div class="column">
				<h2 class="title is-4">One place for your best practices</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a modi ullam ad illum facere
					consectetur ipsa asperiores, provident est voluptatem aspernatur ipsam vel libero atque,
					corporis veritatis beatae, iure animi repellendus earum nihil eos tenetur placeat? Nulla
					nihil debitis ipsam, quas, id eaque error quisquam, animi veritatis mollitia dolorum nobis
					voluptatum.
				</p>
			</div>
			<div class="column">
				<img src={content1} alt="" />
			</div>
		</div>
	</div>
	<div class="section">
		<div class="columns">
			<div class="column">
				<img src={content2} alt="" />
			</div>
			<div class="column">
				<h2 class="title is-4">Faster onboarding process</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a modi ullam ad illum facere
					consectetur ipsa asperiores, provident est voluptatem aspernatur ipsam vel libero atque,
					corporis veritatis beatae, iure animi repellendus earum nihil eos tenetur placeat? Nulla
					nihil debitis ipsam, quas, id eaque error quisquam, animi veritatis mollitia dolorum nobis
					voluptatum.
				</p>
			</div>
		</div>
	</div>
	<div class="section">
		<div class="columns">
			<div class="column">
				<h2 class="title is-4">Concentrate on issues</h2>
				<p>
					Instead of spending time on sharing best practices manually, you can focus on solving
					issues. development.guide will give you the best practices for each of your projects
					inside the IDEs of the developers.
				</p>
			</div>
			<div class="column">
				<img src={content3} alt="" />
			</div>
		</div>
	</div>
</div>

<style>
	:global(body) {
		background: linear-gradient(180deg, #1690bc 20px, transparent 400px);
	}
</style>
