<script lang="ts">
	// export let title: string;
	export let buttonText: string;
	export let price: number;
	export let src: string;
	export let alt: string;
	export let details: string[];
	export let serviceType: string;
	export let id: number;
	export let tier: string;

	$: modalId = `my_modal_${id}`;
</script>

<div class="card md:w-72 bg-base-100 shadow-xl">
	{#if serviceType === 'small-business'}
		<div class="badge badge-primary ml-2 mt-2">Small Business</div>
	{:else if serviceType === 'ecommerce'}
		<div class="badge badge-secondary ml-2 mt-2">eCommerce</div>
	{:else}
		<div class="badge badge-accent ml-2 mt-2">Blog & Content</div>
	{/if}
	<figure class="px-10 pt-10">
		<img {src} {alt} class="rounded-xl object-cover" />
	</figure>
	<div class="card-body items-center text-center">
		<h2 class="card-title">{tier}</h2>
		<div>£ {price}</div>
		<div class="card-actions">
			<button class="btn btn-primary" on:click={() => document.getElementById(modalId).showModal()}
				>{buttonText}</button
			>
		</div>
	</div>
</div>

<dialog id={modalId} class="modal">
	<div class="modal-box flex flex-col">
		<h3 class="font-bold text-lg self-center">Basic package for small business and trades</h3>
		<ul class="py-4 flex flex-col">
			{#each details as detail}
				<li class="self-center">{detail}</li>
			{/each}
		</ul>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
</dialog>
