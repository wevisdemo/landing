<script lang="ts">
	import Lottie from '../components/lottie.svelte';
</script>

<h1 class="typo-h1">h1</h1>
<h1 class="typo-h1 font-black">h1</h1>
<h2 class="typo-h2">h2</h2>
<h2 class="typo-h2 font-black">h2</h2>
<p>p1</p>
<p class="font-bold">p1</p>
<p class="typo-p2">p2</p>
<p class="typo-p2 font-bold">p2</p>

<br />
<br />

<h1 class="typo-h1 font-black text-black">black</h1>
<h1 class="typo-h1 font-black text-ultramarine">ultramarine</h1>
<h1 class="typo-h1 font-black text-mint bg-black">mint</h1>
<h1 class="typo-h1 font-black text-white bg-black">white</h1>

<Lottie config={{ path: 'lotties/intro_dektop.json' }} />
