<script lang="ts">
	import type { AnimationItem } from 'lottie-web';

	import Lottie from './lottie.svelte';

	export let path: string;
	export let progress = 0;

	let animation: AnimationItem;
	let totalFrames = 0;

	$: {
		animation?.goToAndStop(Math.round(progress * totalFrames), true);
	}
</script>

<Lottie
	config={{
		path,
		autoplay: false,
		rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
	}}
	class="sticky top-0 -z-1 h-screen -mt-100vh {$$props.class}"
	on:ready={({ detail }) => {
		animation = detail;
		totalFrames = animation.getDuration(true);
	}}
/>
