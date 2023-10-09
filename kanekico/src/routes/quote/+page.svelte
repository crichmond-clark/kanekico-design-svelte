<script lang="ts">
	import ContactForm from '@/lib/components/ContactForm.svelte';
	import {
		smallBusinessServicesData
		// eCommerceServicesData,
		// contentServicesData
	} from '$lib/stores/servicesStore.ts';

	let serviceDataArray = [
		...$smallBusinessServicesData
		// ...$eCommerceServicesData,
		// ...$contentServicesData
	];

	let serviceNames: string[] = [];

	for (const service of serviceDataArray) {
		serviceNames.push(service.title);
	}
</script>

<section>
	<p>
		Select your chosen package, fill in your details and we will get back to your with a quite
		ASAP!!
	</p>
	<ContactForm options={serviceNames} />
</section>
