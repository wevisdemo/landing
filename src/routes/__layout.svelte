<script lang="ts">
	import 'virtual:windi.css';
	import '../styles/typography.css';
</script>

<slot />

<style>
	:global(body) {
		@apply typo-p1;
	}
</style>
