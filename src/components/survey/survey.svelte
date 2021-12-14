<script>
	import ExternalLink from '../external-link.svelte';
	import Lottie from '../lottie.svelte';
</script>

<div class="flex relative min-h-72">
	<Lottie
		config={{
			path: 'lotties/survey.json',
			rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
		}}
		class="flex-1"
	/>
	<div
		class="absolute inset-0 flex flex-col justify-center items-center space-y-2 md:space-y-4 px-3"
	>
		<h2 class="typo-h1 font-black text-white text-center">ประชาธิปไตยของคุณหน้าตาแบบไหน?</h2>
		<ExternalLink
			href="https://airtable.com/shrDeFY3dKCT0e4C4"
			class="flex flex-row items-center space-x-3 bg-mint px-6 py-2 filter hover:brightness-120"
		>
			<span>ร่วมแชร์</span>
			<svg
				width="16"
				height="15"
				viewBox="0 0 16 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M15.7071 8.20711C16.0976 7.81658 16.0976 7.18342 15.7071 6.79289L9.34315 0.428932C8.95262 0.0384078 8.31946 0.0384078 7.92893 0.428932C7.53841 0.819457 7.53841 1.45262 7.92893 1.84315L13.5858 7.5L7.92893 13.1569C7.53841 13.5474 7.53841 14.1805 7.92893 14.5711C8.31946 14.9616 8.95262 14.9616 9.34315 14.5711L15.7071 8.20711ZM0 8.5L15 8.5V6.5L0 6.5L0 8.5Z"
					fill="black"
				/>
			</svg>
		</ExternalLink>
	</div>
</div>
