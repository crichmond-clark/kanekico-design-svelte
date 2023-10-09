<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import {
		smallBusinessServicesData
		// eCommerceServicesData,
		// contentServicesData
	} from '$lib/stores/servicesStore.ts';
</script>

<div class="grid justify-center py-10">
	<h1 class="text-4xl my-10 text-center">Services at Kanekico</h1>

	<section class="flex flex-wrap my-10" id="business-section">
		{#each $smallBusinessServicesData as service (service.id)}
			<div class="even:ml-5 odd:mr-5">
				<Card {...service} />
			</div>
		{/each}

		<!-- {#each $eCommerceServicesData as service}
			<div class="mr-10">
				<Card {...service} />
			</div>
			{/each}
			
			{#each $contentServicesData as service}
			<div class="mr-10">
				<Card {...service} />
			</div>
			{/each} -->
	</section>
	<a href="/quote" class="btn btn-secondary max-w-xs row-span-3 place-self-center">Get a quote</a>
</div>
