<script lang="ts">
	import Lottie from '../lottie.svelte';
</script>

<div class="relative flex flex-col">
	<div class="sticky top-6 z-10 h-screen -mt-100vh pointer-events-none">
		<Lottie config={{ path: 'lotties/animated_logo_black.json' }} class="ml-5vw w-32vw" />
	</div>
	<img
		src="images/slogan_desktop.svg"
		alt="WeVis: We visualise data for democracy"
		class="absolute mt-8 mx-auto w-90vw left-5vw"
	/>

	<Lottie
		config={{
			path: 'lotties/intro_desktop.json',
			rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
		}}
		class="sticky top-0 -z-1 h-screen -mt-100vh"
	/>

	<div class="px-24 pb-48 mt-85vh">
		<div class="max-w-md ml-auto space-y-24">
			<div class="group">
				<h1>Who we are</h1>
				<p>
					WeVis is a civic technology aiming to empower people to reclaim an active role in
					political life through technology and open data. We curate, analyze and visualize any
					relevant data to make democracy more open and more transparent, encouraging people to
					express their opinions and make better decisions. Our team is comprised of the same folks
					behind <a
						class="text-ultramarine hover:underline"
						href="https://punchup.world"
						target="_blank"
						rel="noreferrer noopener">Punch Up</a
					>, a data storytelling consulting and studio.
				</p>
			</div>
			<div class="group">
				<h1>What we care about</h1>
				<div>
					<h2>Power of People</h2>
					<p>
						We believe our society does belong to the people and is driven by information and
						participation. We do what needs to be done with courage and integrity.
					</p>
				</div>
				<div>
					<h2>Openness</h2>
					<p>
						We conduct our work with code and data released under open licenses, while calling for
						open government data. We undertake to be open, honest and accountable in our
						relationships with everyone we work with.
					</p>
				</div>
				<div>
					<h2>Collaboration</h2>
					<p>
						We are open for collaboration with groups and individuals who share our goals. We foster
						a supportive environment for our volunteers and partners, respect diversity, and
						encourage healthy and constructive debate.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	h1 {
		@apply font-bold text-ultramarine;
	}

	h2 {
		@apply typo-h1 font-black;
	}

	.group {
		@apply space-y-10;
	}

	.group > div {
		@apply space-y-2;
	}
</style>
