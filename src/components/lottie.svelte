<script lang="ts">
	import { onMount } from 'svelte';
	import lottie, {
		AnimationConfigWithData,
		AnimationConfigWithPath,
		AnimationItem
	} from 'lottie-web';

	export let config: Partial<AnimationConfigWithData | AnimationConfigWithPath>;
	export let animation: AnimationItem = null;

	let container: HTMLDivElement;

	onMount(() => {
		animation = lottie.loadAnimation({
			container,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			...config
		});
	});
</script>

<div bind:this={container} />
