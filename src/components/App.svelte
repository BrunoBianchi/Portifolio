
<script >
	import Projects from "./Projects.svelte";
	import { onMount } from "svelte";
	let projects = [];
	let languages  = []; 
	let i=[]
  onMount(async () => {
    await fetch(
      `https://api.github.com/users/BrunoBianchi/repos`
    )
      .then((r) => r.json())
      .then((data) => {
        projects = data.filter(repo=>repo.name != "BrunoBianchi" && !repo.name.includes("-fiver") && !repo.name.includes('-Aprendizado')  && !repo.name.includes('-aprendizado')).sort((a,b)=>{return( b.stargazers_count - a.stargazers_count || new Date(b.created_at) - new Date(a.created_at)) });
		data.forEach(repo => {
			if(repo.language != null&& !languages.includes(repo.language.toLowerCase())  ) {
				languages.push(repo.language.toLowerCase())
			}			
		});
		
	});
	 i = languages;
  });
  AOS.init();

 </script>

	
	<main>
	<div class="container">
		<div class="row">
			<div data-aos="fade-in"  class="col-md-9">
				<h2 style="font-weight:bold;font-size:75px;"><p style="padding:6px;background-color:#358580;width:170px;border-radius:3px;font-size:20px;margin-bottom:-2px">Hi, There 👋 I'm </p>Bruno Bianchi.</h2>
				<p style="font-weight:bold;font-size:50px;line-height:45px;color:#7f91ba">I Code Awesome Stuff for Internet.</p>
				<p style="font-weight:500;font-size:20px">I am a Computer Engineering Student at Poli-PUCCAMP. Currently, I'm focused on learning new languages and starting new projects on my own.</p>
			</div>
			<div class="col-md-3">
			</div>
			<div class="scroll"></div>

		</div>
		<div  data-aos="fade-right" style="margin-top:90px;" class="row">
			<div class="col-md-7">
			
					<h2 style="border-bottom:2px solid white;color:#7f91ba;font-weight:bold">About Me</h2>

				<p style="margin-top:15px">Hello! My Name is Bruno Bianchi and I love creating projects from my creativity.<br>My interest in programming languages started back in 2014 when I code a minecraft server, since then my mind changed and I start learning javascript. Today I am focused in my University and Learning deeper other Langagues, such Pyhton, C ...  </p>
				<span>Here are a few technologies I’ve been working with recently:<br>
					{#each i as language}
					{#if language === "ejs"}
					<span data-toggle="tooltip" data-placement="right" title="ejs" style="color:#f3db4c;font-size:25px;font-weight:bold">EJS</span>
					{:else}
					{#if language === "c++"}
					<span data-toggle="tooltip" data-placement="right" title="c++" style="color:#348feb;font-size:25px;font-weight:bold"><i class="devicon-cplusplus-plain-wordmark"></i></span>

					{/if}
					<i data-toggle="tooltip" data-placement="right" title="{language}" style="margin:5px;font-size:25px" class="devicon-{language}-plain colored"></i>
					{/if}
					{:else}
					<span>Loading...</span>
					{/each}	
					<span data-toggle="tooltip" data-placement="right" title="node.js"><i style=";font-size:25px" class="devicon-nodejs-plain colored"></i></span>
				</span>
			</div>
			<div class="col-md-5">				
				<img src="https://avatars.githubusercontent.com/u/81328873?v=4" alt="Github" width="200px;" height="200px;" style="border-radius:5%;">
			</div>
			</div>

		  <div  data-aos="fade-right" style="margin-top:200px" class="projects">
				<h2 style=";color:#7f91ba;font-weight:bold;padding:10px;">Some Of My Projects:</h2>
				{#each projects as repo}
				<Projects  description="{repo.description}" name="{repo.name}" url="{repo.html_url}" language="{repo.language}" date="{repo.created_at}"></Projects>
				{:else}
				<span>Loading...</span>
				{/each}
		  </div>
		  <div id="fixedsocial">
			<a class="socials up" href="https://github.com/BrunoBianchi"><i class="fab fa-github"></i></a>
			<a class="socials up" href="https://www.linkedin.com/in/bruno-bianchi-65a442268/"><i class="fab fa-linkedin"></i></a>
		</div>

	  </div>

</main>




<style>
	:global(body){
		background-color: black;
	}
	:root{
		--cor-fundo:#555;
	}
	main {
		margin-top:150px;
	}
.scroll {
  width: 60px;
  height: 60px;
  border: 2px solid #333;
  border-radius: 50%;
  display: inline-block;
  margin: 0 auto;
  margin-top:50px;
  margin-bottom:30px;
  justify-content: center;
  animation: down 1.5s infinite;
  -webkit-animation: down 1.5s infinite;
}
.scroll::before {
  content: "";
  position: absolute;
  top: 15px;
  left: 18px;
  width: 18px;
  height: 18px;
  border-left: 2px solid #333;
  border-bottom: 2px solid #333;
  transform: rotate(-45deg);
}

@keyframes down {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translateY(15px);
  }
  40% {
    transform: translate(0);
  }
}
@-webkit-keyframes down {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translateY(15px);
  }
  40% {
    transform: translate(0);
  }
}
.socials {
	color:white;
	font-size:30px;
	margin-left:10px;
	display: list-item;
}
.socials:hover {
color:#79e862;
}
#fixedsocial {
    top:30%;
    height:200px;
    width:10px;
    position:fixed;
    left: 0;
}
</style>