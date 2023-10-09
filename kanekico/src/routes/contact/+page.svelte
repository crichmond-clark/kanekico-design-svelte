<script lang="ts">
</script>

<div
	class="hero"
	style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);"
>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content h-60" />
</div>

<div class="grid grid-cols-2 gap-10 mt-20">
	<section class="w-96 justify-self-end">
		<form method="POST" enctype="multipart/form-data" class="grid gap-2">
			<input
				type="text"
				name="full-name"
				placeholder="full name"
				class="input input-bordered w-full max-w-lg"
			/>
			<input
				type="text"
				name="email"
				placeholder="email address"
				class="input input-bordered w-full max-w-md"
			/>

			<input
				type="text"
				name="business-name"
				placeholder="business name"
				class="input input-bordered w-full max-w-md"
			/>
			<textarea
				name="message"
				class="textarea textarea-lg textarea-bordered max-w-md"
				placeholder="message"
			/>
			<input class="btn btn-neutral" type="submit" value="Submit" />
		</form>
	</section>

	<section class="flex flex-col justify-center p-10 card bg-neutral max-w-max h-full">
		<h2 class="text-5xl mb-6"><strong>Email</strong></h2>
		<a href="mailto:design@kanekico.com" class="font-mono text-xl">📧: design@kanekico.com</a>
	</section>
</div>
