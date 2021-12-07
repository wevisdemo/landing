<script lang="ts">
	export let title: string;
	export let date: string;
	export let tags: string[] = [];
	export let image: string;
	export let href: string = '';
</script>

<a {href} class="relative flex flex-col lg:(flex-row space-x-12) -lg:space-y-6 items-center">
	{#if !href}
		<div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60">
			<p class="typo-h1">COMING SOON...</p>
		</div>
	{/if}
	<div class="lg:w-lg"><img src={image} alt={title} /></div>
	<div class="flex-1 space-y-4 lg:space-y-8 max-w-lg">
		<p class="typo-p2">{date}</p>
		<h2 class="typo-h2">{title}</h2>
		<div class="flex flex-row">
			{#each tags as tag}
				<p class="typo-p2 px-2 py-1 mr-2 mb-2 bg-ultramarine">{tag}</p>
			{/each}
		</div>
	</div>
</a>
