<script>
	import ProjectCard from './project-card.svelte';
</script>

<div id="projects" class="bg-black px-3 py-36 md:py-48 text-white">
	<div class="max-w-screen-lg mx-auto space-y-12">
		<ProjectCard
			title="CONstitution LAB ห้องออกแบบรัฐธรรมนูญ"
			date="Oct 04, 2021"
			image="https://conlab.conlabth.com/og-images/default.png"
			tags={['#Quiz', '#Exploratory']}
			href="https://conlab.conlabth.com/"
		/>
		<ProjectCard
			title="Know Your Rights หลักประกันสิทธิพลเมืองและสิทธิทางการเมืองที่ควรรู้"
			date="Jan 2022"
			image="images/projects/know-your-rights.png"
			tags={['#Data Viz/Stories']}
		/>
		<ProjectCard
			title="Life Hack ชี้เป้า!! รวมช่องทางใช้งาน e-service ของรัฐบาล ที่ในชีวิตนี้คุณหนีไม่พ้นแน่นอน"
			date="Jan 2022"
			image="images/projects/e-services.png"
			tags={['#Data Viz/Stories']}
		/>
	</div>
</div>
