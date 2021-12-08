<script lang="ts">
	import enterView from 'enter-view';
	import { onMount } from 'svelte';
	import BackgroundAnimation from './background-animation.svelte';
	import Lottie from '../lottie.svelte';
	import ExternalLink from '../external-link.svelte';

	let container: HTMLDivElement;
	let scrollProgress = 0;

	onMount(() =>
		enterView({
			selector: [container],
			progress: (el, progress) => {
				scrollProgress = progress;
			},
			offset: 1
		})
	);
</script>

<div class="relative flex flex-col" bind:this={container}>
	<div class="sticky top-6 z-10 h-screen -mt-100vh pointer-events-none">
		<Lottie config={{ path: 'lotties/animated_logo_black.json' }} class="ml-5vw w-44vw md:w-32vw" />
	</div>
	<img
		src="images/slogan_desktop.svg"
		alt="WeVis: We visualise data for democracy"
		class="-md:hidden tagline mt-8"
	/>
	<img
		src="images/slogan_mobile.svg"
		alt="WeVis: We visualise data for democracy"
		class="md:hidden tagline mt-7"
	/>

	<BackgroundAnimation
		path="lotties/intro_desktop.json"
		progress={scrollProgress}
		class="-md:hidden"
	/>
	<BackgroundAnimation
		path="lotties/intro_mobile.json"
		progress={scrollProgress}
		class="md:hidden"
	/>

	<div class="px-3 pb-36 mt-75vh md:(px-36 pb-48 mt-85vh)">
		<div class="max-w-md ml-auto space-y-24">
			<div class="group">
				<h1>Who we are</h1>
				<p>
					WeVis is a civic technology aiming to empower people to reclaim an active role in
					political life through technology and open data. We curate, analyze and visualize any
					relevant data to make democracy more open and more transparent, encouraging people to
					express their opinions and make better decisions. Our team is comprised of the same folks
					behind <ExternalLink class="text-ultramarine hover:underline" href="https://punchup.world"
						>Punch Up</ExternalLink
					>, a data storytelling consulting and studio, and friends.
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

	<div class="sticky bottom-0 mr-auto">
		<a class="flex flex-row space-x-2 items-center py-2 px-6 bg-black text-white" href="#projects"
			><svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7.29289 15.7071C7.68342 16.0976 8.31658 16.0976 8.70711 15.7071L15.0711 9.34315C15.4616 8.95262 15.4616 8.31946 15.0711 7.92893C14.6805 7.53841 14.0474 7.53841 13.6569 7.92893L8 13.5858L2.34315 7.92893C1.95262 7.53841 1.31946 7.53841 0.928932 7.92893C0.538407 8.31946 0.538407 8.95262 0.928932 9.34315L7.29289 15.7071ZM7 -4.37114e-08L7 15L9 15L9 4.37114e-08L7 -4.37114e-08Z"
					fill="white"
				/>
			</svg>
			<span>Projects</span></a
		>
	</div>
</div>

<style>
	.tagline {
		@apply absolute w-90vw left-5vw;
	}

	h1 {
		@apply font-bold text-ultramarine;
	}

	h2 {
		@apply typo-h1 font-black;
	}

	p {
		@apply typo-h2;
	}

	.group {
		@apply space-y-10;
	}

	.group > div {
		@apply space-y-2;
	}
</style>
