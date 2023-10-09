<script lang="ts">
	import type { whyDataType } from '$lib/types/types.ts';
	import TechLogoSection from '@/lib/components/TechLogoSection.svelte';

	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';

	export let data;

	const whyChooseData: whyDataType[] = [
		{
			title: 'Affordable',
			description: 'No need to break the bank. Our pricing is budget-friendly.',
			icon: '💰'
		},
		{
			title: 'Mobile-Optimised',
			description: 'Your website will look and perform flawlessly on all devices.',
			icon: '📱'
		},
		{
			title: 'Fully Managed',
			description: 'Leave the technicalities to us; we handle all the maintenance.',
			icon: '🤝'
		},
		{
			title: 'No Setup Fees',
			description: 'We keep things transparent; no hidden costs.',
			icon: '🚫'
		},
		{
			title: 'Pay Monthly',
			description: 'Enjoy flexibility with our pay-as-you-go model.',
			icon: '💳'
		},
		{
			title: 'SEO Optimised',
			description: 'Get the best ranking on Google.',
			icon: '🔍'
		}
	];
</script>

<section class="hero min-h-screen mb-10" style="background-image: url(/img/hero2.avif);">
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Pay monthly websites</h1>
			<p class="mb-5">
				Don't want to pay hudreds of pounds up front for a website? No problem! We offer pay
				monthyly websites starting at just £50
			</p>
			<a href="/services" class="btn btn-primary">View Packages</a>
		</div>
	</div>
</section>

<section class="flex flex-col items-center text-center mt-5 my-10">
	<h3 class="text-lg md:text-2xl mb-5">"Empower Your Online Presence with Kanekico!"</h3>
	<p class="hidden max-w-lg md:text-lg md:block">
		Whether you're embarking on a startup journey, running a small local business, or showcasing
		your trade skills, we're here to elevate your digital footprint.
	</p>
	<p class="max-w-lg mt-10">
		At Kanekico, we offer expertly crafted, customizable pay-monthly websites that deliver a
		hassle-free solution to enhance your online presence.
	</p>
</section>

<section class="flex flex-col items-center text-center mt-5 my-10">
	<h4 class="text-2xl mb-5">Why choose Kanekico?</h4>

	<ul class="grid gap-y-5 md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:p-10">
		{#each whyChooseData as why}
			<li>
				<div class="card m:w-96 bg-base-100 shadow-xl h-full">
					<span class="text-5xl">{why.icon}</span>
					<div class="card-body items-center text-center">
						<h2 class="card-title">{why.title}</h2>
						<p>{why.description}</p>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</section>

<section
	class="flex flex-col lg:flex-row bg-base-200 place-items-center md:p-0 lg:p-12 2xl:px-56 my-10"
>
	<div class="flex-1 mb-10 lg:mb-0 lg:mr-10 2xl:mr-0">
		<figure class="">
			<img class="rounded" src="/img/macbook.jpg" alt="Developers working on premium macbooks" />
		</figure>
	</div>

	<div class="flex-1 px-10 md:px-16 lg:px-0">
		<h4 class="text-2xl mb-5">The latest tech</h4>
		<p>
			footprint for your business has become absolutely essential. Therefore, don't allow your small
			business to remain unnoticed. Allow Kanekico to usher your brand into the online realm.
		</p>

		<p class="mb-5">
			At Kanekico, we pride ourselves on staying at the forefront of web development, ensuring that
			our clients receive the latest and most advanced solutions. Unlike some outdated platforms
			like <strong>WordPress</strong>, we utilize cutting-edge technologies and development
			practices to create websites that are not only visually stunning but also highly secure,
			fast-loading, and optimized for the modern digital landscape.
		</p>

		<p>
			Our commitment to staying ahead of the curve means your website will benefit from the most
			current innovations in web design and functionality, offering a superior user experience and
			future-proofing your online presence.
		</p>
	</div>
</section>

<section>
	<h3 class="text-2xl text-center">Tech we use at Kanekico</h3>
	<TechLogoSection />
</section>
