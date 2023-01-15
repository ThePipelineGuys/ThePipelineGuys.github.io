<script>
	import Image from '$lib/components/base/image.svelte';
	import Tag from './tag.svelte';

	export let post;
	export let showImage = false;
</script>

{#if post}
	<a href="/blog/{post.slug}">
		{#if showImage}
			<Image />
		{/if}
		<div class="my-6 px-2 py-2 bg-gray-100">
			<div class="font-bold text-lg">{post.title}</div>
			<div class="text-sm">{post.readingTime}</div>
			<div class="italic">{post.excerpt}</div>

			{#if post.tags}
				<div class="flex space-x-4">
					{#each post.tags.slice(0, 2) as tag}
						<Tag>{tag}</Tag>
					{/each}
				</div>
			{/if}
		</div>
	</a>
{/if}
