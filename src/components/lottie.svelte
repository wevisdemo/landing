<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import lottie, { AnimationConfigWithData, AnimationConfigWithPath } from 'lottie-web';

	export let config: Partial<AnimationConfigWithData | AnimationConfigWithPath>;

	let container: HTMLDivElement;

	const dispatch = createEventDispatcher();

	onMount(() => {
		let animation = lottie.loadAnimation({
			container,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			...config
		});

		animation.addEventListener('DOMLoaded', () => dispatch('ready', animation));
	});
</script>

<div bind:this={container} class={$$props.class} />
