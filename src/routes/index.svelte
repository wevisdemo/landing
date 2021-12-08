<script lang="ts">
	import Projects from '../components/projects/projects.svelte';
	import Hero from '../components/hero/hero.svelte';
	import Survey from '../components/survey/survey.svelte';
	import Footer from '../components/footer.svelte';

	const META_TITLE = 'WeVis : We Visualise Data for Democracy';
	const META_DESCRIPTION = 'a civic technology empowering people with open data';
	const META_IMAGE = 'https://wevis.info/images/og.png';
</script>

<svelte:head>
	<title>{META_TITLE}</title>
	<meta name="description" content={META_DESCRIPTION} />
	<meta property="og:title" content={META_TITLE} />
	<meta property="og:description" content={META_DESCRIPTION} />
	<meta property="og:image" content={META_IMAGE} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Hero />
<Projects />
<Survey />
<Footer />
