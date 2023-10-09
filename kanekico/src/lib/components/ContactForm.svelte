<script lang="ts">
	export let options: string[];
	// let ecommerceOptions: string[] = [options[2], options[3]];
	// let contentOptions: string[] = [options[4], options[5]];
	let selectedOption: string = options[0];
</script>

<div class="flex justify-center">
	<form action="#" class="grid gap-2 w-96">
		<select class="select select-bordered w-full" bind:value={selectedOption}>
			{#each options as option}
				<option value={option}>{option}</option>
			{/each}
		</select>
		<input
			type="text"
			name="full-name"
			placeholder="full name"
			class="input input-bordered w-full"
		/>
		<input
			type="text"
			name="email"
			placeholder="email address"
			class="input input-bordered w-full"
		/>

		<input
			type="text"
			name="business-name"
			placeholder="business name"
			class="input input-bordered w-full"
		/>
		<input
			type="text"
			name="business-industry"
			placeholder="business industry"
			class="input input-bordered w-full"
		/>
		<textarea
			name="business-goals"
			class="textarea textarea-bordered"
			placeholder="business goal and objectives"
		/>
		<textarea
			name="services"
			class="textarea textarea-bordered"
			placeholder="services & products offered"
		/>
		<!-- 
		{#if ecommerceOptions.includes(selectedOption)}
			<textarea class="textarea textarea-bordered" placeholder="Product Categories" />
			<input type="range" min="0" max="100" value="40" class="range" />
		{/if}

		{#if contentOptions.includes(selectedOption)}
			<input type="text" placeholder="content niche" class="input input-bordered w-full" />
		{/if} -->

		<input class="btn btn-neutral" type="submit" value="Get your quote" />
	</form>
</div>
