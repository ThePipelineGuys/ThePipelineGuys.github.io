<script>
	export let url = null;
</script>

{#if url}
	<a class="card cursor-pointer hover:no-underline" href={url} data-sveltekit-preload-data>
		{#if $$slots.image}
			<slot name="image" />
		{/if}
		<div class="body">
			<div class="content">
				<slot name="content" />
			</div>
			{#if $$slots.footer}
				<div class="footer">
					<slot name="footer" />
				</div>
			{/if}
		</div>
	</a>
{:else}
	<div class="card">
		{#if $$slots.image}
			<slot name="image" />
		{/if}
		<div class="body">
			<div class="content">
				<slot name="content" />
			</div>
			{#if $$slots.footer}
				<div class="footer">
					<slot name="footer" />
				</div>
			{/if}
		</div>
	</div>
{/if}

<style lang="postcss">
	.card {
		@apply bg-gray-50 shadow flex flex-row flex-wrap rounded relative overflow-hidden w-full;
	}
</style>
