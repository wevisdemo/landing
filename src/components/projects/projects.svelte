<script>
	import ProjectCard from './project-card.svelte';
</script>

<div id="projects" class="bg-black px-3 py-36 md:py-48 text-white">
	<div class="max-w-screen-lg mx-auto space-y-12">
		<ProjectCard
			title="Re-Constitution รัฐธรรมนูญไทยฉบับประชาชน (อ่านง่ายๆ)"
			date="7 Feb 2022"
			image="https://reconstitution.wevis.info/sharer/default.png"
			tags={['#Constitution', '#Exploratory']}
			href="https://reconstitution.wevis.info/"
		/>
		<ProjectCard
			title="They Work for Us ติดตามและตรวจสอบการทำงานของ ‘ผู้แทน’ ในสภา"
			date="7 Feb 2022"
			image="https://theyworkforus.wevis.info/seo/share/default.png"
			tags={['#Parliament', '#Exploratory']}
			href="https://theyworkforus.wevis.info/"
		/>
		<ProjectCard
			title="CONstitution LAB ห้องออกแบบรัฐธรรมนูญ"
			date="4 Oct 2021"
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
