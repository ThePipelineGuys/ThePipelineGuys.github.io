<script>
	import BlogPostCard from '$lib/components/blog/blog-post-card.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section>
	{#each data.posts as post}
		<BlogPostCard {post} />
	{/each}
</section>
